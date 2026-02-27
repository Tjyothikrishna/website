const services = [
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
    <main className="bg-slate-50">
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-20 text-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm font-medium">
            Enterprise DevOps Consulting Services
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            Cloud &amp; DevOps Services Built for Enterprise Scale
          </h1>
          <p className="mt-6 max-w-3xl text-base text-blue-100 md:text-lg">
            Fusionnex helps organizations modernize engineering platforms, automate cloud operations,
            and deliver secure, reliable digital products faster. Our consulting model combines strategy,
            implementation, and operational enablement for measurable business outcomes.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our Core Service Areas</h2>
            <p className="mt-4 text-slate-600 md:text-lg">
              Each engagement is structured to align technology transformation with operational
              excellence, security, and business performance.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-9"
              >
                <h3 className="text-2xl font-semibold text-blue-900">{service.title}</h3>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                  {service.overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                      Key Capabilities
                    </h4>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 md:text-base">
                      {service.capabilities.map((capability) => (
                        <li key={capability}>{capability}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-900">
                      Business Impact
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-slate-700 md:text-base">{service.impact}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
