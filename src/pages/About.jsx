import { Link } from 'react-router-dom';
import PageSeo from '../components/PageSeo';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  return (
    <AnimatedSection className="flex min-h-screen items-center bg-transparent px-6 py-24">
      <PageSeo
        title="About Fusionnex | Enterprise Cloud & DevOps Partner"
        description="Learn about Fusionnex Innovations India Pvt Ltd and how our teams deliver enterprise cloud and DevOps transformation with measurable impact."
        ogType="website"
      />
      <div className="mx-auto w-full max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
        <h1 className="text-4xl font-bold text-white md:text-5xl">About Fusionnex</h1>
        <p className="mt-5 leading-8 text-slate-300">
          Fusionnex Innovations India Pvt Ltd is a technology consulting partner helping enterprises modernize
          operations and deliver digital products with confidence.
        </p>
        <p className="mt-4 leading-8 text-slate-300">
          We blend strategy, engineering excellence, and governance to build secure, scalable systems that
          support long-term growth.
        </p>
        <Link
          to="/contact"
          className="mt-7 inline-flex rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:scale-[1.02]"
        >
          Talk to Our Team
        </Link>
      </div>
    </AnimatedSection>
  );
};

export default About;
