
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';
import { useLanguage } from '@/contexts/LanguageContext';
import ButtonLink from '@/components/ButtonLink';
import { Award, Users, BarChart, Target, Layers, Headphones } from 'lucide-react';
import RevealAnimation from '@/components/RevealAnimation';
import Logo from '@/components/Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed } from '@/utils/videoUtils';
import StandardHeroVideo from '@/components/StandardHeroVideo';

const AboutPage = () => {
  const { t } = useLanguage();
  const { userGender, userType } = useProfile();
  const [logoYOffset, setLogoYOffset] = useState<number>(0);
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  // Icon sizes based on device type
  const iconSize = isMobile ? 40 : 64;
  const iconContainerSize = isMobile ? "w-20 h-20" : "w-36 h-36";
  
  // Get personalized video based on user profile
  const vimeoEmbed = getVimeoEmbed(userGender, userType);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Centered logo with improved positioning for both mobile and desktop */}
      <div 
        className="fixed z-50 pointer-events-none transition-opacity duration-300 left-0 right-0 flex justify-center"
        style={{
          top: isMobile ? '140px' : '180px', 
          opacity: logoOpacity,
          transform: 'translateX(10px)' // Added 10px horizontal offset
        }}
      >
        <div 
          style={{
            width: isMobile ? '120px' : '160px',
            transform: `translateY(-${logoYOffset}px)` 
          }}
          className="flex justify-center w-full" // Ensure full width for perfect centering
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
        {/* Video background - using personalized video based on user profile */}
        <StandardHeroVideo 
          vimeoEmbed={vimeoEmbed} 
          titleKey="nav.about"
          subtitle="La rivoluzione nell'allenamento del tennis moderno"
        />
        
        <div className="bg-gradient-to-r from-ath-clay/5 to-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <RevealAnimation>
                <h2 className="text-3xl md:text-4xl font-display mb-6 text-ath-clay">{t("about.challenges")}</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {t("about.challenges.subtitle")}
                </p>
              </RevealAnimation>
            </div>
          </div>
        </div>
        
        <AboutSection 
          title={t("about.challenge1.title")}
          subtitle="Sfida #1"
          description={
            <div className="space-y-4">
              <p className="font-medium text-ath-clay">{t("about.challenge1.title")}:</p>
              <p>{t("about.challenge1.desc")}</p>
              <p className="font-medium text-ath-clay">{t("about.solution1.title")}:</p>
              <p>{t("about.solution1.desc")}</p>
            </div>
          }
          icon={
            <div className={`${iconContainerSize} bg-white rounded-full flex items-center justify-center shadow-inner`}>
              <Headphones size={iconSize} className="text-ath-clay" />
            </div>
          }
          accent="clay"
          elegant={true}
        />
        
        <AboutSection 
          title={t("about.challenge2.title")}
          subtitle="Sfida #2"
          description={
            <div className="space-y-4">
              <p className="font-medium text-ath-clay">{t("about.challenge2.title")}:</p>
              <p>{t("about.challenge2.desc")}</p>
              <p className="font-medium text-ath-clay">{t("about.solution2.title")}:</p>
              <p>{t("about.solution2.desc")}</p>
            </div>
          }
          icon={
            <div className={`${iconContainerSize} bg-white rounded-full flex items-center justify-center shadow-inner`}>
              <Users size={iconSize} className="text-ath-clay" />
            </div>
          }
          reversed={true}
          accent="clay"
          elegant={true}
          className="bg-white"
        />
        
        <AboutSection 
          title={t("about.challenge3.title")}
          subtitle="Sfida #3"
          description={
            <div className="space-y-4">
              <p className="font-medium text-ath-clay">{t("about.challenge3.title")}:</p>
              <p>{t("about.challenge3.desc")}</p>
              <p className="font-medium text-ath-clay">{t("about.solution3.title")}:</p>
              <p>{t("about.solution3.desc")}</p>
            </div>
          }
          icon={
            <div className={`${iconContainerSize} bg-white rounded-full flex items-center justify-center shadow-inner`}>
              <BarChart size={iconSize} className="text-ath-clay" />
            </div>
          }
          accent="clay"
          elegant={true}
        />
        
        <AboutSection 
          title={t("about.challenge4.title")}
          subtitle="Sfida #4"
          description={
            <div className="space-y-4">
              <p className="font-medium text-ath-clay">{t("about.challenge4.title")}:</p>
              <p>{t("about.challenge4.desc")}</p>
              <p className="font-medium text-ath-clay">{t("about.solution4.title")}:</p>
              <p>{t("about.solution4.desc")}</p>
            </div>
          }
          icon={
            <div className={`${iconContainerSize} bg-white rounded-full flex items-center justify-center shadow-inner`}>
              <Target size={iconSize} className="text-ath-clay" />
            </div>
          }
          reversed={true}
          accent="clay"
          elegant={true}
          className="bg-white"
        />
        
        <AboutSection 
          title={t("about.challenge5.title")}
          subtitle="Sfida #5"
          description={
            <div className="space-y-4">
              <p className="font-medium text-ath-clay">{t("about.challenge5.title")}:</p>
              <p>{t("about.challenge5.desc")}</p>
              <p className="font-medium text-ath-clay">{t("about.solution5.title")}:</p>
              <p>{t("about.solution5.desc")}</p>
            </div>
          }
          icon={
            <div className={`${iconContainerSize} bg-white rounded-full flex items-center justify-center shadow-inner`}>
              <Layers size={iconSize} className="text-ath-clay" />
            </div>
          }
          accent="clay"
          elegant={true}
        />
        
        <div className="bg-ath-clay text-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <RevealAnimation>
                <h2 className="text-3xl md:text-4xl font-display mb-8">{t("about.approach.title")}</h2>
                <p className="text-white/90 leading-relaxed text-lg mb-10">
                  {t("about.approach.desc")}
                </p>
                <div className="flex justify-center">
                  <ButtonLink href="/method" variant="secondary">
                    {t("about.discover.button")}
                  </ButtonLink>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
        
        <JoinRevolutionSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
