
import { Link, useLocation } from 'react-router-dom';
import { HelpCircle, BookOpen, Zap, Server } from 'lucide-react';
import { FaList } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";  // Corrected import
import { cn } from '@/lib/utils';
import { useProfile } from '@/contexts/ProfileContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import ProfileDialog from '../profile/ProfileDialog';

const BottomNavigation = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const { userType, userGender, sport, updateProfile, resetProfile, deleteProfile } = useProfile();
  const [dialogOpen, setDialogOpen] = useState(false);
  
  // Simplified navigation items for bottom nav
  const bottomNavItems = [
    { text: "ATH", href: '/about', icon: <HelpCircle size={20} /> },
    { text: t("nav.method"), href: '/method', icon: <BookOpen size={20} /> },
    { 
      text: t("nav.programs"), 
      href: '/programs/overview', 
      icon: <FaList size={20} /> 
    },
    { text: t("tech.title.short"), href: '/technology', icon: <Zap size={20} /> },
    { text: t("nav.facilities"), href: '/facilities', icon: <Server size={20} /> }
  ];

  const isActive = (href: string) => {
    return location.pathname === href || 
           (href !== '/' && location.pathname.startsWith(href));
  };

  return (
    <>
      <ProfileDialog 
        open={dialogOpen}
        setOpen={setDialogOpen}
        userGender={userGender}
        userType={userType}
        sport={sport}
        updateProfile={updateProfile}
        resetProfile={resetProfile}
        deleteProfile={deleteProfile}
      />
      
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-40 lg:hidden">
        <div className="grid grid-cols-6 h-14">
          {bottomNavItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={cn(
                "flex flex-col items-center justify-center px-1 py-2 text-[10px] font-swiss",
                isActive(item.href) 
                  ? "text-ath-clay" 
                  : "text-gray-600"
              )}
            >
              {item.icon}
              <span className="mt-1">{item.text}</span>
            </Link>
          ))}
          
          {/* Profile button */}
          <button
            onClick={() => setDialogOpen(true)}
            className="flex flex-col items-center justify-center px-1 py-2 text-[10px] font-swiss text-gray-600"
          >
            <div className={cn(
              "p-1 rounded-full",
              userGender === 'male' ? 'bg-blue-100' : userGender === 'female' ? 'bg-pink-100' : 'bg-gray-100'
            )}>
              <CgProfile size={16} className={cn(
                userGender === 'male' ? 'text-blue-500' : 
                userGender === 'female' ? 'text-pink-500' : 
                'text-gray-500'
              )} />
            </div>
            <span className="mt-1">{t("profile.title")}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
