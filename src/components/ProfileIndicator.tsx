
import React from 'react';
import { UserGender, UserType, saveUserPreferences } from './UserTypeSelector';
import { Button } from "@/components/ui/button";
import { GraduationCap, Target, Briefcase, UserCog, Users, Edit, User } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

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
        return <GraduationCap size={18} className="mr-2" />;
      case 'performance':
        return <Target size={18} className="mr-2" />;
      case 'professional':
        return <Briefcase size={18} className="mr-2" />;
      case 'coach':
        return <UserCog size={18} className="mr-2" />;
      case 'parent':
        return <Users size={18} className="mr-2" />;
      default:
        return null;
    }
  };
  
  // Get label based on user type
  const getTypeLabel = () => {
    switch (type) {
      case 'junior':
        return 'Junior';
      case 'performance':
        return 'Agonista';
      case 'professional':
        return 'Professionista';
      case 'coach':
        return 'Coach';
      case 'parent':
        return 'Genitore/Tutor';
      default:
        return '';
    }
  };
  
  // Reset profile and navigate to home
  const handleReset = () => {
    // Clear user preferences
    localStorage.removeItem('ath_user_gender');
    localStorage.removeItem('ath_user_type');
    
    // Show success message
    toast.success("Profilo resettato", {
      position: "bottom-center"
    });
    
    // Navigate to home page
    navigate('/');
  };
  
  return (
    <div className="fixed top-24 lg:top-20 right-4 z-40 bg-white/95 backdrop-blur-sm shadow-md rounded-lg p-3 text-sm flex flex-col items-start">
      <div className="flex items-center mb-2 font-medium">
        <User 
          size={18} 
          className={`mr-2 ${gender === 'male' ? 'text-blue-500' : 'text-pink-500'}`} 
        />
        <span>{gender === 'male' ? 'Uomo' : 'Donna'}</span>
      </div>
      
      <div className="flex items-center font-medium text-ath-clay">
        {getTypeIcon()}
        <span>{getTypeLabel()}</span>
      </div>
      
      <Button 
        variant="ghost" 
        size="sm" 
        className="mt-2 text-xs w-full flex items-center justify-center"
        onClick={onEditClick}
      >
        <Edit size={14} className="mr-1" />
        Modifica profilo
      </Button>
    </div>
  );
};

export default ProfileIndicator;
