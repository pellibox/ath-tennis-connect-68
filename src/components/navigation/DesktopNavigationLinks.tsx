
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import NavigationLink from './NavigationLink';
import { navigationItems } from './navigationItems';
import ProgramsDropdown from './ProgramsDropdown';
import { LockIcon } from 'lucide-react';
import { Button } from '../ui/button';

interface DesktopNavigationLinksProps {
  className?: string;
  textColorClass: string;
}

const DesktopNavigationLinks = ({ className, textColorClass }: DesktopNavigationLinksProps) => {
  const { t } = useLanguage();
  const location = useLocation();

  const isActive = (href: string) => {
    return location.pathname === href || 
           (href !== '/' && location.pathname.startsWith(href));
  };

  return (
    <div className={cn("flex items-center space-x-6", className)}>
      {navigationItems.map((item) => {
        if (item.href === "/programs") {
          return (
            <ProgramsDropdown 
              key={item.href} 
              textColorClass={textColorClass} 
              isActive={isActive(item.href)}
            />
          );
        }
        
        return (
          <NavigationLink
            key={item.href}
            href={item.href}
            isActive={isActive(item.href)}
            textColorClass={textColorClass}
          >
            {t(item.label)}
          </NavigationLink>
        );
      })}

      {/* Login Link */}
      <Button
        variant="outline"
        size="sm"
        className="ml-2 border-ath-clay text-ath-clay hover:bg-ath-clay hover:text-white"
        onClick={() => window.location.href = '/login'}
      >
        <LockIcon className="mr-2 h-4 w-4" />
        Area Coach
      </Button>
    </div>
  );
};

export default DesktopNavigationLinks;
