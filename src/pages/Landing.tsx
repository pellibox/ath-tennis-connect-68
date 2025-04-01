
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed } from '@/utils/videoUtils';
import ProfileDialog from '@/components/profile/ProfileDialog';
import ButtonLink from '@/components/ButtonLink';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from '@/components/Logo';

const LandingPage = () => {
  const { userGender, userType, sport, updateProfile, resetProfile, deleteProfile } = useProfile();
  const [dialogOpen, setDialogOpen] = useState(false);
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

  // Get personalized video based on user profile
  const vimeoEmbed = getVimeoEmbed(userGender, userType, true, false, sport);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Centered logo with improved positioning for both mobile and desktop */}
      <div 
        className="fixed z-50 pointer-events-none transition-opacity duration-300 left-0 right-0 flex justify-center"
        style={{
          top: isMobile ? '140px' : '180px', 
          opacity: logoOpacity,
          transform: 'translateX(10px)'
        }}
      >
        <div 
          style={{
            width: isMobile ? '120px' : '160px',
            transform: `translateY(-${logoYOffset}px)` 
          }}
          className="flex justify-center w-full"
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
        {/* Video background */}
        <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
          <div dangerouslySetInnerHTML={{ __html: vimeoEmbed }} />
        </div>
        
        {/* Black frame with claim */}
        <div className="w-full bg-black py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white text-xl md:text-3xl font-swiss uppercase mb-2">
              IL FUTURO DEL TUO TENNIS INIZIA QUI.
            </h2>
          </div>
        </div>
        
        {/* Profile and Enter buttons */}
        <div className="bg-gradient-to-r from-ath-clay/5 to-white py-24 px-6">
          <div className="max-w-2xl mx-auto text-center space-y-12">
            <div className="flex flex-col items-center space-y-4">
              <button
                onClick={() => setDialogOpen(true)}
                className="text-lg px-6 py-3 rounded-md bg-ath-clay text-white font-swiss flex items-center gap-2 hover:bg-opacity-90 transition-all"
              >
                <span>Profilo</span>
              </button>
              <p className="text-gray-600">Dicci chi sei</p>
            </div>
            
            <div>
              <ButtonLink 
                href="/about" 
                variant="primary" 
                size="lg"
                className="min-w-[180px]"
              >
                Entra in ATH
              </ButtonLink>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Profile Dialog */}
      <ProfileDialog 
        open={dialogOpen}
        setOpen={setDialogOpen}
        userGender={userGender}
        userType={userType}
        sport={sport}
        updateProfile={updateProfile}
        resetProfile={resetProfile}
        deleteProfile={deleteProfile}
        showTrigger={false}
      />
    </div>
  );
};

export default LandingPage;
