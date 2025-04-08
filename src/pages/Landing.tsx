import { useState, useEffect } from 'react';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed } from '@/utils/videoUtils';
import ProfileDialog from '@/components/profile/ProfileDialog';
import ButtonLink from '@/components/ButtonLink';
import { useIsMobile } from '@/hooks/use-mobile';
import EmptyHeader from '@/components/EmptyHeader';
import EmptyFooter from '@/components/EmptyFooter';
import { useNavigate } from 'react-router-dom';
import ResponsiveImage from '@/components/ResponsiveImage';

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

const getPersonalizedContentText = (gender: string | null, type: string | null, sport: string | null): {
  first: string;
  second: string;
} => {
  const genderText = getUserGenderText(gender);
  const typeText = getUserTypeText(type);
  const sportText = getSportText(sport);
  const selections = [genderText && genderText, typeText && typeText, sportText && sportText].filter(Boolean).join(', ');
  return {
    first: `Contenuto personalizzato: ${selections}`,
    second: 'Clicca su ENTRA IN ATH per continuare.'
  };
};

const LandingPage = () => {
  const {
    userGender,
    userType,
    sport,
    updateProfile,
    resetProfile,
    deleteProfile
  } = useProfile();
  const [dialogOpen, setDialogOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const vimeoEmbed = getVimeoEmbed(userGender, userType, true, false, sport);
  const handleProfileComplete = (gender: any, type: any, sportType: any) => {
    updateProfile(gender, type, sportType);
    setDialogOpen(false);
  };
  const hasProfile = Boolean(userGender && userType);
  const personalizedContent = getPersonalizedContentText(userGender, userType, sport);
  
  const renderButtons = () => {
    return <div className="flex flex-wrap justify-center gap-4">
        {!hasProfile && <ButtonLink href="#" variant="athOutline" onClick={() => setDialogOpen(true)} className="text-lg px-6 py-2 rounded-md border border-ath-clay text-ath-clay hover:bg-ath-clay hover:text-white transition-all font-bold">
            DIMMI CHI SEI
          </ButtonLink>}
        
        <ButtonLink href="/home" variant="athOutline" className="text-lg px-6 py-2 rounded-md border border-ath-clay text-ath-clay hover:bg-ath-clay hover:text-white transition-all font-bold">
          ENTRA IN ATH
        </ButtonLink>
      </div>;
  };
  
  return <div className="flex flex-col min-h-screen bg-black">
      <EmptyHeader headerText="" />
      
      <main className="flex-grow px-0 py-0 mx-0 my-0">
        <div className="w-full bg-black relative" style={{
          height: isMobile ? 'calc(100vh - 70px)' : '100vh'
        }}>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-3 z-30 pointer-events-none">
            <img src="/lovable-uploads/a00875f9-6335-4f8b-81c4-029183b59eec.png" alt="ATH - Advanced Tennis Hub" className={`object-contain ${isMobile ? 'w-[100px]' : 'w-[200px]'}`} />
          </div>
          
          {!isMobile && <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col justify-center items-center pointer-events-none" style={{
          marginTop: "20px"
        }}>
              <h2 className="text-white text-xl mt-4 font-swiss uppercase">
                IL FUTURO DEL TUO TENNIS INIZIA QUI.
              </h2>
              <div className="mt-6 pointer-events-auto">
                {renderButtons()}
              </div>
            </div>}
          
          <div className="vimeo-container h-full w-full overflow-hidden" style={{
            transform: isMobile ? 'scale(1.2)' : 'none'
          }} dangerouslySetInnerHTML={{
            __html: vimeoEmbed
          }} />
        </div>
        
        {isMobile && <div className="w-full bg-black py-2 pointer-events-auto">
            <div className="container mx-auto px-4">
              <h2 className="text-white text-sm text-center font-swiss uppercase mb-2">
                IL FUTURO DEL TUO TENNIS INIZIA QUI.
              </h2>
              {renderButtons()}
              
              {hasProfile && <div className="mt-2 text-white bg-black bg-opacity-70 p-2 rounded-md text-center">
                  <p className="font-swiss text-[10px] truncate max-w-full">{personalizedContent.first}</p>
                  <p className="font-swiss text-[10px] truncate max-w-full">{personalizedContent.second}</p>
                </div>}
            </div>
          </div>}
      </main>
      
      <EmptyFooter />
      
      <ProfileDialog open={dialogOpen} setOpen={setDialogOpen} userGender={userGender} userType={userType} sport={sport} updateProfile={handleProfileComplete} resetProfile={resetProfile} deleteProfile={deleteProfile} showTrigger={false} />
    </div>;
};

export default LandingPage;
