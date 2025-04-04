
import { supabase } from '@/integrations/supabase/client';

export const setAsAdmin = async (userId: string) => {
  try {
    // Use type casting to bypass type checking
    const { data, error } = await (supabase
      .from('user_roles' as any)
      .insert([
        { user_id: userId, role: 'admin' }
      ]) as any);
    
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
    const { data, error } = await (supabase
      .from('user_roles' as any)
      .insert([
        { user_id: userId, role: 'editor' }
      ]) as any);
    
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
    const { data, error } = await (supabase
      .from('user_roles' as any)
      .delete()
      .eq('user_id', userId)
      .eq('role', role) as any);
    
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
    const { data, error } = await (supabase
      .from('profiles' as any)
      .select('*')
      .eq('id', userId)
      .single() as any);
    
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
    const { data, error } = await (supabase
      .from('profiles' as any)
      .update(updates)
      .eq('id', userId) as any);
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error updating user profile:', error);
    return { success: false, error };
  }
};
