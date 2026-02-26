// Responsive navigation bar with anchor links for quick section access.
const Navbar = () => {
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-900">
          YourCompany
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
          className="rounded-md bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-brand-700"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Navbar;
