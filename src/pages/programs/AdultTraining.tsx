import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import ContactSection from '@/components/ContactSection';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';

const AdultTrainingProgram = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Load user preferences
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Adult Training"
            subtitle="Per adulti (30 settimane)"
            imageSrc="https://images.unsplash.com/photo-1622279457486-28f703f58401?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed={createStandardVimeoEmbed('1068788229?h=5f3c14e5ec')}
            buttons={[
              { text: 'PRENOTA UNA PROVA', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          {/* Black banner with claim text */}
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">ADULT TRAINING:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Programma per adulti con sessioni di gruppo e monitoraggio VICKI™
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiMonitoringBadge level="essentials" className="bg-opacity-20 border-opacity-30 text-white" />
                <VickiPoweredBadge className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-swiss">Adult Training</h2>
                <VickiMonitoringBadge level="essentials" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">Per adulti, 30 settimane all'anno.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il programma Adult Training è progettato per tennisti adulti che desiderano migliorare
                il proprio gioco in un ambiente sociale e stimolante. Con una sessione settimanale di tennis
                da 1 ora, questo programma ti permette di sviluppare le tue abilità con la guida di maestri esperti.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="font-swiss">
                Il punto di forza di questo programma è l'uso della tecnologia VICKI™ che fornisce
                analisi oggettive delle tue prestazioni, permettendoti di vedere concretamente i tuoi
                progressi e le aree di miglioramento. Con un massimo di 4 persone per campo,
                riceverai attenzione personalizzata durante ogni sessione.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>1 sessione tennis da 1 ora a settimana</li>
                <li>30 settimane di allenamento</li>
                <li>Attività in gruppo (4 persone per campo)</li>
                <li>Monitoraggio con VICKI™</li>
                <li>Analisi tecnica e tattica</li>
                <li>Feedback dettagliato ogni sessione</li>
                <li>Atmosfera sociale e divertente</li>
                <li>Adatto a tutti i livelli di gioco</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Prezzo</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">€700</p>
                <p className="text-sm text-gray-600">per stagione (30 settimane)</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Possibilità di pacchetti personalizzati per sessioni aggiuntive o allenamenti privati.
                Contattaci per maggiori informazioni.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-ath-clay text-white py-2 px-4 rounded hover:bg-ath-clay/90 transition-colors"
              >
                Richiedi informazioni
              </a>
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title="Vuoi saperne di più?" 
          subtitle="Contattaci per una prova gratuita"
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default AdultTrainingProgram;
