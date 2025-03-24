
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'footer';
  className?: string;
  onDarkBackground?: boolean;
  preserveUserProfile?: boolean;
  resetProfile?: boolean;
  useVickiLogo?: boolean;
}

const Logo = ({ 
  variant = 'default', 
  className = '', 
  onDarkBackground = false,
  preserveUserProfile = true,
  resetProfile = false,
  useVickiLogo = false
}: LogoProps) => {
  const isFooter = variant === 'footer';
  const location = useLocation();
  
  // Logo paths
  const logoSrc = useVickiLogo
    ? (onDarkBackground 
        ? "/lovable-uploads/dc679c8d-60cd-4841-a42c-0907926b7ef5.png" // Vicki logo bianco
        : "/lovable-uploads/8f2b30a1-cb65-453e-ba82-d9721a192426.png") // Vicki logo nero
    : (onDarkBackground 
        ? "/lovable-uploads/ebada5d3-6c5e-43a0-ab7d-a5850900d950.png" // Logo bianco per sfondi scuri (ATH_W)
        : "/lovable-uploads/fa0d6412-fbae-4d76-98c8-1d7a6cb96b19.png"); // Logo nero per sfondi chiari (ATH_B)
  
  // Fixed size for logo - consistent across all states
  const sizeClasses = isFooter ? 'h-28' : 'h-16';
  
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
  
  return (
    <div className={`${className}`}>
      <Link to="/" onClick={handleLogoClick}>
        <img 
          src={logoSrc} 
          alt={useVickiLogo ? "Vicki™" : "ATH - Advanced Tennis Hub"} 
          className={`w-auto ${sizeClasses} object-contain`}
        />
      </Link>
    </div>
  );
};

export default Logo;
