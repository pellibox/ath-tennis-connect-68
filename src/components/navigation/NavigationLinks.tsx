
import { cn } from '@/lib/utils';
import MobileNavigationLinks from './MobileNavigationLinks';
import DesktopNavigationLinks from './DesktopNavigationLinks';

interface NavigationLinksProps {
  className?: string;
  textColorClass: string;
  isMobile?: boolean;
}

const NavigationLinks = ({ className, textColorClass, isMobile = false }: NavigationLinksProps) => {
  return isMobile ? (
    <MobileNavigationLinks className={className} textColorClass={textColorClass} />
  ) : (
    <DesktopNavigationLinks className={className} textColorClass={textColorClass} />
  );
};

export default NavigationLinks;
