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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, XCircle, Shield, User, Search, PlusCircle, UserPlus } from 'lucide-react';
import { setAsAdmin, setAsEditor, removeRole } from '@/utils/authUtils';
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
  const { user, isAdmin, session } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [emailLoading, setEmailLoading] = useState(false);
  
  // Create user state
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    fullName: '',
    role: 'user'
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      
      // Fetch all profiles (accessible via RLS)
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('*');
      
      if (profilesError) throw profilesError;
      
      if (profilesData) {
        const usersWithRoles = await Promise.all(
          profilesData.map(async (profile) => {
            // Fetch user roles
            const { data: userRoles } = await supabase
              .from('user_roles')
              .select('role')
              .eq('user_id', profile.id);
            
            return {
              id: profile.id,
              email: profile.username || profile.full_name || profile.id,
              username: profile.username || null,
              fullName: profile.full_name || null,
              roles: userRoles ? userRoles.map((r) => r.role) : []
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
      toast.error(t('admin.emailRequired') || 'Email or name is required');
      return;
    }

    setEmailLoading(true);
    try {
      // Search in profiles by username or full_name
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .or(`username.ilike.%${newUserEmail}%,full_name.ilike.%${newUserEmail}%`)
        .limit(10);
      
      if (error) throw error;
      
      if (data && data.length > 0) {
        const newUsers: UserData[] = [];
        
        for (const profile of data) {
          // Check if user already exists in the list
          if (users.some(u => u.id === profile.id)) continue;
          
          // Fetch user roles
          const { data: userRoles } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', profile.id);
          
          newUsers.push({
            id: profile.id,
            email: profile.username || profile.full_name || profile.id,
            username: profile.username || null,
            fullName: profile.full_name || null,
            roles: userRoles ? userRoles.map((r) => r.role) : []
          });
        }
        
        if (newUsers.length > 0) {
          setUsers([...users, ...newUsers]);
          toast.success(`${newUsers.length} utenti trovati`);
        } else {
          toast.info('Utenti già presenti nella lista');
        }
        
        setNewUserEmail('');
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

  const handleCreateUser = async () => {
    if (!newUser.email || !newUser.password) {
      toast.error('Email e password sono obbligatori');
      return;
    }

    if (newUser.password.length < 6) {
      toast.error('La password deve essere di almeno 6 caratteri');
      return;
    }

    setCreateLoading(true);
    try {
      const response = await supabase.functions.invoke('create-user', {
        body: {
          email: newUser.email,
          password: newUser.password,
          fullName: newUser.fullName,
          role: newUser.role !== 'user' ? newUser.role : null
        }
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      if (response.data?.error) {
        throw new Error(response.data.error);
      }

      toast.success('Utente creato con successo');
      setIsCreateDialogOpen(false);
      setNewUser({ email: '', password: '', fullName: '', role: 'user' });
      fetchUsers(); // Refresh the list
    } catch (error: any) {
      console.error('Error creating user:', error);
      toast.error(error.message || 'Errore durante la creazione dell\'utente');
    } finally {
      setCreateLoading(false);
    }
  };

  const filteredUsers = users.filter(user => 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (user.username && user.username.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (user.fullName && user.fullName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <AdminLayout title={t('admin.usersManagement') || 'Gestione Utenti'}>
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder={t('admin.searchUsers') || "Cerca utenti..."}
              className="pl-9 w-full md:w-80"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          
          <div className="flex gap-2">
            {/* Create User Dialog */}
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Crea Utente
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Crea Nuovo Utente</DialogTitle>
                  <DialogDescription>
                    Inserisci i dati del nuovo utente. L'email verrà automaticamente confermata.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="create-email">Email *</Label>
                    <Input
                      id="create-email"
                      type="email"
                      value={newUser.email}
                      onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                      placeholder="utente@esempio.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="create-password">Password *</Label>
                    <Input
                      id="create-password"
                      type="password"
                      value={newUser.password}
                      onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                      placeholder="Minimo 6 caratteri"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="create-fullname">Nome Completo</Label>
                    <Input
                      id="create-fullname"
                      value={newUser.fullName}
                      onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
                      placeholder="Mario Rossi"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="create-role">Ruolo</Label>
                    <Select 
                      value={newUser.role} 
                      onValueChange={(value) => setNewUser({ ...newUser, role: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona ruolo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user">Utente</SelectItem>
                        <SelectItem value="editor">Editor</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Annulla</Button>
                  </DialogClose>
                  <Button onClick={handleCreateUser} disabled={createLoading}>
                    {createLoading ? 'Creazione...' : 'Crea Utente'}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Find User Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Search className="mr-2 h-4 w-4" />
                  Cerca Utente
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Cerca Utente</DialogTitle>
                  <DialogDescription>
                    Inserisci nome o username per cercare un utente esistente.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="find-email">Nome o Username</Label>
                    <Input
                      id="find-email"
                      value={newUserEmail}
                      onChange={(e) => setNewUserEmail(e.target.value)}
                      placeholder="Mario Rossi"
                    />
                  </div>
                </div>
                
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Annulla</Button>
                  </DialogClose>
                  <Button onClick={handleFindUser} disabled={emailLoading}>
                    {emailLoading ? 'Ricerca...' : 'Cerca'}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Table>
          <TableCaption>Lista degli utenti registrati</TableCaption>
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
