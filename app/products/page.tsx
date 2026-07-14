'use client';

import Image from 'next/image';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const products = [
  {
    title: '11kV / 33kV HT Panels',
    description:
      'High voltage switchgear panels designed for reliable power distribution in industrial and utility applications.',
    image: '/hero-panels.png',
    category: 'HT Panels',
    specs: [
      'Voltage: Up to 33kV',
      'Current: Up to 2500A',
      'Type tested as per IEC 62271',
      'Indoor & outdoor variants',
    ],
  },
  {
    title: 'Vacuum Circuit Breaker Panels',
    description:
      'Advanced VCB panels with superior arc interruption for high-voltage switching operations.',
    image: '/projects-showcase.png',
    category: 'HT Panels',
    specs: [
      'Breaking capacity: 25kA',
      'Motorized operation',
      'Protection relay integrated',
      'Anti-pumping mechanism',
    ],
  },
  {
    title: 'HT Metering Panels',
    description:
      'Precision metering panels for accurate energy measurement and monitoring at high voltage levels.',
    image: '/contact-bg.png',
    category: 'HT Panels',
    specs: [
      'CT/PT compartments',
      'Digital energy meters',
      'WAPDA approved design',
      'Tamper-proof construction',
    ],
  },
  {
    title: 'HT Protection Panels',
    description:
      'Comprehensive protection relay panels safeguarding your HT electrical infrastructure from faults.',
    image: '/hero-panels.png',
    category: 'HT Panels',
    specs: [
      'Numerical protection relays',
      'Overcurrent & earth fault',
      'Differential protection',
      'Auto-reclosing facility',
    ],
  },
  {
    title: 'PCC Panels',
    description:
      'Power Control Center panels for centralized power management and distribution in large facilities.',
    image: '/projects-showcase.png',
    category: 'LT Panels',
    specs: [
      'Voltage: Up to 690V',
      'Current: Up to 6300A',
      'Form 4 segregation',
      'Copper/Aluminum busbar',
    ],
  },
  {
    title: 'MCC Panels',
    description:
      'Motor Control Center panels with intelligent motor protection and control for industrial automation.',
    image: '/contact-bg.png',
    category: 'LT Panels',
    specs: [
      'Fixed & withdrawable type',
      'DOL/Star-Delta/VFD starters',
      'Smart motor protection',
      'SCADA integration ready',
    ],
  },
  {
    title: 'APFC Panels',
    description:
      'Automatic Power Factor Correction panels to optimize energy usage and reduce electricity costs.',
    image: '/hero-panels.png',
    category: 'LT Panels',
    specs: [
      'Microprocessor controlled',
      'Thyristor switched capacitors',
      'Power factor up to 0.99',
      'Harmonic filter option',
    ],
  },
  {
    title: 'Distribution Boards',
    description:
      'Robust distribution boards for safe and efficient power routing to various load centers.',
    image: '/projects-showcase.png',
    category: 'LT Panels',
    specs: [
      'MCCB/MCB based protection',
      'IP54/IP65 rated enclosures',
      'Bus-coupler provision',
      'Modular expandable design',
    ],
  },
];

const categories = ['All', 'HT Panels', 'LT Panels'];

const features = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: 'ISO Certified',
    description: 'All panels manufactured under ISO 9001:2015 certified quality management systems.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    title: 'Type Tested',
    description: 'Panels rigorously type tested as per IEC and IS standards for maximum reliability.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
    title: 'Custom Designs',
    description: 'Bespoke panel solutions engineered to meet your specific project requirements.',
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Nationwide Delivery',
    description: 'Reliable logistics and delivery network ensuring timely project completion.',
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <Header />
      <main className="flex-1 bg-[#f5f7fb]">
        {/* ── Hero Banner ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#343993] to-[#252a77] pt-28 pb-16 md:pb-20">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#e4252e]/8 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/3 blur-2xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-sm text-white/60">
              <a href="/" className="transition-colors duration-200 hover:text-white">
                Home
              </a>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white/90 font-medium">Products</span>
            </nav>

            <div className="max-w-3xl">
              <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/90">
                Our Products
              </span>
              <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                Engineered for{' '}
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Power &amp; Precision
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
                We design and manufacture premium HT &amp; LT electrical panels, delivering
                robust power distribution solutions built to the highest international standards.
              </p>
            </div>
          </div>
        </section>

        {/* ── Category Tabs ───────────────────────────────────────── */}
        <section className="sticky top-16 z-30 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur md:top-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#343993] text-white shadow-[0_4px_14px_rgba(52,57,147,0.3)]'
                      : 'bg-slate-100 text-slate-600 hover:bg-[#eef0ff] hover:text-[#343993]'
                  }`}
                >
                  {cat}
                  <span
                    className={`ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-bold ${
                      activeCategory === cat
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {cat === 'All'
                      ? products.length
                      : products.filter((p) => p.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Products Grid ───────────────────────────────────────── */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product, idx) => (
                <div
                  key={product.title}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#343993]/8"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  {/* Image Area */}
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    {/* Category badge */}
                    <span className="absolute top-4 left-4 rounded-full bg-[#343993]/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-extrabold tracking-tight text-[#17213f] group-hover:text-[#343993] transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {product.description}
                    </p>

                    {/* Specifications */}
                    <ul className="mt-4 space-y-2">
                      {product.specs.map((spec) => (
                        <li
                          key={spec}
                          className="flex items-start gap-2.5 text-sm text-slate-600"
                        >
                          <svg
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#343993]"
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
                          {spec}
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <div className="mt-6 flex gap-3 pt-2">
                      <a
                        href="/#contact"
                        className="inline-flex flex-1 items-center justify-center rounded-lg bg-[#343993] px-4 py-2.5 text-sm font-bold text-white shadow-[0_4px_12px_rgba(52,57,147,0.2)] transition-all duration-300 hover:bg-[#252a77] hover:shadow-[0_6px_20px_rgba(52,57,147,0.3)]"
                      >
                        Get Quote
                        <svg
                          className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
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
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-lg text-slate-400">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* ── Features Banner ─────────────────────────────────────── */}
        <section className="border-y border-slate-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-block rounded-full border border-[#343993]/15 bg-[#eef0ff] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#343993]">
                Why Choose Us
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#17213f] sm:text-4xl">
                Why Choose Our Panels?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-500">
                Industry-leading quality backed by decades of engineering expertise and
                international certifications.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-[#f5f7fb] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#343993]/20 hover:shadow-lg hover:shadow-[#343993]/6"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#343993]/10 text-[#343993] transition-all duration-300 group-hover:bg-[#343993] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(52,57,147,0.25)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-[#17213f]">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Section ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#343993] to-[#1e2260] py-20 md:py-24">
          {/* Decorative dots */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-[#e4252e]/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80">
              Custom Solutions
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Need Custom Panel Solutions?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/65">
              Our engineering team works closely with you to design and manufacture panels
              tailored to your project&apos;s exact specifications and compliance requirements.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/#contact"
                className="inline-flex items-center rounded-lg bg-[#e4252e] px-8 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(228,37,46,0.25)] transition-all duration-300 hover:bg-[#b91c25] hover:shadow-[0_14px_36px_rgba(228,37,46,0.35)]"
              >
                Contact Our Engineers
                <svg
                  className="ml-2 h-4 w-4"
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
                href="/"
                className="inline-flex items-center rounded-lg border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
