import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import Logo from '@/components/Logo';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';

const AdultProgram = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [logoYOffset, setLogoYOffset] = useState<number>(0);
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Load user preferences
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
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

  return (
    <div className="flex flex-col min-h-screen relative">
      <div 
        className="fixed top-[calc(25%-100px)] left-1/2 transform -translate-x-1/2 z-50 w-40 h-40 pointer-events-none transition-opacity duration-300 flex justify-center"
        style={{
          transform: `translate(-50%, -${logoYOffset}px)`,
          opacity: logoOpacity
        }}
      >
        <Logo 
          onDarkBackground={true} 
          className="w-full h-full"
        />
      </div>
      
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Adult Training"
            subtitle="Percorsi flessibili per giocatori amatoriali che vogliono migliorare le proprie capacità."
            imageSrc="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed={createStandardVimeoEmbed('1068788229?h=5f3c14e5ec')}
            buttons={[
              { text: 'PRENOTA UNA PROVA', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
            subtitlePosition="bottom"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">ADULT:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Percorsi flessibili per giocatori amatoriali che vogliono migliorare le proprie capacità.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiMonitoringBadge level="core" className="bg-opacity-20 border-opacity-30 text-white" />
                <VickiPoweredBadge className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-swiss">Adult Training</h2>
                <VickiMonitoringBadge level="core" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">Percorsi flessibili per giocatori amatoriali che vogliono migliorare le proprie capacità.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il nostro programma per Amatori è stato progettato per offrire a giocatori adulti di tutti i livelli 
                un'esperienza tennistica di alta qualità che combina miglioramento tecnico, divertimento e benessere fisico.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="font-swiss">
                Utilizzando la tecnologia VICKI™ in modo accessibile e intuitivo, aiutiamo ogni giocatore a comprendere 
                e migliorare il proprio tennis, rendendo il processo di apprendimento più efficace e gratificante.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>Lezioni flessibili adattate agli impegni lavorativi</li>
                <li>Analisi tecnica semplificata ma efficace</li>
                <li>Approccio personalizzato per ogni livello di gioco</li>
                <li>Focus sulla prevenzione di infortuni e tennis sostenibile</li>
                <li>Componente sociale e di gruppo per rendere l'esperienza più piacevole</li>
                <li>Possibilità di monitorare i propri progressi nel tempo</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Benefici</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>Miglioramento tecnico visibile e misurabile</li>
                <li>Maggiore soddisfazione nel gioco attraverso colpi più efficaci</li>
                <li>Riduzione del rischio di infortuni comuni negli adulti</li>
                <li>Benessere fisico generale attraverso un'attività completa</li>
                <li>Ambiente sociale positivo e motivante</li>
                <li>Accesso a metodologie di allenamento professionali in formato accessibile</li>
              </ul>
            </RevealAnimation>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdultProgram;
