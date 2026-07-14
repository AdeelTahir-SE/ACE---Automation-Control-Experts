'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs';
import CoreValues from '../components/CoreValues';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f5f7fb]">
        {/* ====== Hero Banner ====== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#343993] to-[#252a77] pt-28 pb-20 text-white md:pt-36 md:pb-28">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/[0.04]" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/[0.03]" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="mb-6 flex items-center gap-2 text-sm font-medium text-white/60">
              <Link href="/" className="transition-colors duration-300 hover:text-white">
                Home
              </Link>
              <svg className="h-3.5 w-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white/90">About Us</span>
            </nav>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About ACE
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              Automation & Control Experts (ACE) is a leading provider of innovative industrial electrical solutions, committed to excellence, safety, and sustainable engineering.
            </p>

            <div className="mt-8 flex items-center gap-2">
              <span className="h-1 w-12 rounded-full bg-[#e4252e]" />
              <span className="h-1 w-6 rounded-full bg-white/30" />
              <span className="h-1 w-3 rounded-full bg-white/20" />
            </div>
          </div>
        </section>

        {/* ====== Company Overview ====== */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#343993]">
                  <span className="h-0.5 w-10 bg-[#e4252e]" />
                  Who We Are
                </span>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#17213f] sm:text-4xl">
                  Pioneering Electrical Engineering Excellence
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  Established with a vision to revolutionize the industrial electrical sector, ACE (Automation & Control Experts) has grown into a trusted partner for businesses seeking reliable, safe, and efficient power solutions.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  With over a decade of experience, our team of highly skilled engineers and technicians specializes in high tension and low tension panel manufacturing, industrial automation, and comprehensive electrical infrastructure development. We pride ourselves on delivering projects on time, within budget, and to the highest international standards.
                </p>
                
                <div className="mt-10 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8">
                  <div>
                    <h4 className="text-4xl font-extrabold text-[#343993]">10+</h4>
                    <p className="mt-2 text-sm font-bold text-slate-500 uppercase tracking-wide">Years Experience</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-extrabold text-[#343993]">100+</h4>
                    <p className="mt-2 text-sm font-bold text-slate-500 uppercase tracking-wide">Projects Delivered</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-tr from-[#343993]/20 to-[#e4252e]/20 blur-2xl" />
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200/50">
                  <Image 
                    src="/hero-panels.png" 
                    alt="ACE Engineers at work" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17213f]/80 to-transparent" />
                  <div className="absolute bottom-8 left-8 pr-8">
                    <p className="text-2xl font-extrabold text-white">Dedicated to Engineering Perfection.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reuse existing components */}
        <div className="pb-20">
          <WhyChooseUs />
        </div>
        <div className="pb-20">
          <CoreValues />
        </div>

        {/* ====== CTA Section ====== */}
        <section className="bg-[#17213f] py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Next Project?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Partner with ACE for reliable, efficient, and innovative electrical solutions.
            </p>
            <div className="mt-8">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#e4252e] px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b91c25] hover:shadow-lg"
              >
                Get in Touch Today
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
