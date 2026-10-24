import React, { useState, useEffect } from 'react';
import { VynkLogo } from './VynkLogo';
import { ArrowRight, Menu, X, Mail } from 'lucide-react';
import { VYNK_CONTACT_EMAIL } from '../data/content';

interface HeaderProps {
  onOpenConsultation: (service?: 'cloud-spend' | 'sustainability' | 'both') => void;
  onOpenExportGuide?: () => void;
  onOpenTerms?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenConsultation,
  onOpenTerms,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Cloud Spend', href: '#cloud-spend' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Value Calculator', href: '#calculator' },
    { name: 'FAQ', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
    { name: 'Terms & Conditions', href: '#terms' },
  ];

  return (
    <>
      {/* Top Banner: Global Advisory Credentials (Clean Single-Line) */}
      <div className="bg-[#090b0e] border-b border-zinc-800/80 text-[11px] sm:text-xs py-1.5 px-4 text-zinc-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center gap-1.5 text-[#FF5E14] font-semibold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E14] animate-pulse" />
              Ex-Hyperscaler Deal Support
            </span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span className="hidden sm:inline text-zinc-300 truncate">
              AWS • Google Cloud • Azure • 10+ Countries
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 font-mono text-[11px]">
            <a
              href={`mailto:${VYNK_CONTACT_EMAIL}`}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-[#FF5E14] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#FF5E14]" />
              <span className="hidden xs:inline">{VYNK_CONTACT_EMAIL}</span>
              <span className="xs:hidden">Contact Deals</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0c0e12]/95 backdrop-blur-md border-b border-zinc-800 shadow-2xl shadow-black/80 py-2.5 sm:py-3'
            : 'bg-[#0c0e12]/75 backdrop-blur-sm border-b border-zinc-800/50 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="group focus:outline-none shrink-0" aria-label="Vynk Cloud Home">
            <VynkLogo size="md" showSubtitle={false} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              if (link.name === 'Terms & Conditions' && onOpenTerms) {
                return (
                  <button
                    key={link.name}
                    onClick={onOpenTerms}
                    className="text-sm font-medium text-zinc-300 hover:text-[#FF5E14] transition-colors duration-150 tracking-wide whitespace-nowrap cursor-pointer"
                  >
                    {link.name}
                  </button>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-zinc-300 hover:text-[#FF5E14] transition-colors duration-150 tracking-wide whitespace-nowrap"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Desktop & Mobile CTA / Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Desktop CTA Button */}
            <button
              onClick={() => onOpenConsultation('cloud-spend')}
              className="hidden sm:inline-flex group items-center gap-2 px-4 py-2 rounded-xl bg-[#FF5E14] hover:bg-[#ff722b] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_2px_12px_rgba(255,94,20,0.3)] hover:shadow-[0_4px_20px_rgba(255,94,20,0.45)] hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <span>Book 15-Min Consult</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Quick Consult CTA (visible only on small screens < 640px) */}
            <button
              onClick={() => onOpenConsultation('cloud-spend')}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-[#FF5E14] hover:bg-[#ff722b] text-white font-bold text-[11px] uppercase tracking-wider transition-all shadow-md shadow-[#FF5E14]/25"
            >
              Book 15-Min
            </button>

            {/* Mobile Hamburger Toggle (minimum 44px touch target) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800/80 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-zinc-800 bg-[#0c0e12]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-150">
            {navLinks.map((link) => {
              if (link.name === 'Terms & Conditions' && onOpenTerms) {
                return (
                  <button
                    key={link.name}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenTerms();
                    }}
                    className="w-full text-left block px-3 py-2.5 rounded-xl text-base font-medium text-zinc-200 hover:bg-zinc-800/80 hover:text-[#FF5E14] transition-colors"
                  >
                    {link.name}
                  </button>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-base font-medium text-zinc-200 hover:bg-zinc-800/80 hover:text-[#FF5E14] transition-colors"
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4 border-t border-zinc-800 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation('cloud-spend');
                }}
                className="w-full py-3 rounded-xl bg-[#FF5E14] hover:bg-[#ff722b] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#FF5E14]/25"
              >
                <span>Book 15-Min Consult</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-zinc-400">
                <Mail className="w-3.5 h-3.5 text-[#FF5E14]" />
                <span>{VYNK_CONTACT_EMAIL}</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

