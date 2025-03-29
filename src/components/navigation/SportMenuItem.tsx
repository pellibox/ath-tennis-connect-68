
import React from 'react';
import { cn } from '@/lib/utils';
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { SportType } from '@/contexts/ProfileContext';

interface SportMenuItemProps {
  sportType: SportType;
  currentSport: SportType | null;
  icon: React.ReactNode;
  label: string;
  onClick: (sportType: SportType) => void;
}

const SportMenuItem = ({ 
  sportType, 
  currentSport, 
  icon, 
  label, 
  onClick 
}: SportMenuItemProps) => {
  // Consider tennis as selected by default on programs page if no sport is selected
  const isSelected = currentSport === sportType || 
    (!currentSport && sportType === 'tennis');
  
  return (
    <DropdownMenuItem asChild>
      <button 
        onClick={() => onClick(sportType)}
        className={cn(
          "flex items-center w-full p-2 rounded-md transition-all duration-300 group",
          isSelected 
            ? "bg-ath-clay/10 border-l-4 border-ath-clay" 
            : "hover:bg-gray-100 border-l-4 border-transparent",
          isSelected ? "text-ath-clay" : "text-foreground"
        )}
      >
        {React.cloneElement(icon as React.ReactElement, {
          className: cn(
            (icon as React.ReactElement).props.className,
            "group-hover:scale-110 transition-transform",
            isSelected ? "text-ath-clay" : ""
          )
        })}
        <span className="ml-2">{label}</span>
      </button>
    </DropdownMenuItem>
  );
};

export default SportMenuItem;
