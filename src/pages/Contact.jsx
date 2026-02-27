import { useState } from 'react';
import PageSeo from '../components/PageSeo';

const initialFormState = {
  fullName: '',
  email: '',
  companyName: '',
  phoneNumber: '',
  message: '',
};


const emailjs = {
  send: async (serviceId, templateId, templateParams, publicKey) => {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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

    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required.';
    }

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

    const full_name = formData.fullName;
    const email = formData.email;
    const company_name = formData.companyName;
    const phone_number = formData.phoneNumber;
    const message = formData.message;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          full_name,
          email,
          company_name,
          phone_number,
          message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitSuccess('Thank you! Your message has been submitted successfully.');
      setFormData(initialFormState);
    } catch (error) {
      setSubmitError('Unable to send your message right now. Please try again shortly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-slate-50 py-20">
      <PageSeo
        title="Contact Fusionnex | Talk to Cloud & DevOps Experts"
        description="Contact Fusionnex to discuss cloud modernization, DevOps automation, platform reliability, and enterprise transformation initiatives."
        ogType="website"
      />
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <section>
            <p className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-900">
              Enterprise Contact
            </p>
            <h1 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">Let&apos;s Build Your Next Platform</h1>
            <p className="mt-5 max-w-xl text-slate-600 md:text-lg">
              Connect with our cloud and DevOps experts to discuss modernization priorities, platform
              strategy, and implementation roadmaps tailored to your business goals.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-base font-semibold text-slate-900">Business Enquiries</h2>
                <p className="mt-2 text-slate-600">contact@fusionnex.com</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-base font-semibold text-slate-900">Regional Office</h2>
                <p className="mt-2 text-slate-600">India</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-semibold text-blue-900">Contact Form</h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              Share your requirements and our team will get back to you shortly.
            </p>

            {submitSuccess && (
              <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                {submitSuccess}
              </div>
            )}

            {submitError && (
              <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {submitError}
              </div>
            )}

            <form className="mt-6 space-y-5" noValidate onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-800" htmlFor="fullName">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="mt-2 text-xs text-red-600">{errors.fullName}</p>}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-800" htmlFor="email">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="name@company.com"
                />
                {errors.email && <p className="mt-2 text-xs text-red-600">{errors.email}</p>}
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-800" htmlFor="companyName">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="Company"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-800" htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-800" htmlFor="message">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  placeholder="Tell us about your cloud and DevOps goals"
                />
                {errors.message && <p className="mt-2 text-xs text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-w-44 items-center justify-center rounded-md bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contact;
