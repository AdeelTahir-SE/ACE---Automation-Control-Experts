'use client';

import React from 'react';

const services = [
  {
    title: 'Electrical System Design',
    description: 'Innovative & efficient designs tailored to your industrial needs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8M8 17h8M9 11h.01M12 11h.01M15 11h.01M9 14h.01M12 14h.01M15 14h.01" />
      </svg>
    ),
  },
  {
    title: 'Planning',
    description: 'Detailed planning for smooth execution, optimization & safety.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14H4V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M8 11h8M8 15h5" />
      </svg>
    ),
  },
  {
    title: 'Execution',
    description: 'Professional execution with strict adherence to quality & timelines.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3v4a2 2 0 0 0 2 2h4" />
        <path d="M18 13v2a6 6 0 0 1-12 0v-2" />
        <path d="M8 13h8M10 17h4M7 9h10" />
      </svg>
    ),
  },
  {
    title: 'SLD Design',
    description: 'Single Line Diagrams for accurate system representation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M12 7v5M12 12H6v4M12 12h6v4" />
      </svg>
    ),
  },
  {
    title: 'HT & LT Panels',
    description: 'Manufacturing of high quality HT & LT panels built for reliability.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M15 3v18M3 10h18" />
        <path d="M6 7h.01M12 7h.01M18 7h.01M6 15h.01M12 15h.01M18 15h.01" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-lg bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 sm:p-8">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#343993]">
            <span className="h-0.5 w-10 bg-[#e4252e]" />
            Our Services
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#17213f] sm:text-4xl">Comprehensive Electrical Solutions</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <article key={service.title} className="group flex min-h-[230px] flex-col items-center justify-center rounded-lg border border-slate-200 bg-gradient-to-b from-white to-[#f8faff] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#343993]/35 hover:shadow-xl">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-md bg-white text-[#343993] shadow-sm ring-1 ring-slate-200 transition-colors group-hover:bg-[#343993] group-hover:text-white">
                <div className="h-12 w-12">{service.icon}</div>
              </div>
              <h3 className="text-base font-extrabold leading-snug text-[#343993]">{service.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}