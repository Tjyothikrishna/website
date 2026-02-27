import logo from '../assets/Fusionnexlogo.jpg';

// Responsive navigation bar with anchor links for quick section access.
const Navbar = () => {
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Fusionnex logo" className="h-10 w-10 rounded object-cover" />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-slate-900">FUSIONNEX</span>
            <span className="text-xs text-slate-500">Innovations India Pvt Ltd</span>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-md bg-blue-900 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-red-600"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Navbar;
