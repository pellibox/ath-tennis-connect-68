
import { Link, useLocation } from 'react-router-dom';
import { HelpCircle, BookOpen, Zap, Server } from 'lucide-react';
import { FaList } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { cn } from '@/lib/utils';
import { useProfile } from '@/contexts/ProfileContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import ProfileDialog from '../profile/ProfileDialog';

const BottomNavigation = () => {
  const location = useLocation();
  const { t, language, isLoading } = useLanguage();
  const { userType, userGender, sport, updateProfile, resetProfile, deleteProfile } = useProfile();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [navItems, setNavItems] = useState<Array<{text: string, href: string, icon: JSX.Element}>>();
  
  // Update navigation items when language changes
  useEffect(() => {
    // Wait for translations to be loaded
    if (!isLoading) {
      setNavItems([
        { text: "ATH", href: '/about', icon: <HelpCircle size={20} /> },
        { text: t("nav.method"), href: '/method', icon: <BookOpen size={20} /> },
        { text: t("nav.programs"), href: '/programs/overview', icon: <FaList size={20} /> },
        { text: t("tech.title.short"), href: '/technology', icon: <Zap size={20} /> },
        { text: t("nav.facilities"), href: '/facilities', icon: <Server size={20} /> }
      ]);
    }
  }, [t, isLoading, language]);

  const isActive = (href: string) => {
    return location.pathname === href || 
           (href !== '/' && location.pathname.startsWith(href));
  };

  // Get profile icon color based on gender
  const getProfileIconColor = () => {
    if (!userGender) return "text-gray-600";
    return userGender === 'male' ? "text-blue-500" : "text-pink-500";
  };

  // Get profile background color based on gender
  const getProfileBgColor = () => {
    if (!userGender) return "";
    return userGender === 'male' ? "bg-blue-100" : "bg-pink-100";
  };

  return (
    <>
      {/* Make sure the dialog is properly shown when opened but hide the trigger */}
      <ProfileDialog 
        open={dialogOpen}
        setOpen={setDialogOpen}
        userGender={userGender}
        userType={userType}
        sport={sport}
        updateProfile={updateProfile}
        resetProfile={resetProfile}
        deleteProfile={deleteProfile}
        showTrigger={false}
      />
      
      <div
        className="fixed inset-x-0 bottom-0 bg-white border-t border-gray-100 shadow-[0_-2px_20px_rgba(0,0,0,0.08)] z-[60] lg:hidden transition-all duration-200"
        style={{
          height: 'calc(60px + env(safe-area-inset-bottom, 0px))',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
        }}
      >
        <div className="grid grid-cols-6 h-[60px]">
          {navItems && navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={cn(
                "flex flex-col items-center justify-center px-1 py-2 text-[10px] font-swiss transition-all duration-200 rounded-lg mx-1",
                isActive(item.href) 
                  ? "text-ath-clay bg-ath-clay/10 font-medium scale-105" 
                  : "text-gray-600 hover:text-ath-clay hover:bg-ath-clay/5"
              )}
            >
              {item.icon}
              <span className="mt-1">{item.text}</span>
            </Link>
          ))}
          
          {/* Fixed profile button with gender-based styling */}
          <button
            onClick={() => setDialogOpen(true)}
            className="flex flex-col items-center justify-center px-1 py-2 text-[10px] font-swiss transition-all duration-200 rounded-lg mx-1 hover:bg-gray-100"
            aria-label={t("profile.title")}
          >
            <div className={cn(
              "rounded-full p-1 flex items-center justify-center",
              userGender ? getProfileBgColor() : ""
            )}>
              <CgProfile 
                size={18} 
                className={getProfileIconColor()} 
              />
            </div>
            <span className="mt-1 text-gray-600">{t("profile.title")}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
