
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);
  
  // Only show back button when not on the landing or home pages
  useEffect(() => {
    const isHomePage = location.pathname === '/' || location.pathname === '/home';
    setVisible(!isHomePage);
  }, [location.pathname]);

  const handleGoBack = () => {
    navigate(-1);
  };

  // Don't render anything if not mobile or if we shouldn't show the button
  if (!isMobile || !visible) return null;

  return (
    <button
      onClick={handleGoBack}
      className={cn(
        "fixed left-3 top-1/2 -translate-y-1/2 z-40 w-10 h-10",
        "flex items-center justify-center rounded-full",
        "bg-white/70 backdrop-blur-sm shadow-md",
        "transition-all duration-200 hover:bg-white/90"
      )}
      aria-label="Go back"
    >
      <ChevronLeft size={24} className="text-ath-clay" />
    </button>
  );
};

export default FloatingBackButton;
