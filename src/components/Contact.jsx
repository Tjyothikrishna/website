// Contact section includes responsive input fields and call-to-action.
const Contact = () => {
  return (
    <section id="contact" className="bg-slate-900 py-20 text-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Tell us about your goals and we will prepare a tailored strategy for your business.
        </p>

        <form className="mt-8 grid gap-4 md:grid-cols-2" aria-label="Contact form">
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 focus:border-brand-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 focus:border-brand-500 focus:outline-none"
          />
          <textarea
            placeholder="How can we help?"
            rows="5"
            className="rounded-md border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 focus:border-brand-500 focus:outline-none md:col-span-2"
          />
          <button
            type="submit"
            className="w-fit rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
