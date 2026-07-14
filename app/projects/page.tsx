'use client';

import Image from 'next/image';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from "next/link";
const projects = [
  { company: 'Ghani Halal Feed Mill Ltd', meta: 'Erection and Commissioning', description: 'Erection of all Machinery related to Animal Feed, and Installation of HT, LT, PFI panels, power Transformer, Distribution Boards and MCC panels. Electrification internal and external, computer networking, Earthing etc.', image: '/projects/ghani-mills.png', category: 'Manufacturing' },
  { company: 'Pepsi Cola', meta: 'Automation CIP System', description: 'Complete Automation of CIP System, RO Plant, Beverage Syrup Tank Filling Plant.', image: '/projects/pepsi-cola.png', category: 'Beverages' },
  { company: 'WASA Faisalabad', meta: '(Torishima Pump MGF)', description: 'Replacement of Pumping Machinery at INLINE BOOSTER. Installation & Commissioning of 11kV HT Switchgear (630A), 4500 kVA Power Transformer, 690V LV Panels, Siemens VFD Motor Control Panels (590 kW & 300 kW). Installation of Instrumentation, Flow Meters, Pumps, Earth Pits, Cable Trays, and Complete Cable Laying.', image: '/projects/wasa.png', category: 'Water Treatment' },
  { company: 'JICA / WASA', meta: 'Water Management SCADA', description: 'Real-time monitoring and control of water supply, distribution, and treatment systems. Integration of PLCs, SCADA, level sensors, flow meters, pumps, and field instruments. Alarm management, historical data logging, and centralized control from the SCADA Control Room.', image: '/projects/jica.png', category: 'Infrastructure' },
  { company: 'Zong', meta: 'Data Center', description: 'Installation of cable tray and data center.', image: '/projects/zong-5g.png', category: 'Infrastructure' },
  { company: 'AR APPARELS', meta: 'Solar System', description: 'Installation of solars system 255kW.', image: '/projects/ar-apparels.png', category: 'Manufacturing' },
  { company: 'Kamal Ltd Weaving Zone', meta: 'Erection and Commissioning', description: 'Erection and Commissioning of HT, LT, PFI panels and power Transformer. Cable Tray and Cable Ladder fixing, Installation of Distribution Boards and MCC panels. Electrification internal and external, Cabling for computer networking, Earthing.', image: '/projects/kamal-textile-mills.png', category: 'Manufacturing' },
];

const categories = ['All', 'Manufacturing', 'Beverages', 'Infrastructure', 'Water Treatment'];

const stats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '10+', label: 'Years of Experience' },
  { value: '50+', label: 'Satisfied Clients' },
  { value: '6+', label: 'Industries Served' },
];

const categoryColors: Record<string, string> = {
  Manufacturing: 'bg-blue-600',
  Beverages: 'bg-emerald-600',
  Infrastructure: 'bg-amber-600',
  'Water Treatment': 'bg-cyan-600',
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Header />
      <main className="bg-[#f5f7fb]">
        {/* ── Hero Banner ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#343993] to-[#252a77] pt-28 pb-20 text-white md:pt-36 md:pb-28">
          {/* Decorative shapes */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute top-1/2 left-1/3 h-40 w-40 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute right-1/4 bottom-10 h-24 w-24 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute top-20 left-10 h-3 w-3 rounded-full bg-[#e4252e]/60" />
          <div className="pointer-events-none absolute right-20 top-32 h-2 w-2 rounded-full bg-white/40" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-sm font-medium text-white/70">
              <Link href="/" className="transition-colors hover:text-white">Home</Link>
              <svg className="h-3.5 w-3.5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white">Projects</span>
            </nav>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Projects
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Delivering world-class electrical infrastructure across industries — from high-tension panel systems
              to complete turnkey installations for Pakistan&apos;s leading enterprises.
            </p>

            {/* Accent bar */}
            <div className="mt-8 flex items-center gap-2">
              <span className="h-1 w-12 rounded-full bg-[#e4252e]" />
              <span className="h-1 w-6 rounded-full bg-white/30" />
              <span className="h-1 w-3 rounded-full bg-white/20" />
            </div>
          </div>
        </section>

        {/* ── Filter Tabs ── */}
        <section className="relative z-10 -mt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg sm:gap-3 sm:p-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-[#343993] text-white shadow-md shadow-[#343993]/25'
                    : 'text-slate-600 hover:bg-[#eef0ff] hover:text-[#343993]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ── Projects Grid ── */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, idx) => (
              <article
                key={`${project.company}-${idx}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image area */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.company}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Category badge */}
                  <span
                    className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-bold text-white shadow-md ${
                      categoryColors[project.category] || 'bg-[#343993]'
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-[#17213f]">
                    {project.company}
                    {project.meta && (
                      <span className="ml-1.5 text-sm font-medium text-slate-400">
                        {project.meta}
                      </span>
                    )}
                  </h3>

                  <p className="mt-2.5 line-clamp-6 text-sm leading-relaxed text-slate-500">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg font-semibold text-slate-400">No projects found in this category.</p>
            </div>
          )}
        </section>

        {/* ── Stats Banner ── */}
        <section className="bg-gradient-to-br from-[#17213f] to-[#0d1528]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/60 sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#343993] to-[#252a77] py-20 md:py-28">
          {/* Decorative */}
          <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-white/5" />

          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80">
              Start Your Project
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Have a Project in Mind?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Whether it&apos;s an industrial panel system, power distribution, or a complete turnkey electrical
              installation — our team of experts is ready to bring your vision to life.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#e4252e] px-8 py-4 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(228,37,46,0.3)] transition-all duration-300 hover:bg-[#b91c25] hover:shadow-[0_15px_40px_rgba(228,37,46,0.4)]"
            >
              Get a Quote
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
