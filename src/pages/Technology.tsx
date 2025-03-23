
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TechnologySection from '@/components/TechnologySection';
import { useLanguage } from '@/contexts/LanguageContext';

const TechnologyPage = () => {
  const { t } = useLanguage();
  
  // Smooth scroll functionality
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="h-40 bg-gradient-to-b from-ath-clay to-ath-secondary flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-display text-white">Tecnologia VICKI™</h1>
        </div>
        
        <TechnologySection 
          title="Sistema di analisi con visione artificiale e AI"
          subtitle="Sistema di analisi con visione artificiale, AI e tracciamento 3D che analizza oltre 70 parametri in tempo reale"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default TechnologyPage;
