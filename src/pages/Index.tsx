
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
    <div className="flex flex-col min-h-screen relative">
      {/* Centered logo with improved positioning */}
      <div 
        ref={logoRef}
        className={`fixed z-50 pointer-events-none transition-opacity duration-300 ${isMobile ? 'left-8' : 'left-0 right-0 flex justify-center'}`}
        style={{
          top: isMobile ? '180px' : '220px', // Positioned lower on the page
          opacity: logoOpacity
        }}
      >
        <div 
          style={{
            width: isMobile ? '120px' : '160px',
            transform: `translateY(-${logoYOffset}px)`
          }}
        >
          <Logo 
            onDarkBackground={true} 
            className="w-full h-auto"
            isCentered={true}
          />
        </div>
      </div>
      
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Advanced Tennis Hub"
            subtitle={getWelcomeMessage(userType)}
            vimeoEmbed={vimeoEmbed}
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
