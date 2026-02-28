import { Link } from 'react-router-dom';
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
          <div className="space-y-7">
            <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-xl">
              Fusionnex Premium Layout System
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Build Futuristic Cloud Platforms with Enterprise Reliability
            </h1>
            <p className="text-lg leading-8 text-slate-300">
              We design secure, scalable, and automation-first DevOps ecosystems that accelerate releases,
              strengthen governance, and unlock measurable business velocity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:scale-[1.02]"
              >
                Start a Transformation
              </Link>
              <Link
                to="/services"
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-semibold text-white">What drives premium outcomes</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              {pillars.map((pillar) => (
                <li key={pillar} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  ✦ {pillar}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Home;
