
import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Info, List, Menu, Phone, History, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProfile } from '@/contexts/ProfileContext';

const BottomNavigation = ({ onNavClick }: { onNavClick?: () => void }) => {
  const { t } = useLanguage();
  const location = useLocation();
  const { userType } = useProfile();
  
  // Add effect to handle widget position when bottom nav is visible
  useEffect(() => {
    // Add class to body when bottom navigation is visible
    document.body.classList.add('bottom-navigation-visible');
    
    // Find any mobile widget and adjust its position
    const mobileWidget = document.querySelector('.mobile-widget');
    if (mobileWidget) {
      mobileWidget.classList.add('nav-visible');
    }
    
    return () => {
      document.body.classList.remove('bottom-navigation-visible');
      if (mobileWidget) {
        mobileWidget.classList.remove('nav-visible');
      }
    };
  }, []);

  const navItems = [
    {
      icon: <Home size={24} />,
      label: t('nav.home'),
      to: '/',
    },
    {
      icon: <Info size={24} />,
      label: t('nav.about'),
      to: '/about',
    },
    {
      icon: <List size={24} />,
      label: t('nav.programs'),
      to: '/programs',
    },
    {
      icon: <Phone size={24} />,
      label: t('nav.contact'),
      to: '/contact',
    },
    {
      icon: <Menu size={24} />,
      label: t('nav.menu'),
      to: '#menu',
      onClick: onNavClick,
    },
  ];

  // If userType is coach, replace Programs with Site Knowledge
  if (userType === 'coach') {
    const programsIndex = navItems.findIndex(item => item.to === '/programs');
    if (programsIndex !== -1) {
      navItems[programsIndex] = {
        icon: <History size={24} />,
        label: t('nav.knowledge'),
        to: '/site-knowledge',
      };
    }
  }

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.1)] z-50">
      <div className="flex justify-around items-center h-14">
        {navItems.map((item, index) => (
          item.to === '#menu' ? (
            <button
              key={index}
              className="flex flex-col items-center justify-center w-full h-full text-xs pt-1"
              onClick={item.onClick}
            >
              {item.icon}
              <span className="mt-1">{item.label}</span>
            </button>
          ) : (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-full h-full text-xs pt-1 ${
                  isActive ? 'text-ath-clay' : 'text-gray-500'
                }`
              }
            >
              {item.icon}
              <span className="mt-1">{item.label}</span>
            </NavLink>
          )
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
