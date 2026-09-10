import { NavLink, useLocation } from 'react-router-dom';
import { nav } from './content';

export function Nav() {
  const { pathname } = useLocation();

  return (
    <header className="mal-nav">
      <NavLink to="/" className="mal-nav__mark" end aria-label="Mal Som home">
        <svg className="mal-nav__logo" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle className="mal-nav__logo-ring" cx="16" cy="16" r="13.25" stroke="currentColor" strokeWidth="1.5" />
          <circle className="mal-nav__logo-dot" cx="16" cy="16" r="3.35" fill="currentColor" />
        </svg>
        <span className="mal-nav__wordmark" aria-hidden="true" />
      </NavLink>
      <nav className="mal-nav__links">
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => {
              const onWork =
                item.to === '/' &&
                (pathname === '/' || pathname.startsWith('/work/'));
              return isActive || onWork ? 'is-on' : '';
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
