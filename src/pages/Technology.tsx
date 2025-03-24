
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TechnologySection from '@/components/TechnologySection';
import { useLanguage } from '@/contexts/LanguageContext';
import { loadUserPreferences, UserGender, UserType } from '@/components/UserTypeSelector';
import { Link } from 'react-router-dom';
import RevealAnimation from '@/components/RevealAnimation';
import Logo from '@/components/Logo';

const TechnologyPage = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [logoYOffset, setLogoYOffset] = useState<number>(0);
  
  // Load user preferences on mount
  useEffect(() => {
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);
  
  // Smooth scroll functionality
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Handle scroll effect for the logo
  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const scrollY = window.scrollY;
      
      // Calculate offset to move the logo up as user scrolls down
      // This creates a "fixed position" effect relative to the background
      setLogoYOffset(scrollY * 0.2); // Adjust the multiplier to control the speed
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

  // Get personalized description based on user type
  const getPersonalizedDescription = () => {
    if (!userType) {
      return "Sistema di analisi con visione artificiale, AI e tracciamento 3D che analizza oltre 70 parametri in tempo reale";
    }

    switch (userType) {
      case 'junior':
        return "Analisi e monitoraggio tecnico adattato per giovani tennisti in fase di sviluppo, con focus su coordinazione e pattern motori";
      case 'performance':
        return "Analisi avanzata per tennisti agonisti con tracciamento biomeccanico e supporto tecnico-tattico per ottimizzare la performance";
      case 'professional':
        return "Sistema di monitoraggio e analisi completo per professionisti con integrazione di parametri fisici, mentali e tattici in tempo reale";
      case 'coach':
        return "Strumento completo di analisi per coach, con dashboard personalizzabile, tracking multi-atleta e statistiche avanzate";
      case 'parent':
        return "Analisi semplificata e report visivi per genitori, con tracciamento dello sviluppo tecnico e fisico del giovane atleta";
      default:
        return "Sistema di analisi con visione artificiale, AI e tracciamento 3D che analizza oltre 70 parametri in tempo reale";
    }
  };

  // Get Vimeo embed code based on user type
  const getVimeoEmbed = () => {
    // Default video
    let videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596952?h=b7fa539b1c&autoplay=1&loop=1&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Main Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    
    // Only change video if user has explicitly selected a profile
    if (userGender && userType) {
      // Female user videos based on type
      if (userGender === 'female') {
        // Default female video (for junior, non-specific)
        videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/867339842?h=5ecc384219&autoplay=1&loop=1&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
        
        // Female professional 
        if (userType === 'professional') {
          videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596920?h=7f23339d4b&autoplay=1&loop=1&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Professional"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
        } 
        // Female performance
        else if (userType === 'performance') {
          videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596969?h=9bbee986ef&autoplay=1&loop=1&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Performance"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
        }
      }
      
      // Male professional
      if (userGender === 'male' && userType === 'professional') {
        videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596901?h=2ac5605207&autoplay=1&loop=1&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Male Professional"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      }
      
      // Coach video (regardless of gender)
      if (userType === 'coach') {
        videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068604198?h=07d9021fd2&autoplay=1&loop=1&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Coach"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      }
      
      // Parent video (regardless of gender)
      if (userType === 'parent') {
        videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068629360?h=46b5c52b31&autoplay=1&loop=1&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Parent"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      }
    }
    
    return videoEmbed;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header useVickiLogo={true} />
      
      <main className="flex-grow pt-20">
        {/* Overlay logo for technology page */}
        <div 
          className="fixed top-[calc(25%-100px)] left-1/2 transform -translate-x-1/2 z-50 w-40 h-40 pointer-events-none"
          style={{
            transform: `translate(-50%, -${logoYOffset}px)` // Apply dynamic Y offset
          }}
        >
          <Logo 
            useVickiLogo={true} 
            onDarkBackground={true} 
            className="w-full h-full"
          />
        </div>
        
        <div className="h-40 bg-gradient-to-b from-ath-clay to-ath-secondary flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-display text-white">Tecnologia VICKI™</h1>
        </div>
        
        <div className="w-full bg-black min-h-[calc(100vw*9/16+100px)] relative">
          <div className="w-full aspect-video">
            <div dangerouslySetInnerHTML={{ __html: getVimeoEmbed() }} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-black/80 to-transparent h-[100px] flex items-end">
            <p className="text-white text-base md:text-lg opacity-90 max-w-3xl mx-auto text-center font-swiss">
              {getPersonalizedDescription()}
            </p>
          </div>
        </div>
        
        <TechnologySection 
          title="Sistema di analisi con visione artificiale e AI"
          subtitle={getPersonalizedDescription()}
        />
        
        {userType && (
          <section className="py-16 px-6 bg-ath-gray">
            <div className="max-w-7xl mx-auto">
              <RevealAnimation>
                <h2 className="text-3xl font-display mb-8">Benefici per {userType === 'coach' ? 'i Coach' : 
                                                  userType === 'parent' ? 'i Genitori' : 
                                                  userType === 'professional' ? 'i Professionisti' : 
                                                  userType === 'performance' ? 'gli Agonisti' : 
                                                  'i Giovani Tennisti'}</h2>
              </RevealAnimation>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {userType === 'professional' && (
                  <>
                    <RevealAnimation delay={100} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4">Analisi Predittiva</h3>
                      <p>Algoritmi avanzati che anticipano trend e rischi di infortunio basati su pattern biomeccanici e di carico.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={150} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4">Monitoraggio Completo</h3>
                      <p>Tracking integrato di parametri tecnici, fisici, mentali e tattici con feedback in tempo reale.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={200} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4">Gestione Ottimale</h3>
                      <p>Ottimizzazione del carico allenante e pianificazione dei picchi di forma in base ai tornei programmati.</p>
                    </RevealAnimation>
                  </>
                )}
                
                {userType === 'performance' && (
                  <>
                    <RevealAnimation delay={100} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4">Analisi Tecnica</h3>
                      <p>Monitoraggio completo di tutti i colpi con feedback sul miglioramento dei parametri biomeccanici.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={150} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4">Supporto Tattico</h3>
                      <p>Analisi delle partite e dei pattern di gioco per adattare l'allenamento alle esigenze competitive.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={200} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4">Prevenzione Infortuni</h3>
                      <p>Identificazione dei sovraccarichi e dei pattern motori rischiosi per prevenire infortuni comuni.</p>
                    </RevealAnimation>
                  </>
                )}
                
                {userType === 'junior' && (
                  <>
                    <RevealAnimation delay={100} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4">Sviluppo Coordinativo</h3>
                      <p>Monitoraggio della coordinazione e dei pattern motori fondamentali per una crescita armonica.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={150} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4">Apprendimento Efficace</h3>
                      <p>Feedback visivi immediati che accelerano l'apprendimento tecnico e la comprensione del movimento.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={200} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4">Monitoraggio Crescita</h3>
                      <p>Adattamento continuo dei programmi in base allo sviluppo fisico e alla crescita del giovane atleta.</p>
                    </RevealAnimation>
                  </>
                )}
                
                {userType === 'coach' && (
                  <>
                    <RevealAnimation delay={100} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4">Dashboard Avanzata</h3>
                      <p>Gestione completa dei tuoi atleti con visualizzazione dati personalizzabile e reportistica avanzata.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={150} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4">Supporto Metodologico</h3>
                      <p>Integrazione della tua metodologia nel sistema con possibilità di codificare esercizi e progressioni.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={200} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4">Condivisione Dati</h3>
                      <p>Collaborazione facile con altri professionisti (fisioterapisti, preparatori, mental coach) tramite la piattaforma.</p>
                    </RevealAnimation>
                  </>
                )}
                
                {userType === 'parent' && (
                  <>
                    <RevealAnimation delay={100} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4">Report Semplificati</h3>
                      <p>Visualizzazione chiara e comprensibile dei progressi del tuo ragazzo/a senza terminologia troppo tecnica.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={150} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4">Monitoraggio Sicuro</h3>
                      <p>Controllo dello sviluppo fisico e tecnico con attenzione alla salute e alla prevenzione di sovraccarichi.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={200} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4">Connessione con Coach</h3>
                      <p>Canale diretto con lo staff tecnico per seguire il percorso formativo in modo trasparente e collaborativo.</p>
                    </RevealAnimation>
                  </>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default TechnologyPage;
