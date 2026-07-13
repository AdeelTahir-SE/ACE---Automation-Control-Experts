'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const trustBadges = [
  {
    title: 'Expert Engineers',
    subtitle: 'Experienced Team',
  },
  {
    title: 'Quality Assured',
    subtitle: 'High Standards',
  },
  {
    title: 'On-Time Delivery',
    subtitle: 'Commitment',
  },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #fff5eb 50%, #f8f9fa 100%)',
      }}
    >
      {/* Subtle decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#F57C00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0D1B2A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-700 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold leading-tight text-[#0D1B2A]">
                Smart Electrical{' '}
                <span className="text-[#F57C00]">Solutions</span> for a{' '}
                <span className="text-[#F57C00]">Better Tomorrow</span>
              </h1>
              <p className="text-base sm:text-lg text-[#6b7280] leading-relaxed max-w-xl">
                We provide end-to-end electrical system design, planning, execution
                and manufacturing of HT &amp; LT panels for industries of every scale.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center px-7 py-3.5 bg-[#F57C00] text-white font-semibold rounded-lg hover:bg-[#E65100] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Our Services
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 border-2 border-[#0D1B2A] text-[#0D1B2A] font-semibold rounded-lg hover:bg-[#0D1B2A] hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                Get a Quote
              </a>
            </div>

            {/* Trust Badges */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 transition-all duration-700 delay-300 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-100"
                >
                  {/* Checkmark Icon */}
                  <div className="flex-shrink-0 w-8 h-8 bg-[#F57C00]/10 rounded-full flex items-center justify-center mt-0.5">
                    <svg
                      className="w-4 h-4 text-[#F57C00]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0D1B2A]">{badge.title}</p>
                    <p className="text-xs text-[#6b7280]">{badge.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Hero Image */}
          <div
            className={`relative flex justify-center lg:justify-end transition-all duration-700 delay-200 ease-out ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Decorative background shape behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#F57C00]/10 to-[#0D1B2A]/10 rounded-3xl blur-sm -z-10" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-panels.png"
                  alt="Industrial electrical panels and solutions by ElectroTech"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Floating accent element */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#F57C00] rounded-2xl opacity-20 -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#0D1B2A] rounded-full opacity-10 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
