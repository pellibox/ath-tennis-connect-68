
import { cn } from '@/lib/utils';
import NavigationLinks from './NavigationLinks';
import LanguageSwitcher from '../LanguageSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  return (
    <div
      className={cn(
        'fixed inset-0 bg-white pt-24 px-8 flex-col lg:hidden transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0 flex' : 'translate-x-full hidden'
      )}
    >
      <NavigationLinks 
        textColorClass="text-black" 
        isMobile={true} 
      />
      
      <div className="pt-4 border-t border-gray-100 flex items-center">
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default MobileMenu;
