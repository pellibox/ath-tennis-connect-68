
import { HelpCircle, BookOpen, Server, Users } from 'lucide-react';
import { GiTennisRacket } from "react-icons/gi";
import { MdSportsTennis } from "react-icons/md";
import React from 'react';

export interface NavigationItem {
  text: string;
  href: string;
  icon: React.ReactNode;
  submenu?: NavigationItem[];
}

export const navigationItems: NavigationItem[] = [
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
    href: '/programs/overview',
    icon: <img 
      src="/lovable-uploads/ffc6588c-879e-4103-a3cc-f48ee9573e63.png" 
      alt="Programs list" 
      className="w-[18px] h-[18px] mr-2 transition-all duration-300 ease-in-out group-hover:scale-110" 
    />
  },
  { 
    text: 'Tecnologia:VICKI', 
    href: '/technology',
    icon: <img 
      src="/lovable-uploads/0eb1f8cd-9983-4ee5-bf8c-5c6f68387720.png" 
      alt="VICKI logo" 
      className="w-[18px] h-[18px] mr-2 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-ath-clay" 
    />
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
  }
];
