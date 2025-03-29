
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
import ProfileDialog from './profile/ProfileDialog';
import { Button } from './ui/button';

interface HeaderProps {
  useVickiLogo?: boolean;
}

const Header = ({ useVickiLogo = false }: HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const { userGender, userType, sport, updateProfile, resetProfile, deleteProfile } = useProfile();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleGoBack = () => {
    navigate(-1);
  };

  // Show back button only when not on homepage
  const showBackButton = location.pathname !== '/';

  const headerBgClass = "bg-white";
  const textColorClass = "text-black";
  
  return (
    <>
      <header 
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-sm',
          headerBgClass,
          isMobile ? 'py-1' : 'py-3' // Reduced padding on mobile
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-center relative">
          <div className={cn(
            "flex items-center z-50", 
            isMobile ? "w-full justify-center" : (showBackButton ? "pl-0" : "pl-0")
          )}>
            {showBackButton && !isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleGoBack} 
                className="mr-2" 
                aria-label="Go back"
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
              isCentered={true}
              className={isMobile ? "mx-auto" : "ml-0"}
              useBlackLogoOnWhite={true}
            />
          </div>
          
          {!isMobile && (
            <div className="hidden lg:flex items-center ml-auto justify-center flex-1">
              <NavigationLinks textColorClass={textColorClass} />
            </div>
          )}
          
          {!isMobile && (
            <div className="flex items-center z-50 ml-auto lg:ml-0">
              <ProfileDialog 
                open={dialogOpen}
                setOpen={setDialogOpen}
                userGender={userGender}
                userType={userType}
                sport={sport}
                updateProfile={updateProfile}
                resetProfile={resetProfile}
                deleteProfile={deleteProfile}
              />
              
              <div className={cn("hidden lg:block", textColorClass)}>
                <LanguageSwitcher />
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Bottom Navigation for Mobile */}
      {isMobile && <BottomNavigation />}
      
      {/* Add padding to bottom of page on mobile to account for bottom navigation */}
      {isMobile && <div className="h-14"></div>}
    </>
  );
};

export default Header;
