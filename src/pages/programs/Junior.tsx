
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const JuniorProgram = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="h-40 bg-gradient-to-b from-ath-clay to-ath-secondary flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-display text-white">{t('footer.junior')}</h1>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-display mb-6">{t('programs.junior')}</h2>
            <p className="text-lg mb-6">{t('programs.junior.desc')}</p>
            <p className="mb-4">
              Il nostro programma Junior è stato progettato per sviluppare giovani atleti dai 8 ai 18 anni, 
              fornendo loro le competenze tecniche, tattiche, fisiche e mentali necessarie per eccellere nel tennis competitivo.
            </p>
            <p>
              Utilizzando la tecnologia VICKI™, monitoriamo e analizziamo lo sviluppo di ogni atleta, 
              personalizzando il percorso formativo in base alle esigenze individuali e garantendo un progresso continuo e misurabile.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Allenamento tecnico personalizzato basato su dati oggettivi</li>
                <li>Sviluppo tattico progressivo adattato all'età e al livello</li>
                <li>Preparazione fisica integrata nel percorso tennistico</li>
                <li>Supporto mentale per la gestione della pressione agonistica</li>
                <li>Monitoraggio continuo dello sviluppo attraverso la piattaforma VICKI™</li>
                <li>Feedback dettagliati e regolari per atleti e genitori</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefici</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Sviluppo completo del potenziale tennistico</li>
                <li>Continuità metodologica indipendentemente dal coach presente</li>
                <li>Riduzione del rischio di infortuni attraverso una tecnica ottimizzata</li>
                <li>Maggiore efficacia nell'allenamento grazie ai dati oggettivi</li>
                <li>Costruzione di una solida fondazione per il tennis competitivo</li>
                <li>Coinvolgimento attivo dei genitori nel processo di sviluppo</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JuniorProgram;
