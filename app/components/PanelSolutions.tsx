'use client';

import Image from 'next/image';

const htPanels = ['11kV / 33kV Panels', 'Vacuum Circuit Breaker Panels', 'HT Metering Panels', 'HT Protection Panels'];
const ltPanels = ['PCC Panels', 'MCC Panels', 'APFC Panels', 'Distribution Boards'];

function PanelCard({ title, items, align }: { title: string; items: string[]; align: 'left' | 'right' }) {
  return (
    <article className="relative min-h-[250px] overflow-hidden rounded-lg border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      <div className={`relative z-10 max-w-[48%] ${align === 'right' ? 'ml-auto' : ''}`}>
        <h3 className="mb-5 text-lg font-extrabold uppercase tracking-wide text-[#343993]">{title}</h3>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#343993]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src="/hero-panels.png"
        alt={`${title} by ACE`}
        width={430}
        height={260}
        className={`absolute bottom-0 ${align === 'right' ? 'left-0' : 'right-0'} h-[82%] w-[58%] object-cover object-center`}
      />
      <div className={`absolute inset-y-0 ${align === 'right' ? 'left-[40%]' : 'right-[40%]'} w-28 border-[#343993] opacity-80 ${align === 'right' ? 'rounded-l-full border-l-4' : 'rounded-r-full border-r-4'}`} />
    </article>
  );
}

export default function PanelSolutions() {
  return (
    <section id="products" className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-lg bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 sm:p-8">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#343993]">
            <span className="h-0.5 w-10 bg-[#e4252e]" />
            Our Panel Solutions
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#17213f] sm:text-4xl">High Quality. Built to Perform.</h2>
        </div>

        <div className="relative grid gap-6 lg:grid-cols-2">
          <PanelCard title="HT Panels" items={htPanels} align="left" />
          <PanelCard title="LT Panels" items={ltPanels} align="right" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#343993] bg-white shadow-xl lg:flex">
            <Image src="/ace-logo.png" alt="ACE" width={110} height={48} className="h-auto w-20 object-contain" />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#343993] px-7 py-3 text-sm font-bold text-[#343993] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#343993] hover:text-white hover:shadow-lg"
          >
            View All Products
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}