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
    <AnimatedSection className="bg-transparent px-6 py-24">
      <PageSeo
        title="Services | Fusionnex Cloud & DevOps Consulting"
        description="Explore Fusionnex cloud and DevOps consulting services across CI/CD engineering, cloud migration, IaC, Kubernetes, DevSecOps, and SRE."
        ogType="website"
      />
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Services</h1>
          <p className="mt-4 text-slate-300">
            End-to-end modernization programs designed for reliability, security, and accelerated delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Services;
