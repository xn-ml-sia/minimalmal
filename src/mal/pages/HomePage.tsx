import { useEffect } from 'react';
import { runHomeRuntime } from '../runtime';
import markup from '../markup/home.html?raw';
import homeRuntime from '../scripts/home.js?raw';
import '../styles/home.css';

const html = { __html: markup };

export function HomePage() {
  useEffect(() => {
    const stop = runHomeRuntime(homeRuntime);
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
    return () => {
      stop();
    };
  }, []);

  return <div dangerouslySetInnerHTML={html} />;
}
