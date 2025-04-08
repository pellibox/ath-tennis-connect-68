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
  const {
    t,
    language,
    isLoading
  } = useLanguage();
  const {
    userType,
    userGender,
    sport,
    updateProfile,
    resetProfile,
    deleteProfile
  } = useProfile();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [navItems, setNavItems] = useState<Array<{
    text: string;
    href: string;
    icon: JSX.Element;
  }>>();

  // Update navigation items when language changes
  useEffect(() => {
    // Wait for translations to be loaded
    if (!isLoading) {
      setNavItems([{
        text: "ATH",
        href: '/about',
        icon: <HelpCircle size={20} />
      }, {
        text: t("nav.method"),
        href: '/method',
        icon: <BookOpen size={20} />
      }, {
        text: t("nav.programs"),
        href: '/programs/overview',
        icon: <FaList size={20} />
      }, {
        text: t("tech.title.short"),
        href: '/technology',
        icon: <Zap size={20} />
      }, {
        text: t("nav.facilities"),
        href: '/facilities',
        icon: <Server size={20} />
      }]);
    }
  }, [t, isLoading, language]);
  const isActive = (href: string) => {
    return location.pathname === href || href !== '/' && location.pathname.startsWith(href);
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
  return <>
      {/* Make sure the dialog is properly shown when opened but hide the trigger */}
      <ProfileDialog open={dialogOpen} setOpen={setDialogOpen} userGender={userGender} userType={userType} sport={sport} updateProfile={updateProfile} resetProfile={resetProfile} deleteProfile={deleteProfile} showTrigger={false} />
      
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-50 lg:hidden">
        
      </div>
    </>;
};
export default BottomNavigation;