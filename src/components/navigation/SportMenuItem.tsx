
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
  return (
    <DropdownMenuItem asChild>
      <button 
        onClick={() => onClick(sportType)}
        className={cn(
          "flex items-center w-full p-2 hover:bg-gray-100 rounded-md",
          currentSport === sportType || (!currentSport && sportType === 'tennis') ? "text-ath-clay" : ""
        )}
      >
        {icon}
        <span>{label}</span>
      </button>
    </DropdownMenuItem>
  );
};

export default SportMenuItem;
