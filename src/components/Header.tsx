import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Activity, Zap, BookOpen, Server, Home, Users } from 'lucide-react';
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  // Load user preferences
  const [userProfile, setUserProfile] = useState<{ gender: UserGender | null, type: UserType | null }>({ gender: null, type: null });
  const [dialogOpen, setDialogOpen] = useState(false);
  
  // Load user preferences on mount
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
  
  // Handle profile reset
  const handleProfileReset = () => {
    // Clear user profile state
    setUserProfile({ gender: null, type: null });
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

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
      text: "Chi Siamo", 
      href: '/about',
      icon: <Home size={18} className="mr-2" />
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

  // Always use light background for header
  const headerBgClass = isMenuOpen ? "bg-white" : (isScrolled ? "bg-white shadow-md" : "bg-white/90");
  
  // Always use dark text for navigation
  const textColorClass = "text-black";

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        headerBgClass,
        'py-3' // Fixed consistent padding
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative">
        <div className="flex items-center z-50">
          <Logo 
            variant="default" 
            onDarkBackground={false}
            preserveUserProfile={false}
            resetProfile={true}
          />
        </div>
        
        <div className="hidden lg:flex items-center space-x-1">
          <nav className="flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <LinkComponent 
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-ath-clay",
                  textColorClass
                )}
              >
                {item.icon}
                {item.text}
              </LinkComponent>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center z-50">
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              {userProfile.gender && userProfile.type ? (
                <div className="mr-4 cursor-pointer">
                  <ProfileIndicator 
                    gender={userProfile.gender as UserGender} 
                    type={userProfile.type as UserType} 
                    onEditClick={() => {}}
                  />
                </div>
              ) : (
                <button className="mr-4 text-sm px-3 py-1 rounded-md bg-ath-clay text-white">
                  Profilo
                </button>
              )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Seleziona Profilo</DialogTitle>
                <DialogDescription>
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
                className="text-xl font-medium text-black hover:text-ath-clay transition-colors flex items-center"
              >
                {item.icon}
                {item.text}
              </LinkComponent>
            ))}
            
            <div className="pt-4 border-t border-gray-100">
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
