
import React from 'react';
import { UserGender, UserType } from './UserTypeSelector';
import { SportType } from '@/contexts/ProfileContext';
import { Button } from "@/components/ui/button";
import { User, GraduationCap, Target, Briefcase, UserCog, Users, Edit, X, RotateCcw, CircleDot } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ProfileIndicatorProps {
  gender: UserGender;
  type: UserType;
  sport?: SportType;
  onEditClick: () => void;
  onDeleteProfile?: () => void;
  onResetProfile?: () => void;
}

const ProfileIndicator: React.FC<ProfileIndicatorProps> = ({ 
  gender, 
  type,
  sport = 'tennis',
  onEditClick,
  onDeleteProfile,
  onResetProfile
}) => {
  const { t } = useLanguage();
  
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
    return gender === 'male' ? t('profile.gender.male') : t('profile.gender.female');
  };

  // Get sport description
  const getSportDescription = () => {
    switch (sport) {
      case 'tennis':
        return "Tennis";
      case 'padel':
        return "Padel";
      case 'pickleball':
        return "Pickleball";
      case 'touchtennis':
        return "TouchTennis";
      default:
        return "Tennis";
    }
  };
  
  // Handle profile deletion
  const handleDeleteProfile = () => {
    // If callback provided, call it
    if (onDeleteProfile) {
      onDeleteProfile();
    }
    
    // Reload page to reset the UI
    window.location.reload();
  };

  // Handle profile reset
  const handleResetProfile = () => {
    // If callback provided, call it
    if (onResetProfile) {
      onResetProfile();
    }
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
            <span className="text-xs font-medium">{t("profile.edit")}</span>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-64 p-4 bg-white/95 backdrop-blur-sm border border-ath-clay/20 shadow-lg">
        <div className="space-y-2">
          <h4 className="font-medium text-ath-clay">{t("profile.yourProfile")}</h4>
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
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-full bg-green-100">
              <CircleDot size={18} className="text-green-500" />
            </div>
            <span className="text-sm">{getSportDescription()}</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {t("profile.customContent")}
          </p>
          
          <div className="flex gap-2 mt-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 text-amber-500 border-amber-200 hover:bg-amber-50 flex items-center justify-center gap-2"
              onClick={handleResetProfile}
            >
              <RotateCcw size={14} />
              <span>{t("profile.reset")}</span>
            </Button>
            
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm" className="flex-1 text-red-500 border-red-200 hover:bg-red-50 flex items-center justify-center gap-2">
                  <X size={14} />
                  <span>{t("profile.delete")}</span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{t("profile.deleteConfirm")}</AlertDialogTitle>
                  <AlertDialogDescription>
                    {t("profile.deleteDesc")}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>{t("profile.cancelAction")}</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={handleDeleteProfile}
                    className="bg-red-500 hover:bg-red-600"
                  >
                    {t("profile.deleteAction")}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProfileIndicator;
