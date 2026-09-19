import React from 'react';
import { Trophy, CheckCircle2, Phone } from 'lucide-react';
import { clubData } from '../data/clubContent';

export const CompetitionSection: React.FC = () => {
  return (
    <section id="competition" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Alternance 3: Photo à GAUCHE, Contenu à DROITE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Photos Duo Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-3xl overflow-hidden bg-white border-4 border-royal-600 shadow-xl p-2">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                  <img
                    src="/photos/club-match-2.jpeg"
                    alt="Rondes de tournoi et sérieux des jeunes joueurs de l'AUCA"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-black uppercase tracking-wider text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded-full shadow-md">
                    Ronde Officielle
                  </span>
                </div>
                <p className="text-xs text-ink-950 font-black text-center pt-2.5">
                  Cadence officielle & concentration
                </p>
              </div>

              <div className="relative rounded-3xl overflow-hidden bg-white border-4 border-royal-600 shadow-xl p-2">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                  <img
                    src="/photos/club-pairings.jpeg"
                    alt="Affichage des appariements et résultats officiels du club AUCA"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-black uppercase tracking-wider text-white bg-royal-600 px-2.5 py-0.5 rounded-full shadow-md">
                    Classement & Arbitrage
                  </span>
                </div>
                <p className="text-xs text-ink-950 font-black text-center pt-2.5">
                  Appariements & suivi des points
                </p>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-100 border-2 border-royal-300 text-royal-900 text-xs font-black uppercase tracking-wider shadow-xs">
              <Trophy className="w-4 h-4 text-royal-700 stroke-[2.5]" />
              <span>Pratique Compétitive & Esprit Sportif</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-ink-950 tracking-tight leading-[1.15]">
              Vivre la passion <br />
              <span className="text-royal-600 font-black underline decoration-amber-400 decoration-4 underline-offset-4">
                des vrais tournois.
              </span>
            </h2>

            <p className="text-ink-800 text-sm sm:text-base leading-relaxed font-medium">
              La progression ne s'arrête pas aux exercices : elle prend tout son sens face à un adversaire, pendule en marche. L’AUCA organise régulièrement des rondes officielles et prépare ses adhérents aux championnats régionaux et nationaux.
            </p>

            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-xl bg-white border-2 border-slate-200 flex items-start gap-3.5 shadow-xs hover:border-royal-400 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-royal-600 shrink-0 mt-0.5 stroke-[2.5]" />
                <div>
                  <h4 className="text-sm font-black text-ink-950">Cadences officielles & arbitrage rigoureux</h4>
                  <p className="text-xs text-ink-700 font-semibold mt-0.5">Respect strict des règles du jeu et maîtrise des pendules électroniques de tournoi.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border-2 border-slate-200 flex items-start gap-3.5 shadow-xs hover:border-royal-400 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-royal-600 shrink-0 mt-0.5 stroke-[2.5]" />
                <div>
                  <h4 className="text-sm font-black text-ink-950">Accueil des adultes & passionnés à Annaba</h4>
                  <p className="text-xs text-ink-700 font-semibold mt-0.5">Parties d'entraînement, analyse conviviale des variantes et partage entre joueurs de tous âges.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#adhesion"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-black text-xs sm:text-sm text-white bg-royal-600 hover:bg-royal-700 transition-all shadow-royal-cta active:scale-98"
              >
                <span>Consulter les créneaux & tarifs (1 500 DA)</span>
                <span>→</span>
              </a>

              <a
                href={`tel:${clubData.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-black text-xs sm:text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-sm border border-amber-300 active:scale-98"
                title={`Appeler le Coach : ${clubData.contact.phoneDisplay}`}
              >
                <Phone className="w-4 h-4 stroke-[3]" />
                <span>Appeler le Coach</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
