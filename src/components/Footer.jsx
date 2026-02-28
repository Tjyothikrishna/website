import { Link } from 'react-router-dom';

const footerSections = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Services', to: '/services' },
      { label: 'Industries', to: '/industries' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Careers', to: '/careers' },
    ],
  },
  {
    title: 'Core Services',
    links: [
      { label: 'CI/CD Engineering', to: '/services' },
      { label: 'Cloud Migration', to: '/services' },
      { label: 'Kubernetes & Containers', to: '/services' },
      { label: 'DevSecOps', to: '/services' },
      { label: 'Infrastructure as Code', to: '/services' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Financial Services', to: '/industries' },
      { label: 'Healthcare', to: '/industries' },
      { label: 'E-commerce', to: '/industries' },
      { label: 'SaaS & Technology', to: '/industries' },
      { label: 'Enterprise', to: '/industries' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/35 text-slate-300 backdrop-blur-md">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {footerSections.map((section) => (
          <div key={section.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{section.title}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Connect</h3>
          <p className="mt-4 text-sm text-slate-300">contact@fusionnex.com</p>
          <p className="mt-2 text-sm text-slate-300">+91-XXXXXXXXXX</p>
          <p className="mt-2 text-sm text-slate-300">India</p>
          <Link
            to="/contact"
            className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:scale-[1.02]"
          >
            Book a Consultation
          </Link>
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
