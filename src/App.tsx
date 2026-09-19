import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { YouthSection } from './components/YouthSection';
import { CoachSection } from './components/CoachSection';
import { CompetitionSection } from './components/CompetitionSection';
import { FAQSection } from './components/FAQSection';
import { RegistrationSection } from './components/RegistrationSection';
import { Footer } from './components/Footer';
import { FloatingCallButton } from './components/FloatingCallButton';

export function App() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        // Backward compatibility if someone loads an old link with #adhesion
        const targetId = hash === '#adhesion' ? '#tarifs-inscription' : hash;
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const timer = setTimeout(scrollToHash, 150);
    window.addEventListener('hashchange', scrollToHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-ink-950 flex flex-col selection:bg-royal-200 selection:text-royal-900">
      <Navbar />
      
      <main className="flex-grow">
        {/* En-tête & Hero à fort impact */}
        <Hero />

        {/* Alternance 1 : Photo à Gauche, Contenu École Jeunesse à Droite */}
        <YouthSection />

        {/* Alternance 2 : Contenu Entraîneur à Gauche, Photo Coach à Droite */}
        <CoachSection />

        {/* Alternance 3 : Photo Tournois à Gauche, Contenu Compétition à Droite */}
        <CompetitionSection />

        {/* Questions Fréquentes & Réassurance */}
        <FAQSection />

        {/* Bloc Unique Consolidé : Horaires, Tarifs & Contact */}
        <RegistrationSection />
      </main>

      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default App;
