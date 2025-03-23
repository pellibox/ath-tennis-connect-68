
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Terms = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="h-40 bg-gradient-to-b from-ath-clay to-ath-secondary flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-display text-white">{t('footer.terms')}</h1>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none">
            <h2>Termini e Condizioni di ATH</h2>
            <p>Ultima modifica: {new Date().toLocaleDateString()}</p>
            
            <p>
              Benvenuti su ATH - Advanced Tennis Hub. L'accesso e l'utilizzo dei nostri servizi sono soggetti 
              ai seguenti Termini e Condizioni.
            </p>
            
            <h3>1. Accettazione dei Termini</h3>
            <p>
              Utilizzando i servizi di ATH, accetti di essere vincolato da questi Termini e Condizioni. 
              Se non accetti questi termini, ti preghiamo di non utilizzare i nostri servizi.
            </p>
            
            <h3>2. Servizi offerti</h3>
            <p>
              ATH fornisce servizi di allenamento tennistico, analisi della performance e supporto allo sviluppo 
              degli atleti attraverso tecnologia avanzata e coaching professionale.
            </p>
            
            <h3>3. Registrazione e Account</h3>
            <p>
              Per accedere a determinati servizi, potrebbe essere necessario creare un account. 
              Sei responsabile di mantenere la riservatezza delle tue credenziali e di tutte le attività 
              che si verificano sotto il tuo account.
            </p>
            
            <h3>4. Proprietà Intellettuale</h3>
            <p>
              Tutti i contenuti, il software, la tecnologia e i marchi associati ad ATH sono di proprietà 
              esclusiva di ATH o dei suoi licenzianti. Non è consentito riprodurre, modificare o distribuire 
              tali materiali senza autorizzazione.
            </p>
            
            <h3>5. Dati degli Atleti</h3>
            <p>
              I dati raccolti durante le sessioni di allenamento vengono utilizzati per migliorare 
              le prestazioni dell'atleta. Concedendo ad ATH l'autorizzazione a raccogliere questi dati, 
              accetti che possano essere utilizzati in forma anonima per scopi di ricerca e sviluppo.
            </p>
            
            <h3>6. Limitazioni di Responsabilità</h3>
            <p>
              ATH non è responsabile per eventuali infortuni o danni che possono verificarsi durante 
              l'utilizzo dei nostri servizi. Gli atleti partecipano alle attività a proprio rischio.
            </p>
            
            <h3>7. Cancellazioni e Rimborsi</h3>
            <p>
              Le politiche di cancellazione e rimborso variano in base al tipo di servizio. 
              Si prega di consultare le specifiche politiche per ogni programma o servizio.
            </p>
            
            <h3>8. Modifiche ai Termini</h3>
            <p>
              ATH si riserva il diritto di modificare questi Termini e Condizioni in qualsiasi momento. 
              Le modifiche saranno effettive dopo la pubblicazione sul sito web.
            </p>
            
            <h3>9. Legge Applicabile</h3>
            <p>
              Questi Termini e Condizioni sono regolati dalle leggi italiane. 
              Qualsiasi controversia sarà soggetta alla giurisdizione esclusiva dei tribunali di Milano.
            </p>
            
            <h3>10. Contatti</h3>
            <p>
              Per qualsiasi domanda o preoccupazione riguardante questi Termini e Condizioni, 
              si prega di contattarci all'indirizzo info@ath-tennis.com.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
