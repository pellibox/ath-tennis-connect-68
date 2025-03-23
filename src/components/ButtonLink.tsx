
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  style?: React.CSSProperties;
}

const ButtonLink = ({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  external = false,
  style,
}: ButtonLinkProps) => {
  const baseClasses = "inline-block text-center transition-all duration-300 rounded-md font-medium";
  
  const variantClasses = {
    primary: "bg-black text-white hover:bg-gray-800 shadow-md",
    secondary: "bg-ath-clay text-white hover:bg-opacity-90 shadow-md",
    outline: "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white",
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold",
  };
  
  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );
  
  if (external) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        style={style}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link to={href} className={buttonClasses} style={style}>
      {children}
    </Link>
  );
};

export default ButtonLink;
