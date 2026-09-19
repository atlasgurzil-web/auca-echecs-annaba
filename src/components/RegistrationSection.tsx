import React from 'react';
import { Phone, Calendar, Clock, FileCheck, CheckCircle2, Shield, MapPin, ExternalLink, Users } from 'lucide-react';
import { clubData } from '../data/clubContent';

export const RegistrationSection: React.FC = () => {
  return (
    <section id="tarifs-inscription" className="scroll-mt-24 py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-100 border-2 border-royal-300 text-royal-900 text-xs font-black uppercase tracking-wider shadow-xs">
            <Shield className="w-4 h-4 text-royal-700 stroke-[2.5]" />
            <span>Modalités & Inscription</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-ink-950 tracking-tight">
            Horaires, Cotisation & <span className="text-royal-600 font-black underline decoration-amber-400 decoration-4 underline-offset-4">Adhésion</span>
          </h2>
          <p className="text-ink-800 text-sm sm:text-base font-medium">
            Deux centres culturels municipaux à Annaba accueillent les élèves et les adultes avec un tarif mensuel unique.
          </p>
        </div>

        {/* Master Consolidated Card */}
        <div className="max-w-5xl mx-auto bg-[#F8FAFC] rounded-3xl border-4 border-royal-600 p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Col 1: 2 Centers & Documents */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-ink-950 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-royal-600 stroke-[2.5]" />
                    2 Centres d'entraînement à Annaba :
                  </h3>
                  <span className="text-[11px] font-bold text-royal-700 bg-royal-100 border border-royal-200 px-2.5 py-0.5 rounded-full">
                    Vendredi & Samedi
                  </span>
                </div>

                <div className="space-y-4">
                  
                  {/* Centre 1 : Hachemi Smaïn (La Colonne) */}
                  <div className="p-5 rounded-2xl bg-white border-2 border-slate-200 shadow-xs hover:border-royal-400 transition-colors space-y-3.5">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-royal-600 stroke-[2.5] shrink-0" />
                          <h4 className="font-black text-ink-950 text-base">
                            Centre Culturel Hachemi Smaïn
                          </h4>
                        </div>
                        <p className="font-arabic text-xs font-bold text-royal-800 mt-0.5">
                          المركز الثقافي الهاشمي سماعين
                        </p>
                        <p className="text-xs text-ink-700 font-semibold mt-1">
                          📍 Quartier <span className="font-bold text-ink-900">La Colonne</span> (derrière la mosquée El Fourqane)
                        </p>
                      </div>

                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Mosquée+El+Fourqane+Annaba+La+Colonne"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-royal-700 hover:text-royal-900 bg-royal-50 hover:bg-royal-100 px-2.5 py-1 rounded-lg border border-royal-200 transition-colors self-start whitespace-nowrap"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Itinéraire Maps</span>
                      </a>
                    </div>

                    {/* Créneaux Centre 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      
                      {/* Jeunes */}
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="text-[11px] font-black uppercase tracking-wider text-royal-800">
                            Jeunes (الأصاغر)
                          </span>
                          <span className="text-[10px] font-bold bg-white text-ink-700 px-1.5 py-0.5 rounded border border-slate-200">
                            Vendredi
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-black text-ink-950">
                          <Clock className="w-3.5 h-3.5 text-royal-600 stroke-[2.5]" />
                          <span>14h30 – 16h30</span>
                        </div>
                        <p className="text-[11px] text-ink-600 font-medium mt-1">
                          Initiation, perfectionnement tactique & parties guidées.
                        </p>
                      </div>

                      {/* Seniors */}
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="text-[11px] font-black uppercase tracking-wider text-royal-800">
                            Seniors (الأكابر)
                          </span>
                          <span className="text-[10px] font-bold bg-white text-ink-700 px-1.5 py-0.5 rounded border border-slate-200">
                            Samedi
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-black text-ink-950">
                          <Clock className="w-3.5 h-3.5 text-royal-600 stroke-[2.5]" />
                          <span>16h15 – 18h00</span>
                        </div>
                        <p className="text-[11px] text-ink-600 font-medium mt-1">
                          Adultes & compétiteurs (Groupes 1 & 2 en foyer).
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Centre 2 : Chahid Messaoud Allat (5 Juillet) */}
                  <div className="p-5 rounded-2xl bg-white border-2 border-slate-200 shadow-xs hover:border-royal-400 transition-colors space-y-3.5">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-emerald-600 stroke-[2.5] shrink-0" />
                          <h4 className="font-black text-ink-950 text-base">
                            Centre Culturel Chahid Messaoud Allat
                          </h4>
                        </div>
                        <p className="font-arabic text-xs font-bold text-emerald-800 mt-0.5">
                          المركز الثقافي الشهيد مسعود علاط
                        </p>
                        <p className="text-xs text-ink-700 font-semibold mt-1">
                          📍 Quartier <span className="font-bold text-ink-900">Cité 5 Juillet</span> (Les Hongrois)
                        </p>
                      </div>

                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Maison+de+jeunes+Allat+Messoud+5+juillet+Annaba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-200 transition-colors self-start whitespace-nowrap"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Itinéraire Maps</span>
                      </a>
                    </div>

                    {/* Créneau Centre 2 */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          Moins de 17 ans (-17 ans / أقل من 17 سنة)
                        </span>
                        <span className="text-[10px] font-bold bg-white text-ink-700 px-1.5 py-0.5 rounded border border-slate-200">
                          Vendredi
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-black text-ink-950">
                        <Clock className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                        <span>14h30 – 16h15</span>
                      </div>
                      <p className="text-[11px] text-ink-600 font-medium mt-1">
                        Séance hebdomadaire dédiée aux enfants et adolescents du quartier et des environs.
                      </p>
                    </div>

                  </div>

                </div>
              </div>

              {/* Documents pour l'inscription */}
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
            <div className="lg:col-span-5 bg-white border-4 border-amber-400 rounded-3xl p-6 sm:p-7 text-center space-y-5 shadow-xl">
              
              <div>
                <span className="text-xs uppercase tracking-widest text-royal-800 font-black block">
                  Cotisation Officielle Club
                </span>
                <div className="flex items-baseline justify-center gap-1.5 mt-2">
                  <span className="text-4xl sm:text-5xl font-display font-black text-ink-950 tracking-tight">
                    1 500 DA
                  </span>
                  <span className="text-xs sm:text-sm text-ink-700 font-bold">/ mois</span>
                </div>
                
                <p className="text-xs text-emerald-800 font-bold mt-1.5">
                  Tarif unique pour tous les élèves et centres
                </p>

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
                  Appelez directement l'entraîneur pour convenir de la première séance d'évaluation et de votre groupe.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
