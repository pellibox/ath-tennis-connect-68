
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

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

  const navigationItems = [
    { text: t('nav.home'), href: '/' },
    { text: t('nav.programs'), href: '/programs' },
    { text: t('nav.facilities'), href: '/facilities' },
    { text: t('nav.coaches'), href: '/coaches' },
    { text: t('nav.about'), href: '/about' },
    { text: t('nav.contact'), href: '/contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="z-50">
          <Logo variant={isScrolled || isMenuOpen ? 'dark' : 'light'} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={cn(
                'text-sm font-medium hover:text-gray-600 transition-colors',
                isScrolled ? 'text-black' : 'text-white'
              )}
            >
              {item.text}
            </Link>
          ))}
          
          <div className={isScrolled ? 'text-black' : 'text-white'}>
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 text-black flex items-center"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-0 bg-white pt-24 px-6 flex-col lg:hidden transition-transform duration-300 ease-in-out',
            isMenuOpen ? 'translate-x-0 flex' : 'translate-x-full hidden'
          )}
        >
          <nav className="flex flex-col space-y-6">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-xl font-medium text-black hover:text-gray-600 transition-colors"
              >
                {item.text}
              </Link>
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
