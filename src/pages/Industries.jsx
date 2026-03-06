import { Link } from 'react-router-dom';
import PageSeo from '../components/PageSeo';
import AnimatedSection from '../components/AnimatedSection';

const industrySolutions = [
  {
    title: 'Financial Services',
    summary: 'Secure cloud platforms with governance, resilience, and audit-ready operations.',
  },
  {
    title: 'Healthcare & Life Sciences',
    summary: 'Compliance-aligned digital systems with reliable data and service continuity.',
  },
  {
    title: 'Retail & E-Commerce',
    summary: 'Elastic infrastructure and release automation for seasonal and high-demand traffic.',
  },
  {
    title: 'SaaS & Technology',
    summary: 'High-velocity engineering practices with observability and reliability engineering.',
  },
  {
    title: 'Manufacturing',
    summary: 'Connected operations and modernization across hybrid and multi-cloud environments.',
  },
  {
    title: 'Telecom',
    summary: 'Scalable platform orchestration for network services and digital customer channels.',
  },
];

const Industries = () => {
  return (
    <>
      <PageSeo
        title="Industries | Fusionnex Solutions"
        description="Industry-specific cloud and DevOps consulting for finance, healthcare, retail, SaaS, manufacturing, and telecom."
        ogType="website"
      />

      <AnimatedSection className="bg-transparent py-24">
        <section className="min-h-screen py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col gap-10">
              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-10">
                <h1 className="text-4xl font-bold text-white md:text-5xl">Industries Served</h1>
                <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                  Fusionnex combines domain context with modern engineering practices to help industry leaders modernize
                  securely and scale predictably.
                </p>
                <Link to="/contact" className="mt-7 inline-flex rounded-xl border border-white/10 bg-white/10 px-6 py-3 font-semibold text-white">
                  Build an Industry Roadmap
                </Link>
              </section>

              <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {industrySolutions.map((industry) => (
                  <article key={industry.title} className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-white">{industry.title}</h2>
                    <p className="mt-3 text-slate-300">{industry.summary}</p>
                  </article>
                ))}
              </section>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default Industries;
