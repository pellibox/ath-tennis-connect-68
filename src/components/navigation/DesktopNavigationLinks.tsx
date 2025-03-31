
import { cn } from '@/lib/utils';
import NavigationLink from './NavigationLink';
import { navigationItems } from './navigationItems';
import RegularDropdownItem from './RegularDropdownItem';

interface DesktopNavigationLinksProps {
  className?: string;
  textColorClass: string;
}

const DesktopNavigationLinks = ({ className, textColorClass }: DesktopNavigationLinksProps) => {
  return (
    <nav className={cn("flex items-center space-x-6", className)}>
      {navigationItems.map((item, index) => (
        item.submenu ? (
          <RegularDropdownItem key={index} item={item} textColorClass={textColorClass} />
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

export default DesktopNavigationLinks;
