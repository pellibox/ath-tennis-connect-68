
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavigationLink = ({ href, children, className }: NavigationLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(href) && href !== '/';
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.includes('#')) {
      const parts = href.split('#');
      const pagePath = parts[0];
      const sectionId = parts[1];
      
      if (location.pathname === pagePath || (pagePath === '' && location.pathname === '/')) {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <Link 
      to={href} 
      onClick={handleClick} 
      className={cn(
        className,
        isActive ? "text-ath-clay" : ""
      )}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
