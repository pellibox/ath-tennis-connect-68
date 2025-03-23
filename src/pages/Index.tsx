
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';
import StatsAndNavSection from '@/components/StatsAndNavSection';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const HomePage = () => {
  // Get translation function
  const { t } = useLanguage();
  
  // Smooth scroll functionality
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Load user preferences for video selection
  const { gender, type } = loadUserPreferences();
  const userGender = gender as UserGender | null;
  const userType = type as UserType | null;

  // Determine which Vimeo video to show based on user selection
  const getVimeoEmbed = () => {
    // Default video - using the corrected Vimeo ID from the user
    let videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596952?h=b7fa539b1c&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Main Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    
    // Only change video if user has explicitly selected a profile
    if (userGender && userType) {
      // Female user videos based on type
      if (userGender === 'female') {
        // Default female video (for junior, parent, coach)
        videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/867339842?h=5ecc384219&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
        
        // Female professional 
        if (userType === 'professional') {
          videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596920?h=7f23339d4b&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Professional"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
        } 
        // Female performance
        else if (userType === 'performance') {
          videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596969?h=9bbee986ef&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Performance"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
        }
      }
      
      // Specific videos for male users and coaches
      if (userGender === 'male' && userType === 'professional') {
        videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596901?h=2ac5605207&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Male Professional"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      }
      
      // Coach video (regardless of gender)
      if (userType === 'coach') {
        videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068604198?h=07d9021fd2&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Coach"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      }
      
      // Parent video (regardless of gender)
      if (userType === 'parent') {
        videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068629360?h=46b5c52b31&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Parent"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      }
    }
    
    return videoEmbed;
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
        </div>
        
        <StatsAndNavSection stats={stats} />
        
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
