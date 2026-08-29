import { useLayoutEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Nav } from './Nav';
import './styles/home-root.css';
import './styles/home.css';
import './styles/inner.css';
import './styles/inner-home.css';
import './styles/pages.css';
import './styles/mal.css';

function malPage(pathname: string) {
  if (pathname.includes('/about')) return 'about';
  if (/\/work\/.+/.test(pathname)) return 'work-detail';
  if (pathname.includes('/work')) return 'work';
  return 'home';
}

function setFavicon(href: string) {
  const existing = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (existing) {
    const previous = existing.getAttribute('href');
    existing.href = href;
    return () => {
      if (previous) existing.href = previous;
      else existing.remove();
    };
  }
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = href;
  document.head.appendChild(link);
  return () => link.remove();
}

export function MalShell() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const page = malPage(pathname);

  document.documentElement.dataset.mal = '';
  document.documentElement.dataset.malPage = page;

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.dataset.mal = '';
    root.dataset.malPage = page;
    root.classList.add('fonts-loaded');
    const previousTitle = document.title;
    document.title =
      page === 'about'
        ? 'About — Mal Som'
        : page === 'work' || page === 'work-detail'
          ? 'Work — Mal Som'
          : 'Mal Som';
    const restoreIcon = setFavicon('/favicon.svg');
    return () => {
      delete root.dataset.mal;
      delete root.dataset.malPage;
      document.title = previousTitle;
      restoreIcon();
    };
  }, [page]);

  useLayoutEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element).closest('a');
      if (!anchor || !anchor.getAttribute('href')) return;
      if (anchor.target && anchor.target !== '_self') return;
      const url = new URL(anchor.href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      if (url.pathname.startsWith('/mal/')) return;
      event.preventDefault();
      navigate(`${url.pathname}${url.search}${url.hash}`);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);

  return (
    <div className={`mal-root is-${page}`}>
      <Nav />
      {page === 'home' ? (
        <div className="mal-home-root">
          <Outlet />
        </div>
      ) : (
        <div className="mal-inner-root">
          <main>
            <Outlet />
          </main>
        </div>
      )}
    </div>
  );
}
