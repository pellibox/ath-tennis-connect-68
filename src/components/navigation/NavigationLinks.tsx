
import { Link, useLocation } from 'react-router-dom';
import { HelpCircle, BookOpen, Activity, Zap, Server, Users, Dumbbell, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
    icon: <Activity size={18} className="mr-2" />,
    submenu: [
      {
        text: 'Tennis',
        href: '/programs',
        icon: <Activity size={18} className="mr-2" />
      },
      {
        text: 'Padel & Pickleball',
        href: '/padel-pickleball',
        icon: <Dumbbell size={18} className="mr-2" />
      }
    ]
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
  }
];

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavigationLink = ({ href, children, className }: NavigationLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(href) && href !== '/';
  
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
    <Link 
      to={href} 
      onClick={handleClick} 
      className={cn(
        className,
        isActive ? "text-ath-clay" : ""
      )}
    >
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
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (text: string) => {
    setOpenSubmenu(openSubmenu === text ? null : text);
  };

  const isActive = (href: string) => {
    return location.pathname.startsWith(href) && href !== '/';
  };

  const renderMobileNavigation = () => {
    return (
      <nav className={cn("flex flex-col space-y-6", className)}>
        {navigationItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            {item.submenu ? (
              <>
                <button
                  onClick={() => toggleSubmenu(item.text)}
                  className={cn(
                    "flex items-center text-sm font-swiss transition-colors hover:text-ath-clay mb-2",
                    textColorClass,
                    isActive(item.href) ? "text-ath-clay" : ""
                  )}
                >
                  {item.icon}
                  {item.text}
                  <ChevronDown 
                    size={16} 
                    className={cn(
                      "ml-1 transition-transform", 
                      openSubmenu === item.text ? "rotate-180" : ""
                    )} 
                  />
                </button>
                {openSubmenu === item.text && (
                  <div className="ml-6 flex flex-col space-y-4 mt-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <NavigationLink
                        key={subIndex}
                        href={subItem.href}
                        className={cn(
                          "flex items-center text-sm font-swiss transition-colors hover:text-ath-clay",
                          textColorClass
                        )}
                      >
                        {subItem.icon}
                        {subItem.text}
                      </NavigationLink>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <NavigationLink
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-swiss transition-colors hover:text-ath-clay",
                  textColorClass
                )}
              >
                {item.icon}
                {item.text}
              </NavigationLink>
            )}
          </div>
        ))}
      </nav>
    );
  };

  const renderDesktopNavigation = () => {
    return (
      <nav className={cn("flex items-center space-x-6", className)}>
        {navigationItems.map((item, index) => (
          item.submenu ? (
            <NavigationMenu key={index}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "flex items-center text-sm font-swiss transition-colors hover:text-ath-clay bg-transparent data-[state=open]:bg-transparent",
                      textColorClass,
                      isActive(item.href) ? "text-ath-clay" : ""
                    )}
                  >
                    {item.icon}
                    {item.text}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <NavigationMenuLink asChild>
                            <Link 
                              to={subItem.href}
                              className={cn(
                                "flex items-center p-2 hover:bg-gray-100 rounded-md",
                                isActive(subItem.href) ? "text-ath-clay" : ""
                              )}
                            >
                              {subItem.icon}
                              <span>{subItem.text}</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ) : (
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
          )
        ))}
      </nav>
    );
  };

  return isMobile ? renderMobileNavigation() : renderDesktopNavigation();
};

export default NavigationLinks;
