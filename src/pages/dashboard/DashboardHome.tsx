
import { useAuth } from '@/contexts/AuthContext';

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Benvenuto, {user?.name}!</h1>
        <p className="text-gray-500">Questa è la tua dashboard personale.</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-medium">Gestione Campi</h3>
          <p className="mt-2 text-gray-500">Visualizza e gestisci i campi da tennis.</p>
          <a href="/dashboard/courts" className="mt-4 inline-block text-sm font-medium text-ath-clay hover:underline">
            Vai alla gestione campi →
          </a>
        </div>
        
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-medium">Applicazione Esterna</h3>
          <p className="mt-2 text-gray-500">Accedi all'applicazione di monitoraggio.</p>
          <a href="/dashboard/external-app" className="mt-4 inline-block text-sm font-medium text-ath-clay hover:underline">
            Apri applicazione →
          </a>
        </div>
        
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-medium">Impostazioni</h3>
          <p className="mt-2 text-gray-500">Modifica le tue impostazioni personali.</p>
          <a href="/dashboard/settings" className="mt-4 inline-block text-sm font-medium text-ath-clay hover:underline">
            Modifica impostazioni →
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
