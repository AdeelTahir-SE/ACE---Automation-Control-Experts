"use client";

import React from "react";

interface PanelItem {
  name: string;
}

const htPanels: PanelItem[] = [
  { name: "11kV / 33kV Panels" },
  { name: "Vacuum Circuit Breaker Panels" },
  { name: "Metering Panels" },
  { name: "HT Protection Panels" },
];

const ltPanels: PanelItem[] = [
  { name: "PCC Panels" },
  { name: "MCC Panels" },
  { name: "APFC Panels" },
  { name: "Distribution Boards" },
];

export default function PanelSolutions() {
  return (
    <section id="products" className="bg-[#f8f9fa] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#F57C00] font-semibold tracking-widest text-sm uppercase mb-3">
            OUR PANEL SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-4">
            High Quality{" "}
            <span className="text-[#F57C00]">Panel Solutions</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
            Innovative. Safe. Efficient. Built to perform.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          {/* HT Panels */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              {/* Icon */}
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#F57C00]/10">
                <svg
                  className="w-6 h-6 text-[#F57C00]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-[#0D1B2A]">HT Panels</h3>
            </div>
            <ul className="space-y-4">
              {htPanels.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 group">
                  <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#F57C00] group-hover:scale-125 transition-transform duration-200" />
                  <span className="text-[#1a1a2e] text-base font-medium">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* LT Panels */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              {/* Icon */}
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#F57C00]/10">
                <svg
                  className="w-6 h-6 text-[#F57C00]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path strokeLinecap="round" d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-[#0D1B2A]">LT Panels</h3>
            </div>
            <ul className="space-y-4">
              {ltPanels.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 group">
                  <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#F57C00] group-hover:scale-125 transition-transform duration-200" />
                  <span className="text-[#1a1a2e] text-base font-medium">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#products"
            className="inline-flex items-center gap-2 border-2 border-[#F57C00] text-[#F57C00] font-semibold px-8 py-3 rounded-full hover:bg-[#F57C00] hover:text-white transition-colors duration-300"
          >
            View All Products
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
