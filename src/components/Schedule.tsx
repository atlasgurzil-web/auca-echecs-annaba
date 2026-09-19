import React from 'react';
import { Calendar, Clock, MapPin, Phone, Info } from 'lucide-react';
import { clubData } from '../data/clubContent';

export const Schedule: React.FC = () => {
  return (
    <section id="horaires" className="py-20 bg-navy-900/50 relative border-t border-navy-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>Créneaux & Organisation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Horaires des <span className="text-gold-gradient">entraînements</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Deux séances hebdomadaires régulières dédiées à l'apprentissage, à la tactique et aux parties encadrées.
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clubData.schedules.map((item, idx) => (
            <div
              key={idx}
              className="relative group rounded-3xl bg-navy-950 border border-navy-800 p-8 flex flex-col justify-between transition-all duration-300 hover:border-gold-500/40 hover:shadow-xl hover:shadow-gold-500/5 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-navy-900 border border-gold-500/30 text-gold-400 group-hover:scale-110 transition-transform">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                        {item.badge}
                      </span>
                      <h3 className="text-2xl font-display font-extrabold text-white">
                        {item.day}
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-navy-900 border border-gold-500/20 text-gold-300">
                    Hebdomadaire
                  </span>
                </div>

                <div className="bg-navy-900/60 rounded-2xl p-4 border border-navy-850 mb-6">
                  <div className="flex items-center gap-2.5 text-gold-300 font-bold text-lg sm:text-xl">
                    <Clock className="w-5 h-5 text-gold-400 shrink-0" />
                    <span>{item.time}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-navy-850/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  Annaba
                </span>
                <span className="text-gold-400/90 font-medium">Affectation par niveau</span>
              </div>
            </div>
          ))}
        </div>

        {/* Group Allocation Guidance Box */}
        <div className="max-w-4xl mx-auto mt-8 bg-navy-950/80 border border-gold-500/20 rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-gold-500/10 text-gold-400 shrink-0 mt-0.5 sm:mt-0">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                  Orientation dans les groupes de travail
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Afin de garantir un enseignement sur-mesure, Monsieur Bentboula détermine la salle et le groupe d'entraînement (débutants, jeunes en progression, joueurs de tournoi) lors de votre premier échange téléphonique.
                </p>
              </div>
            </div>

            <a
              href={`tel:${clubData.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gold-500 text-navy-950 hover:bg-gold-400 shadow transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Appeler le coach</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
