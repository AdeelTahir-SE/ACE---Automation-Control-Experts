'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    title: 'HT Electrical Services',
    description:
      'Comprehensive High Tension electrical services for demanding industrial applications.',
    features: [
      'High Tension Line Work up to 11 KV',
      'HT Panel Installation and Parameters Setting',
      'HT Cable Joints with Shrinkable Cable Jointing Kits',
      'HT Cable Laying and Termination'
    ],
    icon: 'ht',
  },
  {
    title: 'LT Electrical Services',
    description:
      'Reliable Low Tension electrical services to ensure efficient power distribution.',
    features: [
      'Power Transformer',
      'LT, PFI and MCC Panels',
      'Distribution Power Boards',
      'Cable Management System Through Cable Trays'
    ],
    icon: 'lt',
  },
  {
    title: 'Industrial Automation',
    description:
      'Advanced automation solutions to modernize and optimize your industrial processes.',
    features: [
      'Complete Automation and System Integration Solutions',
      'Design, Installation, and Programming of PLC, DCS, and SCADA Systems',
      'Expert Engineering, Panel Assembly, and On-site Technical Support',
      'Reliable Solutions Tailored to Client Requirements'
    ],
    icon: 'automation',
  },
  {
    title: 'Commercial & Residential',
    description:
      'Professional electrical installation and wiring services for commercial and residential projects.',
    features: [
      'Electrical Installation Services for Commercial Projects',
      'Electrical Installation Services for Residential Projects',
      'Internal and External Lighting Wiring',
      'UPS and Power Socket Wiring',
      'Lightning Protection and Earthing Systems'
    ],
    icon: 'building',
  },
  {
    title: 'Building Automation and Communication Systems',
    description:
      'Integrated communication and security systems for smart building management.',
    features: [
      'CCTV and Fire Alarm System Installation',
      'Computer Networking and Telephone Wiring',
      'TV Wiring and Public Sound System',
      'Building Management Systems (BMS)'
    ],
    icon: 'communication',
  },
  {
    title: 'Health and Safety',
    description:
      'Providing and maintaining a healthy and safe working environment with HSE compliance.',
    features: [
      'Minimize Health, Safety, and Environmental (HSE) Incidents',
      'Implement Workplace Health and Safety Policies',
      'Promote an Incident-Free Working Environment',
      'Ensure Compliance with HSE Standards'
    ],
    icon: 'health',
  },
  {
    title: 'Energy Conservation',
    description:
      'Energy-efficient electrical and lighting solutions to reduce costs and improve performance.',
    features: [
      'Reduce Energy Consumption and Maintenance Costs',
      'Improve Workplace Efficiency and Performance',
      'Energy Audits and Optimization',
      'Cost-Effective Energy Management Solutions'
    ],
    icon: 'energy',
  },
];

const processSteps = [
  {
    number: 1,
    title: 'Consultation',
    description: 'We listen to your requirements and assess the scope of the project.',
  },
  {
    number: 2,
    title: 'Design',
    description: 'Our engineers craft optimized designs tailored to your facility.',
  },
  {
    number: 3,
    title: 'Execution',
    description: 'Skilled technicians deliver flawless installation on schedule.',
  },
  {
    number: 4,
    title: 'Handover',
    description: 'Thorough testing, documentation and training for your team.',
  },
];

/* ------------------------------------------------------------------ */
/*  Icon helper                                                        */
/* ------------------------------------------------------------------ */

