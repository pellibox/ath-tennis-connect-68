
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

const SatProgram = () => {
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
            title="SAT – Propedeutico"
            subtitle="under 4–6, sede di Rodano (40 settimane)"
            imageSrc="https://images.unsplash.com/photo-1560012057-4372e14c5085?q=80&w=2074&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="SAT Program"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
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
                <h2 className="text-white text-lg font-display mr-3">SAT:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Corso propedeutico per i più piccoli, introducendo in modo giocoso coordinazione e primi movimenti tennistici
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiMonitoringBadge level="basic" className="bg-opacity-20 border-opacity-30 text-white" />
                <VickiPoweredBadge onRequest className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-swiss">SAT – Propedeutico</h2>
                <VickiMonitoringBadge level="basic" />
                <VickiPoweredBadge onRequest />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">under 4–6, sede di Rodano, 40 settimane all'anno.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il programma SAT rappresenta il primo approccio al tennis per i piccoli dai 4 ai 6 anni.
                Attraverso attività ludiche e divertenti, i bambini sviluppano le capacità motorie di base
                e familiarizzano con racchetta e pallina in un ambiente stimolante.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="mb-4 font-swiss">
                Una sessione settimanale di tennis da 1 ora, accompagnata da 1 ora di attività atletica con impronta ludica,
                permette ai più piccoli di coltivare il divertimento verso lo sport e sviluppare
                le prime abilità di coordinazione. La tecnologia VICKI™ può essere attivata su richiesta
                per monitorare i progressi dei piccoli atleti.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={250}>
              <p className="font-swiss mb-4">
                <strong>Percorso Evolutivo:</strong> I bambini che mostrano particolari attitudini durante il 
                programma SAT possono accedere al programma SIT (Selezione e Individuazione Talenti) dopo aver 
                superato un test di valutazione. Questo permette una progressione naturale nel percorso formativo, 
                basata sulle effettive capacità e predisposizioni del bambino.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={300}>
              <div className="p-4 bg-ath-clay/10 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-2">Possibilità di Upgrade al Programma SIT</h3>
                <p className="font-swiss">
                  I piccoli atleti che dimostrano particolare predisposizione tecnica e coordinativa possono 
                  essere inseriti nel percorso SIT dopo una valutazione specifica condotta con la tecnologia VICKI™.
                  Questa opportunità di upgrade viene valutata dai nostri tecnici durante il corso dell'anno.
                </p>
              </div>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={350} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>1 sessione tennis da 1 ora a settimana</li>
                <li>1 sessione atletica da 1 ora con impronta ludica</li>
                <li>40 settimane di attività</li>
                <li>Monitoraggio VICKI™ disponibile su richiesta</li>
                <li>Approccio completamente ludico</li>
                <li>Sviluppo delle capacità motorie fondamentali</li>
                <li>Prima familiarizzazione con racchetta e pallina</li>
                <li>Gruppi ridotti per massima attenzione</li>
                <li>Possibilità di accesso al programma SIT dopo valutazione</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={400} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Prezzo</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">€500</p>
                <p className="text-sm text-gray-600">per stagione (40 settimane)</p>
              </div>
              <div className="mb-4 p-4 bg-ath-clay/10 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">Test di Valutazione per SIT</h4>
                <p className="text-sm text-gray-600">
                  La valutazione per l'accesso al programma SIT ha un costo aggiuntivo di €50 e viene proposta 
                  dai nostri tecnici solo ai bambini che mostrano particolari attitudini.
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

export default SatProgram;
