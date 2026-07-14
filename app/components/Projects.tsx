'use client';

import Image from 'next/image';

const projects = [
  { company: 'Ganifield Mill', meta: '(Animal Food Production)', description: 'Electrical System Design, Supply & Installation', image: '/projects-showcase.png' },
  { company: 'Pepsi Beverages', meta: '', description: 'HT & LT Panels, Installation & Commissioning', image: '/hero-panels.png' },
  { company: 'WASA', meta: '', description: 'Electrical Infrastructure & Panel Installation', image: '/contact-bg.png' },
  { company: 'Coca Cola', meta: '', description: 'Supply & Installation of LT Panels & Cabling', image: '/projects-showcase.png' },
  { company: 'JAICA', meta: '', description: 'Electrical Works & System Upgrades', image: '/contact-bg.png' },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f5f7fb] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-lg bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 sm:p-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#343993]">
              <span className="h-0.5 w-10 bg-[#e4252e]" />
              Our Previous Projects
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#17213f] sm:text-4xl">Delivering Excellence Across Industries</h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-[#343993]" aria-label="Previous projects">&lt;</button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-[#343993]" aria-label="Next projects">&gt;</button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project) => (
            <article key={project.company} className="overflow-hidden rounded-lg border border-slate-200 bg-white text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-36 overflow-hidden">
                <Image src={project.image} alt={project.company} fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-[#343993]">{project.company}</h3>
                {project.meta && <p className="text-xs font-semibold text-slate-500">{project.meta}</p>}
                <p className="mt-3 text-sm leading-6 text-slate-700">{project.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#343993] px-7 py-3 text-sm font-bold text-[#343993] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#343993] hover:text-white hover:shadow-lg"
          >
            View All Projects
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}