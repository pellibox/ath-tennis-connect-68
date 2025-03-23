
import React from 'react';
import { UserGender, UserType } from './UserTypeSelector';
import { Button } from "@/components/ui/button";
import { User, GraduationCap, Target, Briefcase, UserCog, Users, Edit } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface ProfileIndicatorProps {
  gender: UserGender;
  type: UserType;
  onEditClick: () => void;
}

const ProfileIndicator: React.FC<ProfileIndicatorProps> = ({ gender, type, onEditClick }) => {
  // Get icon based on user type
  const getTypeIcon = () => {
    switch (type) {
      case 'junior':
        return <GraduationCap size={16} />;
      case 'performance':
        return <Target size={16} />;
      case 'professional':
        return <Briefcase size={16} />;
      case 'coach':
        return <UserCog size={16} />;
      case 'parent':
        return <Users size={16} />;
      default:
        return null;
    }
  };

  // Get description based on user type
  const getTypeDescription = () => {
    switch (type) {
      case 'junior':
        return "Giovane atleta in fase di sviluppo";
      case 'performance':
        return "Agonista di alto livello";
      case 'professional':
        return "Atleta professionista";
      case 'coach':
        return "Allenatore di tennis";
      case 'parent':
        return "Genitore o tutore di atleta";
      default:
        return "";
    }
  };

  // Get gender description
  const getGenderDescription = () => {
    return gender === 'male' ? 'Uomo' : 'Donna';
  };
  
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex items-center cursor-pointer" onClick={onEditClick}>
          <div className="flex items-center gap-2">
            <div className={`p-1 rounded-full ${gender === 'male' ? 'bg-blue-100' : 'bg-pink-100'}`}>
              <User size={16} className={gender === 'male' ? 'text-blue-500' : 'text-pink-500'} />
            </div>
            <div className="p-1 rounded-full bg-ath-clay/10">
              {getTypeIcon()}
            </div>
            <span className="text-xs font-medium">Modifica</span>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-64 p-4 bg-white/95 backdrop-blur-sm border border-ath-clay/20 shadow-lg">
        <div className="space-y-2">
          <h4 className="font-medium text-ath-clay">Il tuo profilo</h4>
          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded-full ${gender === 'male' ? 'bg-blue-100' : 'bg-pink-100'}`}>
              <User size={18} className={gender === 'male' ? 'text-blue-500' : 'text-pink-500'} />
            </div>
            <span className="text-sm">{getGenderDescription()}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-full bg-ath-clay/10">
              {getTypeIcon()}
            </div>
            <span className="text-sm">{getTypeDescription()}</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Contenuti personalizzati in base al tuo profilo
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProfileIndicator;
