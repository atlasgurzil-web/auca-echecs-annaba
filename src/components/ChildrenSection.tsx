import React from 'react';
import { Phone, CheckCircle, Sparkles, HeartHandshake, Award } from 'lucide-react';
import { clubData } from '../data/clubContent';

export const ChildrenSection: React.FC = () => {
  const highlights = [
    { title: "Apprentissage progressif", desc: "Acquisition pas à pas des règles et des combinaisons tactiques." },
    { title: "Entraînements structurés", desc: "Séances régulières encadrées avec pédagogie et bienveillance." },
    { title: "Exercices adaptés au niveau", desc: "Débutant absolu ou initié, chaque enfant progresse à son rythme." },
    { title: "Tournois stimulants", desc: "Expérience du jeu officiel et apprentissage du fair-play en compétition." },
    { title: "Progression individuelle", desc: "Suivi attentif de l'évolution de chaque jeune par l'entraîneur." },
    { title: "Ambiance motivante", desc: "Camaraderie saine, respect mutuel et émulation collective." },
  ];

  return (
    <section id="enfants" className="py-20 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image & Photo showcase column */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              
              {/* Main Photo Card */}
              <div className="rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl bg-navy-900 p-2">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                  <img
                    src="/photos/club-match-1.jpeg"
                    alt="Jeunes élèves concentrés en partie d'échecs au club AUCA"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider mb-2">
                      <Award className="w-3.5 h-3.5" />
                      École d'Échecs Jeunesse
                    </span>
                    <p className="text-white text-sm font-semibold">
                      Séances de tournoi et émulation sportive au sein du club AUCA
                    </p>
                  </div>
                </div>
              </div>

              {/* Overlapping Floating Quote Card */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-navy-900/95 border border-gold-400/40 rounded-xl p-4 shadow-xl max-w-xs backdrop-blur-md hidden sm:block">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wide">
                      Développement cognitif
                    </p>
                    <p className="text-[11px] text-slate-300 mt-1">
                      Idéal pour canaliser l'énergie et renforcer les compétences scolaires de l'enfant.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Text & Content Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Section Jeunesse & Pédagogie</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-snug">
              Pour les jeunes joueurs : <br />
              <span className="text-gold-gradient">apprendre, progresser, jouer</span>
            </h2>

            {/* Parent-oriented text */}
            <div className="bg-navy-900/70 border border-navy-800 rounded-xl p-4 sm:p-5">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light italic">
                « Les échecs sont bien plus qu’un jeu. Ils permettent à l’enfant de développer sa concentration, sa logique, sa patience et sa capacité à réfléchir avant d’agir. »
              </p>
            </div>

            {/* 6 Key Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-navy-900/40 border border-navy-800/80 hover:border-gold-500/30 transition-colors flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Inscription */}
            <div className="pt-3">
              <a
                href={`tel:${clubData.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base uppercase tracking-wider bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-navy-950 shadow-xl shadow-gold-500/20 hover:brightness-105 active:scale-98 transition-all border border-gold-300/50"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" />
                <span>Inscrire mon enfant</span>
              </a>
              <span className="block sm:inline-block sm:ml-4 text-xs text-slate-400 mt-2 sm:mt-0">
                Contact direct avec Monsieur Bentboula
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
