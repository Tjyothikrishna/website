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
        <h1 className="text-4xl font-bold text-white md:text-5xl">Careers</h1>
        <p className="mt-4 text-slate-300">
          Join engineers, consultants, and builders shaping premium cloud platforms for enterprise scale.
        </p>
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <h2 className="text-xl font-semibold text-white">Current Focus Roles</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
            <li>DevOps Engineer</li>
            <li>Cloud Platform Architect</li>
            <li>QA Automation Lead</li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Careers;
