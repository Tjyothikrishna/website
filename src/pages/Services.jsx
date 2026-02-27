import PageSeo from '../components/PageSeo';
import AnimatedSection from '../components/AnimatedSection';
const serviceGroups = [
  {
    title: 'CI/CD Pipeline Engineering',
    overview: [
      'We design and implement robust CI/CD architectures that streamline software delivery from code commit to production. Our approach standardizes branching, testing, release governance, and promotion workflows to reduce deployment risk and improve speed.',
      'Teams gain production-ready delivery pipelines integrated with quality gates, security checks, and release observability. This creates repeatable deployment patterns that support both rapid feature delivery and strict enterprise compliance requirements.',
    ],
    capabilities: [
      'Pipeline architecture design for multi-environment delivery',
      'Automated build, test, and release orchestration',
      'Quality gates with policy-driven approvals and rollback flows',
      'Developer experience optimization with faster feedback loops',
    ],
    impact:
      'Business impact: Faster release cycles, reduced deployment failures, and improved engineering productivity across product teams.',
  },
  {
    title: 'Cloud Architecture & Migration',
    overview: [
      'We help enterprises modernize legacy environments with secure, scalable cloud architectures aligned to business goals. Our consultants assess current workloads, identify migration pathways, and define target-state operating models for long-term growth.',
      'From landing zone setup to phased migration execution, we focus on resilience, governance, and performance. Each migration plan balances speed with operational continuity to minimize disruption during transformation.',
    ],
    capabilities: [
      'Cloud readiness assessments and migration roadmap planning',
      'Landing zone, networking, and identity architecture',
      'Workload rehosting, replatforming, and modernization strategies',
      'Cost governance, resilience, and performance optimization',
    ],
    impact:
      'Business impact: Accelerated cloud adoption, higher platform scalability, and stronger operational reliability for mission-critical workloads.',
  },
  {
    title: 'Infrastructure as Code',
    overview: [
      'We implement Infrastructure as Code practices that convert manual provisioning into version-controlled, repeatable automation. Using enterprise patterns, we establish reusable modules and templates for secure infrastructure deployment at scale.',
      'IaC delivery is integrated into change workflows and CI/CD to improve traceability and control. This reduces configuration drift and ensures infrastructure consistency across development, staging, and production environments.',
    ],
    capabilities: [
      'Terraform module frameworks and repository structuring',
      'Automated provisioning with policy and compliance controls',
      'Environment standardization and drift detection workflows',
      'Audit-ready change management and infrastructure lifecycle governance',
    ],
    impact:
      'Business impact: Greater infrastructure consistency, lower operational risk, and faster environment provisioning for new initiatives.',
  },
  {
    title: 'Kubernetes & Containerization',
    overview: [
      'We design cloud-native container platforms that support high-availability application delivery. Our Kubernetes implementations focus on security, scalability, and maintainability so teams can operate confidently in production.',
      'From application containerization to cluster operations, we establish best practices for release management, traffic control, and workload reliability. This enables organizations to deploy faster while maintaining stable service performance.',
    ],
    capabilities: [
      'Container strategy and image lifecycle management',
      'Kubernetes cluster architecture and workload deployment standards',
      'Ingress, service mesh, and scaling configuration patterns',
      'Operational guardrails for reliability, security, and governance',
    ],
    impact:
      'Business impact: Improved platform portability, better system resilience, and higher deployment velocity for modern applications.',
  },
  {
    title: 'DevSecOps Implementation',
    overview: [
      'We embed security into the software delivery lifecycle so governance becomes a built-in capability rather than a late-stage gate. Our DevSecOps programs align application security, platform controls, and compliance requirements with engineering velocity.',
      'Security controls are integrated into CI/CD workflows with automated scanning, policy enforcement, and remediation practices. This reduces vulnerabilities early and strengthens software assurance without slowing delivery.',
    ],
    capabilities: [
      'Secure SDLC integration and threat-informed pipeline controls',
      'Static, dependency, and container security scanning automation',
      'Policy-as-code implementation for compliance enforcement',
      'Security observability and remediation workflow orchestration',
    ],
    impact:
      'Business impact: Reduced security exposure, faster compliance readiness, and stronger confidence in production releases.',
  },
  {
    title: 'Monitoring & SRE',
    overview: [
      'We implement observability and Site Reliability Engineering practices that improve service health, uptime, and incident response. Our teams build telemetry foundations that provide real-time insights into application and infrastructure behavior.',
      'SRE operating models are tailored to enterprise priorities with SLO definitions, alert strategy optimization, and reliability runbooks. This creates a proactive operational posture that supports consistent customer experience.',
    ],
    capabilities: [
      'Unified metrics, logging, and tracing architecture',
      'SLO/SLI framework design and alert tuning',
      'Incident management workflows and on-call enablement',
      'Capacity planning and reliability engineering governance',
    ],
    impact:
      'Business impact: Increased service availability, reduced mean time to resolution, and stronger operational performance at scale.',
  },
];

const Services = () => {
  return (
    <AnimatedSection className="bg-slate-50 py-20">
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
    </AnimatedSection>
  );
};

export default Services;
