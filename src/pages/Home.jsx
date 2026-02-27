import ServicesSection from '../components/Services';
import AboutSection from '../components/About';
import ContactSection from '../components/Contact';
import PageSeo from '../components/PageSeo';

const Home = () => {
  return (
    <>
      <PageSeo
        title="Fusionnex | Cloud & DevOps Engineering for Enterprises"
        description="Fusionnex delivers scalable cloud and DevOps platforms with CI/CD automation, Kubernetes, IaC, DevSecOps, and SRE excellence."
        ogType="website"
      />
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
      <ServicesSection />
      <AboutSection />
      <ContactSection />

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 md:py-20">
        <div className="pointer-events-none absolute -right-20 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-red-500/30 blur-3xl" />
        <div className="pointer-events-none absolute left-10 top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Ready to Modernize Your Cloud &amp; DevOps Strategy?
          </h2>
          <p className="mt-5 max-w-3xl text-base text-blue-100 md:text-lg">
            Partner with Fusionnex to accelerate digital transformation, automate infrastructure, and
            build scalable cloud-native platforms.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-white px-7 py-3 text-sm font-semibold text-blue-900 shadow transition duration-300 hover:-translate-y-0.5 hover:bg-blue-100"
            >
              Talk to a DevOps Expert
            </a>
            <a
              href="#contact"
              className="rounded-md border border-white/60 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
