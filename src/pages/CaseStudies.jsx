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
    <section className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-slate-900">Case Studies</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Real outcomes from enterprise engagements focused on measurable delivery improvements.
        </p>
        <div className="mt-10 space-y-5">
          {studies.map((study) => (
            <article key={study.client} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-xl font-semibold text-slate-900">{study.client}</h2>
              <p className="mt-3 text-slate-600">{study.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
