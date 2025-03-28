
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Shield, Save } from 'lucide-react';

// This would be replaced with actual authentication in a production environment
const STAFF_PASSWORD = "ath-staff-2023";

const StaffSetup = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [popularProgramId, setPopularProgramId] = useState('elite-performance');
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if already authenticated via session storage
    const isAuth = sessionStorage.getItem('staff-auth') === 'true';
    setAuthenticated(isAuth);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      if (password === STAFF_PASSWORD) {
        setAuthenticated(true);
        sessionStorage.setItem('staff-auth', 'true');
        toast({
          title: "Accesso riuscito",
          description: "Benvenuto nell'area di amministrazione programmi ATH.",
        });
      } else {
        toast({
          title: "Accesso fallito",
          description: "Password non corretta. Riprova.",
          variant: "destructive",
        });
      }
      setLoading(false);
    }, 800);
  };

  const handleSaveSettings = () => {
    // In a real application, this would save to a database
    toast({
      title: "Impostazioni salvate",
      description: "Le modifiche sono state applicate con successo.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="text-ath-clay" size={32} />
            <h1 className="text-3xl font-display">ATH Staff Setup</h1>
          </div>
          
          {!authenticated ? (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-medium mb-4">Accesso Staff</h2>
              <p className="text-gray-600 mb-6">
                Questa area è riservata allo staff ATH. Si prega di inserire la password di accesso.
              </p>
              
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password"
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full"
                    placeholder="Inserisci la password staff"
                    required
                  />
                </div>
                
                <Button type="submit" disabled={loading}>
                  {loading ? "Verifica..." : "Accedi"}
                </Button>
              </form>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-xl font-medium mb-4">Configurazione Programmi</h2>
                
                <div className="mb-6">
                  <Label htmlFor="popular-program">Programma in evidenza (Popular Choice)</Label>
                  <select 
                    id="popular-program"
                    className="w-full p-2 border rounded-md mt-1"
                    value={popularProgramId}
                    onChange={(e) => setPopularProgramId(e.target.value)}
                  >
                    <option value="elite-performance">Elite Performance</option>
                    <option value="performance-4">Performance 4</option>
                    <option value="performance-3">Performance 3</option>
                    <option value="performance-2">Performance 2</option>
                    <option value="young-athletes">Young Athletes</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-1">
                    Questo programma verrà evidenziato con il badge "Popular Choice".
                  </p>
                </div>
                
                <Button onClick={handleSaveSettings} className="flex items-center gap-2">
                  <Save size={18} />
                  Salva configurazione
                </Button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-xl font-medium mb-4">Gestione Prezzi</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-3 text-left">Programma</th>
                        <th className="p-3 text-left">Prezzo</th>
                        <th className="p-3 text-left">Durata</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-3">Elite Performance</td>
                        <td className="p-3">
                          <Input defaultValue="7.500" className="w-32" />
                        </td>
                        <td className="p-3">
                          <Input defaultValue="40 settimane" className="w-32" />
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3">Performance 4</td>
                        <td className="p-3">
                          <Input defaultValue="6.000" className="w-32" />
                        </td>
                        <td className="p-3">
                          <Input defaultValue="40 settimane" className="w-32" />
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3">Performance 3</td>
                        <td className="p-3">
                          <Input defaultValue="5.500" className="w-32" />
                        </td>
                        <td className="p-3">
                          <Input defaultValue="40 settimane" className="w-32" />
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-3">Performance 2</td>
                        <td className="p-3">
                          <Input defaultValue="4.000" className="w-32" />
                        </td>
                        <td className="p-3">
                          <Input defaultValue="40 settimane" className="w-32" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <Button onClick={handleSaveSettings} className="flex items-center gap-2 mt-4">
                  <Save size={18} />
                  Salva prezzi
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StaffSetup;
