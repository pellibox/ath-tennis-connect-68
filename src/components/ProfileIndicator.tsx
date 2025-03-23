
import React from 'react';
import { UserGender, UserType, saveUserPreferences } from './UserTypeSelector';
import { Button } from "@/components/ui/button";
import { User, GraduationCap, Target, Briefcase, UserCog, Users, Edit } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';

interface ProfileIndicatorProps {
  gender: UserGender;
  type: UserType;
  onEditClick: () => void;
}

const ProfileIndicator: React.FC<ProfileIndicatorProps> = ({ gender, type, onEditClick }) => {
  const navigate = useNavigate();
  
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
    <Card className="fixed top-16 lg:top-20 right-4 z-40 bg-white/95 backdrop-blur-sm shadow-md p-2 flex flex-col items-center gap-1 w-auto">
      <div className="flex flex-row items-center gap-2 w-full">
        <div className={`p-1 rounded-full ${gender === 'male' ? 'bg-blue-100' : 'bg-pink-100'}`}>
          <User size={16} className={gender === 'male' ? 'text-blue-500' : 'text-pink-500'} />
        </div>
        <div className="p-1 rounded-full bg-ath-clay/10">
          {getTypeIcon()}
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        size="sm" 
        className="w-full flex items-center justify-center p-1 h-auto text-xs"
        onClick={onEditClick}
      >
        <Edit size={12} className="mr-1" />
        <span className="text-xs">Modifica</span>
      </Button>
    </Card>
  );
};

export default ProfileIndicator;
