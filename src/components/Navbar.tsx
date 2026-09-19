import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { clubData } from '../data/clubContent';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'École Jeunesse', href: '#jeunes' },
    { name: 'L’Entraîneur', href: '#coach' },
    { name: 'Compétition & Club', href: '#competition' },
    { name: 'Horaires & Tarifs', href: '#tarifs-inscription' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-md border-b-2 border-royal-100 py-2.5'
          : 'bg-white/95 backdrop-blur-sm border-b border-slate-200 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Official Club Brand with Lion Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 sm:gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-600 rounded-xl p-1"
          >
            <div className="relative shrink-0">
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full p-0.5 bg-gradient-to-br from-royal-600 via-royal-700 to-royal-900 ring-2 ring-royal-300 shadow-md group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/logo-auca-lion.jpg"
                  alt="Blason officiel AUCA au Lion"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-display font-black text-sm sm:text-lg text-ink-950 tracking-wide group-hover:text-royal-600 transition-colors">
                  AUCA ÉCHECS
                </span>
                <span className="inline-flex text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white bg-royal-600 px-2 py-0.5 rounded-full shadow-xs">
                  Annaba
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-royal-800 font-arabic font-bold line-clamp-1">
                النادي الرياضي أمل اتحاد أشبال عنابة
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2 text-xs lg:text-sm font-bold text-ink-800 hover:text-royal-600 hover:bg-royal-50 rounded-xl transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call CTA - Phone Icon Only */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${clubData.contact.phoneRaw}`}
              className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-cta active:scale-95 transition-all duration-200 border-2 border-amber-300 ring-2 ring-amber-300/40 group"
              title={`Appeler directement l'entraîneur M. Bentboula : ${clubData.contact.phoneDisplay}`}
              aria-label={`Appeler directement l'entraîneur M. Bentboula au ${clubData.contact.phoneDisplay}`}
            >
              <Phone className="w-5 h-5 stroke-[2.5] text-slate-950 fill-slate-950 group-hover:rotate-12 transition-transform" />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl text-ink-900 hover:text-royal-700 hover:bg-slate-100 border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-royal-600 transition-colors"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X className="w-5 h-5 stroke-[2.5]" /> : <Menu className="w-5 h-5 stroke-[2.5]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b-2 border-royal-600 shadow-2xl transition-all">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <div className="pb-3 mb-2 border-b border-slate-200 text-center">
              <p className="text-xs font-arabic text-royal-700 font-black">
                {clubData.name.arabic}
              </p>
              <p className="text-[11px] text-ink-700 mt-0.5 font-bold">
                Section Échecs Officielle — Annaba
              </p>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 rounded-xl text-sm font-bold text-ink-900 hover:text-royal-600 hover:bg-royal-50 active:bg-royal-100 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-200">
              <a
                href={`tel:${clubData.contact.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2.5 py-4 px-4 rounded-xl font-black text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-cta active:scale-98 transition-all"
              >
                <Phone className="w-4 h-4 stroke-[3]" />
                <span>Appeler Monsieur Bentboula</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
