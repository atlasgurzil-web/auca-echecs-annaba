import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { clubData } from '../data/clubContent';

export const FloatingCallButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 sm:right-6 z-40 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <a
        href={`tel:${clubData.contact.phoneRaw}`}
        className="flex items-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xl border-2 border-white ring-4 ring-amber-400/40 active:scale-95 transition-transform min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-500 group"
        aria-label={`Appeler l'entraîneur Monsieur Bentboula au ${clubData.contact.phoneDisplay}`}
      >
        <Phone className="w-5 h-5 fill-slate-950 text-slate-950 stroke-[2.5] group-hover:rotate-12 transition-transform" />
        <span className="font-black">Appeler le Coach</span>
      </a>
    </div>
  );
};
