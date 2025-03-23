
import React from 'react';
import { UserGender, UserType } from './UserTypeSelector';
import { Button } from "@/components/ui/button";
import { User, GraduationCap, Target, Briefcase, UserCog, Users, Edit } from 'lucide-react';

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
  
  return (
    <div className="flex items-center mr-4">
      <div className="flex items-center gap-2">
        <div className={`p-1 rounded-full ${gender === 'male' ? 'bg-blue-100' : 'bg-pink-100'}`}>
          <User size={16} className={gender === 'male' ? 'text-blue-500' : 'text-pink-500'} />
        </div>
        <div className="p-1 rounded-full bg-ath-clay/10">
          {getTypeIcon()}
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center p-1 h-auto text-xs"
          onClick={onEditClick}
        >
          <Edit size={12} className="mr-1" />
          <span className="text-xs">Modifica</span>
        </Button>
      </div>
    </div>
  );
};

export default ProfileIndicator;
