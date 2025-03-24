
import { UserGender, UserType } from '../UserTypeSelector';
import UserTypeSelector from '../UserTypeSelector';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProfileIndicator from '../ProfileIndicator';
import { toast } from "sonner";

interface ProfileDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  userGender: UserGender | null;
  userType: UserType | null;
  updateProfile: (gender: UserGender, type: UserType) => void;
  resetProfile: () => void;
  deleteProfile: () => void;
}

const ProfileDialog = ({ 
  open, 
  setOpen,
  userGender, 
  userType, 
  updateProfile,
  resetProfile,
  deleteProfile
}: ProfileDialogProps) => {
  
  const handleProfileComplete = (gender: UserGender, type: UserType) => {
    updateProfile(gender, type);
    setOpen(false);
    
    toast.success(`Benvenuto! Contenuto personalizzato per ${type}`, {
      position: "bottom-center",
      duration: 3000
    });
  };
  
  const handleProfileReset = () => {
    resetProfile();
    
    toast.info("Seleziona nuove preferenze di profilo", {
      position: "bottom-center",
      duration: 3000
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="mr-4 cursor-pointer relative">
          {userGender && userType ? (
            <ProfileIndicator 
              gender={userGender as UserGender} 
              type={userType as UserType} 
              onEditClick={() => setOpen(true)}
              onDeleteProfile={deleteProfile}
              onResetProfile={handleProfileReset}
            />
          ) : (
            <button className="mr-4 text-sm px-3 py-1 rounded-md bg-ath-clay text-white font-swiss">
              Profilo
            </button>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-swiss">Seleziona Profilo</DialogTitle>
          <DialogDescription className="font-swiss">
            Personalizza la tua esperienza su ATH
          </DialogDescription>
        </DialogHeader>
        <UserTypeSelector 
          onSelectionComplete={handleProfileComplete}
          initialGender={userGender || undefined}
          initialType={userType || undefined}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;
