'use client';

import React from 'react';

const services = [
  {
    title: 'HT Electrical Services',
    description: 'High Tension line work, panel installation, cable laying & termination.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'LT Electrical Services',
    description: 'Power transformers, LT/PFI/MCC panels, and distribution boards.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M15 3v18M3 10h18" />
        <path d="M6 7h.01M12 7h.01M18 7h.01M6 15h.01M12 15h.01M18 15h.01" />
      </svg>
    ),
  },
  {
    title: 'Industrial Automation',
    description: 'Complete automation & integration solutions with PLC, DCS, and SCADA.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'Commercial & Residential',
    description: 'Installation, wiring, lighting, and protection systems for buildings.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Building Automation',
    description: 'CCTV, Fire Alarm, Networking, BMS and Communication systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="11" r="3" />
      </svg>
    ),
  },
  {
    title: 'Health and Safety',
    description: 'HSE compliance, incident-free environment, and workplace safety policies.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v6" />
        <path d="M9 11h6" />
      </svg>
    ),
  },
  {
    title: 'Energy Conservation',
    description: 'Energy audits, efficient lighting, and cost-effective management solutions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A6 6 0 1 0 7.5 11.5c.76.76 1.23 1.52 1.41 2.5" />
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

        <div className="mt-8 flex justify-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#343993] px-7 py-3 text-sm font-bold text-[#343993] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#343993] hover:text-white hover:shadow-lg"
          >
            View All Services
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}