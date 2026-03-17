import { Link } from 'react-router-dom';
import PageSeo from '../components/PageSeo';
import AnimatedSection from '../components/AnimatedSection';

const openings = [
  'Senior DevOps Engineer',
  'Cloud Platform Architect',
  'Site Reliability Engineer',
  'Frontend Engineer (React)',
  'Customer Success Consultant',
  'Technical Program Manager',
];

const values = ['Continuous learning', 'Ownership mindset', 'Transparent communication', 'Customer-first delivery'];

const Careers = () => {
  return (
    <>
      <PageSeo
        title="Careers | Join Fusionnex"
        description="Explore opportunities at Fusionnex and build the future of enterprise cloud and DevOps platforms."
        ogType="website"
      />

      <AnimatedSection className="bg-transparent py-24">
        <section className="min-h-screen py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col gap-10">
              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-10">
                <h1 className="text-4xl font-bold text-white md:text-5xl">Careers at Fusionnex</h1>
                <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                  Work with teams solving real enterprise challenges in cloud, DevOps, platform engineering, and AI-enabled operations.
                </p>
              </section>

              <section className="grid gap-6 md:grid-cols-2">
                <article className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                  <h2 className="text-2xl font-semibold text-white">Open Roles</h2>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                    {openings.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </ul>
                </article>

                <article className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                  <h2 className="text-2xl font-semibold text-white">Culture & Values</h2>
                  <ul className="mt-4 space-y-2 text-slate-300">
                    {values.map((value) => (
                      <li key={value}>• {value}</li>
                    ))}
                  </ul>
                </article>
              </section>

              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white">Build Your Career Journey</h2>
                <p className="mt-3 text-slate-300">
                  From onboarding and mentorship to leadership tracks, we invest in your growth at every stage.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-3 font-semibold text-white"
                >
                  Apply via Contact
                </Link>
              </section>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default Careers;
