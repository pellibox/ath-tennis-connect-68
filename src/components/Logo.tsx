
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'footer';
  className?: string;
  onDarkBackground?: boolean;
  preserveUserProfile?: boolean;
}

const Logo = ({ 
  variant = 'default', 
  className = '', 
  onDarkBackground = false,
  preserveUserProfile = false
}: LogoProps) => {
  const isFooter = variant === 'footer';
  
  // Logo paths
  const logoSrc = onDarkBackground 
    ? "/lovable-uploads/ebada5d3-6c5e-43a0-ab7d-a5850900d950.png" // Logo bianco per sfondi scuri (ATH_W)
    : "/lovable-uploads/fa0d6412-fbae-4d76-98c8-1d7a6cb96b19.png"; // Logo nero per sfondi chiari (ATH_B)
  
  // Fixed size for logo - consistent across all states
  const sizeClasses = isFooter ? 'h-28' : 'h-16';
  
  return (
    <div className={`${className}`}>
      <Link to="/" onClick={(e) => {
        // If we want to preserve user profile, prevent the default Link behavior 
        // that would cause React Router to fully reload the page
        if (preserveUserProfile) {
          e.preventDefault();
          window.history.pushState({}, '', '/');
          window.dispatchEvent(new Event('popstate'));
        }
      }}>
        <img 
          src={logoSrc} 
          alt="ATH - Advanced Tennis Hub" 
          className={`w-auto ${sizeClasses} object-contain`}
        />
      </Link>
    </div>
  );
};

export default Logo;
