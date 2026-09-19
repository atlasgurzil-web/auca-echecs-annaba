import React from 'react';
import { Shield, Sparkles } from 'lucide-react';
import { clubData } from '../data/clubContent';

export const About: React.FC = () => {
  const values = [
    {
      title: "Rigueur & Esprit d'analyse",
      description: "Apprendre à évaluer calmement chaque position, anticiper les coups et faire preuve de lucidité sous pression.",
    },
    {
      title: "Pédagogie & Écoute",
      description: "Un encadrement attentif et bienveillant qui valorise l'effort, la régularité et le plaisir d'apprendre.",
    },
    {
      title: "Fair-play & Dépassement",
      description: "Le respect absolu de l'adversaire, l'humilité dans la victoire et la persévérance constructive dans la défaite.",
    },
  ];

  return (
    <section id="a-propos" className="py-20 bg-navy-900/50 relative border-t border-navy-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-gold-400" />
            <span>Institution Sportive</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            À propos de l'<span className="text-gold-gradient">AUCA Échecs</span>
          </h2>

          <div className="text-center">
            <p className="text-base sm:text-lg text-gold-400 font-arabic mb-2">
              {clubData.name.arabic}
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
              {clubData.name.full}
            </p>
          </div>

          {/* Official presentation text */}
          <div className="bg-navy-950/80 border border-gold-500/20 rounded-2xl p-6 sm:p-8 shadow-xl">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light italic">
              « Le Club sportif Amal Itihad Achbal Annaba (AUCA) développe la pratique des échecs à Annaba et accompagne les joueurs de tous âges dans leur progression, de l’apprentissage à la compétition. »
            </p>
          </div>

          {/* Club Pillars & Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-navy-950/60 border border-navy-850 hover:border-gold-500/30 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-navy-900 border border-gold-500/20 flex items-center justify-center mb-3">
                  <Sparkles className="w-4 h-4 text-gold-400" />
                </div>
                <h3 className="text-sm font-bold text-white font-display mb-1.5">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
