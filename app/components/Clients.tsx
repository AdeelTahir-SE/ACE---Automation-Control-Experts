'use client';


import Image from 'next/image';

const clients = [
  { name: 'Pepsi Cola', logo: '/pepsi-cola.png' },
  { name: 'Punjab WASA', logo: '/punjab-wasa.jpg' },
  { name: 'JICA', logo: '/jica.png' },
  { name: 'Ghani Mills', logo: '/ghani-mills.jpg' },
  { name: 'Zong 5G', logo: '/zong-5g.jpg' },
  { name: 'AR Apparels', logo: '/ar-apparels.jpg' },
  { name: 'Kamal Textile Mills', logo: '/kamal-textile-mills.png' },
  { name: 'Haleeb Foods', logo: '/haleeb-foods.jpg' },
  { name: 'Kubota', logo: '/kubota.png' },
  { name: 'Deans Industries', logo: '/deans-industries.png' },
  { name: 'Mehran Bottlers', logo: '/mehran-bottlers.jpg' },
  { name: 'Daewoo Battery', logo: '/daewoo-battery.jpg' },
  { name: 'Interloop', logo: '/interloop.jpg' },
  { name: 'GMSA', logo: '/gmsa.jpg' },
  { name: 'Jilani Energy', logo: '/jilani-energy.png' },
  { name: 'Red Oval Client', logo: '/red-oval-client.jpg' },
  { name: 'GMP', logo: '/gmp.jpg' },
  { name: 'Torishima', logo: '/torishima.png' },
  { name: 'Tobishima', logo: '/tobishima.png' },
  { name: 'g', logo: '/g.png' },
  { name: 'Multan Chemicals', logo: '/multan-chemicals.png' },
  { name: 'Sargodha Processing', logo: '/sargodha-processing.png' },
];

export default function Clients() {
  return (
    <section id="clients" className="w-full bg-[#f5f7fb] py-3 ">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto min-w-full overflow-hidden  bg-[#20248a] shadow-[0_12px_30px_rgba(32,36,138,0.18)]">
        <div className="relative px-6 py-8 sm:px-8">
          <div className="absolute -top-16 left-[42%] h-28 w-56 rounded-b-[80px] bg-[#f5f7fb]" />
          <div className="relative z-10">
            <p className="text-xs font-extrabold uppercase tracking-wide text-white/85">Trusted by industry leaders</p>
            <h2 className="mt-1 text-3xl font-extrabold text-white">Our Valued Clients</h2>
            <div className="mt-10 relative w-full overflow-hidden">
              <div className="flex w-max animate-marquee gap-6 py-4 hover:[animation-play-state:paused]">
                {[...clients, ...clients].map((client, i) => (
                  <div key={`${client.name}-${i}`} className="group relative flex h-24 w-40 flex-shrink-0 items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-[#e4252e]">
                    <Image 
                      src={client.logo} 
                      alt={client.name} 
                      fill 
                      className="object-contain p-4 transition-all duration-300 group-hover:scale-110" 
                      sizes="160px"
                    />
                  </div>
                ))}
              </div>
            </div>
       
          </div>
        </div>
      </div>
    </section>
  );
}
