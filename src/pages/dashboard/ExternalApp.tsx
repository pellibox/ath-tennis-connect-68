
import { useState } from 'react';

const ExternalApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Applicazione Esterna</h1>
        <p className="text-gray-500">Sistema di monitoraggio campi</p>
      </div>
      
      <div className="rounded-lg border bg-white shadow">
        {isLoading && (
          <div className="flex h-[500px] items-center justify-center">
            <div className="text-center">
              <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-ath-clay mx-auto"></div>
              <p>Caricamento dell'applicazione...</p>
            </div>
          </div>
        )}
        
        <iframe 
          src="https://lovable.dev/projects/d0d7f0d4-7bfc-4e17-85a5-04dce1b82ce0"
          className={`w-full h-[700px] rounded-lg ${isLoading ? 'hidden' : 'block'}`}
          onLoad={() => setIsLoading(false)}
          title="Applicazione di monitoraggio"
        />
      </div>
    </div>
  );
};

export default ExternalApp;
