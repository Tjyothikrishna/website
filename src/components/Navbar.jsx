import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Fusionnexlogo.jpg';

const Navbar = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/industries', label: 'Industries' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/about', label: 'About' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/10 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Fusionnex logo" className="h-10 w-10 rounded-xl border border-white/20 object-cover" />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-white">FUSIONNEX</span>
            <span className="text-xs text-slate-300">Innovations India Pvt Ltd</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden gap-6 md:flex md:flex-wrap md:justify-end">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
        >
          Talk to an Expert
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
