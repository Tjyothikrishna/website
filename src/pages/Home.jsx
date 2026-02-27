import ServicesSection from '../components/Services';
import AboutSection from '../components/About';
import ContactSection from '../components/Contact';

const Home = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 bg-[length:200%_200%] animate-[gradientShift_10s_ease_infinite]">
        <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-red-600 opacity-20 blur-3xl animate-pulse" />

        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white">
              Trusted by fast-growing businesses
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Engineering Scalable Cloud &amp; DevOps Platforms for Modern Enterprises
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              We deliver CI/CD automation, Infrastructure as Code, Kubernetes enablement, DevSecOps
              practices, and SRE-driven reliability to accelerate secure, resilient growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow transition hover:bg-blue-100"
              >
                Talk to an Expert
              </a>
              <a
                href="#services"
                className="rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white">Why companies choose us</h2>
            <ul className="mt-5 space-y-3 text-blue-100">
              <li>✔ Data-driven strategy and measurable outcomes</li>
              <li>✔ Experienced team focused on quality delivery</li>
              <li>✔ Scalable systems designed for long-term growth</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Core DevOps &amp; Cloud Engineering Services
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Enterprise-focused delivery designed to accelerate software velocity, improve reliability,
              and strengthen security across cloud-native platforms.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">CI/CD Pipeline Automation</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Build resilient delivery pipelines that automate testing, releases, and rollback workflows
                for faster, low-risk deployments.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">Cloud Architecture &amp; Migration</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Design scalable cloud foundations and execute phased migrations to modern platforms with
                minimal operational disruption.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">Infrastructure as Code (Terraform)</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Standardize and provision infrastructure through reusable Terraform modules that improve
                consistency, governance, and speed.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">Kubernetes &amp; Containerization</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Containerize workloads and implement Kubernetes operating models that support elasticity,
                portability, and high availability.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">DevSecOps Implementation</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Embed security controls into development pipelines with policy automation, continuous
                scanning, and compliance-ready practices.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900">Monitoring &amp; Observability Engineering</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Implement observability stacks with actionable telemetry, alerting, and SLO reporting to
                drive proactive incident response.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Cloud &amp; DevOps Technology Stack
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              We use proven cloud-native technologies and automation tooling to deliver secure,
              scalable, and production-ready engineering platforms.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-blue-900">Cloud Platforms</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>AWS</li>
                <li>Microsoft Azure</li>
                <li>Google Cloud Platform</li>
              </ul>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-blue-900">DevOps &amp; CI/CD</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Jenkins</li>
                <li>GitHub Actions</li>
                <li>GitLab CI</li>
              </ul>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-blue-900">Container &amp; Orchestration</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Helm</li>
              </ul>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-blue-900">Infrastructure as Code</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Terraform</li>
                <li>Ansible</li>
                <li>CloudFormation</li>
              </ul>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-blue-900">Monitoring &amp; Observability</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Prometheus</li>
                <li>Grafana</li>
                <li>ELK Stack</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Driving Measurable Cloud &amp; DevOps Outcomes
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              We align platform engineering initiatives to measurable business outcomes with performance,
              resiliency, efficiency, and reliability at enterprise scale.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-extrabold leading-tight text-blue-900 md:text-4xl">60%</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">Faster Deployment Cycles</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Accelerated CI/CD pipelines improving release velocity and reducing manual overhead.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-extrabold leading-tight text-blue-900 md:text-4xl">99.99%</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">High-Availability Architecture</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Designed resilient cloud-native systems with fault tolerance and auto-scaling.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-extrabold leading-tight text-blue-900 md:text-4xl">40%</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">Infrastructure Cost Optimization</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Optimized cloud spend through right-sizing, automation, and infrastructure audits.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-3xl font-extrabold leading-tight text-blue-900 md:text-4xl">24/7</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">Reliability &amp; Monitoring Support</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Continuous observability, alerting, and incident response engineering.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Enterprise DevOps Success Stories
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Proven transformation outcomes from enterprise engagements across regulated and
              high-growth digital platforms.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-900">
                Financial SaaS Platform DevOps Transformation
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
                <p>
                  <span className="font-semibold text-slate-900">Challenge:</span> Frequent deployment
                  failures and manual infrastructure management.
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Solution:</span> Implemented CI/CD
                  automation, Terraform-based infrastructure as code, and Kubernetes deployment
                  pipelines.
                </p>
                <div>
                  <p className="font-semibold text-slate-900">Results:</p>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-slate-600">
                    <li>70% reduction in deployment errors</li>
                    <li>3x faster release cycles</li>
                    <li>Improved system reliability</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-900">
                E-commerce Cloud Migration &amp; Scalability Upgrade
              </h3>

              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
                <p>
                  <span className="font-semibold text-slate-900">Challenge:</span> Scalability issues
                  during peak traffic events.
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Solution:</span> Re-architected
                  infrastructure on AWS with auto-scaling, monitoring, and performance optimization.
                </p>
                <div>
                  <p className="font-semibold text-slate-900">Results:</p>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-slate-600">
                    <li>99.99% uptime</li>
                    <li>35% cost optimization</li>
                    <li>Zero downtime migration</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;
