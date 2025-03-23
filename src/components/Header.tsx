
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Coaches', path: '/coaches' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-6 lg:px-10',
        scrolled ? 'bg-white py-4 shadow-sm' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className="text-sm font-medium relative animated-line pb-1"
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/book-now" 
            className="px-5 py-2 bg-black text-white text-sm hover:bg-opacity-90 transition-all"
          >
            BOOK NOW
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 bg-white flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <nav className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className="text-xl font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/book-now" 
              className="px-6 py-3 bg-black text-white hover:bg-opacity-90 transition-all mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              BOOK NOW
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
