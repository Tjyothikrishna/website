import PageSeo from '../components/PageSeo';
import AnimatedSection from '../components/AnimatedSection';

const studies = [
  {
    client: 'Global Retail Brand',
    outcome: 'Reduced deployment lead time by 65% through CI/CD modernization and release automation.',
  },
  {
    client: 'Regional Financial Institution',
    outcome: 'Improved platform resilience with SRE practices and real-time observability dashboards.',
  },
  {
    client: 'Healthcare Provider Network',
    outcome: 'Enabled secure cloud migration while maintaining compliance and data governance controls.',
  },
];

const CaseStudies = () => {
  return (
    <AnimatedSection className="bg-transparent px-6 py-24">
      <PageSeo
        title="Case Studies | Fusionnex Transformation Outcomes"
        description="Read Fusionnex case studies showcasing measurable outcomes in CI/CD modernization, cloud reliability, and secure digital transformation."
        ogType="article"
      />
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Case Studies</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Real outcomes from enterprise programs focused on velocity, uptime, and operational confidence.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {studies.map((study) => (
            <article key={study.client} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-xl font-semibold text-white">{study.client}</h2>
              <p className="mt-3 text-slate-300">{study.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CaseStudies;
