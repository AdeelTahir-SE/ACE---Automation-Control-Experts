"use client";

import React from "react";

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceCard[] = [
  {
    title: "Electrical System Design",
    description:
      "Innovative & efficient designs tailored to your industrial needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18" />
        <path d="M3 9h6" />
        <path d="M3 15h6" />
        <circle cx="16" cy="12" r="2" />
        <path d="M14 12h-2" />
        <path d="M18 12h2" />
        <path d="M16 10V8" />
        <path d="M16 14v2" />
      </svg>
    ),
  },
  {
    title: "Planning",
    description:
      "Detailed planning for smooth execution, optimization & safety.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M9 12h6" />
        <path d="M9 16h4" />
        <path d="M9 8h6" />
      </svg>
    ),
  },
  {
    title: "Execution",
    description:
      "Professional execution with strict adherence to quality & timelines.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1.08 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1.08z" />
      </svg>
    ),
  },
  {
    title: "SLD Design",
    description:
      "Single Line Diagrams for accurate system representation.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="15" y="3" width="6" height="6" rx="1" />
        <rect x="9" y="15" width="6" height="6" rx="1" />
        <path d="M6 9v3h6" />
        <path d="M18 9v3h-6" />
        <path d="M12 12v3" />
      </svg>
    ),
  },
  {
    title: "HT & LT Panels",
    description:
      "Manufacturing of high quality HT & LT panels built for reliability.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <line x1="8" y1="3" x2="8" y2="21" />
        <line x1="16" y1="3" x2="16" y2="21" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <circle cx="5" cy="7.5" r="1" />
        <circle cx="12" cy="7.5" r="1" />
        <circle cx="19" cy="7.5" r="1" />
        <rect x="4" y="14" width="2" height="4" rx="0.5" />
        <rect x="11" y="14" width="2" height="4" rx="0.5" />
        <rect x="18" y="14" width="2" height="4" rx="0.5" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F57C00]/20 bg-[#F57C00]/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#F57C00]" />
              <span className="text-xs font-semibold tracking-wider text-[#F57C00] uppercase">
                OUR SERVICES
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-[#0D1B2A] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Our Core{" "}
              <span className="text-[#F57C00]">Electrical Services</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-3 max-w-xl text-base text-[#6b7280] lg:text-lg">
              Comprehensive solutions tailored to your industrial needs
            </p>
          </div>

          {/* View All Services Button */}
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-lg border-2 border-[#F57C00] px-6 py-3 text-sm font-semibold text-[#F57C00] transition-all duration-300 hover:bg-[#F57C00] hover:text-white"
          >
            View All Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Service Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Orange top border on hover */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-[#F57C00] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon */}
              <div className="mb-5 inline-flex items-center justify-center rounded-lg bg-[#F57C00]/10 p-3 text-[#F57C00] transition-colors duration-300 group-hover:bg-[#F57C00] group-hover:text-white">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-bold text-[#0D1B2A]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#6b7280]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
