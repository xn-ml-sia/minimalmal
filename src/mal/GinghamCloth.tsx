import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type GinghamClothProps = {
  className?: string;
};

const GINGHAM_URL = '/images/patterns/gingham-green.svg';

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('gingham tile failed'));
    img.src = url;
  });
}

async function makeGinghamTexture(): Promise<THREE.CanvasTexture> {
  const tile = await loadImage(GINGHAM_URL);
  const W = 1536;
  const H = 864;
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const x = c.getContext('2d');
  if (!x) throw new Error('2d context unavailable');

  const cell = 14;
  for (let y = 0; y < H; y += cell) {
    for (let xx = 0; xx < W; xx += cell) {
      x.drawImage(tile, xx, y, cell, cell);
    }
  }

  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

/**
 * Gingham sheet behind the Work intro — free-floating on a soft water-like
 * swell with pointer ripples, soft XY hold, evenly lit, full-bleed and top-aligned.
 */
export function GinghamCloth({ className = '' }: GinghamClothProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const el = canvas;
    const host = el.parentElement;

    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let disposed = false;
    let raf = 0;
    let running = false;
    let resizeObserver: ResizeObserver | null = null;

    const cleanupFns: Array<() => void> = [];

    void (async () => {
      let map: THREE.CanvasTexture;
      try {
        map = await makeGinghamTexture();
      } catch {
        return;
      }
      if (disposed) {
        map.dispose();
        return;
      }

      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        canvas: el,
        antialias: true,
        alpha: true,
        powerPreference: 'low-power',
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      // Wide strip — camera zooms past width so the sheet reads oversized.
      const BW = 7.2;
      const BH = 2.6;
      const GX = 56;
      const GY = 28;
      const geo = new THREE.PlaneGeometry(BW, BH, GX, GY);
      const mat = new THREE.MeshBasicMaterial({
        map,
        side: THREE.DoubleSide,
        color: 0xffffff,
        transparent: true,
        opacity: 1,
      });
      const mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);

      const pos = geo.attributes.position as THREE.BufferAttribute;
      const N = (GX + 1) * (GY + 1);
      const cur = new Float32Array(N * 3);
      const prev = new Float32Array(N * 3);
      const rest = new Float32Array(N * 3);

      for (let i = 0; i < N; i++) {
        const ax = pos.getX(i);
        const ay = pos.getY(i);
        cur[i * 3] = prev[i * 3] = rest[i * 3] = ax;
        cur[i * 3 + 1] = prev[i * 3 + 1] = rest[i * 3 + 1] = ay;
        cur[i * 3 + 2] = prev[i * 3 + 2] = rest[i * 3 + 2] = 0;
      }

      const idx = (ix: number, iy: number) => ix + iy * (GX + 1);
      const restH = BW / GX;
      const restV = BH / GY;
      const DAMP = 0.989;
      const DT = 0.016;
      // Hold XY in place; leave Z freer so the surface can swell.
      const KEEP_XY = 5.0;
      const WAVE = 11;

      // Pointer → cloth UV (listened on the intro host so text stays interactive).
      let pointerU = 0.5;
      let pointerV = 0.5;
      let prevPointerU = 0.5;
      let prevPointerV = 0.5;
      let pointerTarget = 0;
      let pointerOn = 0;
      let splash = 0;

      const onPointerMove = (event: PointerEvent) => {
        if (!host || reduce) return;
        const rect = host.getBoundingClientRect();
        if (rect.width < 1 || rect.height < 1) return;
        pointerU = (event.clientX - rect.left) / rect.width;
        // Cloth Y is up; screen Y is down.
        pointerV = 1 - (event.clientY - rect.top) / rect.height;
        pointerTarget = 1;
      };
      const onPointerLeave = () => {
        pointerTarget = 0;
      };

      if (host && !reduce) {
        host.addEventListener('pointermove', onPointerMove, { passive: true });
        host.addEventListener('pointerleave', onPointerLeave);
        cleanupFns.push(() => {
          host.removeEventListener('pointermove', onPointerMove);
          host.removeEventListener('pointerleave', onPointerLeave);
        });
      }

      // Soft swell with sharper fold ridges riding the ripples.
      function waveHeight(cx: number, cy: number, t: number) {
        const swell = Math.sin(cx * 1.8 + cy * 1.2 - t * 0.32) * 0.08;
        const ripple = Math.sin(cx * 3.6 - cy * 1.8 - t * 0.55) * 0.03;
        const drift = Math.sin(cx * 0.9 + cy * 2.4 + t * 0.22) * 0.035;
        // Vertical fold creases — sharper peaks that travel with the surface.
        const foldPhase = cx * Math.PI * 3.2 + cy * 0.7 - t * 0.28;
        const folds =
          Math.pow(Math.sin(foldPhase), 3) * 0.07 +
          Math.pow(Math.sin(cx * Math.PI * 5.4 - t * 0.4 + cy * 1.3), 3) * 0.035;
        return swell + ripple + drift + folds;
      }

      function pointerRipple(cx: number, cy: number, t: number) {
        if (pointerOn < 0.01) return 0;
        const dx = cx - pointerU;
        const dy = (cy - pointerV) * (BH / BW);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const dip = -Math.exp(-dist * dist * 28) * 0.18;
        const ring =
          Math.sin(dist * 36 - t * 9) *
          Math.exp(-dist * 6.5) *
          (0.06 + splash * 0.14);
        return (dip + ring) * pointerOn;
      }

      function solve(a: number, b: number, rl: number) {
        const ax = cur[a * 3];
        const ay = cur[a * 3 + 1];
        const az = cur[a * 3 + 2];
        let dx = cur[b * 3] - ax;
        let dy = cur[b * 3 + 1] - ay;
        let dz = cur[b * 3 + 2] - az;
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1e-6;
        const diff = ((d - rl) / d) * 0.5;
        dx *= diff;
        dy *= diff;
        dz *= diff;
        cur[a * 3] += dx;
        cur[a * 3 + 1] += dy;
        cur[a * 3 + 2] += dz;
        cur[b * 3] -= dx;
        cur[b * 3 + 1] -= dy;
        cur[b * 3 + 2] -= dz;
      }

      function step(t: number) {
        pointerOn += (pointerTarget - pointerOn) * 0.14;
        const move = Math.hypot(pointerU - prevPointerU, pointerV - prevPointerV);
        splash = Math.min(1.5, splash * 0.88 + move * 10);
        prevPointerU = pointerU;
        prevPointerV = pointerV;

        for (let iy = 0; iy <= GY; iy++) {
          for (let ix = 0; ix <= GX; ix++) {
            const i = idx(ix, iy);
            const cx = ix / GX;
            const cy = iy / GY;
            const jx = i * 3;
            const jy = jx + 1;
            const jz = jx + 2;

            const fx =
              (rest[jx] - cur[jx]) * KEEP_XY +
              Math.sin(t * 0.11 + cy * 0.9) * 0.012;
            const fy =
              (rest[jy] - cur[jy]) * KEEP_XY +
              Math.sin(t * 0.09 + cx * 0.8) * 0.01;
            const targetZ = waveHeight(cx, cy, t) + pointerRipple(cx, cy, t);
            const fz = (targetZ - cur[jz]) * WAVE;

            for (let k = 0; k < 3; k++) {
              const j = jx + k;
              const a = k === 0 ? fx : k === 1 ? fy : fz;
              const v = (cur[j] - prev[j]) * DAMP;
              prev[j] = cur[j];
              cur[j] = cur[j] + v + a * DT * DT;
            }
          }
        }

        for (let it = 0; it < 4; it++) {
          for (let iy = 0; iy <= GY; iy++) {
            for (let ix = 0; ix < GX; ix++) {
              solve(idx(ix, iy), idx(ix + 1, iy), restH);
            }
          }
          for (let iy = 0; iy < GY; iy++) {
            for (let ix = 0; ix <= GX; ix++) {
              solve(idx(ix, iy), idx(ix, iy + 1), restV);
            }
          }
        }
      }

      function commit() {
        for (let i = 0; i < N; i++) {
          pos.setXYZ(i, cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2]);
        }
        pos.needsUpdate = true;
      }

      let camera: THREE.PerspectiveCamera;
      let camY = 0;
      let baseZ = 4;
      const FOV = 36;

      function fit() {
        const parent = el.parentElement;
        const w = Math.max(1, parent?.clientWidth || window.innerWidth);
        const h = Math.max(1, parent?.clientHeight || 280);
        renderer.setSize(w, h, false);
        const aspect = w / h;
        camera = new THREE.PerspectiveCamera(FOV, aspect, 0.1, 100);

        // Overspill the frame so the cloth reads larger; top-align.
        const hFit = BW / 2 / Math.tan((FOV * Math.PI) / 360) / aspect;
        baseZ = hFit * 0.72;
        const visibleH = 2 * baseZ * Math.tan((FOV * Math.PI) / 360);
        const topY = BH / 2;
        camY = topY - visibleH / 2;
        camera.position.set(0, camY, baseZ);
        camera.lookAt(0, camY, 0);
      }

      fit();
      resizeObserver = new ResizeObserver(() => {
        fit();
        if (!running) renderer.render(scene, camera);
      });
      if (el.parentElement) resizeObserver.observe(el.parentElement);

      function draw() {
        camera.position.set(0, camY, baseZ);
        camera.lookAt(0, camY, 0);
        renderer.render(scene, camera);
      }

      let t = 0;
      function loop() {
        if (!running || disposed) return;
        t += DT;
        step(t);
        commit();
        draw();
        raf = requestAnimationFrame(loop);
      }

      function start() {
        if (running || disposed) return;
        running = true;
        raf = requestAnimationFrame(loop);
      }

      function stop() {
        running = false;
        cancelAnimationFrame(raf);
      }

      const onVis = () => {
        if (document.hidden) stop();
        else if (!reduce) start();
      };
      document.addEventListener('visibilitychange', onVis);

      for (let s = 0; s < (reduce ? 180 : 100); s++) step(s * DT);
      t = (reduce ? 180 : 100) * DT;
      commit();
      draw();

      if (!reduce) start();

      const disposeScene = () => {
        stop();
        resizeObserver?.disconnect();
        geo.dispose();
        mat.dispose();
        map.dispose();
        renderer.dispose();
      };

      if (disposed) {
        disposeScene();
        document.removeEventListener('visibilitychange', onVis);
        return;
      }

      cleanupFns.push(() => document.removeEventListener('visibilitychange', onVis));
      cleanupFns.push(disposeScene);
    })();

    return () => {
      disposed = true;
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`mal-intro__cloth ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
