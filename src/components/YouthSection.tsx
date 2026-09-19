import React from 'react';
import { Phone, CheckCircle2, Award } from 'lucide-react';
import { clubData } from '../data/clubContent';

export const YouthSection: React.FC = () => {
  return (
    <section id="jeunes" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Alternance 1: Photo à GAUCHE, Contenu à DROITE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Photo Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden bg-white border-4 border-royal-600 shadow-xl p-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/photos/club-match-1.jpeg"
                  alt="Jeunes élèves de l'AUCA Échecs concentrés pendant une ronde"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-950 shadow-md">
                    École d'Échecs
                  </span>
                  <span className="text-xs text-white font-bold drop-shadow-sm bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    Séance du samedi matin
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-royal-100 border-2 border-royal-300 text-royal-900 text-xs font-black uppercase tracking-wider">
              <Award className="w-4 h-4 text-royal-600" />
              <span>Section Jeunesse & Pédagogie</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-ink-950 tracking-tight leading-snug">
              Développer la réflexion, <br />
              <span className="text-royal-600 font-black">la patience et la logique.</span>
            </h2>

            <p className="text-ink-800 text-sm sm:text-base leading-relaxed font-medium">
              Les échecs sont bien plus qu’un jeu : ils offrent à l’enfant un outil puissant pour structurer sa pensée, canaliser son attention et prendre confiance en ses capacités décisionnelles.
            </p>

            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-white border-2 border-blue-200 flex items-start gap-3.5 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-royal-600 shrink-0 mt-0.5 stroke-[2.5]" />
                <div>
                  <h4 className="text-sm font-black text-ink-950">Apprentissage progressif par niveau</h4>
                  <p className="text-xs text-ink-700 font-semibold mt-0.5">De la découverte des pièces aux finales complexes, chaque élève avance à son rythme.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-white border-2 border-amber-200 flex items-start gap-3.5 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 stroke-[2.5]" />
                <div>
                  <h4 className="text-sm font-black text-ink-950">Impact direct sur la concentration scolaire</h4>
                  <p className="text-xs text-ink-700 font-semibold mt-0.5">Amélioration de la mémoire de travail, de la patience et du raisonnement spatial.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-white border-2 border-emerald-200 flex items-start gap-3.5 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                <div>
                  <h4 className="text-sm font-black text-ink-950">Émulation et respect de l’adversaire</h4>
                  <p className="text-xs text-ink-700 font-semibold mt-0.5">Apprentissage des règles du tournoi, du fair-play et de la gestion de l'horloge.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${clubData.contact.phoneRaw}`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 active:scale-95 transition-all shadow-amber-cta"
              >
                <Phone className="w-4 h-4 stroke-[3]" />
                <span>Inscrire mon enfant</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
