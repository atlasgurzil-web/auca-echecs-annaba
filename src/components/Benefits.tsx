import React from 'react';
import { TrendingUp, Trophy, Brain, Users, CheckCircle2 } from 'lucide-react';
import { clubData } from '../data/clubContent';

export const Benefits: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="w-6 h-6 text-gold-400" />,
    Trophy: <Trophy className="w-6 h-6 text-gold-400" />,
    Brain: <Brain className="w-6 h-6 text-gold-400" />,
    Users: <Users className="w-6 h-6 text-gold-400" />,
  };

  const taglines: Record<string, string[]> = {
    progress: ["Ouvertures & finales", "Analyse tactique", "Progression par étapes"],
    competition: ["Tournois réguliers", "Gestion du chrono", "Esprit sportif"],
    reflection: ["Concentration accrue", "Patience & calme", "Décision autonome"],
    community: ["Ambiance conviviale", "Partage intergénérationnel", "Passion commune"],
  };

  return (
    <section id="avantages" className="py-20 bg-navy-900/60 relative border-t border-b border-navy-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <span>Excellence Échiquéenne</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">
            Pourquoi rejoindre <span className="text-gold-gradient">AUCA</span> ?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Un cadre structuré, bienveillant et stimulant pour apprendre l'art des échecs à Annaba, du tout premier coup jusqu'à la maîtrise des compétitions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clubData.benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="relative group rounded-2xl bg-navy-950/80 border border-navy-800 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-xl hover:shadow-gold-500/5"
            >
              <div>
                {/* Icon header with gold accent */}
                <div className="w-13 h-13 rounded-xl bg-navy-900 border border-gold-500/20 flex items-center justify-center p-3 mb-5 group-hover:scale-110 group-hover:border-gold-400 group-hover:bg-navy-850 transition-all duration-300 shadow-sm">
                  {iconMap[benefit.icon]}
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-wide mb-3 group-hover:text-gold-300 transition-colors">
                  {benefit.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {benefit.description}
                </p>
              </div>

              {/* Sub-bullets */}
              <div className="pt-4 border-t border-navy-850/80 space-y-2">
                {taglines[benefit.id]?.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400/80 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
