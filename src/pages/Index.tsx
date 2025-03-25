import React, { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed, getWelcomeMessage } from '@/utils/videoUtils';
import Logo from '@/components/Logo';
import { useIsMobile } from '@/hooks/use-mobile';

const HomePage = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const { userGender, userType } = useProfile();
  
  const [logoYOffset, setLogoYOffset] = useState<number>(0);
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  const logoRef = useRef<HTMLDivElement>(null);
  
  const vimeoEmbed = getVimeoEmbed(userGender, userType);
  
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
      <div 
        ref={logoRef}
        className="fixed z-50 pointer-events-none transition-opacity duration-300 left-0 right-0 flex justify-center"
        style={{
          top: isMobile ? '140px' : '180px',
          opacity: logoOpacity
        }}
      >
        <div 
          style={{
            width: isMobile ? '120px' : '160px',
            transform: `translateY(-${logoYOffset}px)`
          }}
          className="flex justify-center"
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
        <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
          <div dangerouslySetInnerHTML={{ __html: `<iframe src="https://player.vimeo.com/video/1069152110?h=95ee4b44fd&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Main Video"></iframe><script src="https://player.vimeo.com/api/player.js"></script>` }} />
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
