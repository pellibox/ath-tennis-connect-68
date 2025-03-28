
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserGender, UserType, loadUserPreferences, saveUserPreferences } from '@/components/UserTypeSelector';

// Add sport type
export type SportType = 'tennis' | 'padel' | 'pickleball' | 'touchtennis';

type ProfileContextType = {
  userGender: UserGender | null;
  userType: UserType | null;
  sport: SportType | null;
  updateProfile: (gender: UserGender, type: UserType, sportType?: SportType) => void;
  resetProfile: () => void;
  deleteProfile: () => void;
  updateSport: (sport: SportType) => void;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [sport, setSport] = useState<SportType | null>(null);

  // Load user preferences on mount
  useEffect(() => {
    const { gender, type } = loadUserPreferences();
    const savedSport = localStorage.getItem('ath_user_sport') as SportType | null;
    
    setUserGender(gender);
    setUserType(type);
    setSport(savedSport || 'tennis');
  }, []);

  const updateProfile = (gender: UserGender, type: UserType, sportType: SportType = 'tennis') => {
    saveUserPreferences(gender, type);
    localStorage.setItem('ath_user_sport', sportType);
    setUserGender(gender);
    setUserType(type);
    setSport(sportType);
  };

  const updateSport = (sportType: SportType) => {
    localStorage.setItem('ath_user_sport', sportType);
    setSport(sportType);
  };

  const resetProfile = () => {
    // This function will be used to reset the profile selection UI
    // but doesn't actually clear the profile data
  };

  const deleteProfile = () => {
    localStorage.removeItem('ath_user_gender');
    localStorage.removeItem('ath_user_type');
    localStorage.removeItem('ath_user_sport');
    setUserGender(null);
    setUserType(null);
    setSport(null);
  };

  return (
    <ProfileContext.Provider
      value={{
        userGender,
        userType,
        sport,
        updateProfile,
        resetProfile,
        deleteProfile,
        updateSport
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
