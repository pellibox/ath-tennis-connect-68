
import React, { useEffect, useState, useRef } from 'react';
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
  
  const [logoYOffset, setLogoYOffset] = useState<number>(0);
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  const logoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      setLogoYOffset(scrollY * 0.2);
      
      const fadeThreshold = 100;
      const fadeOutBy = 300;
      
      if (scrollY > fadeThreshold) {
        const opacity = Math.max(0, 1 - (scrollY - fadeThreshold) / (fadeOutBy - fadeThreshold));
        setLogoOpacity(opacity);
      } else {
        setLogoOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      
      <main className="flex-grow pt-20">
        <HeroVideoSection 
          logoYOffset={logoYOffset} 
          logoOpacity={logoOpacity} 
          logoRef={logoRef} 
        />
        
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
