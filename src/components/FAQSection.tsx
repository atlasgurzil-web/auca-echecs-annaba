import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { clubData } from '../data/clubContent';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "À partir de quel âge un enfant peut-il s'inscrire au club ?",
      answer: "Les enfants sont accueillis dès l'âge de 5 à 6 ans. À cet âge, la pédagogie est axée sur la motricité des pièces, la géométrie de l'échiquier et de petits défis ludiques pour stimuler la curiosité et l'attention.",
    },
    {
      question: "Faut-il apporter son propre échiquier ou une pendule ?",
      answer: "Non, tout le matériel de pratique (jeux officiels, échiquiers de démonstration et pendules électroniques de tournoi) est entièrement fourni et mis à disposition au sein de la salle d'entraînement.",
    },
    {
      question: "Les adultes débutants ou n'ayant jamais joué sont-ils acceptés ?",
      answer: "Absolument. Les séances du vendredi et du samedi regroupent les pratiquants par catégorie et niveau. Les adultes qui reprennent les échecs ou découvrent les règles bénéficient d'un encadrement patient et adapté le samedi après-midi.",
    },
    {
      question: "Comment organiser une première séance d'essai ?",
      answer: "Il suffit de joindre directement Monsieur Bentboula par téléphone. Il échangera avec vous sur l'âge et le niveau du joueur pour vous orienter vers le centre le plus adapté (Centre Culturel Hachemi Smaïn à La Colonne ou Centre Culturel Allat à la Cité 5 Juillet) et le créneau idéal (vendredi ou samedi).",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-100 border-2 border-royal-300 text-royal-900 text-xs font-black uppercase tracking-wider shadow-xs">
            <HelpCircle className="w-4 h-4 text-royal-700 stroke-[2.5]" />
            <span>Questions Fréquentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-ink-950 tracking-tight">
            Tout savoir avant de <span className="text-royal-600 font-black underline decoration-amber-400 decoration-4 underline-offset-4">nous rejoindre</span>
          </h2>
          <p className="text-ink-800 text-sm sm:text-base font-medium">
            Les réponses aux questions les plus courantes des parents et des futurs adhérents.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl bg-white border-2 transition-all duration-200 overflow-hidden shadow-xs ${
                  isOpen ? 'border-royal-600 ring-2 ring-royal-200/60 shadow-md' : 'border-slate-200 hover:border-royal-400'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-600 focus-visible:ring-inset"
                  aria-expanded={isOpen}
                >
                  <span className="font-black text-sm sm:text-base text-ink-950">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full border-2 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-royal-600 text-white border-royal-600 shadow-sm' : 'bg-slate-100 text-royal-700 border-slate-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[3]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-ink-800 font-medium leading-relaxed border-t border-slate-100 bg-royal-50/20 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reassurance Call Box Card */}
        <div className="mt-10 rounded-2xl bg-white border-2 border-amber-400 p-5 sm:p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-black text-ink-950">
              Une question spécifique sur l'inscription ?
            </h4>
            <p className="text-xs sm:text-sm text-ink-700 font-medium mt-0.5">
              Monsieur Bentboula est joignable au 0669 54 66 80 pour vous renseigner et fixer votre séance d'essai.
            </p>
          </div>

          <a
            href={`tel:${clubData.contact.phoneRaw}`}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-cta shrink-0 active:scale-95 transition-all border border-amber-400"
          >
            <Phone className="w-4 h-4 stroke-[3] text-slate-950" />
            <span>Appeler l'entraîneur</span>
          </a>
        </div>

      </div>
    </section>
  );
};
