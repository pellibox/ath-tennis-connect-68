import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { User, GraduationCap, Target, Briefcase, UserCog, Users, Mail, Trash, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
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
import { useProfile } from '@/contexts/ProfileContext';

// Define types for user selections
export type UserGender = 'male' | 'female';
export type UserType = 'junior' | 'performance' | 'professional' | 'coach' | 'parent' | 'adult';

interface UserTypeSelectorProps {
  onSelectionComplete: (gender: UserGender, type: UserType) => void;
  initialGender?: UserGender;
  initialType?: UserType;
}

// Functions to save/load user preferences
export const saveUserPreferences = (gender: UserGender, type: UserType) => {
  localStorage.setItem('ath_user_gender', gender);
  localStorage.setItem('ath_user_type', type);
};

export const loadUserPreferences = () => {
  const gender = localStorage.getItem('ath_user_gender') as UserGender | null;
  const type = localStorage.getItem('ath_user_type') as UserType | null;
  return { gender, type };
};

const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({ 
  onSelectionComplete,
  initialGender,
  initialType 
}) => {
  const { t } = useLanguage();
  const { deleteProfile } = useProfile();
  
  // State for the two steps of the selection process
  const [selectedGender, setSelectedGender] = useState<UserGender | null>(initialGender || null);
  const [selectedType, setSelectedType] = useState<UserType | null>(initialType || null);
  const [step, setStep] = useState<1 | 2>(1);
  
  // Effect to initialize from existing preferences
  useEffect(() => {
    if (initialGender) {
      setSelectedGender(initialGender);
    }
    
    if (initialType) {
      setSelectedType(initialType);
    }
    
    if (initialGender && !initialType) {
      setStep(2);
    }
  }, [initialGender, initialType]);
  
  // Handle gender selection
  const handleGenderSelect = (gender: UserGender) => {
    setSelectedGender(gender);
    setStep(2);
  };
  
  // Handle type selection
  const handleTypeSelect = (type: UserType) => {
    setSelectedType(type);
    
    // If we have both selections, call the completion handler
    if (selectedGender) {
      onSelectionComplete(selectedGender, type);
    }
  };
  
  // Handle back button
  const handleBack = () => {
    setStep(1);
  };

  // Handle profile deletion
  const handleDeleteProfile = () => {
    deleteProfile();
    // Close dialog or other UI actions might be needed here
    // For demonstration, we'll just reset the form
    setSelectedGender(null);
    setSelectedType(null);
    setStep(1);
    
    // Reload the page to reset the UI
    window.location.reload();
  };
  
  // Gender selection UI
  const renderGenderSelection = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-medium font-swiss text-center mb-6">Seleziona il tuo genere</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleGenderSelect('male')}
          className={cn(
            "flex flex-col items-center p-6 rounded-lg transition-all",
            selectedGender === 'male' 
              ? "bg-blue-100 border-2 border-blue-500" 
              : "bg-slate-50 border-2 border-slate-200 hover:border-blue-300"
          )}
        >
          <div className="bg-blue-100 p-4 rounded-full mb-3">
            <User className="h-8 w-8 text-blue-500" />
          </div>
          <span className="font-swiss">Uomo</span>
        </button>
        
        <button
          onClick={() => handleGenderSelect('female')}
          className={cn(
            "flex flex-col items-center p-6 rounded-lg transition-all",
            selectedGender === 'female' 
              ? "bg-pink-100 border-2 border-pink-500" 
              : "bg-slate-50 border-2 border-slate-200 hover:border-pink-300"
          )}
        >
          <div className="bg-pink-100 p-4 rounded-full mb-3">
            <User className="h-8 w-8 text-pink-500" />
          </div>
          <span className="font-swiss">Donna</span>
        </button>
      </div>
    </div>
  );
  
  // User type selection UI
  const renderTypeSelection = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={handleBack}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          ← Indietro
        </button>
        <h3 className="text-xl font-medium font-swiss text-center">Seleziona il tuo profilo</h3>
        <div className="w-16"></div> {/* Spacer for centering */}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TypeButton 
          type="junior" 
          icon={<GraduationCap size={24} />} 
          label="Junior"
          description="Giovane atleta"
          selected={selectedType === 'junior'} 
          onClick={() => handleTypeSelect('junior')} 
          genderColor={selectedGender === 'male' ? 'blue' : 'pink'}
        />
        
        <TypeButton 
          type="performance" 
          icon={<Target size={24} />} 
          label="Performance"
          description="Atleta di alto livello"
          selected={selectedType === 'performance'} 
          onClick={() => handleTypeSelect('performance')} 
          genderColor={selectedGender === 'male' ? 'blue' : 'pink'}
        />
        
        <TypeButton 
          type="professional" 
          icon={<Briefcase size={24} />} 
          label="Professionista" 
          description="Atleta professionista"
          selected={selectedType === 'professional'} 
          onClick={() => handleTypeSelect('professional')} 
          genderColor={selectedGender === 'male' ? 'blue' : 'pink'}
        />
        
        <TypeButton 
          type="coach" 
          icon={<UserCog size={24} />} 
          label="Coach" 
          description="Allenatore di tennis"
          selected={selectedType === 'coach'} 
          onClick={() => handleTypeSelect('coach')} 
          genderColor={selectedGender === 'male' ? 'blue' : 'pink'}
        />
        
        <TypeButton 
          type="parent" 
          icon={<Users size={24} />} 
          label="Genitore" 
          description="Genitore di atleta"
          selected={selectedType === 'parent'} 
          onClick={() => handleTypeSelect('parent')} 
          genderColor={selectedGender === 'male' ? 'blue' : 'pink'}
        />
        
        <TypeButton 
          type="adult" 
          icon={<Mail size={24} />} 
          label="Adulto" 
          description="Adulto di atleta"
          selected={selectedType === 'adult'} 
          onClick={() => handleTypeSelect('adult')} 
          genderColor={selectedGender === 'male' ? 'blue' : 'pink'}
        />
      </div>
    </div>
  );
  
  return (
    <div className="p-2 sm:p-4">
      {step === 1 && renderGenderSelection()}
      {step === 2 && renderTypeSelection()}
      
      {/* Aggiungi il pulsante per eliminare il profilo */}
      {(initialGender || initialType) && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="w-full text-red-500 border-red-200 hover:bg-red-50 flex items-center justify-center gap-2">
                <Trash size={16} />
                <span>Elimina profilo</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Eliminare il profilo?</AlertDialogTitle>
                <AlertDialogDescription>
                  Vuoi davvero eliminare le tue preferenze di profilo? Tornerai alla navigazione standard senza contenuti personalizzati.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Annulla</AlertDialogCancel>
                <AlertDialogAction 
                  onClick={handleDeleteProfile}
                  className="bg-red-500 hover:bg-red-600"
                >
                  Elimina
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
    </div>
  );
};

