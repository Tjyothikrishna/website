import { Link } from 'react-router-dom';
import PageSeo from '../components/PageSeo';
import AnimatedSection from '../components/AnimatedSection';

const serviceGroups = [
  {
    title: 'Platform Engineering',
    points: ['Internal developer platforms', 'Golden paths', 'Secure CI/CD at scale'],
  },
  {
    title: 'DevSecOps',
    points: ['Pipeline security controls', 'Policy as code', 'Compliance automation'],
  },
  {
    title: 'Cloud Modernization',
    points: ['Cloud migration roadmaps', 'Landing zones', 'Cost and performance optimization'],
  },
  {
    title: 'SRE & Observability',
    points: ['SLO frameworks', 'Monitoring and tracing', 'Incident readiness'],
  },
];

const caseSnippets = [
  'Reduced deployment lead time by 65% for a multi-region retail platform.',
  'Improved reliability by 40% for a financial services core application.',
  'Cut infra provisioning time from weeks to hours using IaC standards.',
];

const Services = () => {
  return (
    <>
      <PageSeo
        title="Services | Fusionnex DevOps & Cloud Consulting"
        description="Explore Fusionnex services across platform engineering, DevSecOps, cloud modernization, and SRE."
        ogType="website"
      />

      <AnimatedSection className="bg-transparent py-24">
        <section className="min-h-screen py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col gap-10">
              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-10">
                <h1 className="text-4xl font-bold text-white md:text-5xl">Services Overview</h1>
                <p className="mt-4 max-w-3xl text-slate-300 leading-8">
                  We help enterprises design, build, and operate cloud-native delivery platforms with security,
                  resilience, and speed at the center.
                </p>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-3 font-semibold text-white"
                >
                  Discuss Your Program
                </Link>
              </section>

              <section className="grid gap-6 md:grid-cols-2">
                {serviceGroups.map((service) => (
                  <article key={service.title} className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </section>

              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <h2 className="text-3xl font-semibold text-white">Selected Case Studies</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {caseSnippets.map((item) => (
                    <div key={item} className="rounded-xl bg-white/10 border border-white/10 p-4 text-slate-300">
                      {item}
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

export default Services;
