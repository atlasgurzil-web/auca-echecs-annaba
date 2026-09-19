import React from 'react';
import { Phone, UserCheck, CheckCircle2 } from 'lucide-react';
import { clubData } from '../data/clubContent';

export const CoachSection: React.FC = () => {
  return (
    <section id="coach" className="py-20 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Alternance 2: Contenu à GAUCHE, Photo à DROITE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-100 border-2 border-royal-300 text-royal-900 text-xs font-black uppercase tracking-wider shadow-xs">
              <UserCheck className="w-4 h-4 text-royal-700 stroke-[2.5]" />
              <span>Direction Technique & Pédagogique</span>
            </div>

            <div>
              <span className="text-xs sm:text-sm font-black text-royal-600 uppercase tracking-widest block mb-1">
                {clubData.contact.coachTitle}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-ink-950 tracking-tight">
                {clubData.contact.coachName}
              </h2>
            </div>

            <p className="text-ink-800 text-sm sm:text-base leading-relaxed font-medium">
              Responsable de la formation des joueurs de l'AUCA, Monsieur Bentboula transmet la passion du noble jeu à travers une pédagogie éprouvée. Chaque séance alterne explications théoriques claires, étude concrète des parties et pratique intensive à la pendule.
            </p>

            {/* Coach Quote with Strong Border and White Card */}
            <div className="border-l-4 border-amber-500 bg-white p-5 rounded-r-2xl border border-slate-200 shadow-md">
              <p className="text-sm sm:text-base text-ink-950 italic font-bold leading-relaxed">
                « Aux échecs, chaque coup est une décision. Nous apprenons à nos jeunes à observer calmement, anticiper les coups adverses et avoir confiance en leurs choix. »
              </p>
              <p className="text-xs text-amber-700 font-black uppercase tracking-wider mt-2.5">
                — M. Kheir Eddine Bentboula, Entraîneur Référent AUCA
              </p>
            </div>

            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-xl bg-white border-2 border-slate-200 flex items-start gap-3.5 shadow-xs hover:border-royal-400 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-royal-600 shrink-0 mt-0.5 stroke-[2.5]" />
                <p className="text-xs sm:text-sm text-ink-900 font-medium">
                  <strong className="text-ink-950 font-black">Évaluation initiale & groupes adaptés :</strong> Chaque nouvel adhérent est évalué par l'entraîneur pour rejoindre le groupe correspondant à ses capacités (initiation ou compétition).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border-2 border-slate-200 flex items-start gap-3.5 shadow-xs hover:border-royal-400 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-royal-600 shrink-0 mt-0.5 stroke-[2.5]" />
                <p className="text-xs sm:text-sm text-ink-900 font-medium">
                  <strong className="text-ink-950 font-black">Suivi personnalisé en tournoi :</strong> Analyse individuelle des parties jouées, travail ciblé sur les ouvertures et renforcement tactique.
                </p>
              </div>
            </div>

            {/* Vibrant Amber CTA Button with Coach Phone */}
            <div className="pt-3">
              <a
                href={`tel:${clubData.contact.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 rounded-2xl font-black text-sm sm:text-base uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 active:scale-95 transition-all shadow-amber-cta border-2 border-amber-300 group"
              >
                <Phone className="w-5 h-5 stroke-[3] text-slate-950 group-hover:rotate-12 transition-transform" />
                <span>Joindre Monsieur Bentboula</span>
              </a>
            </div>
          </div>

          {/* Photo Column */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative max-w-sm mx-auto rounded-3xl overflow-hidden bg-white border-4 border-royal-600 shadow-2xl p-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src="/coach.jpeg"
                  alt="Monsieur Kheir Eddine Bentboula - Entraîneur officiel de l'AUCA Échecs Annaba"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded-full inline-block mb-1.5 shadow-sm">
                    Entraîneur Officiel
                  </span>
                  <p className="text-base font-black text-white uppercase tracking-wide drop-shadow-sm">
                    M. Kheir Eddine Bentboula
                  </p>
                  <p className="text-xs text-royal-200 font-bold">
                    Directeur Pédagogique AUCA Annaba
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
