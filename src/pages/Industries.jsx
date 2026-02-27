import PageSeo from '../components/PageSeo';
import AnimatedSection from '../components/AnimatedSection';
const industrySolutions = [
  {
    title: 'Financial Services',
    challenges:
      'Financial institutions operate under strict regulatory controls while managing high transaction volumes and legacy core systems. Teams must deliver secure releases faster without compromising governance, resiliency, or auditability.',
    solutions:
      'We implement compliant CI/CD pipelines, policy-as-code controls, encrypted cloud landing zones, and resilient Kubernetes platforms to modernize digital banking workloads with controlled change management.',
    outcomes: [
      'Faster and more predictable release cycles for critical banking applications',
      'Improved compliance posture with traceable infrastructure and deployment controls',
      'Higher platform availability and reduced operational risk across payment systems',
    ],
  },
  {
    title: 'Healthcare & Life Sciences',
    challenges:
      'Healthcare and life sciences organizations must protect sensitive patient and research data while scaling digital services across distributed environments. Regulatory demands and uptime expectations require robust, secure engineering operations.',
    solutions:
      'Our teams design HIPAA-aware cloud architectures, automate infrastructure provisioning, and build DevSecOps workflows with continuous compliance checks, observability, and incident readiness.',
    outcomes: [
      'Strengthened data security and governance for regulated workloads',
      'Reduced deployment risk through standardized automation and validation gates',
      'Greater service reliability for patient-facing and research-critical systems',
    ],
  },
  {
    title: 'Retail & E-Commerce',
    challenges:
      'Retail businesses face seasonal demand spikes, omnichannel complexity, and intense pressure for seamless digital experiences. Legacy deployment processes and fragmented infrastructure can limit agility during peak revenue windows.',
    solutions:
      'We deliver cloud-native commerce platforms with auto-scaling, performance-focused CI/CD, container orchestration, and real-time observability to maintain checkout reliability and rapid feature rollout.',
    outcomes: [
      'Consistent platform performance during high-traffic sales events',
      'Faster feature delivery for promotions, personalization, and customer journeys',
      'Lower cloud waste through right-sized infrastructure and operational automation',
    ],
  },
  {
    title: 'SaaS & Technology',
    challenges:
      'SaaS companies need to ship quickly while maintaining uptime, multi-tenant security, and engineering quality at scale. Growing product portfolios often expose bottlenecks in release workflows, platform governance, and reliability operations.',
    solutions:
      'We establish scalable DevOps operating models with trunk-based delivery, automated quality/security gates, Kubernetes-based runtime platforms, and SRE frameworks centered on SLO-driven reliability.',
    outcomes: [
      'Accelerated release velocity without sacrificing platform stability',
      'Improved developer productivity through standardized platform tooling',
      'Higher customer trust through stronger uptime and incident response performance',
    ],
  },
  {
    title: 'Enterprise & Manufacturing',
    challenges:
      'Enterprise and manufacturing organizations manage complex hybrid environments, legacy integrations, and globally distributed operations. Modernization efforts must align IT reliability with plant, supply chain, and business continuity requirements.',
    solutions:
      'We architect hybrid-cloud foundations, automate infrastructure lifecycle management, and implement monitoring-driven operations to unify IT and operational systems under a reliable, secure DevOps model.',
    outcomes: [
      'Improved operational continuity across enterprise and plant-level systems',
      'Greater infrastructure consistency and reduced manual dependency on legacy processes',
      'Enhanced decision-making with proactive monitoring and performance visibility',
    ],
  },
];

const Industries = () => {
  return (
    <main className="bg-slate-50">
      <PageSeo
        title="Industries | Fusionnex Industry-Focused Cloud & DevOps Solutions"
        description="Discover Fusionnex industry-specific cloud and DevOps solutions for financial services, healthcare, retail, SaaS, and manufacturing enterprises."
        ogType="website"
      />
      <AnimatedSection className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-20 text-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm font-medium">
            Enterprise Industry Solutions
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            Industry-Focused Cloud &amp; DevOps Solutions
          </h1>
          <p className="mt-6 max-w-3xl text-base text-blue-100 md:text-lg">
            Fusionnex delivers domain-aligned cloud and DevOps transformation services that solve
            industry-specific operational, compliance, and scalability challenges.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="space-y-8">
            {industrySolutions.map((industry) => (
              <article key={industry.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
                <h2 className="text-2xl font-semibold text-blue-900 md:text-3xl">{industry.title}</h2>

                <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Key Challenges</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">{industry.challenges}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                        DevOps &amp; Cloud Solutions
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">{industry.solutions}</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-900">
                      Business Impact Outcomes
                    </h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700 md:text-base">
                      {industry.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
};

export default Industries;
