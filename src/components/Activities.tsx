import React from 'react';
import { BookOpen, Dumbbell, Trophy, Users, Award, Sparkles, Flag } from 'lucide-react';
import { clubData } from '../data/clubContent';

export const Activities: React.FC = () => {
  const activityIcons = [
    <BookOpen className="w-5 h-5 text-gold-400" />,
    <Dumbbell className="w-5 h-5 text-gold-400" />,
    <Trophy className="w-5 h-5 text-gold-400" />,
    <Users className="w-5 h-5 text-gold-400" />,
    <Sparkles className="w-5 h-5 text-gold-400" />,
    <Award className="w-5 h-5 text-gold-400" />,
  ];

  return (
    <section id="activites" className="py-20 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Flag className="w-3.5 h-3.5" />
            <span>Dynamique & Événements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Une activité régulière <span className="text-gold-gradient">autour des échecs</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            L’AUCA fait vivre la passion échiquéenne à Annaba à travers un programme continu d'apprentissage, de rencontres et de compétitions.
          </p>
        </div>

        {/* Season Tournament Callout Banner */}
        <div className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border-l-4 border-gold-500 rounded-2xl p-6 shadow-xl flex items-center gap-5">
          <div className="p-3.5 rounded-2xl bg-gold-500/10 text-gold-400 border border-gold-500/20 shrink-0 hidden sm:block">
            <Trophy className="w-8 h-8" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold-400">
              Esprit de compétition permanent
            </span>
            <p className="text-lg sm:text-xl font-display font-bold text-white mt-1">
              « Des tournois sont organisés régulièrement tout au long de la saison. »
            </p>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 font-light">
              Nos jeunes et adultes disputent régulièrement des rondes officielles et des tournois internes pour mesurer leur niveau, tester de nouvelles stratégies et développer le goût de la victoire.
            </p>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {clubData.activities.map((act, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-navy-900/60 border border-navy-800/90 p-6 hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-navy-950 border border-gold-500/20 flex items-center justify-center mb-4">
                  {activityIcons[idx % activityIcons.length]}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-display mb-2">
                  {act.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
