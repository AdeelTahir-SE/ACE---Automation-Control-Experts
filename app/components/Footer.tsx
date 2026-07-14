'use client';

import Image from 'next/image';
import { useState, type ChangeEvent, type FormEvent } from 'react';

const quickLinks = ['Home', 'About Us', 'Services', 'Products', 'Projects', 'Clients', 'Contact'];
const services = ['HT Electrical Services', 'LT Electrical Services', 'Industrial Automation', 'Commercial & Residential', 'Building Automation', 'Health and Safety', 'Energy Conservation'];

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({ name: '', email: '', message: '' });
  };

  const inputClass = 'w-full rounded-md border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/45 focus:border-[#e4252e]';

  return (
    <footer className="bg-[#061f43] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.8fr_0.9fr_1fr_1.2fr]">
          <div>
            <Image src="/logo.png" alt="ACE Automation & Control Experts" width={190} height={78} className="mb-5 h-auto w-36 rounded bg-white p-2" />
            <p className="max-w-xs text-sm leading-6 text-white/70">Delivering reliable, efficient &amp; innovative electrical solutions for industries across the globe.</p>
            <div className="mt-5 flex gap-3">
              {['f', 'in', 'yt', 'x'].map((item) => (
                <a key={item} href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs font-bold text-white/80 transition-colors hover:bg-[#e4252e]" aria-label="Social link">{item}</a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-wide text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => {
                const hrefMap: Record<string, string> = {
                  'Home': '/',
                  'About Us': '/about',
                  'Services': '/services',
                  'Products': '/products',
                  'Projects': '/projects',
                  'Clients': '/#clients',
                  'Contact': '/#contact',
                };
                return (
                  <li key={link}><a href={hrefMap[link] || '/'} className="text-sm text-white/70 hover:text-white">{link}</a></li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-wide text-white">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}><a href="/services" className="text-sm text-white/70 hover:text-white">{service}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-wide text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li>123 Industrial Area,<br />Lahore, Pakistan</li>
              <li><a href="tel:+923001234567" className="hover:text-white">+92 300 1234567</a></li>
              <li><a href="mailto:info@aceautomation.com.pk" className="hover:text-white">info@aceautomation.com.pk</a></li>
              <li><a href="https://www.aceautomation.com.pk" className="hover:text-white">www.aceautomation.com.pk</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-wide text-white">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className={inputClass} required />
              <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className={inputClass} required />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={3} className={`${inputClass} resize-none`} required />
              <button type="submit" className="w-full rounded-md bg-[#e4252e] px-4 py-3 text-sm font-extrabold text-white transition-colors hover:bg-[#b91c25]">Send Message</button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-white/55">
          (c) 2024 ACE Automation &amp; Control Experts. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}