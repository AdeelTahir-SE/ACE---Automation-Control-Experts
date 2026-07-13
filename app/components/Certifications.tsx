'use client';

const certifications = [
  { abbr: 'ISO', name: '9001:2015 Certified' },
  { abbr: 'IEC', name: 'International Standards' },
  { abbr: 'CE', name: 'Certified Products' },
  { abbr: 'TUV', name: 'TUV Certified' },
  { abbr: 'RoHS', name: 'RoHS Compliant' },
];

export default function Certifications() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-lg bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 sm:p-8">
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#343993]">
              <span className="h-0.5 w-10 bg-[#e4252e]" />
              Certifications &amp; Quality
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#17213f] sm:text-4xl">Committed to Quality &amp; Safety</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {certifications.map((cert) => (
              <div key={cert.abbr} className="flex min-h-32 flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm">
                <span className="text-3xl font-black text-[#343993]">{cert.abbr}</span>
                <span className="mt-2 text-xs font-semibold leading-4 text-slate-600">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div id="contact" className="relative overflow-hidden rounded-lg bg-[#20248a] p-8 text-white shadow-[0_12px_30px_rgba(32,36,138,0.18)] sm:p-10">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(32,36,138,0.98)_0%,rgba(32,36,138,0.88)_55%,rgba(228,37,46,0.20)_100%)]" />
          <div className="absolute -right-12 bottom-0 h-56 w-56 rounded-full border border-white/10" />
          <div className="relative max-w-md">
            <h3 className="text-2xl font-extrabold text-white">LET&apos;S POWER YOUR NEXT PROJECT</h3>
            <p className="mt-3 text-sm leading-6 text-white/80">Get reliable electrical solutions tailored to your needs.</p>
            <a href="mailto:info@aceautomation.com.pk" className="mt-7 inline-flex rounded-md bg-[#e4252e] px-7 py-3 text-sm font-extrabold text-white shadow-lg transition-colors hover:bg-[#b91c25]">Get a Free Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
}