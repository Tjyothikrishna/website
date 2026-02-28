import { Link } from 'react-router-dom';
import PageSeo from '../components/PageSeo';
import AnimatedSection from '../components/AnimatedSection';

const serviceGroups = [
  {
    title: 'CI/CD Pipeline Engineering',
    capabilities: [
      'Pipeline architecture for multi-environment delivery',
      'Automated build, test, and release workflows',
      'Policy-based approvals and rollback strategies',
    ],
  },
  {
    title: 'Cloud Architecture & Migration',
    capabilities: [
      'Cloud readiness and migration planning',
      'Landing zones, networking, and IAM blueprints',
      'Resilience and cost optimization governance',
    ],
  },
  {
    title: 'Infrastructure as Code',
    capabilities: [
      'Terraform module systems and standards',
      'Automated provisioning with compliance controls',
      'Drift detection and lifecycle governance',
    ],
  },
  {
    title: 'Kubernetes & Containerization',
    capabilities: [
      'Container platform strategy and hardening',
      'Cluster architecture and workload reliability',
      'Traffic, scaling, and operational guardrails',
    ],
  },
  {
    title: 'DevSecOps Implementation',
    capabilities: [
      'Secure SDLC and threat-informed controls',
      'SAST, dependency, and container scanning',
      'Policy-as-code for enterprise compliance',
    ],
  },
  {
    title: 'Monitoring & SRE',
    capabilities: [
      'Unified metrics, logs, and tracing',
      'SLO-driven alerting and reliability programs',
      'Incident workflows and on-call maturity',
    ],
  },
];

const Services = () => {
  return (
    <AnimatedSection className="min-h-screen bg-transparent px-6 py-24">
      <PageSeo
        title="Services | Fusionnex Cloud & DevOps Consulting"
        description="Explore Fusionnex cloud and DevOps consulting services across CI/CD engineering, cloud migration, IaC, Kubernetes, DevSecOps, and SRE."
        ogType="website"
      />
      <div className="mx-auto w-full max-w-6xl space-y-14">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Premium Cloud & DevOps Services</h1>
          <p className="mt-4 max-w-3xl text-slate-300 md:text-lg">
            End-to-end modernization programs designed for reliability, security, and accelerated delivery
            across enterprise engineering teams.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:scale-[1.02]"
          >
            Discuss Your Program
          </Link>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-xl font-semibold text-white">{group.title}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                {group.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </AnimatedSection>
  );
};

export default Services;
