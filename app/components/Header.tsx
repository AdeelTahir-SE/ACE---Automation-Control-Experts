'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Projects', href: '/projects' },
  { label: 'Clients', href: '/#clients' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateActive = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path !== '/' && path !== '') {
        setActiveLink(path);
      } else if (hash) {
        setActiveLink('/' + hash);
      } else {
        setActiveLink('/');
      }
    };
    updateActive();
    window.addEventListener('hashchange', updateActive);
    window.addEventListener('popstate', updateActive);
    return () => {
      window.removeEventListener('hashchange', updateActive);
      window.removeEventListener('popstate', updateActive);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-slate-200 bg-white/95 shadow-[0_10px_30px_rgba(32,36,95,0.08)] backdrop-blur'
          : 'border-transparent bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          <a
            href="/"
            className="flex min-w-0 items-center"
            onClick={() => handleNavClick('/')}
            aria-label="ACE Automation and Control Experts home"
          >
            <Image
              src="/logo.png"
              alt="ACE Automation and Control Experts"
              width={250}
              height={96}
              className="h-10 w-auto object-contain sm:h-12 md:h-14"
              priority
            />
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                  activeLink === link.href
                    ? 'bg-[#343993] text-white shadow-sm'
                    : 'text-slate-700 hover:bg-[#eef0ff] hover:text-[#343993]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/#contact"
              onClick={() => handleNavClick('/#contact')}
              className="hidden items-center rounded-md bg-[#e4252e] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_20px_rgba(228,37,46,0.18)] transition-all duration-200 hover:bg-[#b91c25] md:inline-flex"
            >
              Get a Quote
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-[#343993] transition-colors duration-200 hover:bg-[#eef0ff] lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'max-h-[560px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-1 px-4 py-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`block rounded-md px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                activeLink === link.href
                  ? 'bg-[#eef0ff] text-[#343993]'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-[#343993]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => handleNavClick('/#contact')}
            className="mt-2 block rounded-md bg-[#e4252e] px-5 py-3 text-center text-sm font-bold text-white transition-colors duration-200 hover:bg-[#b91c25]"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}