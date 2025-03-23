
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'footer';
  className?: string;
}

const Logo = ({ variant = 'default', className = '' }: LogoProps) => {
  const isFooter = variant === 'footer';
  
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/cabb225e-0db8-4830-8967-24942c8f7d52.png" 
        alt="ATH - Advanced Tennis Hub" 
        className={`w-auto ${isFooter ? 'h-20' : 'h-24'}`}
      />
    </Link>
  );
};

export default Logo;
