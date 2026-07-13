'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';
import Image from 'next/image';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });

    // Reset success message after 4 seconds
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-lg border border-[#e5e7eb] bg-white text-[#1a1a2e] placeholder-[#9ca3af] text-sm outline-none transition-all duration-300 focus:border-[#e4252e] focus:ring-2 focus:ring-[#e4252e]/20';

  return (
    <section id="contact" className="bg-[#f8f9fa] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left Side: Form ── */}
          <div>
            <span className="section-label">GET A QUOTE</span>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mt-4 mb-3 leading-tight">
              Let&apos;s Power Your{' '}
              <span className="text-[#e4252e]">Next Project</span>
            </h2>

            <p className="text-[#6b7280] text-base mb-8 max-w-lg">
              Tell us your requirement and we&apos;ll get back to you.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm font-medium animate-fade-in-up">
                ✓ Thank you! Your quote request has been submitted
                successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row: Name | Email | Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={inputClasses}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className={inputClasses}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={inputClasses}
                />
              </div>

              {/* Company Name */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className={inputClasses}
              />

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={5}
                required
                className={`${inputClasses} resize-none`}
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Get a Free Quote
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ── Right Side: Image / Gradient ── */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[540px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Gradient overlay fallback */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#343993] via-[#252a77] to-[#e4252e]/80 z-0" />

              {/* Image */}
              <Image
                src="/contact-bg.png"
                alt="Industrial electrical project"
                fill
                className="object-cover z-10"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Overlay on top of image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#343993]/70 via-transparent to-transparent z-20" />

              {/* Floating info card */}
              <div className="absolute bottom-6 left-6 right-6 z-30 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#e4252e] flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      24/7 Support Available
                    </p>
                    <p className="text-white/70 text-xs">
                      Our team responds within 2 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
