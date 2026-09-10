import { NavLink, useLocation } from 'react-router-dom';
import { nav } from './content';

export function Nav() {
  const { pathname } = useLocation();

  return (
    <header className="mal-nav">
      <NavLink to="/" className="mal-nav__mark" end>
        Mal
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
