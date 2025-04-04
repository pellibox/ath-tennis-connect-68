
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AdminLayout from '@/components/admin/AdminLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, XCircle, Shield, User, Search, PlusCircle } from 'lucide-react';
import { setAsAdmin, setAsEditor, removeRole, fetchUserProfile } from '@/utils/authUtils';
import { supabase } from '@/integrations/supabase/client';

interface UserData {
  id: string;
  email: string;
  username: string | null;
  fullName: string | null;
  roles: string[];
}

const Users = () => {
  const { t } = useLanguage();
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [emailLoading, setEmailLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      
      // Use type casting to bypass type checking completely
      const { data: userData, error: userError } = await (supabase as any)
        .from('auth.users')
        .select('id, email, created_at');
      
      if (userError) throw userError;
      
      if (userData) {
        const usersWithRoles = await Promise.all(
          userData.map(async (user: any) => {
            // Fetch user roles
            const { data: userRoles } = await (supabase as any)
              .from('user_roles')
              .select('role')
              .eq('user_id', user.id);
            
            // Fetch user profile
            const { data: profileData } = await fetchUserProfile(user.id);
            
            return {
              id: user.id,
              email: user.email,
              username: profileData?.username || null,
              fullName: profileData?.full_name || null,
              roles: userRoles ? userRoles.map((r: any) => r.role) : []
            };
          })
        );
        
        setUsers(usersWithRoles);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error(t('admin.errorFetchingUsers') || 'Error fetching users');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSetAdmin = async (userId: string) => {
    const { success, error } = await setAsAdmin(userId);
    if (success) {
      toast.success(t('admin.userSetAsAdmin') || 'User set as admin');
      fetchUsers(); // Refresh the list
    } else {
      toast.error(error?.message || t('admin.errorSettingAdmin') || 'Error setting user as admin');
    }
  };

  const handleSetEditor = async (userId: string) => {
    const { success, error } = await setAsEditor(userId);
    if (success) {
      toast.success(t('admin.userSetAsEditor') || 'User set as editor');
      fetchUsers(); // Refresh the list
    } else {
      toast.error(error?.message || t('admin.errorSettingEditor') || 'Error setting user as editor');
    }
  };

  const handleRemoveRole = async (userId: string, role: string) => {
    const { success, error } = await removeRole(userId, role);
    if (success) {
      toast.success(t('admin.roleRemoved') || `${role} role removed`);
      fetchUsers(); // Refresh the list
    } else {
      toast.error(error?.message || t('admin.errorRemovingRole') || 'Error removing role');
    }
  };

  const handleFindUser = async () => {
    if (!newUserEmail) {
      toast.error(t('admin.emailRequired') || 'Email is required');
      return;
    }

    setEmailLoading(true);
    try {
      // Use type casting to bypass type checking completely
      const { data, error } = await (supabase as any)
        .from('auth.users')
        .select('id, email')
        .eq('email', newUserEmail)
        .single();
      
      if (error) throw error;
      
      if (data) {
        // User found, now check roles
        const { data: userRoles } = await (supabase as any)
          .from('user_roles')
          .select('role')
          .eq('user_id', data.id);
        
        // Fetch user profile
        const { data: profileData } = await fetchUserProfile(data.id);
        
        const userData = {
          id: data.id,
          email: data.email,
          username: profileData?.username || null,
          fullName: profileData?.full_name || null,
          roles: userRoles ? userRoles.map((r: any) => r.role) : []
        };
        
        // Check if user already exists in the list
        if (!users.some(u => u.id === userData.id)) {
          setUsers([...users, userData]);
        }
        
        setNewUserEmail('');
        toast.success(t('admin.userFound') || 'User found');
      } else {
        toast.error(t('admin.userNotFound') || 'User not found');
      }
    } catch (error) {
      console.error('Error finding user:', error);
      toast.error(t('admin.errorFindingUser') || 'Error finding user');
    } finally {
      setEmailLoading(false);
    }
  };

  const filteredUsers = users.filter(user => 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (user.username && user.username.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (user.fullName && user.fullName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <AdminLayout title={t('admin.usersManagement') || 'Users Management'}>
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder={t('admin.searchUsers') || "Search users..."}
              className="pl-9 w-full md:w-80"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full md:w-auto">
                <PlusCircle className="mr-2 h-4 w-4" />
                {t('admin.findUser') || 'Find User'}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t('admin.findUser') || 'Find User'}</DialogTitle>
                <DialogDescription>
                  {t('admin.findUserDescription') || 'Enter the email address of the user you want to find.'}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">{t('admin.email') || 'Email'}</Label>
                  <Input
                    id="email"
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                    placeholder="user@example.com"
                  />
                </div>
              </div>
              
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">{t('admin.cancel') || 'Cancel'}</Button>
                </DialogClose>
                <Button onClick={handleFindUser} disabled={emailLoading}>
                  {emailLoading ? (
                    <>
                      <span className="mr-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </span>
                      {t('admin.searching') || 'Searching...'}
                    </>
                  ) : (
                    t('admin.find') || 'Find'
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        <Table>
          <TableCaption>{t('admin.usersListCaption') || 'A list of all users in your application.'}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>{t('admin.user') || 'User'}</TableHead>
              <TableHead>{t('admin.roles') || 'Roles'}</TableHead>
              <TableHead className="text-right">{t('admin.actions') || 'Actions'}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-4">
                  <div className="flex justify-center items-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {t('admin.loading') || 'Loading...'}
                  </div>
                </TableCell>
              </TableRow>
            ) : filteredUsers.length > 0 ? (
              filteredUsers.map((userData) => (
                <TableRow key={userData.id}>
                  <TableCell className="font-medium">
                    <div>
                      <div className="font-medium">{userData.email}</div>
                      {(userData.username || userData.fullName) && (
                        <div className="text-sm text-muted-foreground">
                          {userData.fullName || userData.username}
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      {userData.roles.includes('admin') && (
                        <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs flex items-center">
                          <Shield className="h-3 w-3 mr-1" />
                          Admin
                        </div>
                      )}
                      {userData.roles.includes('editor') && (
                        <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          Editor
                        </div>
                      )}
                      {userData.roles.length === 0 && (
                        <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                          User
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      {!userData.roles.includes('admin') && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleSetAdmin(userData.id)}
                          title={t('admin.setAsAdmin') || 'Set as Admin'}
                        >
                          <Shield className="h-4 w-4 text-red-600" />
                        </Button>
                      )}
                      {!userData.roles.includes('editor') && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleSetEditor(userData.id)}
                          title={t('admin.setAsEditor') || 'Set as Editor'}
                        >
                          <User className="h-4 w-4 text-blue-600" />
                        </Button>
                      )}
                      {userData.roles.includes('admin') && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleRemoveRole(userData.id, 'admin')}
                          title={t('admin.removeAdmin') || 'Remove Admin'}
                        >
                          <XCircle className="h-4 w-4 text-red-600" />
                        </Button>
                      )}
                      {userData.roles.includes('editor') && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleRemoveRole(userData.id, 'editor')}
                          title={t('admin.removeEditor') || 'Remove Editor'}
                        >
                          <XCircle className="h-4 w-4 text-blue-600" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-4">
                  {searchTerm 
                    ? (t('admin.noUsersFound') || 'No users found matching your search.')
                    : (t('admin.noUsers') || 'No users available.')}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default Users;
