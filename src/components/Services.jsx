// Services section displays three core offerings in responsive cards.
const Services = () => {
  const serviceItems = [
    {
      title: 'Digital Transformation',
      description: 'Modernize workflows and systems to improve efficiency and customer experience.',
    },
    {
      title: 'Product Engineering',
      description: 'Build secure, scalable digital products tailored to your market and goals.',
    },
    {
      title: 'Growth Strategy',
      description: 'Use analytics and strategic planning to unlock sustainable business growth.',
    },
  ];

  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          We combine strategy, technology, and design to deliver practical business outcomes.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((service) => (
            <article key={service.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
