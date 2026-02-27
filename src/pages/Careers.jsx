import PageSeo from '../components/PageSeo';
const Careers = () => {
  return (
    <section className="bg-slate-50 py-20">
      <PageSeo
        title="Careers | Join Fusionnex Cloud & DevOps Team"
        description="Explore career opportunities at Fusionnex and join experts building modern cloud-native and DevOps-driven enterprise platforms."
        ogType="website"
      />
            <div className="mx-auto w-full max-w-5xl px-6">
        <h1 className="text-4xl font-bold text-slate-900">Careers</h1>
        <p className="mt-4 text-slate-600">
          Join our team of engineers, consultants, and problem-solvers building impactful digital experiences.
        </p>
        <div className="mt-8 rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">Current Focus Roles</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
            <li>DevOps Engineer</li>
            <li>Cloud Platform Architect</li>
            <li>QA Automation Lead</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Careers;
