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

const CoachProgram = () => {
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
            title="Coach / Allenatori"
            subtitle="Formazione avanzata (tutto l'anno)"
            imageSrc="https://images.unsplash.com/photo-1620588280212-9c4784d5d99d?q=80&w=2067&auto=format&fit=crop"
            vimeoEmbed={createStandardVimeoEmbed('867339842')}
            buttons={[
              { text: 'RICHIEDI INFORMAZIONI', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          {/* Black banner with claim text */}
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">COACH:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Formazione avanzata e strumenti innovativi per allenatori di tennis
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
                <h2 className="text-3xl font-swiss">Coach / Allenatori</h2>
                <VickiMonitoringBadge level="pro" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">Formazione avanzata, disponibile tutto l'anno.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il programma per Coach è pensato per allenatori di tennis che desiderano elevare
                il proprio metodo di insegnamento attraverso l'utilizzo di tecnologie avanzate
                e metodologie basate sui dati. Questo percorso offre accesso alla piattaforma VICKI™
                per il tracking e l'analisi video, permettendo di ottimizzare il lavoro con i propri atleti.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="font-swiss">
                Attraverso questo programma, i coach possono creare e codificare nel sistema un metodo personalizzato,
                beneficiando di formazione continua e aggiornamenti metodologici. L'integrazione della tecnologia
                nel processo di coaching permette di oggettivizzare il feedback e accelerare lo sviluppo degli atleti.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>Accesso alla piattaforma di tracking e analisi video</li>
                <li>Integrazione con il sistema VICKI™ per analisi avanzata</li>
                <li>Creazione di un metodo personalizzato (codificabile nel sistema)</li>
                <li>Formazione continua e aggiornamento metodologico</li>
                <li>Workshop di approfondimento tecnico e pedagogico</li>
                <li>Possibilità di condividere dati e report con altri professionisti</li>
                <li>Supporto tecnico continuo</li>
                <li>Accesso a una community di coach innovativi</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Prezzo</h3>
              <div className="mb-4">
                <p className="text-2xl font-bold text-ath-clay">Personalizzato</p>
                <p className="text-sm text-gray-600">in base alle esigenze specifiche</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Il costo del programma per Coach viene definito su misura, considerando
                il numero di atleti seguiti, il livello di integrazione tecnologica desiderato
                e altre specifiche necessità.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-ath-clay text-white py-2 px-4 rounded hover:bg-ath-clay/90 transition-colors"
              >
                Richiedi un preventivo
              </a>
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title="Vuoi saperne di più?" 
          subtitle="Contattaci per una consulenza personalizzata"
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default CoachProgram;
