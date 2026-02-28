import { Link } from 'react-router-dom';
import PageSeo from '../components/PageSeo';
import AnimatedSection from '../components/AnimatedSection';

const Careers = () => {
  return (
    <AnimatedSection className="flex min-h-screen items-center bg-transparent px-6 py-24">
      <PageSeo
        title="Careers | Join Fusionnex Cloud & DevOps Team"
        description="Explore career opportunities at Fusionnex and join experts building modern cloud-native and DevOps-driven enterprise platforms."
        ogType="website"
      />
      <div className="mx-auto w-full max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Careers at Fusionnex</h1>
        <p className="mt-4 leading-8 text-slate-300">
          Join engineers, consultants, and innovators shaping premium cloud and DevOps platforms for
          modern enterprises.
        </p>
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="text-xl font-semibold text-white">Current Focus Roles</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
            <li>DevOps Engineer</li>
            <li>Cloud Platform Architect</li>
            <li>QA Automation Lead</li>
          </ul>
        </div>
        <Link
          to="/contact"
          className="mt-7 inline-flex rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:scale-[1.02]"
        >
          Apply via Contact
        </Link>
      </div>
    </AnimatedSection>
  );
};

export default Careers;
