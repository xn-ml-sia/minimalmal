import { useEffect, useRef } from 'react';

const STEPS = [
  {
    n: '01',
    title: 'Discover',
    copy: 'Solve the right problem first — alignment on the evidence, the need, and why it matters to the business.',
  },
  {
    n: '02',
    title: 'Explore',
    copy: 'Artifacts and written context connect hypotheses to human needs and business goals.',
  },
  {
    n: '03',
    title: 'Validate',
    copy: 'Test at multiple touchpoints so the work addresses users — and, inevitably, the business.',
  },
  {
    n: '04',
    title: 'Implement',
    copy: 'Engineers, QA, and cross-functional sign-off — including how we measure design intent.',
  },
] as const;

const RED = '#E00025';
const BLUE = '#032EA1';

function mix(a: string, b: string, t: number) {
  if (t <= 0) return a;
  if (t >= 1) return b;
  const ar = parseInt(a.slice(1, 3), 16);
  const ag = parseInt(a.slice(3, 5), 16);
  const ab = parseInt(a.slice(5, 7), 16);
  const br = parseInt(b.slice(1, 3), 16);
  const bg = parseInt(b.slice(3, 5), 16);
  const bb = parseInt(b.slice(5, 7), 16);
  return `rgb(${(ar + (br - ar) * t) | 0},${(ag + (bg - ag) * t) | 0},${(ab + (bb - ab) * t) | 0})`;
}

