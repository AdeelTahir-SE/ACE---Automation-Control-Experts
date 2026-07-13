"use client";

import React from "react";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const features: FeatureCard[] = [
  {
    title: "10+ Years of Experience",
    subtitle: "A decade of delivering reliable electrical solutions across industries.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "100+ Projects Completed",
    subtitle: "Successfully delivered projects of every scale and complexity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Skilled Engineers",
    subtitle: "A team of certified professionals committed to excellence.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Quality Materials",
    subtitle: "We use only certified, industry-grade materials and components.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "On-Time Delivery",
    subtitle: "Projects completed on schedule, every single time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    subtitle: "Round-the-clock assistance whenever you need us most.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728M15.536 8.464a5 5 0 010 7.072" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12h.01" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14.5V18a2 2 0 01-2 2H5a2 2 0 01-2-2v-1.5A1.5 1.5 0 014.5 15H6m0 0V9.5A1.5 1.5 0 017.5 8H8M16 14.5V18a2 2 0 002 2h1a2 2 0 002-2v-1.5a1.5 1.5 0 00-1.5-1.5H18m0 0V9.5A1.5 1.5 0 0016.5 8H16" />
      </svg>
    ),
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side */}
          <div className="lg:w-5/12 lg:sticky lg:top-24 lg:self-start">
            <span className="inline-block text-sm font-semibold tracking-[0.2em] text-[#e4252e] uppercase mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#343993] mb-4 leading-tight">
              Why Choose{" "}
              <span className="text-[#e4252e] font-extrabold">ElectroTech?</span>
            </h2>
            <p className="text-[#6b7280] text-lg max-w-md">
              We deliver more than just electrical solutions. Our commitment to
              quality, safety, and innovation sets us apart in every project we
              undertake.
            </p>

            {/* Decorative element */}
            <div className="hidden lg:flex items-center gap-3 mt-10">
              <span className="h-1 w-12 bg-[#e4252e] rounded-full" />
              <span className="h-1 w-6 bg-[#e4252e]/40 rounded-full" />
              <span className="h-1 w-3 bg-[#e4252e]/20 rounded-full" />
            </div>
          </div>

          {/* Right Side – Feature Cards Grid */}
          <div className="lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-white border border-gray-200 rounded-xl
                             hover:border-[#e4252e]/50 hover:shadow-xl hover:-translate-y-1
                             transition-all duration-300 cursor-default"
                >
                  {/* Icon container */}
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-lg mb-4
                               bg-[#e4252e]/10 text-[#e4252e]
                               group-hover:bg-[#e4252e] group-hover:text-white
                               transition-all duration-300"
                  >
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-[#343993] font-bold text-base mb-2 leading-snug">
                    {feature.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    {feature.subtitle}
                  </p>

                  {/* Hover accent bar */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0
                               bg-[#e4252e] rounded-t-full
                               group-hover:w-12 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
