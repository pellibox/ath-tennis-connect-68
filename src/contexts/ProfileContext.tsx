
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserGender, UserType, loadUserPreferences, saveUserPreferences } from '@/components/UserTypeSelector';

type ProfileContextType = {
  userGender: UserGender | null;
  userType: UserType | null;
  updateProfile: (gender: UserGender, type: UserType) => void;
  resetProfile: () => void;
  deleteProfile: () => void;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);

  // Load user preferences on mount
  useEffect(() => {
    const { gender, type } = loadUserPreferences();
    setUserGender(gender);
    setUserType(type);
  }, []);

  const updateProfile = (gender: UserGender, type: UserType) => {
    saveUserPreferences(gender, type);
    setUserGender(gender);
    setUserType(type);
  };

  const resetProfile = () => {
    // This function will be used to reset the profile selection UI
    // but doesn't actually clear the profile data
  };

  const deleteProfile = () => {
    localStorage.removeItem('ath_user_gender');
    localStorage.removeItem('ath_user_type');
    setUserGender(null);
    setUserType(null);
  };

  return (
    <ProfileContext.Provider
      value={{
        userGender,
        userType,
        updateProfile,
        resetProfile,
        deleteProfile
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}
