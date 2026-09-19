import React from 'react';
import { Phone, ArrowDown, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import { clubData } from '../data/clubContent';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-royal-50/70 via-white to-royal-50/40 bg-chess-dots border-b border-royal-100"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] md:w-[750px] h-[550px] bg-royal-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Official Badge with Lion Emblem */}
            <div className="inline-flex items-center gap-2.5 bg-amber-100 border-2 border-amber-400 rounded-full px-4 py-1.5 shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-amber-600 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-wider text-amber-950">
                Club Sportif Officiel — Section Échecs Annaba
              </span>
            </div>

            {/* Main Headline (Vivid, Solid & High Visibility) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-ink-950 tracking-tight leading-[1.14]">
              L'art des échecs à Annaba, <br />
              <span className="text-royal-600 font-black">de l'initiation au tournoi.</span>
            </h1>

            {/* Subtitle with High Contrast */}
            <p className="text-base sm:text-lg text-ink-800 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Le Club Sportif Amal Itihad Achbal Annaba (AUCA) forme les jeunes et accueille les adultes dans un cadre rigoureux, bienveillant et passionné, sous la direction de Monsieur Bentboula.
            </p>

            {/* Key Facts Badges (Colorful & High Contrast) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs sm:text-sm font-bold">
              <div className="flex items-center gap-2 bg-white border-2 border-royal-300 text-royal-900 px-3.5 py-2 rounded-xl shadow-xs">
                <Calendar className="w-4 h-4 text-royal-600 stroke-[2.5]" />
                <span>Mardi (17h) & Samedi (10h)</span>
              </div>
              <div className="flex items-center gap-2 bg-white border-2 border-emerald-400 text-emerald-950 font-black px-3.5 py-2 rounded-xl shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                <span>2 000 DA / mois</span>
              </div>
              <div className="flex items-center gap-2 bg-white border-2 border-amber-300 text-amber-950 font-black px-3.5 py-2 rounded-xl shadow-xs">
                <Sparkles className="w-4 h-4 text-amber-600 stroke-[2.5]" />
                <span>Enfants, Ados & Adultes</span>
              </div>
            </div>

            {/* Direct Big Colorful Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href={`tel:${clubData.contact.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-cta hover:shadow-2xl active:scale-98 transition-all border-2 border-amber-300 group"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3] text-slate-950 group-hover:rotate-12 transition-transform" />
                <span>Appeler le Coach</span>
              </a>

              <a
                href="#jeunes"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg text-white bg-royal-600 hover:bg-royal-700 shadow-royal-cta active:scale-98 transition-all"
              >
                <span>Découvrir le club</span>
                <ArrowDown className="w-5 h-5 stroke-[2.5]" />
              </a>
            </div>

          </div>

          {/* Large Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Photo Card with Royal Blue and Amber Border */}
              <div className="relative rounded-3xl overflow-hidden bg-white border-4 border-royal-600 shadow-2xl p-2">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src="/photos/club-match-duel.jpeg"
                    alt="Jeunes joueurs d'échecs en duel officiel au club AUCA Annaba"
                    className="w-full h-full object-cover"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  
                  {/* Photo Caption Badge */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-left">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded-full inline-block mb-1 shadow-sm">
                        Partie Officielle
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-white drop-shadow-sm">
                        Concentration et esprit de compétition au club
                      </p>
                    </div>
                    <span className="text-sm font-arabic font-bold text-white bg-royal-600 px-3 py-1 rounded-xl border border-white/30 whitespace-nowrap hidden sm:inline shadow-sm">
                      عنابة
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
