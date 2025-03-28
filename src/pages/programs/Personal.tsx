
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProfile } from '@/contexts/ProfileContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import ContactSection from '@/components/ContactSection';

const PersonalTrainingProgram = () => {
  const { t } = useLanguage();
  const { userGender, userType } = useProfile();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Personal Training"
            subtitle="Sessioni personalizzate uno a uno"
            imageSrc="https://images.unsplash.com/photo-1601257033202-a69c1ebb03d5?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Personal Training"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: 'PRENOTA UNA SESSIONE', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">PERSONAL TRAINING:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Allenamento individuale con coach dedicato e tecnologia VICKI™
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiMonitoringBadge level="pro" className="bg-opacity-20 border-opacity-30 text-white" />
                <VickiPoweredBadge className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-swiss">Personal Training</h2>
                <VickiMonitoringBadge level="pro" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">Sessioni private personalizzate per ogni livello di giocatore.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il programma Personal Training offre la massima personalizzazione con sessioni private 
                uno a uno con i nostri coach esperti. Ogni aspetto della tua tecnica, tattica e preparazione 
                fisica viene analizzato e ottimizzato utilizzando la tecnologia VICKI™.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="font-swiss">
                Questo formato di allenamento è ideale per chi desidera progredire rapidamente, 
                correggere specifiche aree tecniche, o prepararsi per competizioni importanti. 
                Disponibile per tutti i livelli di gioco, dal principiante all'atleta professionista.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>Sessioni private di 1 ora con coach dedicato</li>
                <li>Monitoraggio professionale con VICKI™</li>
                <li>Piani di allenamento personalizzati</li>
                <li>Analisi video dettagliata post-sessione</li>
                <li>Focus su aree specifiche di miglioramento</li>
                <li>Flessibilità di programmazione</li>
                <li>Disponibile per tutti i livelli e fasce d'età</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Prezzi</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-bold text-ath-clay">€90</p>
                  <p className="text-sm text-gray-600">Singola sessione (1 ora)</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-ath-clay">€425</p>
                  <p className="text-sm text-gray-600">Pacchetto 5 sessioni</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-ath-clay">€800</p>
                  <p className="text-sm text-gray-600">Pacchetto 10 sessioni</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                I pacchetti hanno validità 3 mesi dall'acquisto. Cancellazioni con meno di 24 ore di preavviso comportano l'addebito della sessione.
              </p>
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title="Prenota la tua sessione" 
          subtitle="Contattaci per programmare il tuo allenamento personalizzato"
          address="Via F. Turati, 9, 20090 Rodano MI, Italia"
          email="info@ath.tennis"
          phone="+39 02 1234567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default PersonalTrainingProgram;
