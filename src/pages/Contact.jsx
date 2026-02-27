const Contact = () => {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <h1 className="text-4xl font-bold text-slate-900">Contact</h1>
        <p className="mt-4 text-slate-600">
          Speak with our team to discuss your transformation goals, delivery priorities, and growth roadmap.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">Business Enquiries</h2>
            <p className="mt-2 text-slate-600">contact@fusionnex.example</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">Office</h2>
            <p className="mt-2 text-slate-600">Bengaluru, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
