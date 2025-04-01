import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import NavigationLinks from './navigation/NavigationLinks';
import BottomNavigation from './navigation/BottomNavigation';
import { Button } from './ui/button';
import MobileMenu from './navigation/MobileMenu';

interface HeaderProps {
  useVickiLogo?: boolean;
  bgColor?: 'white' | 'black';
  hideLogoInHeader?: boolean;
}

const Header = ({ 
  useVickiLogo = false, 
  bgColor = 'white',
  hideLogoInHeader = false
}: HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleGoBack = () => {
    navigate(-1);
  };

  const showBackButton = location.pathname !== '/';

  const headerBgClass = bgColor === 'black' ? "bg-black" : "bg-white";
  const textColorClass = bgColor === 'black' ? "text-white" : "text-black";
  
  return (
    <>
      <header 
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-sm',
          headerBgClass,
          isMobile ? 'py-1' : 'py-3'
        )}
      >
        <div className={cn(
          "container mx-auto px-4 flex items-center", 
          isMobile ? "justify-center" : "justify-between"
        )}>
          {!hideLogoInHeader && (
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
                  aria-label={t("nav.back")}
                >
                  <ChevronLeft size={24} className={textColorClass} />
                </Button>
              )}
              <Logo 
                variant="default" 
                onDarkBackground={bgColor === 'black'}
                preserveUserProfile={true}
                resetProfile={false}
                useVickiLogo={useVickiLogo}
                isInMenu={false}
                isCentered={isMobile}
                className={isMobile ? "" : "ml-0"}
                useBlackLogoOnWhite={bgColor !== 'black'}
              />
            </div>
          )}
          
          <div className={cn(
            "hidden lg:flex items-center justify-center flex-1",
            hideLogoInHeader ? "ml-0" : ""
          )}>
            <NavigationLinks textColorClass={textColorClass} />
          </div>
          
          <div className="flex items-center z-50 ml-auto lg:ml-0">
            <div className={cn("hidden lg:block", textColorClass)}>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileMenuOpen} />
      
      {isMobile && <BottomNavigation />}
      
      <div className={cn(
        isMobile ? "h-14" : "h-16", 
      )}></div>
    </>
  );
};

export default Header;
