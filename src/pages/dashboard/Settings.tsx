
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Settings = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API to update user settings
    toast.success('Impostazioni salvate con successo');
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Impostazioni</h1>
        <p className="text-gray-500">Gestisci le tue preferenze di account</p>
      </div>
      
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="role">Ruolo</Label>
              <Input 
                id="role" 
                value={user?.role} 
                disabled
                className="bg-gray-100"
              />
            </div>
          </div>
          
          <Button type="submit">Salva Modifiche</Button>
        </form>
      </div>
      
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Cambia Password</h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="current-password">Password Attuale</Label>
            <Input id="current-password" type="password" />
          </div>
          
          <div>
            <Label htmlFor="new-password">Nuova Password</Label>
            <Input id="new-password" type="password" />
          </div>
          
          <div>
            <Label htmlFor="confirm-password">Conferma Nuova Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
          
          <Button 
            type="button" 
            onClick={() => toast.success('Password aggiornata con successo')}
          >
            Aggiorna Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
