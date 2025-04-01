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

const getUserGenderText = (gender: string | null): string => {
  switch (gender) {
    case 'male':
      return 'Uomo';
    case 'female':
      return 'Donna';
    default:
      return '';
  }
};

const getUserTypeText = (type: string | null): string => {
  switch (type) {
    case 'junior':
      return 'Junior';
    case 'adult':
      return 'Adulto';
    case 'professional':
      return 'Professionista';
    case 'coach':
      return 'Coach';
    case 'parent':
      return 'Genitore';
    case 'performance':
      return 'Performance';
    case 'camps':
      return 'Camps';
    default:
      return '';
  }
};

const getSportText = (sport: string | null): string => {
  switch (sport) {
    case 'tennis':
      return 'Tennis';
    case 'padel':
      return 'Padel';
    case 'pickleball':
      return 'Pickleball';
    case 'touchtennis':
      return 'TouchTennis';
    default:
      return '';
  }
};

const getPersonalizedContentText = (gender: string | null, type: string | null, sport: string | null): string => {
  const genderText = getUserGenderText(gender);
  const typeText = getUserTypeText(type);
  const sportText = getSportText(sport);
  
  const selections = [
    genderText && genderText,
    typeText && typeText,
    sportText && sportText
  ].filter(Boolean).join(', ');
  
  return `Contenuto personalizzato: ${selections} - Clicca su ENTRA IN ATH per continuare.`;
};

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

  const renderButtons = () => {
    return (
      <div className="flex flex-wrap justify-center gap-6">
        {!hasProfile && (
          <ButtonLink 
            href="#" 
            variant="athOutline"
            onClick={() => setDialogOpen(true)}
            className="text-lg px-8 py-2.5 rounded-md border border-ath-clay text-ath-clay hover:bg-ath-clay hover:text-white transition-all font-bold"
          >
            DIMMI CHI SEI
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
    );
  };

  return (
    <div className="flex flex-col min-h-screen relative bg-black">
      {!isMobile && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none z-40">
          <div className="flex flex-col items-center">
            <div className="mt-[50px]">
              {renderButtons()}
            </div>
            
            {hasProfile && (
              <div className="mt-4 text-white bg-black bg-opacity-70 p-3 rounded-md text-center pointer-events-auto">
                <p className="font-swiss text-xs truncate max-w-full">{getPersonalizedContentText(userGender, userType, sport)}</p>
              </div>
            )}
          </div>
        </div>
      )}
      
      <EmptyHeader headerText="IL FUTURO DEL TUO TENNIS INIZIA QUI." />
      
      <main className="flex-grow">
        <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex justify-center items-center pointer-events-none">
            <Logo 
              onDarkBackground={true}
              className={isMobile ? "w-[120px]" : "w-[220px]"}
              isCentered={true}
            />
          </div>
          
          <div dangerouslySetInnerHTML={{ __html: vimeoEmbed }} />
        </div>
        
        {isMobile && (
          <div className="w-full bg-black py-6 pointer-events-auto">
            <div className="container mx-auto px-4">
              {renderButtons()}
              
              {hasProfile && (
                <div className="mt-4 text-white bg-black bg-opacity-70 p-3 rounded-md text-center">
                  <p className="font-swiss text-xs truncate max-w-full">{getPersonalizedContentText(userGender, userType, sport)}</p>
                </div>
              )}
            </div>
          </div>
        )}
        
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
