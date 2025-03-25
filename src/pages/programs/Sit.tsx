
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

const SitProgram = () => {
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
            title="SIT – Selezione e Individuazione Talenti"
            subtitle="under 8–10 + over 10 (40 settimane)"
            imageSrc="https://images.unsplash.com/photo-1607278967103-bc928c5b10f4?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Talent Identification"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
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
                <h2 className="text-white text-lg font-display mr-3">SIT:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Selezione e Individuazione Talenti per giovani tennisti tra gli 8 e i 10 anni e oltre
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiMonitoringBadge level="basic" className="bg-opacity-20 border-opacity-30 text-white" />
                <VickiPoweredBadge className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-swiss">SIT – Selezione e Individuazione Talenti</h2>
                <VickiMonitoringBadge level="basic" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">under 8–10 + over 10, 40 settimane all'anno.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il programma SIT è dedicato all'identificazione e allo sviluppo dei giovani talenti tennistici.
                Con una sessione settimanale di tennis da 1 ora e due sessioni di preparazione atletica,
                questo percorso pone solide basi motorie e tecniche nei giovani atleti.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="mb-4 font-swiss">
                Grazie alla tecnologia VICKI™, ogni bambino viene monitorato in modo oggettivo,
                permettendo di identificare precocemente potenziali talenti e predisposizioni particolari.
                L'approccio scientifico consente di guidare lo sviluppo di ciascun giovane atleta
                in modo mirato e personalizzato.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={250}>
              <p className="mb-4 font-swiss">
                <strong>Analisi Iniziale Inclusa:</strong> Il programma SIT include una valutazione iniziale completa 
                che analizza le capacità motorie, coordinative e attitudinali del giovane atleta. Questa analisi 
                è fondamentale per l'integrazione nel programma e fornisce una base oggettiva per la personalizzazione 
                del percorso formativo.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={300}>
              <p className="font-swiss">
                I bambini provenienti dal programma SAT possono accedere al programma SIT dopo aver superato 
                una valutazione specifica che ne attesti la predisposizione e il potenziale. Questo permette 
                un'evoluzione naturale nel percorso formativo in base alle effettive capacità dimostrate.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={350} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>1 sessione tennis da 1 ora a settimana</li>
                <li>2 sessioni atletica da 1 ora a settimana</li>
                <li>40 settimane di allenamento</li>
                <li>Monitoraggio di base con VICKI™</li>
                <li>Focus sullo sviluppo delle capacità motorie di base</li>
                <li>Introduzione graduale alle tecniche fondamentali del tennis</li>
                <li>Valutazioni periodiche del potenziale</li>
                <li>Approccio ludico e motivante</li>
                <li>Analisi iniziale completa per personalizzare il percorso</li>
                <li>Possibilità di upgrade dal programma SAT dopo valutazione</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={400} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Prezzo</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">€950</p>
                <p className="text-sm text-gray-600">per stagione (40 settimane)</p>
              </div>
              <div className="mb-4 p-4 bg-ath-clay/10 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">Analisi Iniziale Inclusa</h4>
                <p className="text-sm text-gray-600">
                  La valutazione iniziale VICKI™ è inclusa nel prezzo del programma e rappresenta 
                  un valore aggiunto significativo per ottimizzare il percorso formativo del giovane atleta.
                </p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Possibilità di pagamento rateizzato. Contattaci per maggiori informazioni.
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

export default SitProgram;
