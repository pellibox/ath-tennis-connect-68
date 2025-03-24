
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

const ClubProgram = () => {
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
            title="Programmi per Club e Accademie"
            subtitle="Integrazione del metodo ATH e della tecnologia VICKI™ per centri tennistici e accademie"
            imageSrc="https://images.unsplash.com/photo-1570767603657-2aa87c9749a0?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1064577752?h=698f55b033&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Club Programs"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: 'RICHIEDI INFORMAZIONI', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          {/* Black banner with claim text - matching Method page style */}
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">CLUB & ACCADEMIE:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Soluzioni per integrare il metodo ATH e la tecnologia VICKI™ nei centri tennistici e accademie.
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
                <h2 className="text-3xl font-swiss">Programmi per Club e Accademie</h2>
                <VickiMonitoringBadge level="pro" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">
                Integrazione del metodo ATH e della tecnologia VICKI™ per centri tennistici e accademie.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                ATH offre soluzioni innovative per club, scuole tennis e accademie che desiderano integrare 
                metodologie di allenamento all'avanguardia e tecnologie all'avanguardia per migliorare 
                l'offerta ai propri atleti e ottenere risultati misurabili.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="font-swiss">
                Attraverso partnership personalizzate, ATH può supportare la trasformazione digitale del club, 
                implementando il metodo ATH e la tecnologia VICKI™ in modi che si adattano alle specifiche 
                esigenze della struttura e dei suoi atleti.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Benefici per i Club</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>Monitoraggio degli atleti su base oggettiva e condivisa</li>
                <li>Condivisione dati e report con staff multidisciplinare</li>
                <li>Possibilità di integrare ATH nel proprio centro/accademia</li>
                <li>Uso di AI e dashboard per ottimizzare sessioni e calendari</li>
                <li>Differenziazione dell'offerta sportiva con tecnologia all'avanguardia</li>
                <li>Formazione continua per il proprio staff tecnico</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Integrazione Personalizzata</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>Analisi delle esigenze specifiche del club</li>
                <li>Piano di implementazione graduale della tecnologia</li>
                <li>Formazione dedicata per lo staff tecnico</li>
                <li>Supporto continuo post-implementazione</li>
                <li>Aggiornamenti software regolari</li>
                <li>Possibilità di personalizzazione della piattaforma</li>
              </ul>
            </RevealAnimation>
          </div>
          
          <div className="mt-16">
            <RevealAnimation>
              <h3 className="text-2xl font-swiss mb-6">Soluzioni Personalizzate</h3>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="mb-6 font-swiss">
                Ogni club e accademia ha esigenze uniche. Per questo ATH offre soluzioni completamente 
                personalizzate, con prezzi che variano in base al tipo di integrazione desiderata, al 
                numero di campi coinvolti, alla dimensione della struttura e ad altri fattori specifici.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <div className="bg-ath-clay/10 p-8 rounded-lg mb-10">
                <h4 className="text-xl font-swiss font-semibold mb-4">Prezzo</h4>
                <p className="text-2xl font-bold text-ath-clay mb-2">Personalizzato</p>
                <p className="font-swiss">
                  Il costo dell'integrazione del metodo ATH e della tecnologia VICKI™ viene definito 
                  su misura per ogni struttura, in base alle specifiche esigenze e obiettivi.
                </p>
                <div className="mt-4">
                  <a 
                    href="/contact" 
                    className="inline-block bg-ath-clay text-white py-3 px-6 rounded hover:bg-ath-clay/90 transition-colors"
                  >
                    Richiedi un preventivo
                  </a>
                </div>
              </div>
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

export default ClubProgram;
