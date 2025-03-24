
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronLeft } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProfile } from '@/contexts/ProfileContext';
import { useIsMobile } from '@/hooks/use-mobile';
import NavigationLinks from './navigation/NavigationLinks';
import MobileMenu from './navigation/MobileMenu';
import ProfileDialog from './profile/ProfileDialog';
import { Button } from './ui/button';

interface HeaderProps {
  useVickiLogo?: boolean;
}

const Header = ({ useVickiLogo = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const { userGender, userType, updateProfile, resetProfile, deleteProfile } = useProfile();
  
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  // Determine if this page should show a back button
  // Only show back button when not on the homepage
  const showBackButton = location.pathname !== '/';

  const headerBgClass = isMenuOpen ? "bg-white" : (isScrolled ? "bg-white shadow-md" : "bg-white");
  const textColorClass = "text-black";

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        headerBgClass,
        'py-3'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Left menu logo - always visible */}
        <div className={cn("flex items-center z-50")}>
          {showBackButton && (
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
            isInMenu={true}
          />
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center ml-auto justify-center flex-1">
          <NavigationLinks textColorClass={textColorClass} />
        </div>
        
        {/* Right side elements (profile, language switcher, menu toggle) */}
        <div className="flex items-center z-50 ml-auto lg:ml-0">
          <ProfileDialog 
            open={dialogOpen}
            setOpen={setDialogOpen}
            userGender={userGender}
            userType={userType}
            updateProfile={updateProfile}
            resetProfile={resetProfile}
            deleteProfile={deleteProfile}
          />
          
          <div className={cn("hidden lg:block", textColorClass)}>
            <LanguageSwitcher />
          </div>
          
          <button
            className={cn(
              "lg:hidden flex items-center",
              textColorClass
            )}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <MobileMenu isOpen={isMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