// Component for the type buttons to reduce repetition
interface TypeButtonProps {
  type: UserType;
  icon: React.ReactNode;
  label: string;
  description: string;
  selected: boolean;
  onClick: () => void;
  genderColor: 'blue' | 'pink';
}

const TypeButton: React.FC<TypeButtonProps> = ({ 
  icon, 
  label, 
  description,
  selected, 
  onClick,
  genderColor
}) => {
  const baseClasses = "flex items-center p-4 rounded-lg transition-all border-2";
  const selectedClasses = `bg-${genderColor}-50 border-${genderColor}-500`;
  const unselectedClasses = `bg-white border-gray-200 hover:border-${genderColor}-300`;
  
  return (
    <button
      onClick={onClick}
      className={cn(
        baseClasses,
        selected ? selectedClasses : unselectedClasses
      )}
    >
      <div className={`bg-${genderColor}-100 p-2 rounded-full mr-4`}>
        <div className={`text-${genderColor}-500`}>
          {icon}
        </div>
      </div>
      <div className="text-left">
        <div className="font-medium font-swiss">{label}</div>
        <div className="text-sm text-gray-500 font-swiss">{description}</div>
      </div>
      {selected && (
        <div className="ml-auto">
          <ArrowRight className={`text-${genderColor}-500 h-5 w-5`} />
        </div>
      )}
    </button>
  );
};

export default UserTypeSelector;
