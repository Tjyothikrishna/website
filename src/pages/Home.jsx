import { Link } from 'react-router-dom';
import PageSeo from '../components/PageSeo';
import AnimatedSection from '../components/AnimatedSection';

const services = ['Platform Engineering', 'DevSecOps Automation', 'Cloud Migration', 'SRE & Observability'];
const industries = ['FinTech', 'Healthcare', 'Retail', 'SaaS', 'Manufacturing', 'Telecom'];
const tech = ['React', 'Next.js', 'Node.js', 'Python', 'AWS', 'Kubernetes'];
const testimonials = [
  {
    quote: 'Fusionnex helped us reduce release time by 60% while improving compliance visibility.',
    author: 'CTO, Global Retail Group',
  },
  {
    quote: 'Their DevOps and cloud architecture model improved reliability across our core workloads.',
    author: 'VP Engineering, FinTech Enterprise',
  },
];
const clients = ['Northstar', 'Apex Finserv', 'Helios Health', 'Nova Mobility', 'Orbit Telecom', 'Summit Energy'];

const Home = () => {
  return (
    <>
      <PageSeo
        title="Fusionnex | Modern DevOps & Cloud Consulting"
        description="Fusionnex helps enterprises scale digital delivery through cloud-native platforms, DevSecOps, and SRE excellence."
        ogType="website"
      />

      <AnimatedSection className="bg-transparent py-24">
        <section className="min-h-screen py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col gap-10">
              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl px-8 py-14 text-center">
                <p className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm text-slate-300">
                  Cloud • DevOps • AI Platforms
                </p>
                <h1 className="mt-5 text-4xl font-bold text-white md:text-6xl">Build and Scale Like a Modern DevOps Company</h1>
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                  Fusionnex designs and operates secure cloud platforms that help enterprises ship faster, improve
                  reliability, and innovate with confidence.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    to="/services"
                    className="rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-3 font-semibold text-white"
                  >
                    Explore Services
                  </Link>
                  <Link to="/contact" className="rounded-xl bg-white/10 border border-white/10 px-6 py-3 font-semibold text-white">
                    Talk to Experts
                  </Link>
                </div>
              </section>

              <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {services.map((item) => (
                  <article key={item} className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-5">
                    <h2 className="text-lg font-semibold text-white">{item}</h2>
                    <p className="mt-2 text-sm text-slate-300">Outcome-focused consulting for enterprise scale.</p>
                  </article>
                ))}
              </section>

              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <h2 className="text-3xl font-semibold text-white">Industries Served</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {industries.map((industry) => (
                    <div key={industry} className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-slate-300">
                      {industry}
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <h2 className="text-3xl font-semibold text-white">Technology Stack</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {tech.map((item) => (
                    <div key={item} className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className="grid gap-6 lg:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <article key={testimonial.author} className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                    <p className="text-slate-300">“{testimonial.quote}”</p>
                    <p className="mt-4 text-white font-semibold">{testimonial.author}</p>
                  </article>
                ))}
              </section>

              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <h2 className="text-3xl font-semibold text-white">Global Clients</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {clients.map((client) => (
                    <div key={client} className="bg-white/10 border border-white/10 rounded-xl min-h-20 flex items-center justify-center text-slate-300">
                      {client}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default Home;
