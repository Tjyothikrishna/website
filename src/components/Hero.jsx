// Hero section introduces the company with clear value proposition and CTA.
const Hero = () => {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
      <div>
        <p className="mb-4 inline-block rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
          Trusted by fast-growing businesses
        </p>
        <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          Modern solutions for ambitious companies.
        </h1>
        <p className="mt-6 text-lg text-slate-600">
          We help businesses streamline operations, grow revenue, and build digital experiences that
          customers love.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#services"
            className="rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-brand-700"
          >
            Explore Services
          </a>
          <a
            href="#about"
            className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="rounded-2xl bg-slate-100 p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Why companies choose us</h2>
        <ul className="mt-5 space-y-3 text-slate-600">
          <li>✔ Data-driven strategy and measurable outcomes</li>
          <li>✔ Experienced team focused on quality delivery</li>
          <li>✔ Scalable systems designed for long-term growth</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
