
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'athOutline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  style?: React.CSSProperties;
  showArrow?: boolean;
}

const ButtonLink = ({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  external = false,
  style,
  showArrow = false,
}: ButtonLinkProps) => {
  const baseClasses = "inline-flex items-center justify-center text-center transition-all duration-300 rounded-md font-swiss";
  
  const variantClasses = {
    primary: "bg-ath-clay text-white hover:bg-opacity-90 shadow-md",
    secondary: "bg-black text-white hover:bg-gray-800 shadow-md",
    outline: "bg-transparent text-ath-clay border-2 border-ath-clay hover:bg-ath-clay hover:text-white",
    athOutline: "bg-white text-ath-clay border border-ath-clay hover:bg-gray-50",
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
  
  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={16} className="ml-2" />}
    </>
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
        {content}
      </a>
    );
  }
  
  return (
    <Link to={href} className={buttonClasses} style={style}>
      {content}
    </Link>
  );
};

export default ButtonLink;
