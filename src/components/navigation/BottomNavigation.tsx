
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Home, Info, Phone, Racket } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProfileDialog from '@/components/profile/ProfileDialog';
import { useProfile } from '@/contexts/ProfileContext';
import { useLanguage } from '@/contexts/LanguageContext';
import ProgramsDropdown from './ProgramsDropdown';

const BottomNavigation = () => {
  const location = useLocation();
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const { 
    userGender, 
    userType, 
    sport, 
    updateProfile, 
    resetProfile, 
    deleteProfile 
  } = useProfile();
  const { t } = useLanguage();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const handleProfileClick = () => {
    setProfileDialogOpen(true);
  };
  
  // Determine if we're on a programs-related page
  const isOnProgramsPage = location.pathname.includes('programs') || 
                         location.pathname.includes('touchtennis') || 
                         location.pathname.includes('padel') ||
                         location.pathname.includes('pickleball');
  
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-14 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50 flex justify-around items-center">
        <Link 
          to="/" 
          className={cn(
            "flex flex-col items-center justify-center w-1/5 text-xs py-1 transition-colors",
            isActive('/') ? "text-ath-clay" : "text-gray-500"
          )}
        >
          <Home size={20} />
          <span className="mt-0.5 text-[10px]">Home</span>
        </Link>
        
        <Link 
          to="/programs" 
          className={cn(
            "flex flex-col items-center justify-center w-1/5 text-xs py-1 transition-colors",
            isActive('/programs') || isActive('/padel') || isActive('/pickleball') || isActive('/touchtennis') ? "text-ath-clay" : "text-gray-500"
          )}
        >
          <Racket size={20} />
          <span className="mt-0.5 text-[10px]">Programmi</span>
        </Link>
        
        <Link 
          to="/about" 
          className={cn(
            "flex flex-col items-center justify-center w-1/5 text-xs py-1 transition-colors",
            isActive('/about') ? "text-ath-clay" : "text-gray-500"
          )}
        >
          <Info size={20} />
          <span className="mt-0.5 text-[10px]">Chi Siamo</span>
        </Link>
        
        <Link 
          to="/contact" 
          className={cn(
            "flex flex-col items-center justify-center w-1/5 text-xs py-1 transition-colors",
            isActive('/contact') ? "text-ath-clay" : "text-gray-500"
          )}
        >
          <Phone size={20} />
          <span className="mt-0.5 text-[10px]">Contatti</span>
        </Link>
        
        <button
          onClick={handleProfileClick}
          className={cn(
            "flex flex-col items-center justify-center w-1/5 text-xs py-1 transition-colors border-0 bg-transparent",
            profileDialogOpen ? "text-ath-clay" : "text-gray-500"
          )}
        >
          <User size={20} />
          <span className="mt-0.5 text-[10px]">Profilo</span>
        </button>
      </div>
      
      <ProfileDialog 
        open={profileDialogOpen}
        setOpen={setProfileDialogOpen}
        userGender={userGender}
        userType={userType}
        sport={sport}
        updateProfile={updateProfile}
        resetProfile={resetProfile}
        deleteProfile={deleteProfile}
      />
    </>
  );
};

export default BottomNavigation;
