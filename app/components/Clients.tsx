'use client';


import Image from 'next/image';

const clients = [
  { name: 'Pepsi Cola', logo: '/pepsi-cola.png' },
  { name: 'Punjab WASA', logo: '/punjab-wasa.jfif' },
  { name: 'JICA', logo: '/jica.png' },
  { name: 'Ghani Mills', logo: '/ghani-mills.jfif' },
  { name: 'Zong 5G', logo: '/zong-5g.jfif' },
  { name: 'AR Apparels', logo: '/ar-apparels.jfif' },
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
];

export default function Clients() {
  return (
    <section id="clients" className="bg-[#f5f7fb] px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-[#20248a] shadow-[0_12px_30px_rgba(32,36,138,0.18)]">
        <div className="relative px-6 py-8 sm:px-8">
          <div className="absolute -top-16 left-[42%] h-28 w-56 rounded-b-[80px] bg-[#f5f7fb]" />
          <div className="relative z-10">
            <p className="text-xs font-extrabold uppercase tracking-wide text-white/85">Trusted by industry leaders</p>
            <h2 className="mt-1 text-3xl font-extrabold text-white">Our Valued Clients</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {clients.map((client) => (
                <div key={client.name} className="group relative flex h-24 items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-[#e4252e]">
                  <Image 
                    src={client.logo} 
                    alt={client.name} 
                    fill 
                    className="object-contain p-4 transition-all duration-300 group-hover:scale-110" 
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 14vw"
                  />
                </div>
              ))}
            </div>
       
          </div>
        </div>
      </div>
    </section>
  );
}
