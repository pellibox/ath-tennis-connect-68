
import { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';
import StatsAndNavSection from '@/components/StatsAndNavSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed, getWelcomeMessage } from '@/utils/videoUtils';
import Logo from '@/components/Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import VickiMonitoringBadge, { MonitoringLevel } from '@/components/VickiMonitoringBadge';
import AboutSection from '@/components/AboutSection';
import { ArrowRight, Award, Book, Calendar, FileText, LayoutGrid, LineChart, Trophy, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ButtonLink from '@/components/ButtonLink';

const HomePage = () => {
  // Get translation function
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const { userGender, userType } = useProfile();
  
  // State for the logo animation
  const [logoYOffset, setLogoYOffset] = useState<number>(0);
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  const logoRef = useRef<HTMLDivElement>(null);
  
  // Vimeo embed HTML, now derived from the profile context directly
  const vimeoEmbed = getVimeoEmbed(userGender, userType);
  
  // Smooth scroll functionality
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Handle scroll effect for the logo - now for both mobile and desktop
  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const scrollY = window.scrollY;
      
      // Calculate offset to move the logo up as user scrolls down
      setLogoYOffset(scrollY * 0.2); // Adjust the multiplier to control the speed
      
      // Fade out logo as user scrolls down
      // Start fading at 100px of scroll, completely fade out by 300px
      const fadeThreshold = 100;
      const fadeOutBy = 300;
      
      if (scrollY > fadeThreshold) {
        const opacity = Math.max(0, 1 - (scrollY - fadeThreshold) / (fadeOutBy - fadeThreshold));
        setLogoOpacity(opacity);
      } else {
        setLogoOpacity(1);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial calculation
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Enhanced stats with more meaningful metrics
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

  // Key features for infographic section
  const keyFeatures = [
    {
      icon: <Trophy className="w-10 h-10 text-ath-clay" />,
      title: "Eccellenza Tecnica",
      description: "Coaching di alto livello supportato da tecnologia avanzata",
      link: "/method"
    },
    {
      icon: <LineChart className="w-10 h-10 text-ath-clay" />,
      title: "Analisi Completa",
      description: "Monitoraggio di oltre 70 parametri in tempo reale",
      link: "/technology"
    },
    {
      icon: <Users className="w-10 h-10 text-ath-clay" />,
      title: "Team Esperto",
      description: "Coach professionisti con metodologia innovativa",
      link: "/coaches"
    },
    {
      icon: <LayoutGrid className="w-10 h-10 text-ath-clay" />,
      title: "Struttura All'avanguardia",
      description: "6 campi completamente equipaggiati con tecnologia Vicki™",
      link: "/facilities"
    }
  ];

  // Monitoring levels for homepage display
  const monitoringLevels: { level: MonitoringLevel, label: string }[] = [
    { level: 'basic', label: 'Base' },
    { level: 'standard', label: 'Standard' },
    { level: 'advanced', label: 'Avanzato' },
    { level: 'elite', label: 'Elite' }
  ];

  // Advanced training methods
  const trainingMethods = [
    {
      title: "Metodo ATH",
      description: "Metodologia esclusiva che integra tecnologia e coaching tradizionale per un percorso personalizzato verso l'eccellenza",
      image: "/lovable-uploads/fc6643c2-4357-4c86-9e52-6f33d698668f.png",
      link: "/method"
    },
    {
      title: "Tecnologia Vicki™",
      description: "Sistema avanzato di monitoraggio e analisi che traccia in tempo reale ogni aspetto della performance del giocatore",
      image: "/lovable-uploads/8f2b30a1-cb65-453e-ba82-d9721a192426.png",
      link: "/technology"
    },
    {
      title: "Programmi Personalizzati",
      description: "Percorsi formativi adattati alle esigenze specifiche di ogni atleta, dal principiante al professionista",
      image: "/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png",
      link: "/programs"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Centered logo with improved positioning for both mobile and desktop */}
      <div 
        ref={logoRef}
        className="fixed z-50 pointer-events-none transition-opacity duration-300 left-0 right-0 flex justify-center"
        style={{
          top: isMobile ? '140px' : '180px', // Adjusted position
          opacity: logoOpacity
        }}
      >
        <div 
          style={{
            width: isMobile ? '120px' : '160px',
            transform: `translateY(-${logoYOffset}px)`
          }}
          className="flex justify-center" // Added to ensure centering
        >
          <Logo 
            onDarkBackground={true} 
            className="w-full h-auto"
            isCentered={true}
          />
        </div>
      </div>
      
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Replaced Hero component with direct Vimeo embed for consistency with Method page */}
        <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
          <div dangerouslySetInnerHTML={{ __html: vimeoEmbed }} />
        </div>
        
        <div className="w-full bg-black py-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white text-xl md:text-2xl font-swiss uppercase mb-2">
              ADVANCED TENNIS HUB:
            </h2>
            <p className="text-white text-xl md:text-2xl opacity-90 font-swiss max-w-3xl drop-shadow-md">
              {getWelcomeMessage(userType)}
            </p>
          </div>
        </div>
        
        {/* Infographic Key Features Section */}
        <div className="py-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display text-center mb-12">
              L'Eccellenza del Tennis Moderno
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow border-ath-clay/20 hover:border-ath-clay">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 bg-ath-clay/5 p-4 rounded-full">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-medium mb-2 text-ath-clay font-swiss">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4 font-swiss">
                        {feature.description}
                      </p>
                      <ButtonLink 
                        href={feature.link} 
                        variant="outline" 
                        size="sm"
                        className="mt-2"
                      >
                        Scopri di più <ArrowRight className="ml-1 w-4 h-4 inline" />
                      </ButtonLink>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Vicki Monitoring Levels */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-display mb-6 text-center">Livelli di Monitoraggio Vicki™</h3>
            <p className="text-center max-w-3xl mx-auto mb-8 text-gray-600 font-swiss">
              Il sistema Vicki™ offre diversi livelli di monitoraggio per adattarsi alle esigenze specifiche di ogni atleta,
              dal principiante fino al professionista.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {monitoringLevels.map((item) => (
                <div key={item.level} className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <VickiMonitoringBadge level={item.level} showLabel={false} className="mb-3" size="lg" />
                  <span className="text-lg font-medium block mb-2">{item.label}</span>
                  <p className="text-sm text-gray-500 max-w-[180px]">
                    {item.level === 'basic' && "Monitoraggio fondamentale per principianti e amatori"}
                    {item.level === 'standard' && "Analisi intermedia per giocatori in sviluppo"}
                    {item.level === 'advanced' && "Monitoraggio avanzato per agonisti"}
                    {item.level === 'elite' && "Sistema completo per professionisti e top players"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Training Methods Section */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display text-center mb-12">
              Metodologia e Tecnologia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trainingMethods.map((method, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg h-[360px] hover:shadow-xl transition-all">
                  <img 
                    src={method.image} 
                    alt={method.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-2xl font-display mb-3">{method.title}</h4>
                    <p className="mb-4 text-gray-200 text-sm">{method.description}</p>
                    <ButtonLink 
                      href={method.link} 
                      variant="primary"
                      size="sm"
                      className="mt-2"
                    >
                      Approfondisci
                    </ButtonLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
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
