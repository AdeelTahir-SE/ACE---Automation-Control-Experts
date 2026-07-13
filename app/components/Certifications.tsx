"use client";

import React from "react";

interface CertificationBadge {
  abbr: string;
  name: string;
  borderColor: string;
  accentColor: string;
}

const certifications: CertificationBadge[] = [
  {
    abbr: "ISO 9001",
    name: "ISO 9001:2015 Certified",
    borderColor: "border-blue-500",
    accentColor: "text-blue-600",
  },
  {
    abbr: "IEC",
    name: "International Standards",
    borderColor: "border-emerald-500",
    accentColor: "text-emerald-600",
  },
  {
    abbr: "CE",
    name: "Certified Products",
    borderColor: "border-[#F57C00]",
    accentColor: "text-[#F57C00]",
  },
  {
    abbr: "TÜV",
    name: "TÜV Certified",
    borderColor: "border-red-500",
    accentColor: "text-red-600",
  },
  {
    abbr: "RoHS",
    name: "RoHS Compliant",
    borderColor: "border-green-600",
    accentColor: "text-green-700",
  },
];

export default function Certifications() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#F57C00] text-sm font-bold tracking-[0.2em] uppercase mb-4">
            CERTIFICATIONS &amp; QUALITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0D1B2A] leading-tight mb-4">
            Quality You Can{" "}
            <span className="text-[#F57C00]">Rely On</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
            We follow international standards and best practices.
          </p>
        </div>

        {/* Certification Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.abbr}
              className={`relative bg-white rounded-xl border-2 ${cert.borderColor} p-6 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              {/* Badge Mark */}
              <div
                className={`w-16 h-16 rounded-full border-[3px] ${cert.borderColor} flex items-center justify-center`}
              >
                <span
                  className={`text-base font-extrabold ${cert.accentColor} leading-tight`}
                >
                  {cert.abbr}
                </span>
              </div>

              {/* Certification Name */}
              <span className="text-sm font-semibold text-[#0D1B2A] leading-snug">
                {cert.name}
              </span>

              {/* Verified checkmark */}
              <div className="flex items-center gap-1 mt-1">
                <svg
                  className={`w-4 h-4 ${cert.accentColor}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs text-[#6b7280] font-medium">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
