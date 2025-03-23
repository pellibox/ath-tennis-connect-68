import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';
import StatsAndNavSection from '@/components/StatsAndNavSection';
import UserTypeSelector, { UserGender, UserType } from '@/components/UserTypeSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const HomePage = () => {
  // Get translation function
  const { t } = useLanguage();
  
  // User selection state
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [showSelector, setShowSelector] = useState(false);
  
  // Smooth scroll functionality
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Determine which Vimeo video to show based on user selection
  const getVimeoEmbed = () => {
    // Default video (male junior/amateur)
    let videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/867339873?h=45e175997a&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Junior male"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    
    // All female users get the female video
    if (userGender === 'female') {
      videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/867339842?h=5ecc384219&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
    
    // Male professional users get the professional video
    if (userType === 'professional' && userGender === 'male') {
      videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/867339831?h=7f8992b4a2&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Professional"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
    
    return videoEmbed;
  };

  // Handle user type selection
  const handleUserSelection = (gender: UserGender, type: UserType) => {
    setUserGender(gender);
    setUserType(type);
    setShowSelector(false);
    
    // Scroll smoothly down after selection
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }, 500);
  };

  // Custom welcome message based on user type
  const getWelcomeMessage = () => {
    if (!userType) return "Centro di allenamento ad alta specializzazione con monitoraggio parametrico completo e metodologia integrata";
    
    const messages = {
      junior: "Percorsi specializzati per giovani tennisti con supporto tecnologico completo",
      performance: "Ottimizzazione parametrica completa per agonisti di alto livello",
      professional: "Analisi avanzata e supporto integrato per atleti professionisti",
      coach: "Strumenti di analisi professionali per supportare la tua metodologia",
      parent: "Supporto completo per la crescita tennistica dei giovani atleti"
    };
    
    return messages[userType];
  };

  // Updated stats to include hours monitored
  const stats = [
    {
      id: '1',
      value: 6,
      label: 'Campi'
    },
    {
      id: '2',
      value: 70,
      suffix: '+',
      label: 'Parametri Monitorati'
    },
    {
      id: '3',
      value: 7000,
      suffix: '+',
      label: 'Ore Monitorate a Stagione'
    },
    {
      id: '4',
      value: 1,
      label: 'Primo Centro al Mondo'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Advanced Tennis Hub"
            subtitle={getWelcomeMessage()}
            vimeoEmbed={getVimeoEmbed()}
            imageSrc="/lovable-uploads/6ea13aa7-2578-488b-8ed4-4b17fc2ddc4e.png"
            buttons={[
              { text: "Programmi", href: '/programs' },
              { text: "Contattaci", href: '/contact', variant: 'outline' }
            ]}
            overlayOpacity="medium"
            contentVerticalPosition="bottom"
            contentPosition="center"
            subtitlePosition="bottom"
          />
          
          {/* User Selection Overlay - Positioned at 3/4 from the top */}
          {!userType && (
            <div className="absolute top-3/4 left-0 right-0 flex justify-center px-4 z-20">
              {showSelector ? (
                <UserTypeSelector onSelectionComplete={handleUserSelection} />
              ) : (
                <button 
                  onClick={() => setShowSelector(true)}
                  className="bg-white hover:bg-white/90 text-ath-clay px-8 py-4 rounded-xl text-lg font-medium shadow-lg transition-all hover:shadow-xl"
                >
                  Dimmi che tennista sei
                </button>
              )}
            </div>
          )}
        </div>
        
        <StatsAndNavSection stats={stats} />
        
        <AboutSection 
          title="Chi Siamo"
          subtitle="ATH - Advanced Tennis Hub"
          description={
            <div className="space-y-4">
              <p>ATH è un centro di allenamento specializzato che integra tecnologia avanzata e metodologia strutturata per offrire percorsi evolutivi personalizzati basati su dati oggettivi.</p>
              <p>Il sistema di monitoraggio parametrico garantisce continuità metodologica e supporto tecnico costante, indipendentemente dal coach presente in campo.</p>
              <p>La struttura costituisce una rete professionale aperta a coach, atleti e specialisti per ottimizzare il processo evolutivo tennistico attraverso un metodo oggettivo e misurabile.</p>
            </div>
          }
          image="/lovable-uploads/9e980860-a20e-4ae3-839c-6d91f306bd07.png"
          buttons={[
            { text: "Scopri di più", href: '/about' }
          ]}
        />
        
        <JoinRevolutionSection />
        
        <ContactSection 
          title="Contatti"
          subtitle="Richiedi informazioni tecniche o prenota una sessione di valutazione"
          address="Via del Tennis 123, 20873 Rodano (MI)"
          phone="+39 02 1234567"
          email="info@ath-tennis.it"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
