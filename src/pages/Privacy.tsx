
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Privacy = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="h-40 bg-gradient-to-b from-ath-clay to-ath-secondary flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-display text-white">{t('footer.privacy')}</h1>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none">
            <h2>Informativa sulla Privacy di ATH</h2>
            <p>Ultima modifica: {new Date().toLocaleDateString()}</p>
            
            <h3>1. Informazioni che raccogliamo</h3>
            <p>
              ATH raccoglie diversi tipi di informazioni dai nostri utenti e atleti, tra cui:
            </p>
            <ul>
              <li>Informazioni personali come nome, indirizzo email, numero di telefono</li>
              <li>Dati sulla performance atletica attraverso il nostro sistema VICKI™</li>
              <li>Informazioni sulla navigazione del sito web tramite cookie e tecnologie simili</li>
              <li>Immagini e video degli atleti durante le sessioni di allenamento</li>
            </ul>
            
            <h3>2. Come utilizziamo le informazioni</h3>
            <p>
              Utilizziamo le informazioni raccolte per:
            </p>
            <ul>
              <li>Fornire, mantenere e migliorare i nostri servizi</li>
              <li>Personalizzare l'esperienza di allenamento per ogni atleta</li>
              <li>Analizzare e ottimizzare le prestazioni tennistiche</li>
              <li>Comunicare con gli utenti riguardo a servizi, aggiornamenti e promozioni</li>
              <li>Proteggere i nostri utenti e i nostri servizi</li>
            </ul>
            
            <h3>3. Condivisione delle informazioni</h3>
            <p>
              Non condividiamo le informazioni personali con terze parti tranne nei seguenti casi:
            </p>
            <ul>
              <li>Con il consenso esplicito dell'utente</li>
              <li>Con i fornitori di servizi che supportano le nostre operazioni</li>
              <li>Per conformità legale e protezione dei diritti</li>
            </ul>
            
            <h3>4. Sicurezza dei dati</h3>
            <p>
              Prendiamo seriamente la sicurezza dei dati e implementiamo misure tecniche e organizzative 
              appropriate per proteggere le informazioni contro l'accesso non autorizzato, 
              la divulgazione o la distruzione.
            </p>
            
            <h3>5. Diritti degli utenti</h3>
            <p>
              Gli utenti hanno diritti specifici riguardo ai propri dati, inclusi:
            </p>
            <ul>
              <li>Accesso alle proprie informazioni personali</li>
              <li>Rettifica di dati inaccurati</li>
              <li>Cancellazione dei dati in determinate circostanze</li>
              <li>Limitazione od opposizione al trattamento</li>
              <li>Portabilità dei dati</li>
            </ul>
            
            <h3>6. Contatti</h3>
            <p>
              Per qualsiasi domanda o preoccupazione riguardante questa Informativa sulla Privacy, 
              si prega di contattarci all'indirizzo info@ath-tennis.com.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
