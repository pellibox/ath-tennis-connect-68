
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import Logo from '@/components/Logo';

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

  // Handle scroll effect for the logo
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

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Overlay logo */}
      <div 
        className="fixed top-[calc(25%-100px)] left-1/2 transform -translate-x-1/2 z-50 w-40 h-40 pointer-events-none transition-opacity duration-300"
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
            title={t('footer.adult')}
            subtitle={t('programs.adult.desc')}
            imageSrc="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop"
            buttons={[
              { text: 'PRENOTA UNA PROVA', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
            subtitlePosition="bottom"
          />
          
          {/* Black banner with claim text - matching Method page style */}
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">ADULT:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  {t('programs.adult.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <h2 className="text-3xl font-swiss mb-6">{t('programs.adult')}</h2>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">{t('programs.adult.desc')}</p>
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
