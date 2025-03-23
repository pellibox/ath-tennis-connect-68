
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'footer';
  className?: string;
  onDarkBackground?: boolean;
}

const Logo = ({ variant = 'default', className = '', onDarkBackground = false }: LogoProps) => {
  const isFooter = variant === 'footer';
  
  // Use white logo on dark backgrounds, and default logo on light backgrounds
  const logoSrc = onDarkBackground 
    ? "/lovable-uploads/d36e74c4-9cb8-41a2-bdfe-e21ccb569d26.png"
    : "/lovable-uploads/cabb225e-0db8-4830-8967-24942c8f7d52.png";
  
  // Use consistent sizing for both logos
  const sizeClasses = isFooter ? 'h-28' : 'h-32';
  
  return (
    <div className={`flex items-center ${className} mt-2 ml-2`}>
      <Link to="/">
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
