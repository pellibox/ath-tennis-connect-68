
import { supabase } from '@/integrations/supabase/client';

export const setAsAdmin = async (userId: string) => {
  try {
    // Use type casting to bypass type checking
    const { data, error } = await (supabase as any)
      .from('user_roles')
      .insert([
        { user_id: userId, role: 'admin' }
      ]);
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error setting user as admin:', error);
    return { success: false, error };
  }
};

export const setAsEditor = async (userId: string) => {
  try {
    // Use type casting to bypass type checking
    const { data, error } = await (supabase as any)
      .from('user_roles')
      .insert([
        { user_id: userId, role: 'editor' }
      ]);
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error setting user as editor:', error);
    return { success: false, error };
  }
};

export const removeRole = async (userId: string, role: string) => {
  try {
    // Use type casting to bypass type checking
    const { data, error } = await (supabase as any)
      .from('user_roles')
      .delete()
      .eq('user_id', userId)
      .eq('role', role);
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error removing user role:', error);
    return { success: false, error };
  }
};

export const fetchUserProfile = async (userId: string) => {
  try {
    // Use type casting to bypass type checking
    const { data, error } = await (supabase as any)
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return { success: false, error };
  }
};

export const updateUserProfile = async (userId: string, updates: any) => {
  try {
    // Use type casting to bypass type checking
    const { data, error } = await (supabase as any)
      .from('profiles')
      .update(updates)
      .eq('id', userId);
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error updating user profile:', error);
    return { success: false, error };
  }
};

// Set up a profile for the user if one doesn't exist
export const setupUserProfile = async (userId: string, userData?: { username?: string, full_name?: string, avatar_url?: string }) => {
  try {
    // Check if profile already exists
    const { data: existingProfile } = await fetchUserProfile(userId);
    
    if (existingProfile) {
      return { success: true, data: existingProfile };
    }
    
    // Create profile if it doesn't exist
    const { data, error } = await (supabase as any)
      .from('profiles')
      .insert([
        { 
          id: userId,
          username: userData?.username || null,
          full_name: userData?.full_name || null,
          avatar_url: userData?.avatar_url || null
        }
      ])
      .select();
    
    if (error) throw error;
    return { success: true, data: data[0] };
  } catch (error) {
    console.error('Error setting up user profile:', error);
    return { success: false, error };
  }
};

// Set user as a specific role
export const setUserRole = async (userId: string, role: 'admin' | 'editor' | 'user') => {
  try {
    const { data, error } = await (supabase as any)
      .from('user_roles')
      .insert([
        { user_id: userId, role }
      ]);
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error(`Error setting user as ${role}:`, error);
    return { success: false, error };
  }
};

