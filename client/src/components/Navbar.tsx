import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms', path: '/terms' }
];

const Navbar = (): JSX.Element => {
  const location = useLocation();

  return (
    <header className="top-header">
      <div className="logo-circle">TV</div>
      <h1>T VARTHA</h1>
      <p>tvartha2026@gmail.com</p>
      <p>6304978211</p>

      <nav className="main-nav" aria-label="Primary">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? 'nav-link active' : 'nav-link'}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
