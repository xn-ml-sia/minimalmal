import { NavLink } from 'react-router-dom';
import { nav } from './content';

export function Nav() {
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
            className={({ isActive }) => (isActive ? 'is-on' : '')}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
