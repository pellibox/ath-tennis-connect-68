import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { GiTennisRacket } from "react-icons/gi";
import { MdSportsTennis } from "react-icons/md";
import { cn } from '@/lib/utils';
import { useProfile, SportType } from '@/contexts/ProfileContext';
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
  
  const [activeSport, setActiveSport] = useState<SportType | null>(null);
  const [hasExplicitSelection, setHasExplicitSelection] = useState(false);
  
  useEffect(() => {
    const path = location.pathname;
    
    if (path.includes('touchtennis')) {
      setActiveSport('touchtennis');
    } else if (path.includes('padel-pickleball')) {
      if (sport === 'padel' || sport === 'pickleball') {
        setActiveSport(sport);
      } else {
        setActiveSport('padel');
      }
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
      case 'pickleball':
        navigate('/padel-pickleball');
        break;
    }
    
    setOpenDropdown(false);
  };

  const isOnProgramsPage = location.pathname.includes('programs') || 
                           location.pathname.includes('touchtennis') || 
                           location.pathname.includes('padel-pickleball');

  const getActiveIcon = () => {
    if (!hasExplicitSelection && !sessionStorage.getItem('sport_selected')) {
      return (
        <img 
          src="/lovable-uploads/ffc6588c-879e-4103-a3cc-f48ee9573e63.png" 
          alt="Programs list" 
          className="w-[18px] h-[18px] mr-2 transition-all duration-300 ease-in-out group-hover:scale-110" 
        />
      );
    }
    
    switch (activeSport) {
      case 'tennis':
        return <GiTennisRacket size={18} className="mr-2 transition-all duration-300 ease-in-out group-hover:scale-110" />;
      case 'padel':
        return (
          <img 
            src="/lovable-uploads/d5868d98-0391-4dd3-8467-4ff2a245339e.png" 
            alt="Padel racket" 
            className="w-[18px] h-[18px] mr-2 transition-all duration-300 ease-in-out group-hover:scale-110" 
          />
        );
      case 'pickleball':
        return (
          <img 
            src="/lovable-uploads/pickleball-icon.png" 
            alt="Pickleball racket" 
            className="w-[18px] h-[18px] mr-2 transition-all duration-300 ease-in-out group-hover:scale-110" 
            onError={(e) => {
              console.error('Pickleball icon failed to load', e);
              e.currentTarget.src = "/lovable-uploads/ffc6588c-879e-4103-a3cc-f48ee9573e63.png";
            }}
          />
        );
      case 'touchtennis':
        return <MdSportsTennis size={18} className="mr-2 transition-all duration-300 ease-in-out group-hover:scale-110" />;
      default:
        return (
          <img 
            src="/lovable-uploads/ffc6588c-879e-4103-a3cc-f48ee9573e63.png" 
            alt="Programs list" 
            className="w-[18px] h-[18px] mr-2 transition-all duration-300 ease-in-out group-hover:scale-110" 
          />
        );
    }
  };

  useEffect(() => {
    if (hasExplicitSelection) {
      sessionStorage.setItem('sport_selected', 'true');
    }
  }, [hasExplicitSelection]);

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
          {getActiveIcon()}
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
          icon={<GiTennisRacket size={18} className="mr-2" />} 
          label="Tennis" 
          onClick={handleSportSelect} 
        />
        <SportMenuItem 
          sportType="padel" 
          currentSport={activeSport} 
          icon={
            <img 
              src="/lovable-uploads/d5868d98-0391-4dd3-8467-4ff2a245339e.png" 
              alt="Padel racket" 
              className="w-[18px] h-[18px] mr-2" 
            />
          } 
          label="Padel" 
          onClick={handleSportSelect} 
        />
        <SportMenuItem 
          sportType="pickleball" 
          currentSport={activeSport} 
          icon={
            <img 
              src="/lovable-uploads/pickleball-icon.png" 
              alt="Pickleball racket" 
              className="w-[18px] h-[18px] mr-2" 
            />
          } 
          label="Pickleball" 
          onClick={handleSportSelect} 
        />
        <SportMenuItem 
          sportType="touchtennis" 
          currentSport={activeSport} 
          icon={<MdSportsTennis size={18} className="mr-2" />} 
          label="TouchTennis" 
          onClick={handleSportSelect} 
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProgramsDropdown;
