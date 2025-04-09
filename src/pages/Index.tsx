
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import StatsAndNavSection from '@/components/StatsAndNavSection';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';
import ContactSection from '@/components/ContactSection';
import HeroVideoSection from '@/components/home/HeroVideoSection';
import KeyFeaturesSection from '@/components/home/KeyFeaturesSection';
import TrainingMethodsSection from '@/components/home/TrainingMethodsSection';

const HomePage = () => {
  const isMobile = useIsMobile();
  const [heroLogoOpacity, setHeroLogoOpacity] = useState<number>(1);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const stats = [
    {
      id: '1',
      value: 6,
      label: 'Campi Monitorati'
    },
    {
      id: '2',
      value: 70,
      suffix: '+',
      label: 'Parametri Analizzati'
    },
    {
      id: '3',
      value: 7000,
      suffix: '+',
      label: 'Ore di Allenamento Ottimizzate'
    },
    {
      id: '4',
      value: 100,
      suffix: '%',
      label: 'Personalizzazione'
    },
  ];
  
  // Handle logo opacity changes from the HeroVideoSection
  const handleLogoOpacityChange = (opacity: number) => {
    setHeroLogoOpacity(opacity);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header headerLogoOpacity={heroLogoOpacity} />
      
      <main className="flex-grow main-content">
        <HeroVideoSection onLogoOpacityChange={handleLogoOpacityChange} />
        
        <KeyFeaturesSection />
        
        <TrainingMethodsSection />
        
        <StatsAndNavSection stats={stats} />
        
        <JoinRevolutionSection />
        
        <ContactSection 
          title="Contatti"
          subtitle="Richiedi informazioni tecniche o prenota una sessione di valutazione"
          address="Via F. Turati, 9, 20090 Rodano MI, Italia"
          phone="+39 02 1234567"
          email="info@ath.tennis"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
