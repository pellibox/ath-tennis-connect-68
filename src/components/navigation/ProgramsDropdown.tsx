
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useProfile, SportType } from '@/contexts/ProfileContext';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import SportMenuItem from './SportMenuItem';

interface ProgramsDropdownProps {
  textColorClass: string;
}

const ProgramsDropdown = ({ textColorClass }: ProgramsDropdownProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(false);
  const { sport, updateSport, userGender, userType } = useProfile();
  const isMobile = useIsMobile();
  
  const [activeSport, setActiveSport] = useState<SportType | null>(null);
  const [hasExplicitSelection, setHasExplicitSelection] = useState(false);
  
  useEffect(() => {
    const path = location.pathname;
    
    if (path.includes('touchtennis')) {
      setActiveSport('touchtennis');
    } else if (path.includes('padel')) {
      setActiveSport('padel');
    } else if (path.includes('pickleball')) {
      setActiveSport('pickleball');
    } else if (path.includes('programs')) {
      setActiveSport('tennis');
    } else {
      setActiveSport(sport);
    }
  }, [location.pathname, sport]);
  
  const handleSportSelect = (sportType: SportType) => {
    if (userGender && userType) {
      updateSport(sportType);
    }
    
    setHasExplicitSelection(true);
    
    switch (sportType) {
      case 'tennis':
        navigate('/programs');
        break;
      case 'touchtennis':
        navigate('/touchtennis');
        break;
      case 'padel':
        navigate('/padel');
        break;
      case 'pickleball':
        navigate('/pickleball');
        break;
    }
    
    setOpenDropdown(false);
  };

  const isOnProgramsPage = location.pathname.includes('programs') || 
                           location.pathname.includes('touchtennis') || 
                           location.pathname.includes('padel') || 
                           location.pathname.includes('pickleball');

  return (
    <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
      <DropdownMenuTrigger asChild>
        <button 
          className={cn(
            "flex items-center text-sm font-swiss transition-colors hover:text-ath-clay bg-transparent px-4 py-2 rounded-md",
            textColorClass,
            isOnProgramsPage ? "text-ath-clay" : ""
          )}
        >
          Programmi
          <ChevronDown 
            size={16} 
            className={cn(
              "ml-1 transition-transform", 
              openDropdown ? "rotate-180" : ""
            )} 
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="bg-popover w-[200px] p-2">
        <SportMenuItem 
          sportType="tennis" 
          currentSport={activeSport} 
          icon={null} 
          label="Tennis" 
          onClick={handleSportSelect} 
        />
        <SportMenuItem 
          sportType="padel" 
          currentSport={activeSport} 
          icon={null} 
          label="Padel" 
          onClick={handleSportSelect} 
        />
        <SportMenuItem 
          sportType="pickleball" 
          currentSport={activeSport} 
          icon={null} 
          label="Pickleball" 
          onClick={handleSportSelect} 
        />
        <SportMenuItem 
          sportType="touchtennis" 
          currentSport={activeSport} 
          icon={null} 
          label="TouchTennis" 
          onClick={handleSportSelect} 
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProgramsDropdown;
