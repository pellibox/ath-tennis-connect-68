
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

interface LogoProps {
  variant?: 'default' | 'footer';
  className?: string;
  onDarkBackground?: boolean;
  preserveUserProfile?: boolean;
  resetProfile?: boolean;
  useVickiLogo?: boolean;
  isInMenu?: boolean;
  isCentered?: boolean;
}

const Logo = ({ 
  variant = 'default', 
  className = '', 
  onDarkBackground = false,
  preserveUserProfile = true,
  resetProfile = false,
  useVickiLogo = false,
  isInMenu = false,
  isCentered = false
}: LogoProps) => {
  const isFooter = variant === 'footer';
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Logo paths
  let logoSrc;
  
  // Use the new logo for mobile top and desktop left positions
  const newLogoPath = "/lovable-uploads/2089c659-12cb-4d8c-9317-640e00beaa73.png";
  
  if (isInMenu) {
    // Always use the new menu logo when in menu
    logoSrc = newLogoPath;
  } else if (useVickiLogo) {
    logoSrc = onDarkBackground 
      ? "/lovable-uploads/dc679c8d-60cd-4841-a42c-0907926b7ef5.png" // Vicki logo bianco
      : "/lovable-uploads/8f2b30a1-cb65-453e-ba82-d9721a192426.png"; // Vicki logo nero
  } else {
    // Use the new logo files based on background
    logoSrc = onDarkBackground 
      ? newLogoPath // Use new logo for white version on dark background
      : "/lovable-uploads/47943c06-a504-40f7-a152-59c4a5d22896.png"; // Keep black ATH logo
  }
  
  // Size classes based on logo type
  const sizeClasses = isFooter 
    ? 'h-28' 
    : (isInMenu 
        ? 'w-24 h-auto' // Increased mobile logo size from w-10 to w-24
        : (isMobile 
            ? 'w-24 h-auto' // Increased mobile logo size from w-20 to w-24
            : 'w-40 sm:w-44 h-auto')); // Desktop size stays the same
  
  // Function to handle logo click
  const handleLogoClick = (e: React.MouseEvent) => {
    if (resetProfile) {
      // Clear user profile data from localStorage
      localStorage.removeItem('ath_user_gender');
      localStorage.removeItem('ath_user_type');
    }
    
    // If we want to preserve navigation behavior but not profile
    if (!preserveUserProfile) {
      e.preventDefault();
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new Event('popstate'));
    }
  };
  
  // Add mx-auto class when logo should be centered
  const centeringClass = isCentered ? 'mx-auto' : '';
  
  return (
    <div className={`${className} ${isCentered ? 'text-center' : ''}`}>
      <Link to="/" onClick={handleLogoClick}>
        <img 
          src={logoSrc} 
          alt={useVickiLogo || isInMenu ? "Vicki™" : "ATH - Advanced Tennis Hub"} 
          className={`${sizeClasses} ${centeringClass} object-contain`}
        />
      </Link>
    </div>
  );
};

export default Logo;
