import PageSeo from '../components/PageSeo';
import AnimatedSection from '../components/AnimatedSection';

const founderMessage =
  'At Fusionnex, our purpose is to help enterprises innovate with confidence by building secure, scalable, and future-ready digital systems that create long-term business value.';

const teamMembers = [
  {
    name: 'Aanya Verma',
    role: 'Head of Product Engineering',
    description: 'Leads delivery teams focused on high-impact enterprise products and platform modernization.',
  },
  {
    name: 'Rohan Mehta',
    role: 'Cloud Solutions Architect',
    description: 'Designs resilient cloud-native architectures with governance, reliability, and performance in mind.',
  },
  {
    name: 'Maya Srinivasan',
    role: 'Director of Customer Success',
    description: 'Partners closely with clients to translate business goals into measurable technology outcomes.',
  },
  {
    name: 'Daniel Kim',
    role: 'AI & Automation Lead',
    description: 'Builds intelligent automation frameworks that accelerate delivery and operational efficiency.',
  },
  {
    name: 'Priya Nair',
    role: 'Principal DevOps Consultant',
    description: 'Strengthens CI/CD, observability, and release reliability across multi-team engineering environments.',
  },
  {
    name: 'Luca Romano',
    role: 'Enterprise Program Manager',
    description: 'Aligns strategic roadmaps, stakeholders, and execution plans for complex digital transformations.',
  },
];

const timelineMilestones = [
  { year: '2019', title: 'Company founded' },
  { year: '2020', title: 'First enterprise project delivered' },
  { year: '2022', title: 'Cloud platform launched' },
  { year: '2024', title: 'Global clients expansion' },
  { year: '2025', title: 'AI-powered solutions introduced' },
];

const globalClients = ['Northstar Retail', 'Apex Finserv', 'Helios Health', 'Nova Mobility', 'Orbit Telecom', 'Summit Energy'];

const techStack = [
  {
    title: 'Frontend',
    technologies: 'React, Next.js, TailwindCSS',
    description: 'Modern, responsive interfaces optimized for performance, usability, and scalability.',
    icon: '🖥️',
  },
  {
    title: 'Backend',
    technologies: 'Node.js, Java, Python',
    description: 'Robust service ecosystems built for reliability, security, and enterprise-grade integrations.',
    icon: '⚙️',
  },
  {
    title: 'Cloud',
    technologies: 'AWS, Docker, Kubernetes',
    description: 'Portable and resilient infrastructure enabling rapid delivery and seamless global operations.',
    icon: '☁️',
  },
  {
    title: 'Database',
    technologies: 'PostgreSQL, MongoDB',
    description: 'Scalable data foundations engineered for high availability, analytics, and long-term growth.',
    icon: '🗄️',
  },
];

const About = () => {
  return (
    <>
      <PageSeo
        title="About Fusionnex | Enterprise Cloud & DevOps Partner"
        description="Learn how Fusionnex builds digital platforms, cloud solutions, and scalable enterprise systems for global organizations."
        ogType="website"
      />

      <AnimatedSection className="bg-transparent">
        <section className="min-h-screen py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col gap-10">
              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl px-8 py-14 text-center md:px-12">
                <h1 className="text-4xl font-bold text-white md:text-6xl">About Fusionnex</h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                  Fusionnex builds digital platforms, cloud solutions, and scalable enterprise systems that help
                  organizations modernize operations, accelerate innovation, and deliver dependable business outcomes.
                </p>
              </section>

              <section className="grid gap-6 md:grid-cols-2">
                <article className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                  <h2 className="text-2xl font-semibold text-white">Company Story</h2>
                  <p className="mt-4 leading-8 text-slate-300">
                    Fusionnex started with a mission to simplify enterprise transformation through clear strategy,
                    dependable engineering, and cloud-first thinking.
                  </p>
                  <p className="mt-3 leading-8 text-slate-300">
                    Our mission is to empower teams with secure and scalable systems. Our vision is to become a global
                    innovation partner. Our values are integrity, craftsmanship, customer focus, and continuous growth.
                  </p>
                </article>

                <article className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                  <h2 className="text-2xl font-semibold text-white">Mission, Vision & Values</h2>
                  <ul className="mt-4 space-y-3 leading-7 text-slate-300">
                    <li>
                      <span className="text-white font-semibold">Mission:</span> Deliver resilient platforms that drive
                      measurable business impact.
                    </li>
                    <li>
                      <span className="text-white font-semibold">Vision:</span> Build the future of enterprise software
                      through cloud and AI innovation.
                    </li>
                    <li>
                      <span className="text-white font-semibold">Values:</span> Integrity, ownership, transparency, and
                      customer success.
                    </li>
                  </ul>
                </article>
              </section>

              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8 md:p-10">
                <h2 className="text-3xl font-semibold text-white">Founder</h2>
                <div className="mt-6 grid gap-8 md:grid-cols-[260px_1fr] md:items-center">
                  <img
                    src="/founder.jpg"
                    alt="Sanjeevi Machina"
                    className="h-64 w-full rounded-xl border border-white/10 object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Sanjeevi Machina</h3>
                    <p className="mt-1 text-slate-300">Founder & CEO</p>
                    <p className="mt-4 leading-8 text-slate-300">“{founderMessage}”</p>
                    <a
                      href="https://www.linkedin.com/in/sanjeevim/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center rounded-xl border border-white/10 bg-white/10 px-5 py-2.5 font-medium text-white transition hover:bg-white/20"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </section>

              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <h2 className="text-3xl font-semibold text-white">Team Members</h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {teamMembers.map((member) => (
                    <article key={member.name} className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-5">
                      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs text-slate-300">
                        Profile
                      </div>
                      <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                      <p className="mt-1 text-sm text-slate-300">{member.role}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{member.description}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <h2 className="text-3xl font-semibold text-white">Company Timeline</h2>
                <div className="relative mt-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-20px)] before:w-px before:bg-white/20">
                  {timelineMilestones.map((item) => (
                    <div key={item.year} className="relative pl-10">
                      <span className="absolute left-0 top-1.5 h-6 w-6 animate-pulse rounded-full border border-white/20 bg-white/20" />
                      <p className="text-sm font-semibold tracking-wide text-white">{item.year}</p>
                      <p className="mt-1 text-lg font-medium text-slate-300">{item.title}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <h2 className="text-3xl font-semibold text-white">Trusted by Global Clients</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {globalClients.map((client) => (
                    <div
                      key={client}
                      className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl flex min-h-24 items-center justify-center px-4 text-center text-slate-300"
                    >
                      {client}
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <h2 className="text-3xl font-semibold text-white">Technology Stack</h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {techStack.map((category) => (
                    <article key={category.title} className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl" aria-hidden="true">
                          {category.icon}
                        </span>
                        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                      </div>
                      <p className="mt-3 text-sm font-medium text-slate-300">{category.technologies}</p>
                      <p className="mt-2 leading-7 text-slate-300">{category.description}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <h2 className="text-3xl font-semibold text-white">Office Location</h2>
                <p className="mt-3 text-slate-300">Visit our office and collaborate with our team in Bengaluru, India.</p>
                <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
                  <iframe
                    title="Fusionnex Office Location"
                    src="https://maps.google.com/maps?q=Bengaluru%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                    className="h-[400px] w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </section>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default About;
