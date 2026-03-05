import PageSeo from '../components/PageSeo';
import AnimatedSection from '../components/AnimatedSection';

const leadershipMessage =
  'At Fusionnex, we lead with curiosity, ship with discipline, and build technology that empowers teams worldwide to solve real business challenges.';

const teamMembers = [
  {
    name: 'Aanya Verma',
    role: 'Head of Product Engineering',
    description:
      'Guides cross-functional squads to deliver resilient, user-first enterprise applications at speed.',
  },
  {
    name: 'Rohan Mehta',
    role: 'Cloud Solutions Architect',
    description:
      'Designs secure multi-cloud foundations with governance and reliability embedded from day one.',
  },
  {
    name: 'Maya Srinivasan',
    role: 'Director of Customer Success',
    description:
      'Partners with global clients to align product outcomes with measurable business impact.',
  },
  {
    name: 'Daniel Kim',
    role: 'AI & Automation Lead',
    description:
      'Builds intelligent automation workflows that accelerate delivery and operational efficiency.',
  },
];

const timelineMilestones = [
  {
    year: '2018',
    title: 'Fusionnex Founded',
    description: 'Started with a focused mission to modernize enterprise delivery through cloud and DevOps.',
  },
  {
    year: '2020',
    title: 'First Product Launch',
    description:
      'Released our cloud migration accelerator that helped clients reduce rollout timelines dramatically.',
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Scaled operations across regions and built distributed teams supporting international clients.',
  },
  {
    year: 'Today',
    title: 'Current Innovations',
    description: 'Advancing AI-assisted operations, observability, and platform engineering at enterprise scale.',
  },
];

const globalClients = ['Northstar Retail', 'Apex Finance Group', 'Helios Health', 'Nova Logistics', 'Orbit Telecom', 'Summit Energy'];

const techStack = [
  {
    title: 'Frontend',
    items: 'React, Next.js',
    description: 'Modern component-driven interfaces focused on performance and usability.',
    icon: '🖥️',
  },
  {
    title: 'Backend',
    items: 'Node.js, Java, Python',
    description: 'Robust service architectures built for scale, security, and maintainability.',
    icon: '⚙️',
  },
  {
    title: 'Cloud',
    items: 'AWS, Docker, Kubernetes',
    description: 'Portable, resilient infrastructure and orchestration for mission-critical workloads.',
    icon: '☁️',
  },
  {
    title: 'Databases',
    items: 'PostgreSQL, MongoDB',
    description: 'Reliable data platforms optimized for integrity, analytics, and growth.',
    icon: '🗄️',
  },
];

const About = () => {
  return (
    <>
      <PageSeo
        title="About Fusionnex | Enterprise Cloud & DevOps Partner"
        description="Learn about Fusionnex Innovations India Pvt Ltd and how our teams deliver enterprise cloud and DevOps transformation with measurable impact."
        ogType="website"
      />

      <AnimatedSection className="bg-transparent px-6 py-24 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <section className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl md:p-12">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-slate-200">
              About Fusionnex
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">Engineering the Future of Intelligent Enterprise Systems</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              Fusionnex is a global technology partner helping organizations modernize digital ecosystems through
              cloud-native platforms, automation, and strategic product engineering.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold">Our Story</h2>
              <p className="mt-4 leading-8 text-slate-200">
                We began with a simple belief: great technology should reduce complexity, not add to it. From our
                earliest projects to global enterprise engagements, we have focused on building delivery models that
                merge speed, governance, and reliability.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold">Mission, Vision & Values</h2>
              <ul className="mt-4 space-y-3 leading-7 text-slate-200">
                <li>
                  <span className="font-semibold text-white">Mission:</span> Empower teams with scalable platforms
                  and automation-led execution.
                </li>
                <li>
                  <span className="font-semibold text-white">Vision:</span> Become the most trusted innovation partner
                  for cloud-first enterprises.
                </li>
                <li>
                  <span className="font-semibold text-white">Values:</span> Integrity, craftsmanship, customer success,
                  and continuous learning.
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl md:p-10">
            <h2 className="text-3xl font-semibold">Founder Spotlight</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
              <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-cyan-500/30 to-indigo-600/30 text-center text-sm text-slate-200">
                Profile Image
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Arjun Rao</h3>
                <p className="mt-1 text-cyan-200">Founder & CEO</p>
                <p className="mt-4 leading-8 text-slate-200">“{leadershipMessage}”</p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-semibold">Team Members</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <article key={member.name} className="rounded-xl border border-white/10 bg-white/10 p-5">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs text-slate-200">
                    Image
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="mt-1 text-sm text-cyan-200">{member.role}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{member.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-semibold">Company Timeline</h2>
            <div className="relative mt-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-20px)] before:w-px before:bg-white/20">
              {timelineMilestones.map((milestone) => (
                <div key={milestone.title} className="relative pl-10">
                  <span className="absolute left-0 top-1.5 h-6 w-6 rounded-full border border-white/30 bg-cyan-400/70 shadow-lg shadow-cyan-500/20" />
                  <p className="text-sm font-semibold tracking-wide text-cyan-200">{milestone.year}</p>
                  <h3 className="mt-1 text-xl font-semibold">{milestone.title}</h3>
                  <p className="mt-2 leading-7 text-slate-200">{milestone.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-semibold">Global Clients</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {globalClients.map((client) => (
                <div
                  key={client}
                  className="flex min-h-24 items-center justify-center rounded-xl border border-white/10 bg-white/10 px-4 text-center text-slate-100"
                >
                  {client}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-semibold">Technology Stack</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {techStack.map((tech) => (
                <article key={tech.title} className="rounded-xl border border-white/10 bg-white/10 p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      {tech.icon}
                    </span>
                    <h3 className="text-xl font-semibold">{tech.title}</h3>
                  </div>
                  <p className="mt-3 text-sm font-medium text-cyan-200">{tech.items}</p>
                  <p className="mt-2 leading-7 text-slate-200">{tech.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-semibold">Office Location</h2>
            <p className="mt-3 text-slate-200">Visit our collaborative workspace in Bengaluru, India.</p>
            <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="Fusionnex Office Location"
                src="https://maps.google.com/maps?q=Bengaluru%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      </AnimatedSection>
    </>
  );
};

export default About;
