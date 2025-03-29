
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { GiTennisRacket } from "react-icons/gi";
import { MdSportsTennis } from "react-icons/md";
import { cn } from '@/lib/utils';
import { useProfile, SportType } from '@/contexts/ProfileContext';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import SportMenuItem from './SportMenuItem';

interface ProgramsDropdownProps {
  textColorClass: string;
}

const ProgramsDropdown = ({ textColorClass }: ProgramsDropdownProps) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false);
  const { sport, updateSport, userGender, userType } = useProfile();
  
  const handleSportSelect = (sportType: SportType) => {
    if (userGender && userType) {
      updateSport(sportType);
    }
    
    if (sportType === 'tennis') {
      navigate('/programs');
    } else if (sportType === 'touchtennis') {
      navigate('/touchtennis');
    } else {
      navigate('/padel-pickleball');
    }
    
    setOpenDropdown(false);
  };

  const isActive = (href: string) => {
    return location.pathname.startsWith(href) && href !== '/';
  };

  return (
    <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
      <DropdownMenuTrigger asChild>
        <button 
          className={cn(
            "flex items-center text-sm font-swiss transition-colors hover:text-ath-clay bg-transparent px-4 py-2 rounded-md",
            textColorClass,
            isActive('/programs') ? "text-ath-clay" : ""
          )}
        >
          <GiTennisRacket size={18} className="mr-2" />
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
          currentSport={sport} 
          icon={<GiTennisRacket size={18} className="mr-2" />} 
          label="Tennis" 
          onClick={handleSportSelect} 
        />
        <SportMenuItem 
          sportType="padel" 
          currentSport={sport} 
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
          currentSport={sport} 
          icon={
            <img 
              src="/lovable-uploads/e0ce28ab-308e-4ebc-afaa-ca4042757796.png" 
              alt="Pickleball racket" 
              className="w-[18px] h-[18px] mr-2" 
            />
          } 
          label="Pickleball" 
          onClick={handleSportSelect} 
        />
        <SportMenuItem 
          sportType="touchtennis" 
          currentSport={sport} 
          icon={<MdSportsTennis size={18} className="mr-2" />} 
          label="TouchTennis" 
          onClick={handleSportSelect} 
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProgramsDropdown;
