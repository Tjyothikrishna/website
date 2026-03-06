import { useState } from 'react';
import PageSeo from '../components/PageSeo';
import AnimatedSection from '../components/AnimatedSection';

const initialFormState = {
  fullName: '',
  email: '',
  companyName: '',
  phoneNumber: '',
  message: '',
};

const clientList = ['Northstar Retail', 'Apex Finserv', 'Helios Health', 'Nova Mobility'];
const testimonials = [
  'Their consulting team aligned quickly with our internal engineering and security standards.',
  'Fusionnex gave us a practical roadmap and flawless implementation support.',
];

const emailjs = {
  send: async (serviceId, templateId, templateParams, publicKey) => {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email.');
    }

    return response;
  },
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState('');
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const nextErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) nextErrors.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) nextErrors.message = 'Message is required.';

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setSubmitSuccess('');
    setSubmitError('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitSuccess('');
      setSubmitError('');
      return;
    }

    setErrors({});
    setSubmitSuccess('');
    setSubmitError('');
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setIsSubmitting(false);
      setSubmitError('Email configuration is missing. Please set EmailJS environment variables.');
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          full_name: formData.fullName,
          email: formData.email,
          company_name: formData.companyName,
          phone_number: formData.phoneNumber,
          message: formData.message,
        },
        publicKey
      );

      setSubmitSuccess('Thank you! Your message has been submitted successfully.');
      setFormData(initialFormState);
    } catch {
      setSubmitError('Unable to send your message right now. Please try again shortly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageSeo
        title="Contact Fusionnex | Enterprise DevOps Consulting"
        description="Connect with Fusionnex for cloud platform modernization, DevOps transformation, and enterprise delivery excellence."
        ogType="website"
      />

      <AnimatedSection className="bg-transparent py-24">
        <section className="min-h-screen py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col gap-10">
              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-10">
                <h1 className="text-4xl font-bold text-white md:text-5xl">Contact Fusionnex</h1>
                <p className="mt-4 max-w-3xl text-slate-300 leading-8">
                  Let&apos;s discuss your platform goals, delivery constraints, and transformation roadmap.
                </p>
              </section>

              <section className="grid gap-6 lg:grid-cols-2">
                {testimonials.map((quote) => (
                  <article key={quote} className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                    <p className="text-slate-300">“{quote}”</p>
                  </article>
                ))}
              </section>

              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white">Global Clients</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {clientList.map((client) => (
                    <div key={client} className="rounded-xl border border-white/10 bg-white/10 p-4 text-center text-slate-300">
                      {client}
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                  <h2 className="text-3xl font-bold text-white">Let&apos;s Build Your Next Platform</h2>
                  <p className="mt-5 text-slate-300 leading-8">
                    Connect with our cloud and DevOps experts for architecture, platform engineering, and reliability strategy.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-5">
                      <h3 className="text-base font-semibold text-white">Business Enquiries</h3>
                      <p className="mt-2 text-slate-300">contact@fusionnex.com</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-5">
                      <h3 className="text-base font-semibold text-white">Regional Office</h3>
                      <p className="mt-2 text-slate-300">Bengaluru, India</p>
                    </div>
                  </div>
                </section>

                <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-7 md:p-8">
                  <h2 className="text-2xl font-semibold text-white">Contact Form</h2>
                  <p className="mt-2 text-sm text-slate-300 md:text-base">
                    Share your requirements and our team will get back to you shortly.
                  </p>

                  {submitSuccess && (
                    <div className="mt-5 rounded-lg border border-emerald-300/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                      {submitSuccess}
                    </div>
                  )}

                  {submitError && (
                    <div className="mt-5 rounded-lg border border-red-300/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                      {submitError}
                    </div>
                  )}

                  <form className="mt-6 space-y-5" noValidate onSubmit={handleSubmit}>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-white" htmlFor="fullName">
                        Full Name <span className="text-red-300">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-white/40"
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && <p className="mt-2 text-xs text-red-300">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white" htmlFor="email">
                        Email <span className="text-red-300">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-white/40"
                        placeholder="name@company.com"
                      />
                      {errors.email && <p className="mt-2 text-xs text-red-300">{errors.email}</p>}
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-white" htmlFor="companyName">
                          Company Name
                        </label>
                        <input
                          id="companyName"
                          name="companyName"
                          type="text"
                          value={formData.companyName}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-white/40"
                          placeholder="Company"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-white" htmlFor="phoneNumber">
                          Phone Number
                        </label>
                        <input
                          id="phoneNumber"
                          name="phoneNumber"
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-white/40"
                          placeholder="+91-XXXXXXXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white" htmlFor="message">
                        Message <span className="text-red-300">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-white/40"
                        placeholder="Tell us about your cloud and DevOps goals"
                      />
                      {errors.message && <p className="mt-2 text-xs text-red-300">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex min-w-44 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                    </button>
                  </form>
                </section>
              </div>

              <section className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-8">
                <h2 className="text-3xl font-semibold text-white">Office Location</h2>
                <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
                  <iframe
                    title="Fusionnex Office Location"
                    src="https://maps.google.com/maps?q=Bengaluru%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                    className="h-[400px] w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </section>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default Contact;
