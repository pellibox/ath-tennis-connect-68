
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity, Zap, BookOpen, Server, HelpCircle, Users } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from '@/hooks/use-mobile';
import ProfileIndicator from './ProfileIndicator';
import UserTypeSelector from './UserTypeSelector';
import { UserGender, UserType, loadUserPreferences } from './UserTypeSelector';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface HeaderProps {
  useVickiLogo?: boolean;
}

const Header = ({ useVickiLogo = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const isHomePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';
  const isMethodPage = location.pathname === '/method';
  const isTechnologyPage = location.pathname === '/technology';
  
  const [userProfile, setUserProfile] = useState<{ gender: UserGender | null, type: UserType | null }>({ gender: null, type: null });
  const [dialogOpen, setDialogOpen] = useState(false);
  const profileButtonRef = useRef(null);
  
  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('ath_user_gender');
      localStorage.removeItem('ath_user_type');
    });
    
    return () => {
      window.removeEventListener('beforeunload', () => {});
    };
  }, []);
  
  useEffect(() => {
    const preferences = loadUserPreferences();
    setUserProfile(preferences);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleProfileComplete = (gender: UserGender, type: UserType) => {
    setUserProfile({ gender, type });
    setDialogOpen(false);
  };
  
  const handleProfileReset = () => {
    setDialogOpen(true);
    
    toast.info("Seleziona nuove preferenze di profilo", {
      position: "bottom-center",
      duration: 3000
    });
  };
  
  const handleProfileDelete = () => {
    setUserProfile({ gender: null, type: null });
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

  const navigationItems = [
    { 
      text: "Perché ATH", 
      href: '/about',
      icon: <HelpCircle size={18} className="mr-2" />
    },
    { 
      text: 'Il Metodo', 
      href: '/method',
      icon: <BookOpen size={18} className="mr-2" />
    },
    { 
      text: 'Programmi', 
      href: '/programs',
      icon: <Activity size={18} className="mr-2" />
    },
    { 
      text: 'Tecnologia:VICKI', 
      href: '/technology',
      icon: <Zap size={18} className="mr-2" />
    },
    { 
      text: 'Strutture', 
      href: '/facilities',
      icon: <Server size={18} className="mr-2" />
    },
    { 
      text: 'Coach', 
      href: '/coaches',
      icon: <Users size={18} className="mr-2" />
    },
  ];

  const headerBgClass = isMenuOpen ? "bg-white" : (isScrolled ? "bg-white shadow-md" : "bg-white");
  
  const textColorClass = "text-black";

  // Always show the center logo regardless of scroll position
  const showLogoInHeader = true;

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        headerBgClass,
        'py-3'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        {/* Left menu logo */}
        <div className={cn("flex items-center z-50 absolute left-6 md:left-6")}>
          <Logo 
            variant="default" 
            onDarkBackground={false}
            preserveUserProfile={true}
            resetProfile={false}
            useVickiLogo={useVickiLogo}
            isInMenu={true}
          />
        </div>
        
        {/* Center logo - always visible */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-50">
          <Logo 
            variant="default" 
            onDarkBackground={false}
            preserveUserProfile={true}
            resetProfile={false}
            className="mx-auto"
          />
        </div>
        
        <div className="hidden lg:flex items-center ml-auto justify-center flex-1">
          <nav className="flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <LinkComponent 
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-swiss transition-colors hover:text-ath-clay",
                  textColorClass
                )}
              >
                {item.icon}
                {item.text}
              </LinkComponent>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center z-50 ml-auto lg:ml-0">
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <div ref={profileButtonRef} className="mr-4 cursor-pointer relative">
                {userProfile.gender && userProfile.type ? (
                  <ProfileIndicator 
                    gender={userProfile.gender as UserGender} 
                    type={userProfile.type as UserType} 
                    onEditClick={() => setDialogOpen(true)}
                    onDeleteProfile={handleProfileDelete}
                    onResetProfile={handleProfileReset}
                  />
                ) : (
                  <button className="mr-4 text-sm px-3 py-1 rounded-md bg-ath-clay text-white font-swiss">
                    Profilo
                  </button>
                )}
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-swiss">Seleziona Profilo</DialogTitle>
                <DialogDescription className="font-swiss">
                  Personalizza la tua esperienza su ATH
                </DialogDescription>
              </DialogHeader>
              <UserTypeSelector 
                onSelectionComplete={handleProfileComplete}
                initialGender={userProfile.gender || undefined}
                initialType={userProfile.type || undefined}
              />
            </DialogContent>
          </Dialog>
          
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

        <div
          className={cn(
            'fixed inset-0 bg-white pt-24 px-8 flex-col lg:hidden transition-transform duration-300 ease-in-out',
            isMenuOpen ? 'translate-x-0 flex' : 'translate-x-full hidden'
          )}
        >
          <nav className="flex flex-col space-y-6">
            {navigationItems.map((item, index) => (
              <LinkComponent
                key={index}
                href={item.href}
                className="text-base font-swiss text-black hover:text-ath-clay transition-colors flex items-center"
              >
                {item.icon}
                {item.text}
              </LinkComponent>
            ))}
            
            <div className="pt-4 border-t border-gray-100 flex items-center">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

const LinkComponent = ({ href, children, className }: { href: string; children: React.ReactNode, className?: string }) => {
  const location = useLocation();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.includes('#')) {
      const parts = href.split('#');
      const pagePath = parts[0];
      const sectionId = parts[1];
      
      if (location.pathname === pagePath || (pagePath === '' && location.pathname === '/')) {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <Link to={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default Header;
