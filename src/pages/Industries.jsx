import { Link } from 'react-router-dom';
import PageSeo from '../components/PageSeo';
import AnimatedSection from '../components/AnimatedSection';

const industrySolutions = [
  {
    title: 'Financial Services',
    summary: 'Compliant digital delivery with resilient, auditable cloud platforms for high-volume systems.',
  },
  {
    title: 'Healthcare & Life Sciences',
    summary: 'Secure modernization for regulated data ecosystems with reliability-first operations.',
  },
  {
    title: 'Retail & E-Commerce',
    summary: 'Auto-scaling commerce foundations for peak demand and rapid feature delivery.',
  },
  {
    title: 'SaaS & Technology',
    summary: 'High-velocity shipping with SLO-centric reliability and secure multi-tenant architecture.',
  },
  {
    title: 'Enterprise & Manufacturing',
    summary: 'Hybrid-cloud operating models that unify governance, visibility, and continuity at scale.',
  },
];

const Industries = () => {
  return (
    <AnimatedSection className="min-h-screen bg-transparent px-6 py-24">
      <PageSeo
        title="Industries | Fusionnex Industry-Focused Cloud & DevOps Solutions"
        description="Discover Fusionnex industry-specific cloud and DevOps solutions for financial services, healthcare, retail, SaaS, and manufacturing enterprises."
        ogType="website"
      />

      <div className="mx-auto w-full max-w-6xl space-y-14">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Industry-Aligned Transformation</h1>
          <p className="mt-4 max-w-3xl text-slate-300 md:text-lg">
            Fusionnex delivers domain-aware platform engineering strategies that align compliance, resilience,
            and modernization velocity for regulated and high-growth markets.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:scale-[1.02]"
          >
            Build an Industry Roadmap
          </Link>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {industrySolutions.map((industry) => (
            <article key={industry.title} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-white">{industry.title}</h2>
              <p className="mt-3 text-slate-300">{industry.summary}</p>
            </article>
          ))}
        </section>
      </div>
    </AnimatedSection>
  );
};

export default Industries;