function getServiceIcon(iconName: string) {
  const props = {
    className: 'h-8 w-8',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (iconName) {
    /* Electrical System Design — drafting / blueprint */
    case 'design':
      return (
        <svg {...props}>
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );

    /* Planning & Consultation — clipboard / checklist */
    case 'planning':
      return (
        <svg {...props}>
          <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" />
          <path d="M9 12l2 2 4-4" />
          <path d="M9 17h6" />
        </svg>
      );

    /* Execution & Installation — wrench + bolt */
    case 'execution':
      return (
        <svg {...props}>
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      );

    /* SLD Design — circuit / schematic */
    case 'sld':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <path d="M14 17.5h7" />
          <path d="M17.5 14v7" />
          <path d="M10 6.5h4" />
          <path d="M6.5 10v4" />
        </svg>
      );

    /* HT Panel — high-voltage zap */
    case 'ht':
      return (
        <svg {...props}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );

    /* LT Panel — distribution / grid */
    case 'lt':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M3 15h18" />
          <path d="M9 3v18" />
          <path d="M15 3v18" />
        </svg>
      );

    /* Automation — screen/computer */
    case 'automation':
      return (
        <svg {...props}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );

    /* Building — house/commercial */
    case 'building':
      return (
        <svg {...props}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );

    /* Communication — shield/network */
    case 'communication':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      );

    /* Health & Safety — shield with cross */
    case 'health':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v6" />
          <path d="M9 11h6" />
        </svg>
      );

    /* Energy — lightbulb */
    case 'energy':
      return (
        <svg {...props}>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A6 6 0 1 0 7.5 11.5c.76.76 1.23 1.52 1.41 2.5" />
        </svg>
      );

    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f5f7fb]">
        {/* ====== Hero Banner ====== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#343993] to-[#252a77] pt-28 pb-20 text-white md:pt-36 md:pb-28">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/[0.04]" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/[0.03]" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02]" />

          {/* Grid pattern overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-sm font-medium text-white/60">
              <a href="/" className="transition-colors duration-300 hover:text-white">
                Home
              </a>
              <svg className="h-3.5 w-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-white/90">Services</span>
            </nav>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              End-to-end industrial electrical solutions — from concept design through
              commissioning to ongoing maintenance. Built on decades of engineering
              excellence.
            </p>

            {/* Accent underline */}
            <div className="mt-8 flex items-center gap-2">
              <span className="h-1 w-12 rounded-full bg-[#e4252e]" />
              <span className="h-1 w-6 rounded-full bg-white/30" />
              <span className="h-1 w-3 rounded-full bg-white/20" />
            </div>
          </div>
        </section>

        {/* ====== Services Grid ====== */}
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="mb-14 text-center">
              <span className="section-label">What We Offer</span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#17213f] sm:text-4xl">
                Comprehensive Electrical Solutions
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">
                We deliver a complete range of industrial electrical services designed to power
                your operations safely, efficiently, and reliably.
              </p>
            </div>

            {/* Cards grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, idx) => (
                <div
                  key={service.title}
                  className={`group relative rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl sm:p-8 ${
                    idx === 0
                      ? 'border-t-4 border-t-[#e4252e] border-x-transparent border-b-transparent'
                      : 'border-transparent hover:border-l-4 hover:border-l-[#e4252e]'
                  }`}
                >
                  {/* Featured badge for the first card */}
                  {idx === 0 && (
                    <span className="absolute top-4 right-4 rounded-full bg-[#e4252e]/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[#e4252e]">
                      Featured
                    </span>
                  )}

                  <div className="flex flex-col gap-5 sm:flex-row">
                    {/* Icon container */}
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        idx === 0
                          ? 'bg-[#e4252e]/10 text-[#e4252e] group-hover:bg-[#e4252e] group-hover:text-white'
                          : 'bg-[#343993]/10 text-[#343993] group-hover:bg-[#343993] group-hover:text-white'
                      }`}
                    >
                      {getServiceIcon(service.icon)}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#17213f]">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {service.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2 text-sm text-slate-600"
                          >
                            <svg
                              className="mt-0.5 h-4 w-4 shrink-0 text-[#e4252e]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== Process Section ====== */}
        <section className="relative overflow-hidden bg-white py-20 md:py-28">
          {/* Subtle bg decoration */}
          <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#343993]/[0.03]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#e4252e]/[0.02]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="mb-16 text-center">
              <span className="section-label">How We Work</span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#17213f] sm:text-4xl">
                Our Process
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-slate-500">
                A proven four-step methodology that ensures every project is delivered on time,
                on budget, and to the highest standards.
              </p>
            </div>

            {/* Steps */}
            <div className="relative grid gap-10 md:grid-cols-4 md:gap-0">
              {/* Connecting dashed line (desktop only) */}
              <div className="pointer-events-none absolute top-10 right-[12.5%] left-[12.5%] hidden h-0.5 border-t-2 border-dashed border-[#343993]/20 md:block" />

              {processSteps.map((step, idx) => (
                <div key={step.number} className="group relative flex flex-col items-center text-center">
                  {/* Numbered circle */}
                  <div
                    className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 text-2xl font-extrabold transition-all duration-300 ${
                      idx === 0
                        ? 'border-[#e4252e] bg-[#e4252e] text-white shadow-[0_8px_25px_rgba(228,37,46,0.25)]'
                        : 'border-[#343993]/20 bg-white text-[#343993] group-hover:border-[#343993] group-hover:bg-[#343993] group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(52,57,147,0.25)]'
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Arrow between circles (desktop only) */}
                  {idx < processSteps.length - 1 && (
                    <div className="pointer-events-none absolute top-8 left-[calc(50%+44px)] hidden text-[#343993]/30 md:block">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 12h14m-4-4l4 4-4 4" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}

                  <h3 className="mt-5 text-lg font-bold text-[#17213f]">{step.title}</h3>
                  <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== CTA Section ====== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#343993] to-[#252a77] py-20 md:py-24">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/[0.04]" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-white/[0.03]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e4252e]" />
              Let&apos;s Talk
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Need Expert Electrical Services?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/65">
              Tell us about your project and our engineering team will get back to you within
              24&nbsp;hours with a tailored solution.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#e4252e] px-8 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(228,37,46,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b91c25] hover:shadow-[0_14px_36px_rgba(228,37,46,0.35)]"
              >
                Get a Free Quote
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/25 px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
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
