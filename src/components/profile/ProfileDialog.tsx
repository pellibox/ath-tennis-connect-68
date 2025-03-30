
import { UserGender, UserType } from '../UserTypeSelector';
import UserTypeSelector from '../UserTypeSelector';
import { CgProfile } from "react-icons/cg";  // Corrected import
import { SportType } from '@/contexts/ProfileContext';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogTrigger 
} from "@/components/ui/dialog";
import ProfileIndicator from '../ProfileIndicator';
import { toast } from "sonner";
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProfileDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  userGender: UserGender | null;
  userType: UserType | null;
  sport: SportType | null;
  updateProfile: (gender: UserGender, type: UserType, sport: SportType) => void;
  resetProfile: () => void;
  deleteProfile: () => void;
}

const ProfileDialog = ({ 
  open, 
  setOpen,
  userGender, 
  userType,
  sport,
  updateProfile,
  resetProfile,
  deleteProfile
}: ProfileDialogProps) => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const handleProfileComplete = (gender: UserGender, type: UserType, selectedSport: SportType = 'tennis') => {
    updateProfile(gender, type, selectedSport);
    setOpen(false);
    
    toast.success(`${t("profile.welcome")} ${type}`, {
      position: "bottom-center",
      duration: 3000
    });
  };
  
  const handleProfileReset = () => {
    resetProfile();
    
    toast.info(t("profile.select"), {
      position: "bottom-center",
      duration: 3000
    });
  };

  // If mobile, don't render the button in the header
  if (isMobile) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="mr-4 cursor-pointer relative">
          {userGender && userType ? (
            <ProfileIndicator 
              gender={userGender as UserGender} 
              type={userType as UserType}
              sport={sport as SportType}
              onEditClick={() => setOpen(true)}
              onDeleteProfile={deleteProfile}
              onResetProfile={handleProfileReset}
            />
          ) : (
            <button className="mr-4 text-sm px-3 py-1 rounded-md bg-ath-clay text-white font-swiss flex items-center gap-1">
              <CgProfile size={16} />
              <span>{t("profile.title")}</span>
            </button>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-swiss">{t("profile.select")}</DialogTitle>
          <DialogDescription className="font-swiss">
            {t("profile.customize")}
          </DialogDescription>
        </DialogHeader>
        <UserTypeSelector 
          onSelectionComplete={handleProfileComplete}
          initialGender={userGender || undefined}
          initialType={userType || undefined}
          initialSport={sport || undefined}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;
