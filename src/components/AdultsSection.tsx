import React from 'react';
import { Phone, Users2, Target, Coffee, Trophy } from 'lucide-react';
import { clubData } from '../data/clubContent';

export const AdultsSection: React.FC = () => {
  const adultPillars = [
    {
      icon: <Target className="w-5 h-5 text-gold-400" />,
      title: "Initiation & Remise à niveau",
      description: "Apprenez les bases solides ou reprenez les échecs après plusieurs années, dans une atmosphère patiente et bienveillante.",
    },
    {
      icon: <Coffee className="w-5 h-5 text-gold-400" />,
      title: "Parties libres & Convivialité",
      description: "Venez disputer des parties en cadence rapide ou classique et partager l'analyse de vos coups autour d'une passion commune.",
    },
    {
      icon: <Trophy className="w-5 h-5 text-gold-400" />,
      title: "Perfectionnement & Compétition",
      description: "Pour les joueurs confirmés souhaitant approfondir leur répertoire d'ouvertures, les finales et préparer les tournois officiels.",
    },
  ];

  return (
    <section id="adultes" className="py-20 bg-navy-900/40 relative border-t border-navy-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 rounded-3xl border border-navy-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle gold glow in background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-wider">
              <Users2 className="w-3.5 h-3.5" />
              <span>Section Adultes & Amateurs</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Les échecs sont pour <span className="text-gold-gradient">tous les âges</span>
            </h2>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-light">
              « Que vous soyez débutant, amateur ou joueur confirmé, AUCA vous permet de pratiquer, progresser et rencontrer d’autres passionnés. »
            </p>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
              {adultPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-navy-900/80 border border-navy-800 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-navy-950 border border-gold-500/20 flex items-center justify-center mb-4">
                      {pillar.icon}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 font-display">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Adult CTA */}
            <div className="pt-6">
              <a
                href={`tel:${clubData.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base uppercase tracking-wider bg-navy-800 hover:bg-navy-750 text-gold-300 border border-gold-500/40 hover:border-gold-400 shadow-lg hover:shadow-gold-500/10 active:scale-98 transition-all"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" />
                <span>Rejoindre la section adulte ({clubData.contact.phoneDisplay})</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
