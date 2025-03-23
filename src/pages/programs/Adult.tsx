
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const AdultProgram = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="h-40 bg-gradient-to-b from-ath-clay to-ath-secondary flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-display text-white">{t('footer.adult')}</h1>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-display mb-6">{t('programs.adult')}</h2>
            <p className="text-lg mb-6">{t('programs.adult.desc')}</p>
            <p className="mb-4">
              Il nostro programma per Amatori è stato progettato per offrire a giocatori adulti di tutti i livelli 
              un'esperienza tennistica di alta qualità che combina miglioramento tecnico, divertimento e benessere fisico.
            </p>
            <p>
              Utilizzando la tecnologia VICKI™ in modo accessibile e intuitivo, aiutiamo ogni giocatore a comprendere 
              e migliorare il proprio tennis, rendendo il processo di apprendimento più efficace e gratificante.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Lezioni flessibili adattate agli impegni lavorativi</li>
                <li>Analisi tecnica semplificata ma efficace</li>
                <li>Approccio personalizzato per ogni livello di gioco</li>
                <li>Focus sulla prevenzione di infortuni e tennis sostenibile</li>
                <li>Componente sociale e di gruppo per rendere l'esperienza più piacevole</li>
                <li>Possibilità di monitorare i propri progressi nel tempo</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefici</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Miglioramento tecnico visibile e misurabile</li>
                <li>Maggiore soddisfazione nel gioco attraverso colpi più efficaci</li>
                <li>Riduzione del rischio di infortuni comuni negli adulti</li>
                <li>Benessere fisico generale attraverso un'attività completa</li>
                <li>Ambiente sociale positivo e motivante</li>
                <li>Accesso a metodologie di allenamento professionali in formato accessibile</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdultProgram;