function rnd(s: number) {
  const x = Math.sin(s * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function ss(x: number) {
  const v = x < 0 ? 0 : x > 1 ? 1 : x;
  return v * v * (3 - 2 * v);
}

function prof(x: number) {
  return 0.06 + 0.94 * Math.pow(Math.abs(2 * x - 1), 1.2);
}

function pick(seed: number, x: number) {
  return rnd(seed) < ss(x) ? BLUE : RED;
}

function dep(za: number, rk: number) {
  return Math.max(0, Math.min(1, 0.5 + 0.5 * (za / Math.max(1, rk))));
}

function startProcflow(canvas: HTMLCanvasElement, stepsRoot: HTMLElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => undefined;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const cell = 9;
  let width = 0;
  let height = 0;
  let cols = 0;
  let rows = 0;
  let on = true;
  let clock = 0;
  let pointerX = 0;
  let pointerY = 0;
  let pointerStrength = 0;
  let pointerTarget = 0;
  let stage = -1;
  const emphasis = [1, 1, 1, 1];
  const turns = 3.2;
  const markers = 400;
  let raf = 0;

  const size = () => {
    const rect = canvas.getBoundingClientRect();
    if (rect.width < 2) return;
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(width / cell);
    rows = Math.ceil(height / cell);
  };

  const aOf = (u: number) => {
    if (stage < 0 && emphasis.every((v) => v > 0.995)) return 1;
    const g = u * 4 - 0.5;
    const q = Math.floor(g);
    const f = ss(Math.min(1, Math.max(0, (g - q - 0.35) / 0.3)));
    const a0 = emphasis[Math.max(0, Math.min(3, q))];
    const a1 = emphasis[Math.max(0, Math.min(3, q + 1))];
    return a0 + (a1 - a0) * f;
  };

  const moveAt = (cx: number, cy: number) => {
    const rect = canvas.getBoundingClientRect();
    pointerX = cx - rect.left;
    pointerY = cy - rect.top;
    pointerTarget =
      pointerX >= -40 && pointerX <= width + 40 && pointerY >= -40 && pointerY <= height + 40 ? 1 : 0;
  };

  const onPointerMove = (event: PointerEvent) => moveAt(event.clientX, event.clientY);
  const onPointerLeave = () => {
    pointerTarget = 0;
  };

  canvas.addEventListener('pointermove', onPointerMove, { passive: true });
  canvas.addEventListener('pointerleave', onPointerLeave);

  const stepCleanups: Array<() => void> = [];
  const steps = stepsRoot.querySelectorAll<HTMLElement>('.step');
  steps.forEach((el, i) => {
    const enter = (event: PointerEvent) => {
      if (event.pointerType !== 'touch') stage = i;
    };
    const leave = () => {
      if (stage === i) stage = -1;
    };
    const move = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const lineWidth = 62;
      let x = event.clientX - rect.left - lineWidth / 2;
      x = Math.max(0, Math.min(rect.width - lineWidth, x));
      el.style.setProperty('--lx', `${Math.round(x / 9) * 9}px`);
    };
    el.addEventListener('pointerenter', enter);
    el.addEventListener('pointerleave', leave);
    el.addEventListener('pointermove', move, { passive: true });
    stepCleanups.push(() => {
      el.removeEventListener('pointerenter', enter);
      el.removeEventListener('pointerleave', leave);
      el.removeEventListener('pointermove', move);
    });
  });

  size();
  const resizeObserver = window.ResizeObserver ? new ResizeObserver(size) : null;
  resizeObserver?.observe(canvas);

  const intersectionObserver =
    'IntersectionObserver' in window
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            on = entry.isIntersecting;
          });
        })
      : null;
  intersectionObserver?.observe(canvas);

  const frame = () => {
    if (!cols) return;
    ctx.clearRect(0, 0, width, height);
    pointerStrength += (pointerTarget - pointerStrength) * 0.09;
    const radius = height * 0.55;
    const amp = height * 0.42;
    const repel = pointerStrength > 0.01;
    for (let e = 0; e < 4; e++) {
      const target = stage < 0 || stage === e ? 1 : 0.16;
      emphasis[e] += (target - emphasis[e]) * 0.07;
    }
    const cy = height / 2;
    const R = height * 0.42;
    const items: Array<{ c: number; r: number; d: number; col: string; a: number }> = [];

    const push = (it: { sx: number; sy: number; d: number; col: string; a: number }) => {
      if (repel) {
        const dx = it.sx - pointerX;
        const dy = it.sy - pointerY;
        const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
        if (dist < radius) {
          let f = 1 - dist / radius;
          f = f * f * pointerStrength;
          it.sx += (dx / dist) * f * amp;
          it.sy += (dy / dist) * f * amp;
        }
      }
      items.push({
        c: (it.sx / cell) | 0,
        r: (it.sy / cell) | 0,
        d: it.d,
        col: it.col,
        a: it.a,
      });
    };

    for (let s = 0; s < 2; s++) {
      const ph0 = s * Math.PI;
      for (let i = 0; i < markers; i++) {
        const u = (i / markers + clock * 0.0013) % 1;
        const rk = R * prof(u);
        const chaos = Math.pow(1 - u, 1.05);
        const ang = u * turns * 6.2832 + ph0 + (rnd(i * 3.1 + s * 40) - 0.5) * 2.9 * chaos;
        const jr = rk * (1 + (rnd(i * 7.7 + s * 9) - 0.5) * 1.9 * chaos);
        const za = Math.cos(ang) * jr;
        const ya = Math.sin(ang) * jr;
        const depth = dep(za, rk);
        push({
          sx: u * width + za * 0.34,
          sy: cy + ya * 0.92,
          d: depth,
          col: mix('#ffffff', pick(i * 2.3 + s * 70, u), 0.3 + 0.65 * depth),
          a: aOf(u),
        });
      }
    }

    for (let uu = 0; uu < 1; uu += 0.04) {
      const u2 = (uu + clock * 0.0013) % 1;
      if (u2 < 0.5) continue;
      const rk2 = R * prof(u2);
      const ang2 = u2 * turns * 6.2832;
      for (let w = 0; w <= 1.001; w += 0.12) {
        const f2 = 1 - 2 * w;
        const za2 = Math.cos(ang2) * rk2 * f2;
        const ya2 = Math.sin(ang2) * rk2 * f2;
        const depth2 = dep(za2, rk2);
        push({
          sx: u2 * width + za2 * 0.34,
          sy: cy + ya2 * 0.92,
          d: depth2 - 0.01,
          col: mix('#ffffff', BLUE, 0.3 + 0.5 * depth2),
          a: aOf(u2),
        });
      }
    }

    items.sort((a, b) => a.d - b.d);
    for (const it of items) {
      if (it.r < 0 || it.r >= rows || it.c < 0 || it.c >= cols) continue;
      ctx.globalAlpha = it.a;
      ctx.fillStyle = it.col;
      ctx.fillRect(it.c * cell, it.r * cell, cell - 1, cell - 1);
    }
    ctx.globalAlpha = 1;
  };

  const loop = () => {
    if (on) {
      clock += 1;
      frame();
    }
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(raf);
    canvas.removeEventListener('pointermove', onPointerMove);
    canvas.removeEventListener('pointerleave', onPointerLeave);
    stepCleanups.forEach((stop) => stop());
    resizeObserver?.disconnect();
    intersectionObserver?.disconnect();
  };
}

export function ProcessSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const steps = stepsRef.current;
    if (!canvas || !steps) return;
    return startProcflow(canvas, steps);
  }, []);

  return (
    <section className="proc mal-proc" id="work-process">
      <div className="wrap">
        <div className="ph">
          <h2>
            Discover. Explore.
            <br />
            Validate. Implement.
          </h2>
          <div className="phx">
            <p className="pd">
              Widen the aperture before anyone commits to a solution. Then artifacts, tests, and
              sign-off so design is a measurable driver of the outcome.
            </p>
          </div>
        </div>
        <div className="procflow">
          <canvas ref={canvasRef} aria-hidden="true" />
        </div>
        <div className="donuts" ref={stepsRef}>
          {STEPS.map((step) => (
            <div className="step" key={step.n}>
              <div className="dl">
                <span className="dn">{step.n}</span>
                <span className="dt">{step.title}</span>
              </div>
              <p className="dd">{step.copy}</p>
              <span className="pxline" aria-hidden="true">
                <i />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
