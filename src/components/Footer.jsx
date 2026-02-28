const footerSections = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Industries', href: '/industries' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'CI/CD Engineering', href: '/services' },
      { label: 'Cloud Migration', href: '/services' },
      { label: 'Kubernetes & Containers', href: '/services' },
      { label: 'DevSecOps', href: '/services' },
      { label: 'Infrastructure as Code', href: '/services' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Financial Services', href: '/industries' },
      { label: 'Healthcare', href: '/industries' },
      { label: 'E-commerce', href: '/industries' },
      { label: 'SaaS & Technology', href: '/industries' },
      { label: 'Enterprise & Manufacturing', href: '/industries' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/30 text-slate-300 backdrop-blur-md">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {footerSections.map((section) => (
          <div key={section.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{section.title}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="mailto:contact@fusionnex.com" className="transition hover:text-white">
                contact@fusionnex.com
              </a>
            </li>
            <li>
              <a href="tel:+91-XXXXXXXXXX" className="transition hover:text-white">
                +91-XXXXXXXXXX
              </a>
            </li>
            <li>India</li>
            <li>
              <a href="#" className="transition hover:text-white">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-5 text-center text-xs text-slate-400 md:flex-row md:items-center md:justify-center md:gap-3">
          <span>© 2026 Fusionnex Innovations India Pvt Ltd</span>
          <span className="hidden text-slate-500 md:inline">|</span>
          <a href="#" className="transition hover:text-white">
            Privacy Policy
          </a>
          <span className="hidden text-slate-500 md:inline">|</span>
          <a href="#" className="transition hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
