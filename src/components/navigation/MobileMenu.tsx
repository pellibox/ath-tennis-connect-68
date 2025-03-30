
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import NavigationLinks from './NavigationLinks';
import LanguageSwitcher from '../LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  
  // Only show back button when not on the homepage
  const showBackButton = location.pathname !== '/';

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div
      className={cn(
        'fixed inset-0 bg-white pt-24 px-8 flex-col lg:hidden transition-transform duration-300 ease-in-out z-50',
        isOpen ? 'translate-x-0 flex' : 'translate-x-full hidden'
      )}
    >
      {showBackButton && (
        <Button 
          variant="ghost" 
          className="flex items-center mb-6 px-0 hover:bg-gray-100" 
          onClick={handleGoBack}
        >
          <ChevronLeft size={20} className="mr-2" />
          <span>{t("nav.back")}</span>
        </Button>
      )}
      
      <NavigationLinks 
        textColorClass="text-black" 
        isMobile={true} 
      />
      
      <div className="mt-auto pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="font-medium text-sm">{t("language")}</div>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
