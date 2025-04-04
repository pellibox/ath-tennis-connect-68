
import React, { createContext, useState, useEffect, useContext } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useLanguage } from './LanguageContext';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  userRoles: string[];
  isAdmin: boolean;
  isEditor: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, username: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userRoles, setUserRoles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);

        // Fetch user roles when session changes
        if (session?.user) {
          fetchUserRoles(session.user.id);
        } else {
          setUserRoles([]);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        fetchUserRoles(session.user.id);
      }
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchUserRoles = async (userId: string) => {
    try {
      // Use a more generic approach with type casting to bypass type checking
      const { data, error } = await (supabase
        .from('user_roles' as any)
        .select('role')
        .eq('user_id', userId) as any);

      if (error) {
        throw error;
      }

      if (data) {
        // Use type assertion to handle the data
        const roles = data.map((r: any) => r.role);
        setUserRoles(roles);
      }
    } catch (error) {
      console.error('Error fetching user roles:', error);
      setUserRoles([]);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      toast.success(t('auth.signInSuccess') || 'Successfully signed in');
    } catch (error: any) {
      console.error('Error signing in:', error.message);
      toast.error(error.message || t('auth.signInError') || 'Error signing in');
      throw error;
    }
  };

  const signUp = async (email: string, password: string, username: string, fullName: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
            full_name: fullName,
          },
        },
      });

      if (error) {
        throw error;
      }

      toast.success(t('auth.signUpSuccess') || 'Registration successful');
    } catch (error: any) {
      console.error('Error signing up:', error.message);
      toast.error(error.message || t('auth.signUpError') || 'Error signing up');
      throw error;
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      toast.success(t('auth.signOutSuccess') || 'Successfully signed out');
    } catch (error: any) {
      console.error('Error signing out:', error.message);
      toast.error(error.message || t('auth.signOutError') || 'Error signing out');
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        throw error;
      }

      toast.success(t('auth.resetPasswordEmailSent') || 'Password reset email sent');
    } catch (error: any) {
      console.error('Error resetting password:', error.message);
      toast.error(error.message || t('auth.resetPasswordError') || 'Error resetting password');
      throw error;
    }
  };

  const isAdmin = userRoles.includes('admin');
  const isEditor = userRoles.includes('editor') || isAdmin;

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        userRoles,
        isAdmin,
        isEditor,
        isLoading,
        signIn,
        signUp,
        signOut,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
