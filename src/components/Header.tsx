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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Add or remove overflow-hidden class on body when menu is open/closed
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

  // Updated navigation structure with corrected menu items and proper routes
  const navigationItems = [
    { 
      text: "Chi Siamo", 
      href: '/about',
      icon: <Home size={18} className="mr-2" />
    },
    { 
      text: 'Il Metodo', 
      href: '/about#method',
      icon: <BookOpen size={18} className="mr-2" />
    },
    { 
      text: 'Programmi', 
      href: '/programs',
      icon: <Activity size={18} className="mr-2" />
    },
    { 
      text: 'Tecnologia:VICKI', 
      href: '/about#technology',
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

  // LinkComponent to handle scrolling to section IDs
  const LinkComponent = ({ href, children, className }: { href: string; children: React.ReactNode, className?: string }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (href.includes('#')) {
        const parts = href.split('#');
        const pagePath = parts[0];
        const sectionId = parts[1];
        
        // If we're already on the correct page, just scroll to the section
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

  // Determine if we should use the white logo based on scroll position
  const useDarkBackgroundLogo = !isScrolled && !isMenuOpen;

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="z-50">
          <Logo 
            variant={isScrolled || isMenuOpen ? "default" : "footer"} 
            onDarkBackground={useDarkBackgroundLogo}
          />
        </Link>

        {/* Desktop Navigation with Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-4">
          <NavigationMenu className="max-w-none">
            <NavigationMenuList>
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <LinkComponent 
                    href={item.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "flex items-center bg-transparent",
                      isScrolled ? 'text-black hover:text-ath-clay' : 'text-white hover:text-white hover:bg-white/20'
                    )}
                  >
                    {item.icon}
                    {item.text}
                  </LinkComponent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className={isScrolled ? 'text-black' : 'text-white'}>
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "lg:hidden z-50 flex items-center",
            isScrolled || isMenuOpen ? "text-black" : "text-white"
          )}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
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

export default Header;
