import React from 'react';
import { Phone, Calendar, Clock, FileCheck, CheckCircle2, Shield } from 'lucide-react';
import { clubData } from '../data/clubContent';

export const RegistrationSection: React.FC = () => {
  return (
    <section id="adhesion" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-100 border-2 border-royal-300 text-royal-900 text-xs font-black uppercase tracking-wider shadow-xs">
            <Shield className="w-4 h-4 text-royal-700 stroke-[2.5]" />
            <span>Modalités & Inscription</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-ink-950 tracking-tight">
            Horaires, Cotisation & <span className="text-royal-600 font-black underline decoration-amber-400 decoration-4 underline-offset-4">Adhésion</span>
          </h2>
          <p className="text-ink-800 text-sm sm:text-base font-medium">
            Toutes les informations pratiques pour rejoindre le club AUCA réunies en un seul endroit.
          </p>
        </div>

        {/* Master Consolidated Card */}
        <div className="max-w-4xl mx-auto bg-[#F8FAFC] rounded-3xl border-4 border-royal-600 p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            
            {/* Col 1: Schedule & Documents */}
            <div className="md:col-span-7 space-y-6 text-left">
              
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-ink-950 flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-royal-600 stroke-[2.5]" />
                  Créneaux d'entraînement à Annaba :
                </h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white border-2 border-slate-200 shadow-xs hover:border-royal-400 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-black text-ink-950 text-base">Mardi</span>
                      <span className="text-xs text-white font-black flex items-center gap-1.5 bg-royal-600 px-3 py-1.5 rounded-xl shadow-xs">
                        <Clock className="w-3.5 h-3.5 stroke-[2.5]" /> À partir de 17h00
                      </span>
                    </div>
                    <p className="text-xs text-ink-700 font-semibold mt-2">Séances tactiques, cours théoriques et entraînements par groupe de niveau.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border-2 border-slate-200 shadow-xs hover:border-royal-400 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-black text-ink-950 text-base">Samedi</span>
                      <span className="text-xs text-slate-950 font-black flex items-center gap-1.5 bg-amber-400 px-3 py-1.5 rounded-xl shadow-xs">
                        <Clock className="w-3.5 h-3.5 stroke-[2.5]" /> À partir de 10h00
                      </span>
                    </div>
                    <p className="text-xs text-ink-700 font-semibold mt-2">Matinée intensive : ateliers enfants, rondes libres et tournois du club.</p>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="pt-1">
                <h4 className="text-xs font-black uppercase tracking-widest text-ink-950 flex items-center gap-2 mb-2.5">
                  <FileCheck className="w-4 h-4 text-royal-600 stroke-[2.5]" />
                  Documents pour valider la licence :
                </h4>
                <div className="flex flex-wrap gap-3 text-xs text-ink-900 font-bold">
                  <div className="flex items-center gap-2 bg-white border-2 border-emerald-300 px-3.5 py-2 rounded-xl shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                    <span>1 Extrait de naissance</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white border-2 border-emerald-300 px-3.5 py-2 rounded-xl shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                    <span>2 Photos d'identité</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Col 2: Price & Direct Call Action (Showstopper Vibrant Card) */}
            <div className="md:col-span-5 bg-white border-4 border-amber-400 rounded-3xl p-6 sm:p-7 text-center space-y-5 shadow-xl">
              
              <div>
                <span className="text-xs uppercase tracking-widest text-royal-800 font-black block">
                  Cotisation Officielle Club
                </span>
                <div className="flex items-baseline justify-center gap-1.5 mt-2">
                  <span className="text-4xl sm:text-5xl font-display font-black text-ink-950 tracking-tight">
                    2 000 DA
                  </span>
                  <span className="text-xs sm:text-sm text-ink-700 font-bold">/ mois</span>
                </div>
                <div className="mt-2.5">
                  <span className="text-[11px] text-emerald-950 bg-emerald-100 font-black px-3.5 py-1 rounded-full border border-emerald-400 inline-block">
                    Inscriptions ouvertes toute l'année
                  </span>
                </div>
              </div>

              <div className="border-t-2 border-slate-100 pt-5 space-y-3">
                <a
                  href={`tel:${clubData.contact.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-5 rounded-2xl font-black text-sm uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-cta hover:shadow-2xl active:scale-95 transition-all border-2 border-amber-300 group"
                >
                  <Phone className="w-5 h-5 stroke-[3] text-slate-950 group-hover:rotate-12 transition-transform" />
                  <span>Appeler Monsieur Bentboula</span>
                </a>

                <div className="bg-royal-50 border-2 border-royal-200 rounded-xl py-2 px-3">
                  <p className="text-xs text-royal-800 font-bold uppercase tracking-wider">Numéro Direct Entraîneur</p>
                  <p className="text-xl sm:text-2xl text-ink-950 font-mono font-black tracking-wider">
                    {clubData.contact.phoneDisplay}
                  </p>
                </div>

                <p className="text-xs text-ink-700 font-medium leading-snug pt-1">
                  Appelez directement l'entraîneur pour fixer votre premier cours d'évaluation.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
