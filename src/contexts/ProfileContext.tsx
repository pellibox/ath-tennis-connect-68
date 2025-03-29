
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export type UserType = 'junior' | 'adult' | 'professional' | 'coach' | 'parent' | 'performance' | null;
export type UserGender = 'male' | 'female' | null;
export type SportType = 'tennis' | 'padel' | 'pickleball' | 'touchtennis' | null;

interface ProfileContextType {
  userType: UserType;
  userGender: UserGender;
  sport: SportType;
  updateUserType: (type: UserType) => void;
  updateUserGender: (gender: UserGender) => void;
  updateSport: (sport: SportType) => void;
  resetProfile: () => void;
  showAllPrograms: boolean;
  setShowAllPrograms: (show: boolean) => void;
  // Add missing methods
  updateProfile: (gender: UserGender, type: UserType, sport: SportType) => void;
  deleteProfile: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Get initial values from localStorage or sessionStorage if available
  const [userType, setUserType] = useState<UserType>(() => {
    const saved = localStorage.getItem('userType');
    return saved ? (saved as UserType) : null;
  });
  
  const [userGender, setUserGender] = useState<UserGender>(() => {
    const saved = localStorage.getItem('userGender');
    return saved ? (saved as UserGender) : null;
  });
  
  const [sport, setSport] = useState<SportType>(() => {
    const saved = sessionStorage.getItem('sport');
    return saved ? (saved as SportType) : 'tennis';
  });
  
  const [showAllPrograms, setShowAllPrograms] = useState<boolean>(true);
  
  // Update localStorage when values change
  useEffect(() => {
    if (userType) {
      localStorage.setItem('userType', userType);
    } else {
      localStorage.removeItem('userType');
    }
  }, [userType]);
  
  useEffect(() => {
    if (userGender) {
      localStorage.setItem('userGender', userGender);
    } else {
      localStorage.removeItem('userGender');
    }
  }, [userGender]);
  
  useEffect(() => {
    if (sport) {
      sessionStorage.setItem('sport', sport);
    } else {
      sessionStorage.removeItem('sport');
    }
  }, [sport]);
  
  const updateUserType = (type: UserType) => {
    setUserType(type);
  };
  
  const updateUserGender = (gender: UserGender) => {
    setUserGender(gender);
  };
  
  const updateSport = (newSport: SportType) => {
    setSport(newSport);
  };
  
  const resetProfile = () => {
    setUserType(null);
    setUserGender(null);
    setSport('tennis');
    localStorage.removeItem('userType');
    localStorage.removeItem('userGender');
    sessionStorage.removeItem('sport');
  };
  
  // Add the missing updateProfile method
  const updateProfile = (gender: UserGender, type: UserType, selectedSport: SportType) => {
    setUserGender(gender);
    setUserType(type);
    setSport(selectedSport);
  };
  
  // Add the missing deleteProfile method (same implementation as resetProfile for now)
  const deleteProfile = () => {
    resetProfile();
  };
  
  return (
    <ProfileContext.Provider value={{ 
      userType, 
      userGender, 
      sport,
      updateUserType, 
      updateUserGender, 
      updateSport,
      resetProfile,
      showAllPrograms,
      setShowAllPrograms,
      // Add the new methods to the context value
      updateProfile,
      deleteProfile
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
