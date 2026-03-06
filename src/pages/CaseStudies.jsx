import { Link } from 'react-router-dom';
import PageSeo from '../components/PageSeo';
import AnimatedSection from '../components/AnimatedSection';

const studies = [
  {
    client: 'Global Retail Brand',
    outcome: 'Reduced deployment lead time by 65% through CI/CD modernization and release automation.',
  },
  {
    client: 'Regional Financial Institution',
    outcome: 'Improved platform resilience with SRE practices and real-time observability.',
  },
  {
    client: 'Healthcare Provider Network',
    outcome: 'Enabled secure cloud migration while maintaining strict compliance controls.',
  },
];

const testimonials = [
  'Fusionnex transformed our delivery model without disrupting critical systems.',
  'Their team brought enterprise-level rigor and startup-level execution speed.',
];

const CaseStudies = () => {
  return (
    <>
      <PageSeo
        title="Case Studies | Fusionnex Outcomes"
        description="Explore measurable DevOps and cloud outcomes delivered by Fusionnex for global enterprises."
        ogType="article"
      />

      <AnimatedSection className="bg-transparent py-24">
        <section className="min-h-screen py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col gap-10">
              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-10">
                <h1 className="text-4xl font-bold text-white md:text-5xl">Case Studies</h1>
                <p className="mt-4 max-w-3xl text-slate-300 leading-8">
                  Real transformation stories across cloud modernization, platform engineering, and reliability programs.
                </p>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-3 font-semibold text-white"
                >
                  Start Your Success Story
                </Link>
              </section>

              <section className="grid gap-6 md:grid-cols-3">
                {studies.map((study) => (
                  <article key={study.client} className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-white">{study.client}</h2>
                    <p className="mt-3 text-slate-300">{study.outcome}</p>
                  </article>
                ))}
              </section>

              <section className="grid gap-6 lg:grid-cols-2">
                {testimonials.map((quote) => (
                  <article key={quote} className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                    <p className="text-slate-300">“{quote}”</p>
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

export default CaseStudies;
