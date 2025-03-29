
import { Link, useLocation } from 'react-router-dom';
import { HelpCircle, BookOpen, Activity, Zap, Server } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useProfile } from '@/contexts/ProfileContext';

const BottomNavigation = () => {
  const location = useLocation();
  const { userType } = useProfile();
  
  // Simplified navigation items for bottom nav
  const bottomNavItems = [
    { text: "About", href: '/about', icon: <HelpCircle size={20} /> },
    { text: "Method", href: '/method', icon: <BookOpen size={20} /> },
    { text: "Programs", href: '/programs', icon: <Activity size={20} /> },
    { text: "Tech", href: '/technology', icon: <Zap size={20} /> },
    { text: "Facilities", href: '/facilities', icon: <Server size={20} /> }
  ];

  const isActive = (href: string) => {
    return location.pathname === href || 
           (href !== '/' && location.pathname.startsWith(href));
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-40 lg:hidden">
      <div className="grid grid-cols-5 h-14">
        {bottomNavItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={cn(
              "flex flex-col items-center justify-center px-1 py-2 text-[10px]",
              isActive(item.href) 
                ? "text-ath-clay" 
                : "text-gray-600"
            )}
          >
            {item.icon}
            <span className="mt-1">{item.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
