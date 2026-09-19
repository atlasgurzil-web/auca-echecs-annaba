import React from 'react';
import { Phone, ChevronUp } from 'lucide-react';
import { clubData } from '../data/clubContent';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink-950 border-t-4 border-royal-600 py-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Club Identity with Lion Logo */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-br from-amber-400 via-royal-500 to-royal-700 shadow-lg shrink-0">
              <img
                src="/logo-auca-lion.jpg"
                alt="Blason AUCA au Lion"
                className="w-full h-full object-cover rounded-full bg-white"
              />
            </div>
            <div>
              <span className="font-display font-black text-xl text-white tracking-wide block">
                AUCA ÉCHECS ANNABA
              </span>
              <span className="text-xs text-amber-400 font-arabic font-bold block mt-0.5">
                {clubData.name.arabic}
              </span>
            </div>
          </div>

          {/* Quick Direct Call Button */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${clubData.contact.phoneRaw}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider active:scale-95 transition-all shadow-amber-cta border border-amber-300 group"
            >
              <Phone className="w-4 h-4 stroke-[3] text-slate-950 group-hover:rotate-12 transition-transform" />
              <span>Appeler le Coach</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright & scroll */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {clubData.name.full} (AUCA). Tous droits réservés. Annaba, Algérie.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-amber-400 hover:border-amber-400 transition-all text-xs font-bold"
          >
            <span>Haut de page</span>
            <ChevronUp className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
