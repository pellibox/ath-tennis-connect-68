
import { supabase } from '@/integrations/supabase/client';

export const setAsAdmin = async (userId: string) => {
  try {
    const { data, error } = await supabase
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
    const { data, error } = await supabase
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
    const { data, error } = await supabase
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
    const { data, error } = await supabase
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
    const { data, error } = await supabase
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
