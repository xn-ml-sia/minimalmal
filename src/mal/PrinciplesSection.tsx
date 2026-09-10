import { useEffect, useRef } from 'react';
import { about } from './content';

const HEART: [number, number][] = [
  [2, 1],
  [3, 1],
  [5, 1],
  [6, 1],
  [1, 2],
  [2, 2],
  [3, 2],
  [4, 2],
  [5, 2],
  [6, 2],
  [7, 2],
  [1, 3],
  [2, 3],
  [3, 3],
  [4, 3],
  [5, 3],
  [6, 3],
  [7, 3],
  [2, 4],
  [3, 4],
  [4, 4],
  [5, 4],
  [6, 4],
  [3, 5],
  [4, 5],
  [5, 5],
  [4, 6],
];

type Face = {
  sv: SVGSVGElement;
  g: SVGGElement;
  eyeL: SVGRectElement;
  eyeR: SVGRectElement;
  blush: SVGRectElement[];
  mood: string | null;
  lx: number;
  ly: number;
  shy: boolean;
};

export function PrinciplesSection() {
  const rootRef = useRef<HTMLElement>(null);
  const { principles } = about;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const smileys = [...root.querySelectorAll<SVGSVGElement>('.two .c .smiley')];
    if (!smileys.length) return;

    const NS = 'http://www.w3.org/2000/svg';
    const touch = !(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
    const ptr = { x: -1, y: -1 };
    const onMove = (e: PointerEvent) => {
      ptr.x = e.clientX;
      ptr.y = e.clientY;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    function heartSVG() {
      const s = document.createElementNS(NS, 'svg');
      s.setAttribute('viewBox', '0 0 9 7');
      s.setAttribute('width', '24');
      s.setAttribute('height', '19');
      for (const [x, y] of HEART) {
        const r = document.createElementNS(NS, 'rect');
        r.setAttribute('x', String(x));
        r.setAttribute('y', String(y));
        r.setAttribute('width', '1.04');
        r.setAttribute('height', '1.04');
        r.setAttribute('fill', '#e0492a');
        s.appendChild(r);
      }
      return s;
    }

    const faces: Face[] = smileys.map((sv) => {
      const mood = sv.getAttribute('data-mood');
      const g = document.createElementNS(NS, 'g');
      sv.appendChild(g);

      function rect(c: number, r: number) {
        const e = document.createElementNS(NS, 'rect');
        e.setAttribute('x', String(c * 12));
        e.setAttribute('y', String(r * 12));
        e.setAttribute('width', '12');
        e.setAttribute('height', '12');
        e.setAttribute('fill', '#0a0a0a');
        g.appendChild(e);
        return e;
      }

      const eyeL = rect(4, 5);
      const eyeR = rect(8, 5);
      const blush: SVGRectElement[] = [];
      if (mood === 'sad') {
        rect(5, 7);
        rect(6, 7);
        rect(7, 7);
        rect(4, 8);
        rect(8, 8);
        for (const [c, r] of [
          [3, 7],
          [9, 7],
        ] as const) {
          const e = document.createElementNS(NS, 'rect');
          e.setAttribute('x', String(c * 12));
          e.setAttribute('y', String(r * 12));
          e.setAttribute('width', '12');
          e.setAttribute('height', '12');
          e.setAttribute('fill', '#e0492a');
          e.setAttribute('fill-opacity', '0');
          g.appendChild(e);
          blush.push(e);
        }
      } else {
        rect(4, 7);
        rect(8, 7);
        rect(5, 8);
        rect(6, 8);
        rect(7, 8);
      }

      return { sv, g, eyeL, eyeR, blush, mood, lx: 0, ly: 0, shy: false };
    });

    let raf = 0;
    const loop = () => {
      if (!touch && ptr.x >= 0) {
        for (const f of faces) {
          const r = f.sv.getBoundingClientRect();
          if (r.width <= 1) continue;
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          const dx = ptr.x - cx;
          const dy = ptr.y - cy;
          const d = Math.hypot(dx, dy) || 1;
          let tx: number;
          let ty: number;
          if (f.shy) {
            tx = (-dx / d) * 7;
            ty = (-dy / d) * 7 + 2.5;
          } else {
            const m = Math.min(1, d / 420) * 5.5;
            tx = (dx / d) * m;
            ty = (dy / d) * m;
          }
          f.lx += (tx - f.lx) * 0.15;
          f.ly += (ty - f.ly) * 0.15;
          f.g.setAttribute('transform', `translate(${f.lx.toFixed(2)},${f.ly.toFixed(2)})`);
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const blinkTimers: number[] = [];
    function blink(f: Face) {
      f.eyeL.setAttribute('height', '2');
      f.eyeR.setAttribute('height', '2');
      f.eyeL.setAttribute('y', String(5 * 12 + 5));
      f.eyeR.setAttribute('y', String(5 * 12 + 5));
      window.setTimeout(() => {
        f.eyeL.setAttribute('height', '12');
        f.eyeR.setAttribute('height', '12');
        f.eyeL.setAttribute('y', String(5 * 12));
        f.eyeR.setAttribute('y', String(5 * 12));
      }, 110);
    }
    function scheduleBlink(f: Face) {
      const id = window.setTimeout(
        () => {
          blink(f);
          scheduleBlink(f);
        },
        2200 + Math.random() * 4200,
      );
      blinkTimers.push(id);
    }
    faces.forEach(scheduleBlink);

    const cleanups: Array<() => void> = [];
    if (!touch) {
      for (const f of faces) {
        if (f.mood === 'sad') {
          const enter = () => {
            f.shy = true;
            f.sv.classList.add('sm-shy');
            f.blush.forEach((e) => e.setAttribute('fill-opacity', '.5'));
          };
          const leave = () => {
            f.shy = false;
            f.sv.classList.remove('sm-shy');
            f.blush.forEach((e) => e.setAttribute('fill-opacity', '0'));
          };
          f.sv.addEventListener('mouseenter', enter);
          f.sv.addEventListener('mouseleave', leave);
          cleanups.push(() => {
            f.sv.removeEventListener('mouseenter', enter);
            f.sv.removeEventListener('mouseleave', leave);
          });
        } else {
          let busy = false;
          const enter = () => {
            if (busy) return;
            busy = true;
            window.setTimeout(() => {
              busy = false;
            }, 620);
            f.sv.classList.remove('sm-jump');
            void f.sv.getBoundingClientRect();
            f.sv.classList.add('sm-jump');
            const host = f.sv.parentNode;
            if (!host) return;
            for (let i = 0; i < 4; i++) {
              window.setTimeout(() => {
                const h = heartSVG();
                h.setAttribute('class', 'sm-heart');
                h.style.left = `${38 + Math.random() * 52}%`;
                h.style.top = '6px';
                host.appendChild(h);
                window.setTimeout(() => h.remove(), 1000);
              }, i * 90);
            }
          };
          f.sv.addEventListener('mouseenter', enter);
          cleanups.push(() => f.sv.removeEventListener('mouseenter', enter));
        }
      }
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      blinkTimers.forEach(clearTimeout);
      cleanups.forEach((fn) => fn());
      faces.forEach((f) => f.g.remove());
    };
  }, []);

  return (
    <section className="ed mal-ed" id="principles" ref={rootRef}>
      <div className="wrap">
        <div className="head">
          <h2>{principles.heading}</h2>
          <p className="kick mono">{principles.kick}</p>
        </div>
        <div>
          <p>{principles.lead}</p>
          <div className="two">
            {principles.items.map((item) => (
              <div className="c" key={item.label}>
                <svg
                  className="smiley"
                  viewBox="0 0 156 156"
                  data-mood={item.mood}
                  data-base={item.base}
                  aria-hidden="true"
                />
                <div className="l mono">{item.label}</div>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
          <p className="s principles-foot">{principles.curiosity}</p>
        </div>
      </div>
    </section>
  );
}
