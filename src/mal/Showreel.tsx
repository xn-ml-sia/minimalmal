import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

type Clip = {
  title: string;
  client: string;
  to: string;
  src: string;
  poster: string;
};

const CLIPS: readonly Clip[] = [
  {
    title: 'Mezo Clay',
    client: 'Thesis',
    to: '/work/mezo-clay',
    src: '/images/portfolio/storybook-clay.webm',
    poster: '/images/portfolio/main3.png',
  },
  {
    title: 'Stories carousel',
    client: 'Zalando',
    to: '/work/zalando-stories',
    src: '/images/portfolio/z-carousel.webm',
    poster: '/images/portfolio/zalando-main.png',
  },
  {
    title: 'Rewards card',
    client: 'BlockFi',
    to: '/work/blockfi-rewards-card',
    src: '/images/portfolio/blockfi-screen-1.webm',
    poster: '/images/portfolio/blockfi-card-rewards.png',
  },
  {
    title: 'Stacked motion',
    client: 'Zalando',
    to: '/work/zalando-stories',
    src: '/images/portfolio/z-stacked.webm',
    poster: '/images/portfolio/shoes.png',
  },
  {
    title: 'Credit Card',
    client: 'BlockFi',
    to: '/work/blockfi-rewards-card',
    src: '/images/portfolio/blockfi-screen-2.webm',
    poster: '/images/portfolio/blockfi-screen-3.png',
  },
  {
    title: 'Story peak',
    client: 'Zalando',
    to: '/work/zalando-stories',
    src: '/images/portfolio/z-story-peak.webm',
    poster: '/images/portfolio/zalando-main.png',
  },
] as const;

const HOLD_MS = 4200;
const FADE_MS = 720;

export function Showreel() {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [armed, setArmed] = useState(false);
  const [entered, setEntered] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      ([entry]) => setArmed(entry.isIntersecting),
      { threshold: 0.18 },
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!armed || entered) return;
    const id = window.setTimeout(() => setEntered(true), 40);
    return () => window.clearTimeout(id);
  }, [armed, entered]);

  useEffect(() => {
    if (reduced || !armed) return;

    let raf = 0;
    let start = performance.now();
    let alive = true;

    const tick = (now: number) => {
      if (!alive) return;
      const elapsed = now - start;
      setProgress(Math.min(1, elapsed / HOLD_MS));
      if (elapsed >= HOLD_MS) {
        start = now;
        setIndex((i) => (i + 1) % CLIPS.length);
        setProgress(0);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
    };
  }, [armed, reduced, index]);

  useEffect(() => {
    if (reduced) return;
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index && armed) {
        video.currentTime = 0;
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, [index, armed, reduced]);

  const active = CLIPS[index];
  const prev = CLIPS[(index - 1 + CLIPS.length) % CLIPS.length];
  const next = CLIPS[(index + 1) % CLIPS.length];

  return (
    <aside
      ref={rootRef}
      className={`mal-showreel${entered ? ' is-in' : ''}`}
      aria-label="Portfolio showreel"
    >
      <div className="mal-showreel__stack" aria-hidden="true">
        <div className="mal-showreel__card mal-showreel__card--back">
          <img src={prev.poster} alt="" loading="lazy" decoding="async" />
        </div>
        <div className="mal-showreel__card mal-showreel__card--peek">
          <img src={next.poster} alt="" loading="lazy" decoding="async" />
        </div>
      </div>

      <Link to={active.to} className="mal-showreel__stage">
        <div className="mal-showreel__media">
          {CLIPS.map((clip, i) => (
            <div
              key={clip.src}
              className={`mal-showreel__slide${i === index ? ' is-active' : ''}`}
              style={{ transitionDuration: `${FADE_MS}ms` }}
            >
              {reduced ? (
                <img src={clip.poster} alt="" loading="lazy" decoding="async" />
              ) : (
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={clip.src}
                  poster={clip.poster}
                  muted
                  playsInline
                  loop
                  preload={i === index || i === (index + 1) % CLIPS.length ? 'auto' : 'metadata'}
                />
              )}
            </div>
          ))}
          <div className="mal-showreel__grain" />
          <div className="mal-showreel__vignette" />
        </div>

        <div className="mal-showreel__chrome">
          <div className="mal-showreel__copy" key={active.src}>
            <p className="mal-showreel__client">{active.client}</p>
            <p className="mal-showreel__title">{active.title}</p>
          </div>
          <div className="mal-showreel__progress" aria-hidden="true">
            <i style={{ transform: `scaleX(${progress})` }} />
          </div>
        </div>
      </Link>
    </aside>
  );
}
