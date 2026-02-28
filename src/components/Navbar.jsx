import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Fusionnexlogo.jpg';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/10 shadow-[0_12px_40px_rgba(2,6,23,0.35)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl">
          <img
            src={logo}
            alt="Fusionnex logo"
            className="h-10 w-10 rounded-xl border border-white/20 object-cover"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-white">FUSIONNEX</span>
            <span className="text-xs text-slate-300">INNOVATIONS INDIA PVT LTD</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-2 md:flex md:flex-wrap md:justify-end">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-xl px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:scale-[1.02]"
        >
          Talk to an Expert
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
