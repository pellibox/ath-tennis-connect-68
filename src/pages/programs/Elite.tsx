
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const EliteProgram = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="h-40 bg-gradient-to-b from-ath-clay to-ath-secondary flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-display text-white">{t('footer.elite')}</h1>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-display mb-6">{t('programs.elite')}</h2>
            <p className="text-lg mb-6">{t('programs.elite.desc')}</p>
            <p className="mb-4">
              Il nostro programma Elite rappresenta il massimo livello di supporto per atleti professionisti o con ambizioni professionali, 
              offrendo un ambiente di allenamento innovativo che integra tecnologia avanzata e competenza umana di alto livello.
            </p>
            <p>
              Grazie alla tecnologia VICKI™, analizziamo ogni aspetto della performance tennistica attraverso oltre 70 parametri specifici, 
              fornendo insights dettagliati che permettono di ottimizzare ogni elemento del gioco e massimizzare il potenziale competitivo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Analisi biomeccanica avanzata di ogni colpo</li>
                <li>Ottimizzazione tattica basata su dati oggettivi</li>
                <li>Periodizzazione scientifica dell'allenamento fisico</li>
                <li>Supporto mentale personalizzato per le competizioni</li>
                <li>Monitoraggio continuo di tutti i parametri performance</li>
                <li>Team multidisciplinare coordinato attraverso la piattaforma VICKI™</li>
                <li>Accesso alla rete globale di esperti ATH</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefici</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Massimizzazione dell'efficienza in ogni fase dell'allenamento</li>
                <li>Riduzione significativa del rischio di infortuni</li>
                <li>Ottimizzazione del processo decisionale in campo</li>
                <li>Sviluppo accelerato attraverso feedback immediati e precisi</li>
                <li>Approccio olistico che integra tutti gli aspetti della performance</li>
                <li>Continuità metodologica e supporto costante</li>
                <li>Vantaggi competitivi attraverso insights basati sui dati</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EliteProgram;
