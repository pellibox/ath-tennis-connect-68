
import React, { useState, useEffect } from 'react';
import { UserGender, UserType } from './UserTypeSelector';
import { SportType } from '@/contexts/ProfileContext';
import { Button } from "@/components/ui/button";
import { GraduationCap, Target, Briefcase, UserCog, Users, Edit, X, RotateCcw, CircleDot, Globe } from 'lucide-react';
import { CgProfile } from "react-icons/cg";
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
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
import LanguageSwitcher from './LanguageSwitcher';

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
  const { t, language, isLoading } = useLanguage();
  const isMobile = useIsMobile();
  const [translatedLabels, setTranslatedLabels] = useState({
    edit: 'Edit Profile',
    delete: 'Delete Profile',
    reset: 'Reset',
    profile: 'Your Profile',
    custom: 'Personalized content based on your profile',
    confirmDelete: 'Delete profile?',
    deleteDesc: 'Do you really want to delete your profile preferences?',
    cancelAction: 'Cancel',
    deleteAction: 'Delete'
  });
  
  // Update translated labels when language changes
  useEffect(() => {
    if (!isLoading) {
      setTranslatedLabels({
        edit: t("profile.edit"),
        delete: t("profile.delete"),
        reset: t("profile.reset"),
        profile: t("profile.yourProfile"),
        custom: t("profile.customContent"),
        confirmDelete: t("profile.deleteConfirm"),
        deleteDesc: t("profile.deleteDesc"),
        cancelAction: t("profile.cancelAction"),
        deleteAction: t("profile.deleteAction")
      });
    }
  }, [t, isLoading, language]);

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

  const getGenderDescription = () => {
    return !isLoading ? (gender === 'male' ? t('profile.gender.male') : t('profile.gender.female')) : 
           (gender === 'male' ? 'Male' : 'Female');
  };

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
  
  const handleDeleteProfile = () => {
    if (onDeleteProfile) {
      onDeleteProfile();
    }
    
    window.location.reload();
  };

  const handleResetProfile = () => {
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
              <CgProfile size={16} className={gender === 'male' ? 'text-blue-500' : 'text-pink-500'} />
            </div>
            <div className="p-1 rounded-full bg-ath-clay/10">
              {getTypeIcon()}
            </div>
            <span className="text-xs font-medium">{translatedLabels.edit}</span>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-64 p-4 bg-white/95 backdrop-blur-sm border border-ath-clay/20 shadow-lg">
        <div className="space-y-2">
          <h4 className="font-medium text-ath-clay">{translatedLabels.profile}</h4>
          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded-full ${gender === 'male' ? 'bg-blue-100' : 'bg-pink-100'}`}>
              <CgProfile size={18} className={gender === 'male' ? 'text-blue-500' : 'text-pink-500'} />
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
          
          {isMobile && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="font-medium text-sm flex items-center gap-2">
                  <Globe size={16} />
                  {!isLoading ? t("language") : "Language"}
                </div>
                <LanguageSwitcher />
              </div>
            </div>
          )}
          
          <p className="text-xs text-gray-500 mt-2">
            {translatedLabels.custom}
          </p>
          
          <div className="flex gap-2 mt-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 text-amber-500 border-amber-200 hover:bg-amber-50 flex items-center justify-center gap-2"
              onClick={handleResetProfile}
            >
              <RotateCcw size={14} />
              <span>{translatedLabels.reset}</span>
            </Button>
            
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm" className="flex-1 text-red-500 border-red-200 hover:bg-red-50 flex items-center justify-center gap-2">
                  <X size={14} />
                  <span>{translatedLabels.delete}</span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{translatedLabels.confirmDelete}</AlertDialogTitle>
                  <AlertDialogDescription>
                    {translatedLabels.deleteDesc}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>{translatedLabels.cancelAction}</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={handleDeleteProfile}
                    className="bg-red-500 hover:bg-red-600"
                  >
                    {translatedLabels.deleteAction}
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
