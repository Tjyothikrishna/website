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
    <AnimatedSection className="bg-transparent px-6 py-24">
      <PageSeo
        title="Industries | Fusionnex Industry-Focused Cloud & DevOps Solutions"
        description="Discover Fusionnex industry-specific cloud and DevOps solutions for financial services, healthcare, retail, SaaS, and manufacturing enterprises."
        ogType="website"
      />

      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Industries</h1>
          <p className="mt-4 text-slate-300">
            Domain-aware platform strategy and implementation tailored to high-stakes enterprise environments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {industrySolutions.map((industry) => (
            <article key={industry.title} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-white">{industry.title}</h2>
              <p className="mt-3 text-slate-300">{industry.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Industries;
