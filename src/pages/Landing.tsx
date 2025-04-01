
import { useEffect, useState } from 'react';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed } from '@/utils/videoUtils';
import ProfileDialog from '@/components/profile/ProfileDialog';
import ButtonLink from '@/components/ButtonLink';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from '@/components/Logo';
import EmptyHeader from '@/components/EmptyHeader';
import EmptyFooter from '@/components/EmptyFooter';

const LandingPage = () => {
  const { userGender, userType, sport, updateProfile, resetProfile, deleteProfile } = useProfile();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [logoYOffset, setLogoYOffset] = useState<number>(0);
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  const isMobile = useIsMobile();
  
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

  const vimeoEmbed = getVimeoEmbed(userGender, userType, true, false, sport);

  return (
    <div className="flex flex-col min-h-screen relative bg-black">
      {/* Centered logo container with improved positioning */}
      <div 
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none z-40 transition-opacity duration-300"
        style={{ opacity: logoOpacity }}
      >
        <div 
          className="flex flex-col items-center"
          style={{
            transform: `translateY(-${logoYOffset}px)` 
          }}
        >
          {/* Logo with doubled size */}
          <div className="flex justify-center">
            <Logo 
              onDarkBackground={true}
              className={isMobile ? "w-[120px]" : "w-[640px]"}
              isCentered={true}
            />
          </div>
          
          {/* Buttons positioned 50px below the logo */}
          <div className="flex flex-wrap justify-center gap-6 mt-[50px]">
            <ButtonLink 
              href="#" 
              variant="athOutline"
              onClick={() => setDialogOpen(true)}
              className="text-lg px-8 py-2.5 rounded-md border border-ath-clay text-ath-clay hover:bg-ath-clay hover:text-white transition-all font-bold"
            >
              DICCI CHI SEI
            </ButtonLink>
            
            <ButtonLink 
              href="/about" 
              variant="outline" 
              className="text-lg px-8 py-2.5 rounded-md border border-ath-clay text-ath-clay hover:bg-ath-clay hover:text-white transition-all font-bold"
            >
              ENTRA IN ATH
            </ButtonLink>
          </div>
        </div>
      </div>
      
      <EmptyHeader headerText="IL FUTURO DEL TUO TENNIS INIZIA QUI." />
      
      <main className="flex-grow">
        <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
          <div dangerouslySetInnerHTML={{ __html: vimeoEmbed }} />
        </div>
        
        {/* Removed the button container since buttons are now with the logo */}
        <div className="w-full bg-black py-16 relative" style={{ height: 'auto', minHeight: '400px' }}>
          <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center py-8">
            {/* Content can be added here if needed */}
          </div>
        </div>
      </main>
      
      <EmptyFooter />
      
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
