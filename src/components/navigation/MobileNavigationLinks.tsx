
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import NavigationLink from './NavigationLink';
import { navigationItems } from './navigationItems';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileNavigationLinksProps {
  className?: string;
  textColorClass: string;
}

const MobileNavigationLinks = ({ className, textColorClass }: MobileNavigationLinksProps) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { t } = useLanguage();

  const toggleSubmenu = (text: string) => {
    setOpenSubmenu(openSubmenu === text ? null : text);
  };

  const isActive = (href: string) => {
    return location.pathname.startsWith(href) && href !== '/';
  };

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
                {t(item.translationKey)}
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
                      {t(subItem.translationKey)}
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
              {t(item.translationKey)}
            </NavigationLink>
          )}
        </div>
      ))}
    </nav>
  );
};

export default MobileNavigationLinks;
