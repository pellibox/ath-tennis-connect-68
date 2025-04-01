
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
            width: isMobile ? '120px' : '320px',
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
      
      <EmptyHeader />
      
      <main className="flex-grow">
        <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
          <div dangerouslySetInnerHTML={{ __html: vimeoEmbed }} />
          
          {/* Text positioned inside video container, 10px from bottom */}
          <div className="absolute bottom-[10px] left-0 right-0 text-center">
            <h2 className="text-white text-xl md:text-3xl font-swiss uppercase">
              IL FUTURO DEL TUO TENNIS INIZIA QUI.
            </h2>
          </div>
        </div>
        
        <div className="w-full bg-black py-16 relative" style={{ height: 'auto', minHeight: '400px' }}>
          <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center py-8">
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap justify-center gap-6">
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
