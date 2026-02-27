import PageSeo from '../components/PageSeo';
const serviceGroups = [
  {
    title: 'Cloud & Platform Engineering',
    items: ['Cloud migration and architecture', 'Infrastructure as Code', 'SRE enablement'],
  },
  {
    title: 'DevOps Transformation',
    items: ['CI/CD modernization', 'Release orchestration', 'Observability and monitoring'],
  },
  {
    title: 'Digital Product Delivery',
    items: ['Agile delivery governance', 'QA automation strategy', 'Secure SDLC practices'],
  },
];

const Services = () => {
  return (
    <section className="bg-slate-50 py-20">
      <PageSeo
        title="Services | Fusionnex Cloud & DevOps Consulting"
        description="Explore Fusionnex cloud and DevOps consulting services across CI/CD engineering, cloud migration, IaC, Kubernetes, DevSecOps, and SRE."
        ogType="website"
      />
            <div className="mx-auto w-full max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-slate-900">Services</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          We provide enterprise-grade consulting and implementation services to accelerate your digital
          transformation roadmap.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {serviceGroups.map((group) => (
            <article key={group.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-xl font-semibold text-slate-900">{group.title}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
