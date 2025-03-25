
import { Link, useLocation } from 'react-router-dom';
import { HelpCircle, BookOpen, Activity, Zap, Server, Users, Dumbbell } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const navigationItems = [
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
    text: 'Padel & Pickleball', 
    href: '/padel-pickleball',
    icon: <Dumbbell size={18} className="mr-2" />
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

const NavigationLink = ({ href, children, className }: NavigationLinkProps) => {
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

interface NavigationLinksProps {
  className?: string;
  textColorClass: string;
  isMobile?: boolean;
}

const NavigationLinks = ({ className, textColorClass, isMobile = false }: NavigationLinksProps) => {
  return (
    <nav className={cn("flex", isMobile ? "flex-col space-y-6" : "items-center space-x-6", className)}>
      {navigationItems.map((item, index) => (
        <NavigationLink
          key={index}
          href={item.href}
          className={cn(
            "flex items-center text-sm font-swiss transition-colors hover:text-ath-clay",
            textColorClass
          )}
        >
          {item.icon}
          {item.text}
        </NavigationLink>
      ))}
    </nav>
  );
};

export default NavigationLinks;
