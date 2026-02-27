const industries = ['Banking & Financial Services', 'Healthcare & Life Sciences', 'Retail & E-Commerce', 'Manufacturing & Logistics'];

const Industries = () => {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-slate-900">Industries</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Our domain-led teams understand regulatory, operational, and technology demands across critical
          industries.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {industries.map((industry) => (
            <div key={industry} className="rounded-lg border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
