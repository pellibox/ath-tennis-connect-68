
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProfile } from '@/contexts/ProfileContext';
import { useIsMobile } from '@/hooks/use-mobile';
import NavigationLinks from './navigation/NavigationLinks';
import BottomNavigation from './navigation/BottomNavigation';
import { Button } from './ui/button';
import MobileMenu from './navigation/MobileMenu';
import ProgramsDropdown from './navigation/ProgramsDropdown';
import ProfileDialog from './profile/ProfileDialog';

interface HeaderProps {
  useVickiLogo?: boolean;
}

const Header = ({ useVickiLogo = false }: HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const { userGender, userType, sport, updateProfile, resetProfile, deleteProfile } = useProfile();
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  
  const handleGoBack = () => {
    navigate(-1);
  };

  // Show back button only when not on homepage
  const showBackButton = location.pathname !== '/';

  const headerBgClass = "bg-white";
  const textColorClass = "text-black";
  
  // Check if we're on a programs-related page
  const isOnProgramsPage = location.pathname.includes('programs') || 
                           location.pathname.includes('touchtennis') || 
                           location.pathname.includes('padel') ||
                           location.pathname.includes('pickleball');
  
  return (
    <>
      <header 
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-sm',
          headerBgClass,
          isMobile ? 'py-1' : 'py-3' // Reduced padding on mobile
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between relative">
          <div className={cn(
            "flex items-center z-50", 
            isMobile ? "w-auto mx-auto" : (showBackButton ? "pl-0" : "pl-0")
          )}>
            {showBackButton && !isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleGoBack} 
                className="mr-2" 
                aria-label={t("nav.back")}
              >
                <ChevronLeft size={24} />
              </Button>
            )}
            <Logo 
              variant="default" 
              onDarkBackground={false}
              preserveUserProfile={true}
              resetProfile={false}
              useVickiLogo={useVickiLogo}
              isInMenu={false}
              isCentered={isMobile}
              className={isMobile ? "" : "ml-0"}
              useBlackLogoOnWhite={true}
            />
          </div>
          
          {!isMobile && (
            <div className="hidden lg:flex items-center ml-auto justify-center flex-1">
              <NavigationLinks textColorClass={textColorClass} />
            </div>
          )}
          
          {isOnProgramsPage && isMobile && (
            <div className="absolute right-4">
              <ProgramsDropdown textColorClass={textColorClass} />
            </div>
          )}
          
          {!isMobile && (
            <div className="flex items-center z-50 ml-auto lg:ml-0 gap-4">
              <div className={cn("hidden lg:block", textColorClass)}>
                <ProfileDialog 
                  open={profileDialogOpen}
                  setOpen={setProfileDialogOpen}
                  userGender={userGender}
                  userType={userType}
                  sport={sport}
                  updateProfile={updateProfile}
                  resetProfile={resetProfile}
                  deleteProfile={deleteProfile}
                />
              </div>
              <div className={cn("hidden lg:block", textColorClass)}>
                <LanguageSwitcher />
              </div>
            </div>
          )}
        </div>
      </header>

      <MobileMenu isOpen={false} />
      
      {/* Bottom Navigation for Mobile */}
      {isMobile && <BottomNavigation />}
      
      {/* Add consistent spacing at the top to account for the header */}
      <div className={cn(
        isMobile ? "h-14" : "h-16", 
      )}></div>
    </>
  );
};

export default Header;
