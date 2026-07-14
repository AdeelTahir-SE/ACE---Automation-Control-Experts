'use client';

import Image from 'next/image';

const htPanels = ['11kV / 33kV Panels', 'Vacuum Circuit Breaker Panels', 'HT Metering Panels', 'HT Protection Panels'];
const ltPanels = ['PCC Panels', 'MCC Panels', 'APFC Panels', 'Distribution Boards'];

function PanelCard({ title, items, align, image }: { title: string; items: string[]; align: 'left' | 'right'; image: string }) {
  return (
    <article className="relative flex min-h-[300px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Image Section */}
      <div className={`relative w-2/5 shrink-0 overflow-hidden ${align === 'right' ? 'order-1' : 'order-2'}`}>
        <Image
          src={image}
          alt={`${title} by ACE`}
          fill
          className="object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className={`relative flex w-3/5 flex-col justify-center p-8 ${align === 'right' ? 'order-2' : 'order-1'}`}>
        {/* Accent line separator */}
        <div className={`absolute top-0 bottom-0 w-1.5 bg-[#343993] ${align === 'right' ? 'left-0' : 'right-0'}`} />
        
        <h3 className="mb-6 text-xl font-extrabold uppercase tracking-wide text-[#343993]">{title}</h3>
        <ul className="space-y-3.5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 items-center justify-center rounded-full bg-[#e4252e]" />
              <span className="leading-tight">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function PanelSolutions() {
  return (
    <section id="products" className="bg-[#f5f7fb] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200 sm:p-10">
        <div className="mb-10">
          <div className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#343993]">
            <span className="h-0.5 w-10 bg-[#e4252e]" />
            Our Panel Solutions
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#17213f] sm:text-4xl">High Quality. Built to Perform.</h2>
        </div>

        <div className="relative grid gap-8 lg:grid-cols-2">
          <PanelCard title="HT Panels" items={htPanels} align="left" image="/hero-panels.png" />
          <PanelCard title="LT Panels" items={ltPanels} align="right" image="/projects-showcase.png" />
          
          {/* Center ACE Logo */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 hidden h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-white shadow-xl lg:flex">
            <Image src="/ace-logo.png" alt="ACE" width={110} height={48} className="h-auto w-20 object-contain " />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2 rounded-lg bg-[#343993] px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#252a77] hover:shadow-[0_8px_25px_rgba(52,57,147,0.4)]"
          >
            View All Products
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}