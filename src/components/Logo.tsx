
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'footer';
  className?: string;
  onDarkBackground?: boolean;
}

const Logo = ({ variant = 'default', className = '', onDarkBackground = false }: LogoProps) => {
  const isFooter = variant === 'footer';
  
  // Utilizzo dei nuovi loghi
  const logoSrc = onDarkBackground 
    ? "/lovable-uploads/ebada5d3-6c5e-43a0-ab7d-a5850900d950.png" // Logo bianco per sfondi scuri (ATH_W)
    : "/lovable-uploads/fa0d6412-fbae-4d76-98c8-1d7a6cb96b19.png"; // Logo nero per sfondi chiari (ATH_B)
  
  // Dimensioni ridotte per evitare sovrapposizioni
  const sizeClasses = isFooter ? 'h-28' : 'h-16';
  
  return (
    <div className={`${className}`}>
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
