
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TechnologySection from '@/components/TechnologySection';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProfile } from '@/contexts/ProfileContext';
import RevealAnimation from '@/components/RevealAnimation';
import { getVimeoEmbed } from '@/utils/videoUtils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const TechnologyPage = () => {
  const { t } = useLanguage();
  const { userGender, userType } = useProfile();
  
  // Smooth scroll functionality
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Get personalized description based on user type
  const getPersonalizedDescription = () => {
    if (!userType) {
      return "Sistema di analisi con visione artificiale, AI e tracciamento 3D che analizza oltre 70 parametri in tempo reale";
    }

    switch (userType) {
      case 'junior':
        return "Analisi e monitoraggio tecnico adattato per giovani tennisti in fase di sviluppo, con focus su coordinazione e pattern motori";
      case 'performance':
        return "Analisi avanzata per tennisti agonisti con tracciamento biomeccanico e supporto tecnico-tattico per ottimizzare la performance";
      case 'professional':
        return "Sistema di monitoraggio e analisi completo per professionisti con integrazione di parametri fisici, mentali e tattici in tempo reale";
      case 'coach':
        return "Strumento completo di analisi per coach, con dashboard personalizzabile, tracking multi-atleta e statistiche avanzate";
      case 'parent':
        return "Analisi semplificata e report visivi per genitori, con tracciamento dello sviluppo tecnico e fisico del giovane atleta";
      default:
        return "Sistema di analisi con visione artificiale, AI e tracciamento 3D che analizza oltre 70 parametri in tempo reale";
    }
  };

  // Get Vimeo embed from the profile context, with forTechnologyPage=true
  const vimeoEmbed = getVimeoEmbed(userGender, userType, true, true);

  return (
    <div className="flex flex-col min-h-screen">
      <Header useVickiLogo={false} />
      
      <main className="flex-grow">
        {/* Hero video section - full width like other pages */}
        <div className="w-full bg-black">
          <div className="w-full">
            <div 
              className="w-full aspect-video"
              dangerouslySetInnerHTML={{ __html: vimeoEmbed }} 
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-black/80 to-transparent h-[100px] flex items-end">
            <p className="text-white text-base md:text-lg opacity-90 max-w-3xl mx-auto text-center font-swiss">
              {getPersonalizedDescription()}
            </p>
          </div>
        </div>
        
        {/* Black banner with reduced height - matching Method page style */}
        <div className="w-full bg-black py-10 relative" style={{ height: '150px' }}>
          <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
            {/* Empty banner for spacing, to match Method page style */}
          </div>
        </div>
        
        <TechnologySection 
          title="Sistema di analisi con visione artificiale e AI"
          subtitle={getPersonalizedDescription()}
        />
        
        {userType && (
          <section className="py-16 px-6 bg-ath-gray">
            <div className="max-w-7xl mx-auto">
              <RevealAnimation>
                <h2 className="text-3xl font-swiss mb-8">Benefici per {userType === 'coach' ? 'i Coach' : 
                                                  userType === 'parent' ? 'i Genitori' : 
                                                  userType === 'professional' ? 'i Professionisti' : 
                                                  userType === 'performance' ? 'gli Agonisti' : 
                                                  'i Giovani Tennisti'}</h2>
              </RevealAnimation>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {userType === 'professional' && (
                  <>
                    <RevealAnimation delay={100} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4 font-swiss">Analisi Predittiva</h3>
                      <p className="font-swiss">Algoritmi avanzati che anticipano trend e rischi di infortunio basati su pattern biomeccanici e di carico.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={150} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4 font-swiss">Monitoraggio Completo</h3>
                      <p className="font-swiss">Tracking integrato di parametri tecnici, fisici, mentali e tattici con feedback in tempo reale.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={200} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4 font-swiss">Gestione Ottimale</h3>
                      <p className="font-swiss">Ottimizzazione del carico allenante e pianificazione dei picchi di forma in base ai tornei programmati.</p>
                    </RevealAnimation>
                  </>
                )}
                
                {userType === 'performance' && (
                  <>
                    <RevealAnimation delay={100} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4 font-swiss">Analisi Tecnica</h3>
                      <p className="font-swiss">Monitoraggio completo di tutti i colpi con feedback sul miglioramento dei parametri biomeccanici.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={150} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4 font-swiss">Supporto Tattico</h3>
                      <p className="font-swiss">Analisi delle partite e dei pattern di gioco per adattare l'allenamento alle esigenze competitive.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={200} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4 font-swiss">Prevenzione Infortuni</h3>
                      <p className="font-swiss">Identificazione dei sovraccarichi e dei pattern motori rischiosi per prevenire infortuni comuni.</p>
                    </RevealAnimation>
                  </>
                )}
                
                {userType === 'junior' && (
                  <>
                    <RevealAnimation delay={100} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4 font-swiss">Sviluppo Coordinativo</h3>
                      <p className="font-swiss">Monitoraggio della coordinazione e dei pattern motori fondamentali per una crescita armonica.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={150} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4 font-swiss">Apprendimento Efficace</h3>
                      <p className="font-swiss">Feedback visivi immediati che accelerano l'apprendimento tecnico e la comprensione del movimento.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={200} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4 font-swiss">Monitoraggio Crescita</h3>
                      <p className="font-swiss">Adattamento continuo dei programmi in base allo sviluppo fisico e alla crescita del giovane atleta.</p>
                    </RevealAnimation>
                  </>
                )}
                
                {userType === 'coach' && (
                  <>
                    <RevealAnimation delay={100} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4 font-swiss">Dashboard Avanzata</h3>
                      <p className="font-swiss">Gestione completa dei tuoi atleti con visualizzazione dati personalizzabile e reportistica avanzata.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={150} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4 font-swiss">Supporto Metodologico</h3>
                      <p className="font-swiss">Integrazione della tua metodologia nel sistema con possibilità di codificare esercizi e progressioni.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={200} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4 font-swiss">Condivisione Dati</h3>
                      <p className="font-swiss">Collaborazione facile con altri professionisti (fisioterapisti, preparatori, mental coach) tramite la piattaforma.</p>
                    </RevealAnimation>
                  </>
                )}
                
                {userType === 'parent' && (
                  <>
                    <RevealAnimation delay={100} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4 font-swiss">Report Semplificati</h3>
                      <p className="font-swiss">Visualizzazione chiara e comprensibile dei progressi del tuo ragazzo/a senza terminologia troppo tecnica.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={150} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4 font-swiss">Monitoraggio Sicuro</h3>
                      <p className="font-swiss">Controllo dello sviluppo fisico e tecnico con attenzione alla salute e alla prevenzione di sovraccarichi.</p>
                    </RevealAnimation>
                    <RevealAnimation delay={200} className="bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-medium mb-4 font-swiss">Connessione con Coach</h3>
                      <p className="font-swiss">Canale diretto con lo staff tecnico per seguire il percorso formativo in modo trasparente e collaborativo.</p>
                    </RevealAnimation>
                  </>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default TechnologyPage;
