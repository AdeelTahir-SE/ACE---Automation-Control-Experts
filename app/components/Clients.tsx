'use client';

import Image from 'next/image';

const clients = ['pepsi', 'wasa', 'Coca-Cola', 'JAICA', 'GANIFIELD MILL'];

export default function Clients() {
  return (
    <section id="clients" className="bg-[#f5f7fb] px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-[#20248a] shadow-[0_12px_30px_rgba(32,36,138,0.18)]">
        <div className="relative px-6 py-8 sm:px-8">
          <div className="absolute -top-16 left-[42%] h-28 w-56 rounded-b-[80px] bg-[#f5f7fb]" />
          <div className="relative z-10">
            <p className="text-xs font-extrabold uppercase tracking-wide text-white/85">Trusted by industry leaders</p>
            <h2 className="mt-1 text-3xl font-extrabold text-white">Our Valued Clients</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
              {clients.map((client) => (
                <div key={client} className="flex h-20 items-center justify-center rounded-md bg-white px-5 text-center shadow-sm">
                  <span className={`font-extrabold ${client === 'Coca-Cola' ? 'text-2xl italic text-[#e4252e]' : 'text-xl text-[#343993]'}`}>{client}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}