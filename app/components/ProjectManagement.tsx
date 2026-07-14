'use client';

const strategies = [
  {
    id: 1,
    title: 'Structure & Scheduling',
    description: 'Detailed structure and scheduling of projects for efficient execution.',
  },
  {
    id: 2,
    title: 'Documentation',
    description: 'Comprehensive documentation of targets and project milestones.',
  },
  {
    id: 3,
    title: 'Monitoring & Control',
    description: 'Continuous project monitoring and control to stay on track.',
  },
  {
    id: 4,
    title: 'Logistics & Services',
    description: 'Strategic planning of logistics and support services.',
  },
  {
    id: 5,
    title: 'Timely Completion',
    description: 'Ensuring timely completion without compromising on quality.',
  },
  {
    id: 6,
    title: 'Trial Runs',
    description: 'Thorough trial run of each machine and system before handover.',
  },
  {
    id: 7,
    title: 'Safe Environment',
    description: 'Maintaining a safe working environment throughout the project lifecycle.',
  },
];

export default function ProjectManagement() {
  return (
    <section className="bg-[#f5f7fb] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-lg bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 sm:p-8 lg:p-12">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#343993]">
            <span className="h-0.5 w-10 bg-[#e4252e]" />
            How We Work
            <span className="h-0.5 w-10 bg-[#e4252e]" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#17213f] sm:text-4xl">Project Management Strategy</h2>
          <p className="mt-4 max-w-2xl text-base text-slate-600">
            Our comprehensive approach ensures every project is delivered safely, on time, and to the highest quality standards.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {strategies.map((strategy, index) => (
            <div key={strategy.id} className={`group relative rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#343993]/30 hover:shadow-lg ${index === 6 ? 'sm:col-span-2 lg:col-span-3 xl:col-span-1' : ''}`}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#343993] text-sm font-bold text-white shadow-md">
                {strategy.id}
              </div>
              <h3 className="mb-2 text-lg font-extrabold text-[#17213f] group-hover:text-[#e4252e] transition-colors">{strategy.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{strategy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
