'use client';

const values = [
  {
    title: 'Integrity',
    description: 'We uphold the highest standards of honesty and strong moral principles in all our actions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Accountability',
    description: 'We take responsibility for our performance in all of our decisions and actions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: 'Passion',
    description: 'We put our hearts and minds into our work to deliver the best possible solutions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: 'Love',
    description: 'We foster a caring environment where our team and clients are treated with utmost respect.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-lg bg-[#f8f9fa] p-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 sm:p-8 lg:p-12">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#343993]">
            <span className="h-0.5 w-10 bg-[#e4252e]" />
            Our Core Values
            <span className="h-0.5 w-10 bg-[#e4252e]" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#17213f] sm:text-4xl">The Principles That Guide Us</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ring-1 ring-slate-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#e4252e] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f5f7fb] text-[#343993] transition-colors duration-300 group-hover:bg-[#343993] group-hover:text-white">
                <div className="h-8 w-8">{value.icon}</div>
              </div>
              <h3 className="mb-3 text-xl font-extrabold text-[#17213f]">{value.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
