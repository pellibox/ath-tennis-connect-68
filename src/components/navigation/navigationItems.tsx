
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
    href: '/programs',
    icon: <GiTennisRacket size={18} className="mr-2" />,
    submenu: [
      {
        text: 'Tennis',
        href: '/programs',
        icon: <GiTennisRacket size={18} className="mr-2" />
      },
      {
        text: 'Padel & Pickleball',
        href: '/padel-pickleball',
        icon: <img 
          src="/lovable-uploads/d5868d98-0391-4dd3-8467-4ff2a245339e.png" 
          alt="Padel racket" 
          className="w-[18px] h-[18px] mr-2" 
        />
      },
      {
        text: 'TouchTennis',
        href: '/touchtennis',
        icon: <MdSportsTennis size={18} className="mr-2" />
      }
    ]
  },
  { 
    text: 'Tecnologia:VICKI', 
    href: '/technology',
    icon: <img 
      src="/lovable-uploads/0eb1f8cd-9983-4ee5-bf8c-5c6f68387720.png" 
      alt="VICKI logo" 
      className="w-[18px] h-[18px] mr-2" 
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
