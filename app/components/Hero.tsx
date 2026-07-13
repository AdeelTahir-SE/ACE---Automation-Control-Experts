'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const trustBadges = [
  { title: 'Expert Engineers', subtitle: 'Experienced Team' },
  { title: 'Quality Assured', subtitle: 'High Standards' },
  { title: 'On-Time Delivery', subtitle: 'Commitment' },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-[#f5f8ff] pt-20">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.95)_0%,rgba(239,246,255,0.92)_44%,rgba(255,255,255,0.75)_100%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(90deg,rgba(52,57,147,0.08)_1px,transparent_1px),linear-gradient(rgba(52,57,147,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[640px] items-stretch gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div
            className={`flex flex-col justify-center py-12 transition-all duration-700 ease-out lg:py-16 ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-wide text-[#e4252e]">
              <span className="h-0.5 w-12 bg-[#e4252e]" />
              Automation &amp; Control Experts
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#17213f] sm:text-5xl lg:text-[3.45rem]">
              Powering Industries with{' '}
              <span className="text-[#343993]">Smart Electrical Solutions</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
              We provide end-to-end electrical system design, planning, execution and manufacturing of HT &amp; LT panels for industries of every scale.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex min-w-36 items-center justify-center rounded-md bg-[#343993] px-7 py-3 text-sm font-bold text-white shadow-[0_14px_24px_rgba(52,57,147,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#252a77]"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="inline-flex min-w-36 items-center justify-center rounded-md border-2 border-[#343993] px-7 py-3 text-sm font-bold text-[#343993] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#343993] hover:text-white"
              >
                Get a Quote
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {trustBadges.map((badge) => (
                <div key={badge.title} className="flex items-center gap-3 rounded-md bg-white/65 p-3 shadow-sm ring-1 ring-slate-200/70 backdrop-blur">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#343993]/20 text-[#343993]">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-extrabold text-[#17213f] sm:text-sm">{badge.title}</p>
                    <p className="text-[11px] font-medium text-slate-500">{badge.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative min-h-[360px] transition-all delay-150 duration-700 ease-out lg:min-h-full ${
              visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
          >
            <div className="absolute inset-y-0 -right-4 left-0 overflow-hidden rounded-l-[120px] border-l-[7px] border-[#343993] bg-white shadow-2xl lg:-right-8">
              <Image
                src="/hero-panels.png"
                alt="ACE industrial electrical panels"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-[#17213f]/10" />
            </div>
            <div className="absolute left-2 top-0 h-full w-12 border-l-[5px] border-[#e4252e] opacity-90 [clip-path:ellipse(45%_45%_at_100%_50%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}