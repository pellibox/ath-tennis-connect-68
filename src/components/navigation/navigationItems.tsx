
import { HelpCircle, BookOpen, Server, Users } from 'lucide-react';
import { FaList } from "react-icons/fa6";
import React from 'react';

export interface NavigationItem {
  text: string;
  href: string;
  icon: React.ReactNode;
  submenu?: NavigationItem[];
}

export const getNavigationItems = (t: (key: string) => string): NavigationItem[] => [
  { 
    text: t('nav.whyAth'), 
    href: '/about',
    icon: <HelpCircle size={18} className="mr-2" />
  },
  { 
    text: t('nav.method'), 
    href: '/method',
    icon: <BookOpen size={18} className="mr-2" />
  },
  { 
    text: t('nav.programs'), 
    href: '/programs/overview',
    icon: <FaList size={18} className="mr-2" />
  },
  { 
    text: t('nav.technology'), 
    href: '/technology',
    icon: <img 
      src="/lovable-uploads/0eb1f8cd-9983-4ee5-bf8c-5c6f68387720.png" 
      alt="VICKI logo" 
      className="w-[18px] h-[18px] mr-2 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-ath-clay" 
    />
  },
  { 
    text: t('nav.facilities'), 
    href: '/facilities',
    icon: <Server size={18} className="mr-2" />
  },
  { 
    text: t('nav.coaches'), 
    href: '/coaches',
    icon: <Users size={18} className="mr-2" />
  }
];

// For backward compatibility
export const navigationItems: NavigationItem[] = getNavigationItems((key) => key);
