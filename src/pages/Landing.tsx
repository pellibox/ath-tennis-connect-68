
import { useState, useEffect } from 'react';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed } from '@/utils/videoUtils';
import ProfileDialog from '@/components/profile/ProfileDialog';
import ButtonLink from '@/components/ButtonLink';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from '@/components/Logo';
import EmptyHeader from '@/components/EmptyHeader';
import EmptyFooter from '@/components/EmptyFooter';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const { userGender, userType, sport, updateProfile, resetProfile, deleteProfile } = useProfile();
  const [dialogOpen, setDialogOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const vimeoEmbed = getVimeoEmbed(userGender, userType, true, false, sport);

  const handleProfileComplete = (gender: any, type: any, sportType: any) => {
    updateProfile(gender, type, sportType);
    setDialogOpen(false);
  };

  const hasProfile = Boolean(userGender && userType);

  return (
    <div className="flex flex-col min-h-screen relative bg-black">
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none z-40">
        <div className="flex flex-col items-center w-full" style={{ transform: 'translateX(200px)' }}>
          <div className="flex justify-center">
            <Logo 
              onDarkBackground={true}
              className={isMobile ? "w-[120px]" : "w-[320px]"}
              isCentered={true}
            />
          </div>
          
          <div className="flex flex-col items-center w-full mt-[50px]">
            <div className="flex flex-wrap justify-center gap-6">
              {!hasProfile && (
                <ButtonLink 
                  href="#" 
                  variant="athOutline"
                  onClick={() => setDialogOpen(true)}
                  className="text-lg px-8 py-2.5 rounded-md border border-ath-clay text-ath-clay hover:bg-ath-clay hover:text-white transition-all font-bold"
                >
                  DICCI CHI SEI
                </ButtonLink>
              )}
              
              <ButtonLink 
                href="/home" 
                variant="athOutline" 
                className="text-lg px-8 py-2.5 rounded-md border border-ath-clay text-ath-clay hover:bg-ath-clay hover:text-white transition-all font-bold"
              >
                ENTRA IN ATH
              </ButtonLink>
            </div>
            
            {hasProfile && (
              <div className="mt-4 text-white bg-black bg-opacity-70 p-3 rounded-md text-center pointer-events-auto">
                <p className="font-swiss">Video personalizzato. Clicca su ENTRA IN ATH per continuare.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <EmptyHeader headerText="IL FUTURO DEL TUO TENNIS INIZIA QUI." />
      
      <main className="flex-grow">
        <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
          <div dangerouslySetInnerHTML={{ __html: vimeoEmbed }} />
        </div>
        
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
        updateProfile={handleProfileComplete}
        resetProfile={resetProfile}
        deleteProfile={deleteProfile}
        showTrigger={false}
      />
    </div>
  );
};

export default LandingPage;
