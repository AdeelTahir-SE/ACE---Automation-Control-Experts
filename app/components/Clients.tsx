"use client";

import React from "react";

interface ClientLogo {
  name: string;
  styledName: React.ReactNode;
}

const clientLogos: ClientLogo[] = [
  {
    name: "Pepsi",
    styledName: (
      <span className="flex flex-col items-center">
        <span className="text-2xl font-black tracking-tight text-[#0D1B2A] uppercase" style={{ fontFamily: "Impact, Haettenschweiler, sans-serif" }}>
          P<span className="text-[#F57C00]">E</span>PSI
        </span>
        <span className="h-[3px] w-8 bg-[#F57C00] rounded-full mt-1" />
      </span>
    ),
  },
  {
    name: "Wasa",
    styledName: (
      <span className="flex flex-col items-center">
        <span className="text-2xl font-extrabold tracking-[0.25em] text-[#0D1B2A] uppercase" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          W<span className="text-[#F57C00]">A</span>SA
        </span>
        <span className="h-[2px] w-full bg-[#0D1B2A] rounded-full mt-1" />
      </span>
    ),
  },
  {
    name: "Coca-Cola",
    styledName: (
      <span className="flex flex-col items-center">
        <span className="text-xl font-bold italic text-[#0D1B2A]" style={{ fontFamily: "'Times New Roman', Georgia, serif" }}>
          Coca<span className="text-[#F57C00]">-</span>Cola
        </span>
        <span className="flex gap-0.5 mt-1">
          <span className="h-[3px] w-3 bg-[#F57C00] rounded-full" />
          <span className="h-[3px] w-3 bg-[#0D1B2A] rounded-full" />
          <span className="h-[3px] w-3 bg-[#F57C00] rounded-full" />
        </span>
      </span>
    ),
  },
  {
    name: "JAICA",
    styledName: (
      <span className="flex flex-col items-center">
        <span className="text-2xl font-black tracking-widest text-[#F57C00] uppercase" style={{ fontFamily: "'Arial Black', Gadget, sans-serif" }}>
          JAI<span className="text-[#0D1B2A]">CA</span>
        </span>
        <span className="h-[2px] w-10 bg-gradient-to-r from-[#F57C00] to-[#0D1B2A] rounded-full mt-1" />
      </span>
    ),
  },
  {
    name: "Ganifield Mill",
    styledName: (
      <span className="flex flex-col items-center">
        <span className="text-lg font-bold tracking-wide text-[#0D1B2A] uppercase" style={{ fontFamily: "'Trebuchet MS', Helvetica, sans-serif" }}>
          Ganifield
        </span>
        <span className="text-xs font-semibold tracking-[0.35em] text-[#F57C00] uppercase -mt-0.5">
          MILL
        </span>
      </span>
    ),
  },
];

const Clients: React.FC = () => {
  return (
    <section id="clients" className="bg-[#f8f9fa] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side */}
          <div className="lg:w-5/12 text-center lg:text-left">
            <span className="inline-block text-sm font-semibold tracking-[0.2em] text-[#F57C00] uppercase mb-4">
              OUR CLIENTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-4 leading-tight">
              Trusted By{" "}
              <span className="font-extrabold">Industry Leaders</span>
            </h2>
            <p className="text-[#6b7280] text-lg mb-8 max-w-md mx-auto lg:mx-0">
              We build long-term partnerships through quality &amp; trust.
            </p>
            <button
              className="inline-flex items-center gap-2 border-2 border-[#F57C00] text-[#F57C00] px-8 py-3 rounded-lg font-semibold
                         hover:bg-[#F57C00] hover:text-white transition-all duration-300 cursor-pointer"
            >
              View All Clients
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Side – Client Logos */}
          <div className="lg:w-7/12">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {clientLogos.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center p-6 bg-white border border-gray-200 rounded-xl
                             hover:border-[#F57C00]/40 hover:shadow-lg transition-all duration-300 min-h-[100px]"
                >
                  {client.styledName}
                </div>
              ))}
              {/* Extra decorative card to fill the grid */}
              <div className="flex items-center justify-center p-6 bg-white border border-dashed border-gray-300 rounded-xl min-h-[100px]">
                <span className="text-[#6b7280] text-sm font-medium">+ More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
