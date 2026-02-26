// About section communicates mission and company credibility.
const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">About Us</h2>
          <p className="mt-4 text-slate-600">
            We are a forward-thinking team helping organizations build resilient operations and
            digital-first customer journeys.
          </p>
          <p className="mt-4 text-slate-600">
            From advisory to implementation, we partner closely with your leadership team to ensure
            long-term impact.
          </p>
        </div>

        <div className="rounded-2xl bg-brand-50 p-8">
          <h3 className="text-xl font-semibold text-brand-700">Our mission</h3>
          <p className="mt-3 text-slate-700">
            Empower companies with practical innovation, transparent collaboration, and measurable
            growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
