
import React, { useState, useEffect } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { X } from 'lucide-react';
import { loadUserPreferences } from './UserTypeSelector';

interface ProfileTooltipProps {
  buttonRef: React.RefObject<HTMLElement>;
}

const ProfileTooltip: React.FC<ProfileTooltipProps> = ({ buttonRef }) => {
  const [open, setOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  
  useEffect(() => {
    // Check if user already has a profile
    const { gender, type } = loadUserPreferences();
    if (gender && type) {
      return; // User already has a profile, don't show tooltip
    }
    
    // Check if we've already shown the tooltip in this session
    const tooltipShown = sessionStorage.getItem('profile_tooltip_shown');
    if (tooltipShown) {
      return;
    }
    
    // Show tooltip after a short delay
    const timer = setTimeout(() => {
      setOpen(true);
      setHasShown(true);
      // Set session storage to remember we've shown it
      sessionStorage.setItem('profile_tooltip_shown', 'true');
      
      // Auto-hide after 8 seconds
      const hideTimer = setTimeout(() => {
        setOpen(false);
      }, 8000);
      
      return () => clearTimeout(hideTimer);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // If tooltip has never been shown, don't render anything
  if (!hasShown) return null;
  
  return (
    <TooltipProvider>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <span className="absolute top-0 left-0 w-0 h-0" />
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="bg-ath-clay text-white p-3 max-w-[200px] animate-pulse relative"
          sideOffset={5}
        >
          <button 
            onClick={() => setOpen(false)}
            className="absolute -top-1 -right-1 bg-white text-ath-clay rounded-full p-0.5"
          >
            <X size={14} />
          </button>
          <p className="text-sm font-medium">Dicci chi sei per personalizzare la tua esperienza!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ProfileTooltip;
