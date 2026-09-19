import React, { useState } from 'react';
import { Camera, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { clubData, GalleryItem } from '../data/clubContent';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = ['Tous', 'Tournois', 'Entraînements', 'Vie du club'];

  const filteredItems = activeCategory === 'Tous'
    ? clubData.gallery
    : clubData.gallery.filter((item) => item.category === activeCategory);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section id="galerie" className="py-20 bg-navy-900/60 relative border-t border-navy-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Moments Capturés</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Galerie & <span className="text-gold-gradient">Vie du Club</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Plongez au cœur de nos entraînements, de nos tournois et de la belle énergie qui anime les joueurs d'échecs de l'AUCA à Annaba.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gold-500 text-navy-950 shadow-md shadow-gold-500/20'
                    : 'bg-navy-950 text-slate-300 hover:text-white hover:bg-navy-850 border border-navy-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-navy-950 border border-navy-800 hover:border-gold-500/40 shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Photo Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                
                {/* Gradient hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-navy-950/90 text-gold-400 border border-gold-500/30 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                {/* Zoom Icon indicator */}
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-navy-950/80 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <ZoomIn className="w-4 h-4 text-gold-300" />
                </div>

                {/* Bottom Title & Description */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <h3 className="text-sm sm:text-base font-display font-bold text-white group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-1 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/95 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-navy-900 border border-gold-500/40 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-navy-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
                  {selectedItem.category} — AUCA Échecs Annaba
                </span>
                <h3 className="text-base sm:text-lg font-display font-bold text-white">
                  {selectedItem.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative max-h-[65vh] overflow-hidden bg-navy-950 flex items-center justify-center">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full max-h-[65vh] object-contain"
              />

              {/* Prev / Next Arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-navy-950/80 hover:bg-navy-900 border border-navy-800 text-white shadow-lg transition-transform hover:scale-110"
                aria-label="Photo précédente"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-navy-950/80 hover:bg-navy-900 border border-navy-800 text-white shadow-lg transition-transform hover:scale-110"
                aria-label="Photo suivante"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 bg-navy-950/90 border-t border-navy-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <p className="text-xs sm:text-sm text-slate-300">
                {selectedItem.description}
              </p>
              <span className="text-[11px] font-arabic text-gold-400 whitespace-nowrap">
                النادي الرياضي أمل اتحاد أشبال عنابة
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
