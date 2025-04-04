import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import VickiUnifiedBadge from '@/components/VickiUnifiedBadge';
import ContactSection from '@/components/ContactSection';
import RelatedPrograms from '@/components/programs/RelatedPrograms';

const SitProgram = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
  const relatedPrograms = [
    {
      title: "SAT - Propedeutico",
      description: "Programma introduttivo per bambini dai 4 ai 6 anni che sviluppa le prime capacità motorie tennistiche attraverso il gioco e la scoperta.",
      link: "/programs/sat"
    },
    {
      title: "SAT - Agonista Junior",
      description: "Programma formativo per giovani atleti dai 6 ai 12 anni in fase di sviluppo tecnico e fisico, con monitoraggio costante della crescita.",
      link: "/programs/junior-competitive"
    },
    {
      title: "Genitore/Tutor",
      description: "Supporto specifico per i genitori di giovani atleti con report dettagliati e consigli su come accompagnare il percorso del bambino.",
      link: "/programs/parent"
    }
  ];
  
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
            title="SIT - Scuola Individuazione Talenti (6-10+ anni)"
            subtitle="under 8–10 + over 10 (30 settimane)"
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
                  Scuola Individuazione Talenti per giovani tennisti tra i 6 e i 10+ anni
                </p>
              </div>
              <p className="text-white text-sm font-swiss max-w-3xl mt-2">
                Il nostro programma SIT trasforma l'apprendimento del tennis in un'avventura divertente che, giocando, prepara i piccoli campioni alle sfide di domani — sul campo e nella vita.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiUnifiedBadge level="essentials" className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-swiss">SIT - Scuola Individuazione Talenti (6-10+ anni)</h2>
                <VickiUnifiedBadge level="essentials" />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">under 8–10 + over 10, 30 settimane all'anno.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il programma SIT è dedicato all'identificazione e allo sviluppo dei giovani talenti tennistici.
                Con una sessione settimanale di tennis da 1 ora e una sessione di preparazione atletica di 1 ora,
                questo percorso pone solide basi motorie e tecniche nei giovani atleti.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="mb-4 font-swiss">
                Il nostro programma SIT trasforma l'apprendimento del tennis in un'avventura divertente che, giocando, 
                prepara i piccoli campioni alle sfide di domani — sul campo e nella vita. Con una combinazione di gioco 
                e metodologia scientifica, costruiamo fondamenta solide per il futuro agonistico mentre i bambini si 
                divertono a scoprire le proprie potenzialità.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={250}>
              <p className="mb-4 font-swiss">
                Grazie alla tecnologia VICKI™, ogni bambino viene monitorato in modo oggettivo,
                permettendo di identificare precocemente potenziali talenti e predisposizioni particolari.
                L'approccio scientifico consente di guidare lo sviluppo di ciascun giovane atleta
                in modo mirato e personalizzato.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={300}>
              <p className="mb-4 font-swiss">
                <strong>Analisi Iniziale Inclusa:</strong> Il programma SIT include una valutazione iniziale completa 
                che analizza le capacità motorie, coordinative e attitudinali del giovane atleta. Questa analisi 
                è fondamentale per l'integrazione nel programma e fornisce una base oggettiva per la personalizzazione 
                del percorso formativo.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={350}>
              <p className="font-swiss">
                I bambini provenienti dal programma SAT possono accedere al programma SIT dopo aver superato 
                una valutazione specifica che ne attesti la predisposizione e il potenziale. Questo permette 
                un'evoluzione naturale nel percorso formativo in base alle effettive capacità dimostrate.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <RevealAnimation delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-swiss font-semibold mb-6 text-ath-clay">Eccellenza Tecnica</h3>
                <ul className="space-y-4 font-swiss">
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>Trasformiamo i fondamentali in giochi coinvolgenti, dove l'analisi biomeccanica diventa un'avventura di scoperta del proprio corpo in movimento.</p>
                  </li>
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>I bambini imparano a "fare amicizia con la pallina" attraverso sfide ludiche che sviluppano un controllo naturale e intuitivo delle traiettorie.</p>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={450}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-swiss font-semibold mb-6 text-ath-clay">Preparazione Atletica</h3>
                <ul className="space-y-4 font-swiss">
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>Percorsi motori divertenti che, mentre fanno sorridere, costruiscono le capacità atletiche fondamentali monitorate attraverso "missioni" da completare.</p>
                  </li>
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>Giochi di velocità e agilità che, tra risate e competizioni amichevoli, preparano il corpo alle future sfide agonistiche.</p>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={500}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-swiss font-semibold mb-6 text-ath-clay">Forza Mentale</h3>
                <ul className="space-y-4 font-swiss">
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>Attività ludiche di problem-solving che allenano la mente a mantenere la calma e trovare soluzioni creative nelle situazioni di pressione.</p>
                  </li>
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>Sfide di concentrazione presentate come avventure dove imparare a gestire le emozioni diventa parte del gioco.</p>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={550}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-swiss font-semibold mb-6 text-ath-clay">Tattica & Strategia</h3>
                <ul className="space-y-4 font-swiss">
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>Giochi di ruolo dove i bambini sperimentano diverse strategie di gioco divertendosi a "pensare come campioni".</p>
                  </li>
                  <li className="flex">
                    <span className="text-ath-clay mr-2">•</span>
                    <p>Mini-tornei tematici dove sviluppano intuizione tattica e spirito di adattamento in un ambiente positivo e stimolante.</p>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={600} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>1 sessione tennis da 1 ora a settimana</li>
                <li>1 sessione atletica da 1 ora a settimana</li>
                <li>30 settimane di allenamento</li>
                <li>Monitoraggio di base con VICKI™</li>
                <li>Focus sullo sviluppo delle capacità motorie di base</li>
                <li>Introduzione graduale alle tecniche fondamentali del tennis</li>
                <li>Valutazioni periodiche del potenziale</li>
                <li>Approccio ludico e motivante</li>
                <li>Analisi iniziale completa per personalizzare il percorso</li>
                <li>Possibilità di upgrade dal programma SAT dopo valutazione</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={650} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Prezzo</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">€950</p>
                <p className="text-sm text-gray-600">per stagione (30 settimane)</p>
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
        
        <div className="bg-gray-50 py-16 mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <RevealAnimation delay={100}>
              <RelatedPrograms 
                title="Programmi Correlati" 
                programs={relatedPrograms}
              />
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
