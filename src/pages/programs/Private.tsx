
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivateProgram = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="h-40 bg-gradient-to-b from-ath-clay to-ath-secondary flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-display text-white">{t('footer.private')}</h1>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-display mb-6">Lezioni Private</h2>
            <p className="text-lg mb-6">Sessioni personalizzate one-to-one per un'attenzione dedicata e un progresso accelerato.</p>
            <p className="mb-4">
              Le nostre lezioni private rappresentano l'esperienza più personalizzata e focalizzata che ATH può offrire, 
              combinando l'attenzione individuale di un coach esperto con l'analisi precisa della tecnologia VICKI™.
            </p>
            <p>
              Questo formato permette di lavorare in modo mirato su aspetti specifici del gioco, 
              accelerando il processo di apprendimento e ottimizzando ogni minuto trascorso in campo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Attenzione completa e dedicata del coach</li>
                <li>Analisi tecnica dettagliata tramite VICKI™</li>
                <li>Personalizzazione completa degli obiettivi e contenuti</li>
                <li>Feedback immediato e correzioni in tempo reale</li>
                <li>Flessibilità di orari e programmazione</li>
                <li>Report dettagliati dopo ogni sessione</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefici</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Progressi accelerati grazie all'attenzione individuale</li>
                <li>Correzione efficace e rapida di problemi tecnici</li>
                <li>Adattamento preciso alle esigenze specifiche del giocatore</li>
                <li>Maggiore motivazione e responsabilizzazione</li>
                <li>Ambiente ottimale per superare blocchi o difficoltà</li>
                <li>Relazione coach-atleta più profonda e significativa</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivateProgram;
