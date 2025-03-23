
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'footer';
  className?: string;
}

const Logo = ({ variant = 'default', className = '' }: LogoProps) => {
  const isFooter = variant === 'footer';
  
  return (
    <Link to="/" className={`flex flex-col items-${isFooter ? 'start' : 'center'} ${className}`}>
      <div className="flex flex-col items-center">
        <img 
          src="/lovable-uploads/ca117fb6-0c83-4d3a-865b-e3a4b5b743a7.png" 
          alt="ATH - Advanced Tennis Hub" 
          className={`w-auto ${isFooter ? 'h-16' : 'h-20'}`}
        />
      </div>
    </Link>
  );
};

export default Logo;
