'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Projects', href: '#projects' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || '#home');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group" onClick={() => handleNavClick('#home')}>
            {/* Lightning Bolt Icon */}
            <svg
              className="w-8 h-8 text-[#F57C00] shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-sm md:text-base font-bold text-[#0D1B2A] tracking-tight">
                ElectroTech
              </span>
              <span className="text-[10px] md:text-xs text-[#6b7280] font-medium hidden sm:block">
                Powering Industries. Building Tomorrow.
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeLink === link.href
                    ? 'text-[#F57C00] bg-orange-50'
                    : 'text-[#333] hover:text-[#F57C00] hover:bg-orange-50/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side: CTA + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Get a Quote Button */}
            <a
              href="#contact"
              onClick={() => handleNavClick('#contact')}
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#F57C00] text-white text-sm font-semibold rounded-lg hover:bg-[#E65100] transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Get a Quote
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#333] hover:text-[#F57C00] hover:bg-orange-50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeLink === link.href
                  ? 'text-[#F57C00] bg-orange-50'
                  : 'text-[#333] hover:text-[#F57C00] hover:bg-orange-50/50'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 pb-1">
            <a
              href="#contact"
              onClick={() => handleNavClick('#contact')}
              className="block w-full text-center px-5 py-2.5 bg-[#F57C00] text-white text-sm font-semibold rounded-lg hover:bg-[#E65100] transition-colors duration-200"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
