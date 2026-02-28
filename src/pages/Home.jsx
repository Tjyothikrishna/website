import PageSeo from '../components/PageSeo';
import AnimatedSection from '../components/AnimatedSection';

const pillars = [
  'AI-augmented delivery pipelines with enterprise controls',
  'Cloud-native platform engineering with SRE reliability',
  'Security, compliance, and governance embedded by design',
];

const Home = () => {
  return (
    <>
      <PageSeo
        title="Fusionnex | Cloud & DevOps Engineering for Enterprises"
        description="Fusionnex delivers scalable cloud and DevOps platforms with CI/CD automation, Kubernetes, IaC, DevSecOps, and SRE excellence."
        ogType="website"
      />

      <AnimatedSection className="flex min-h-screen items-center bg-transparent px-6 py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-slate-300 backdrop-blur-xl">
              Premium Cloud & DevOps Transformation
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Futuristic Platform Engineering for High-Growth Enterprises
            </h1>
            <p className="text-lg text-slate-300">
              We help ambitious teams modernize delivery with resilient cloud platforms, secure CI/CD,
              and automation-first operations built for speed.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20">
                Start a Transformation
              </a>
              <a href="/services" className="rounded-2xl border border-white/20 bg-transparent px-6 py-3 font-semibold text-slate-300 transition hover:text-white">
                Explore Services
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white">Why leading teams choose Fusionnex</h2>
            <ul className="mt-5 space-y-3 text-slate-300">
              {pillars.map((pillar) => (
                <li key={pillar}>✦ {pillar}</li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Home;
