'use client';

const features = [
  { value: '10+', label: 'Years of Experience', icon: 'M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z' },
  { value: '100+', label: 'Projects Completed', icon: 'M9 12.75 11.25 15 15 9.75M4 6h16M5 6v14h14V6' },
  { value: 'Skilled', label: 'Engineers', icon: 'M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4 20a8 8 0 0 1 16 0' },
  { value: 'Quality', label: 'Materials', icon: 'M12 3 4.5 6v5.5c0 4.6 3.1 8.8 7.5 9.8 4.4-1 7.5-5.2 7.5-9.8V6L12 3Z' },
  { value: 'On-Time', label: 'Delivery', icon: 'M12 6v6l3 2m7-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z' },
  { value: '24/7', label: 'Support', icon: 'M4 13v2a3 3 0 0 0 3 3h1v-8H7a3 3 0 0 0-3 3Zm16 0v2a3 3 0 0 1-3 3h-1v-8h1a3 3 0 0 1 3 3ZM6 10a6 6 0 0 1 12 0' },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-lg bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 sm:p-8">
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#343993]">
            <span className="h-0.5 w-10 bg-[#e4252e]" />
            Why Choose ACE
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#17213f] sm:text-4xl">Engineering Excellence You Can Rely On</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {features.map((feature) => (
            <article key={feature.value} className="flex min-h-44 flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#343993]/35 hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full text-[#343993] ring-2 ring-[#343993]/15">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} viewBox="0 0 24 24">
                  <path d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-[#343993]">{feature.value}</h3>
              <p className="mt-1 text-sm font-medium leading-5 text-slate-600">{feature.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}