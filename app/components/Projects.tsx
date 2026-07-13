"use client";

import React from "react";

interface Project {
  company: string;
  description: string;
  gradient: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    company: "Ganifield Mill",
    description:
      "Animal Feed Production — Electrical System Design, Supply & Installation",
    gradient: "from-[#0D1B2A] to-[#1b3a5c]",
    icon: (
      <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    company: "Pepsi Beverages",
    description: "HT & LT Panels, Installation & Commissioning",
    gradient: "from-[#1b3a5c] to-[#2d5a8e]",
    icon: (
      <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    company: "WASA",
    description: "Electrical Infrastructure & Panel Installation",
    gradient: "from-[#0D1B2A] to-[#234567]",
    icon: (
      <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.25 2.25 0 010-3.18l.71-.71a2.25 2.25 0 013.18 0l1.79 1.79 1.79-1.79a2.25 2.25 0 013.18 0l.71.71a2.25 2.25 0 010 3.18l-5.1 5.1a1.125 1.125 0 01-1.59 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5h15" />
      </svg>
    ),
  },
  {
    company: "Coca Cola",
    description: "Supply & Installation of LT Panels & Cabling",
    gradient: "from-[#2d5a8e] to-[#0D1B2A]",
    icon: (
      <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    company: "JAICA",
    description: "Electrical Works & System Upgrades",
    gradient: "from-[#234567] to-[#1b3a5c]",
    icon: (
      <svg className="w-10 h-10 text-white/80" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#F57C00] font-semibold tracking-widest text-sm uppercase mb-3">
            OUR PREVIOUS PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-4">
            Projects We&apos;re{" "}
            <span className="text-[#F57C00]">Proud Of</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
            Delivering excellence in every project we undertake.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              {/* Placeholder Image Area */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                {/* Decorative circles */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/5" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/5" />

                {/* Icon */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>

                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#0D1B2A] mb-2 group-hover:text-[#F57C00] transition-colors duration-300">
                  {project.company}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border-2 border-[#F57C00] text-[#F57C00] font-semibold px-8 py-3 rounded-full hover:bg-[#F57C00] hover:text-white transition-colors duration-300"
          >
            View All Projects
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
