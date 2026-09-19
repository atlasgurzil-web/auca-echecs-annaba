import React from 'react';
import { Phone, MessageSquare, FileText, CheckCircle, Sparkles, UserCheck } from 'lucide-react';
import { clubData } from '../data/clubContent';

export const Registration: React.FC = () => {
  return (
    <section id="inscription" className="py-20 bg-navy-950 relative overflow-hidden">
      
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-navy-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Adhésions 2026 Ouvertes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Rejoignez <span className="text-gold-gradient">AUCA</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Inscrivez votre enfant ou rejoignez vous-même la section d'échecs de référence à Annaba.
          </p>
        </div>

        {/* Central Registration Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-navy-900 via-navy-900/95 to-navy-950 rounded-3xl border-2 border-gold-500/40 p-6 sm:p-10 md:p-12 shadow-2xl shadow-navy-950/90 relative">
          
          {/* Top Stamp / Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-navy-800">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-gold-400 to-navy-900 shadow-lg shrink-0">
                <img
                  src="/logo-auca-lion.jpg"
                  alt="AUCA Crest"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  Cotisation Officielle AUCA
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-arabic">
                  {clubData.name.arabic} — عنابة
                </p>
              </div>
            </div>

            {/* Big Price Tag */}
            <div className="bg-navy-950 border border-gold-500/40 rounded-2xl px-6 py-3 text-center sm:text-right shadow-inner">
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block">
                Cotisation
              </span>
              <div className="flex items-baseline justify-center sm:justify-end gap-1.5 mt-0.5">
                <span className="text-3xl sm:text-4xl font-display font-black text-white">
                  {clubData.pricing.monthlyFee}
                </span>
                <span className="text-xs sm:text-sm text-slate-400 font-medium">
                  {clubData.pricing.frequency}
                </span>
              </div>
            </div>
          </div>

          {/* 3 Step Onboarding Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            
            {/* Step 1 */}
            <div className="p-5 rounded-2xl bg-navy-950/70 border border-navy-850 flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-full bg-gold-500 text-navy-950 text-xs font-black flex items-center justify-center mb-3 shadow">
                  1
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-gold-400" />
                  Premier Contact
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Appelez directement l’entraîneur Monsieur Bentboula pour échanger sur l'âge et le niveau du joueur.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-2xl bg-navy-950/70 border border-navy-850 flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-full bg-gold-500 text-navy-950 text-xs font-black flex items-center justify-center mb-3 shadow">
                  2
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-gold-400" />
                  Orientation de Groupe
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Le coach détermine le créneau et la salle adaptée à Annaba pour garantir une progression optimale.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-2xl bg-navy-950/70 border border-navy-850 flex flex-col justify-between">
              <div>
                <span className="w-7 h-7 rounded-full bg-gold-500 text-navy-950 text-xs font-black flex items-center justify-center mb-3 shadow">
                  3
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-gold-400" />
                  Dossier & Début
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Remise des documents requis (Extrait de naissance, Photos) et intégration aux séances.
                </p>
              </div>
            </div>

          </div>

          {/* Required Documents Card */}
          <div className="bg-navy-950/80 rounded-2xl p-5 border border-navy-800 mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-300 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-gold-400" />
              Documents nécessaires pour l'inscription :
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {clubData.pricing.documents.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary High-Impact CTA & Direct Contact Box */}
          <div className="text-center space-y-4 pt-2">
            
            <a
              href={`tel:${clubData.contact.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-10 py-4 sm:py-5 rounded-2xl font-display font-bold text-base sm:text-lg uppercase tracking-wider bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-navy-950 shadow-2xl shadow-gold-500/30 hover:shadow-gold-500/50 hover:brightness-105 active:scale-98 transition-all duration-200 border-2 border-gold-300 group"
            >
              <Phone className="w-6 h-6 stroke-[2.5] text-navy-950 group-hover:rotate-12 transition-transform" />
              <span>Je veux m’inscrire — Appeler le club</span>
            </a>

            {/* Direct Contact details */}
            <div className="pt-3 space-y-1">
              <p className="text-sm sm:text-base font-semibold text-white">
                Contact direct : <span className="text-gold-300">{clubData.contact.coachName}</span>
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
                <a
                  href={`tel:${clubData.contact.phoneRaw}`}
                  className="text-lg sm:text-xl font-bold font-display text-gold-400 hover:text-gold-300 underline underline-offset-4 decoration-gold-500/50"
                >
                  {clubData.contact.phoneDisplay}
                </a>
                <span className="text-navy-700 hidden sm:inline">•</span>
                <a
                  href={`sms:${clubData.contact.phoneRaw}?body=Bonjour%20M.%20Bentboula,%20je%20souhaite%20des%20renseignements%20pour%20une%20inscription%20au%20club%20d%27%C3%A9checs%20AUCA.`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-300 hover:text-white underline underline-offset-4"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-gold-400" />
                  <span>Envoyer un SMS</span>
                </a>
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                Ligne téléphonique active • Pas de WhatsApp • Réponse rapide
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
