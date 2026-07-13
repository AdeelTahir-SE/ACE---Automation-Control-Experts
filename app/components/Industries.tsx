"use client";

import React from "react";

interface IndustryCard {
  name: string;
  icon: React.ReactNode;
}

const industries: IndustryCard[] = [
  {
    name: "Manufacturing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        className="w-10 h-10"
      >
        <rect x="6" y="34" width="14" height="24" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="25" y="24" width="14" height="34" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="44" y="14" width="14" height="44" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="13" cy="40" r="2" fill="currentColor" />
        <circle cx="32" cy="30" r="2" fill="currentColor" />
        <circle cx="51" cy="20" r="2" fill="currentColor" />
        <path d="M6 58h52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M13 10v6M32 6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 10h6M29 6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Food & Beverage",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        className="w-10 h-10"
      >
        <path
          d="M16 8v20c0 6.627 5.373 12 12 12h0c6.627 0 12-5.373 12-12V8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M28 40v16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 56h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 20h24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path
          d="M46 8v12a4 4 0 004 4h0a4 4 0 004-4V8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M50 8v16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Water Treatment",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        className="w-10 h-10"
      >
        <path
          d="M32 6S16 24 16 36a16 16 0 0032 0C48 24 32 6 32 6z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M24 38c2-3 6-3 8 0s6 3 8 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 44c2-3 6-3 8 0s6 3 8 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Oil & Gas",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        className="w-10 h-10"
      >
        <path
          d="M32 4s-8 10-8 18c0 3 1.5 5.5 4 7.2V56h8V29.2c2.5-1.7 4-4.2 4-7.2 0-8-8-18-8-18z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M28 56h8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M24 56h16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="32" cy="22" r="3" stroke="currentColor" strokeWidth="2" />
        <path
          d="M18 40h-4a2 2 0 00-2 2v12a2 2 0 002 2h4M46 40h4a2 2 0 012 2v12a2 2 0 01-2 2h-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Infrastructure",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        className="w-10 h-10"
      >
        <rect x="8" y="24" width="20" height="34" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="36" y="10" width="20" height="48" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="14" y="30" width="4" height="5" rx="1" fill="currentColor" />
        <rect x="14" y="40" width="4" height="5" rx="1" fill="currentColor" />
        <rect x="20" y="30" width="4" height="5" rx="1" fill="currentColor" />
        <rect x="20" y="40" width="4" height="5" rx="1" fill="currentColor" />
        <rect x="42" y="16" width="4" height="5" rx="1" fill="currentColor" />
        <rect x="42" y="26" width="4" height="5" rx="1" fill="currentColor" />
        <rect x="42" y="36" width="4" height="5" rx="1" fill="currentColor" />
        <rect x="48" y="16" width="4" height="5" rx="1" fill="currentColor" />
        <rect x="48" y="26" width="4" height="5" rx="1" fill="currentColor" />
        <rect x="48" y="36" width="4" height="5" rx="1" fill="currentColor" />
        <path d="M4 58h56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Agriculture",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        className="w-10 h-10"
      >
        <path
          d="M32 56V32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M32 32c-6-8-18-10-22-6s2 16 10 18c4 1 8-1 12-6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M32 24c6-8 18-10 22-6s-2 16-10 18c-4 1-8-1-12-6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M32 16c0-8 4-12 4-12s4 4 4 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M24 56h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section className="bg-[#f8f9fa] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="mb-12">
          <span className="inline-block text-[#F57C00] text-sm font-bold tracking-[0.2em] uppercase mb-6">
            INDUSTRIES WE SERVE
          </span>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            {/* Left Content */}
            <div className="lg:max-w-lg">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0D1B2A] leading-tight">
                Industries{" "}
                <span className="text-[#F57C00] italic">We Power</span>
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-[#6b7280] text-lg max-w-md">
              Solutions designed for diverse industrial sectors.
            </p>
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 border border-gray-100 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-[#F57C00]/10 hover:border-[#F57C00]/30 hover:-translate-y-1"
            >
              <div className="text-[#0D1B2A] transition-colors duration-300 group-hover:text-[#F57C00]">
                {industry.icon}
              </div>
              <span className="text-sm font-semibold text-[#0D1B2A] transition-colors duration-300 group-hover:text-[#F57C00]">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
