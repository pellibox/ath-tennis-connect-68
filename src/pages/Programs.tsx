import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProgramsSection from '@/components/ProgramsSection';
import AboutSection from '@/components/AboutSection';
import RevealAnimation from '@/components/RevealAnimation';
import ContactSection from '@/components/ContactSection';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Programs = () => {
  const { t } = useLanguage();
  
  // Smooth scroll functionality
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Programs data with detailed features for each user profile
  const methodologyPrograms = [
    {
      id: '1',
      title: 'Agonista Junior (13-18 anni)',
      description: 'Programma completo per giovani atleti che vogliono competere a livello agonistico.',
      image: 'https://images.unsplash.com/photo-1612458225454-41c3991c0c49?q=80&w=1973&auto=format&fit=crop',
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596987?h=c9dad61d03&autoplay=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
      link: '/programs/junior-competitive',
      features: [
        'Analisi in tempo reale di tecnica, tattica, parametri mentali e fisici',
        'Feedback continuo (durante e dopo la sessione)',
        'Database personale per pianificare il calendario tornei',
        'Monitoraggio carico di lavoro e progressi',
        'Prevenzione infortuni grazie all\'identificazione automatica delle aree critiche',
        'Percorsi personalizzati in base allo sviluppo fisico, biotipo e stile di gioco',
        'Integrazione tra valutazioni tecniche, fisiche, mediche e mentali',
        'Coordinamento tra coach, preparatore, mental coach, medico'
      ]
    },
    {
      id: '2',
      title: 'Giovani Agonisti (6-12 anni)',
      description: 'Programma formativo per giovani atleti in fase di sviluppo tecnico e fisico.',
      image: '/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png',
      videoSrc: '/videos/young-athlete-sample.mp4',
      link: '/programs/young-athletes',
      features: [
        'Valutazioni tecniche, fisiche, mentali e tattiche costanti',
        'Analisi biomeccanica in campo',
        'Monitoraggio crescita per evitare sovraccarichi (medico e biochimico)',
        'Programmi adattati all\'età e all\'evoluzione motoria',
        'AI dedicata per tracciare la coordinazione',
        'Equilibrio tra miglioramento tecnico e componente ludica',
        'Coinvolgimento attivo dei genitori attraverso report visivi e aggiornamenti chiari'
      ]
    },
    {
      id: '3',
      title: 'Professionisti',
      description: 'Supporto completo per atleti professionisti con analisi avanzata e ottimizzazione della performance.',
      image: '/lovable-uploads/53047a4d-087d-4e68-942b-d441b33bf6ab.png',
      link: '/programs/professional',
      features: [
        'Allenamento completamente personalizzato su tutti i fronti',
        'Collaborazione tra coach, preparatore, mental coach e medico',
        'Analisi biomeccanica e mentale avanzata in tempo reale',
        'Analisi predittiva e adattamento continuo via AI',
        'Supporto tecnico sia in sede che da remoto',
        'Gestione ottimale dei cicli di carico, recupero e picco forma',
        'Integrazione di parametri medici e biochimici per massimizzare la performance'
      ]
    },
    {
      id: '4',
      title: 'Coach / Allenatori / Club',
      description: 'Formazione avanzata e strumenti per allenatori che vogliono integrare la metodologia ATH e VICKI.',
      image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2069&auto=format&fit=crop',
      link: '/programs/coach',
      features: [
        'Accesso alla piattaforma di tracking e analisi video',
        'Integrazione completa con il sistema VICKI per analisi avanzata',
        'Creazione di un metodo personalizzato (codificabile nel sistema)',
        'Formazione continua e aggiornamento metodologico',
        'Monitoraggio degli atleti su base oggettiva e condivisa',
        'Condivisione dati e report con staff multidisciplinare',
        'Possibilità di integrare ATH nel proprio centro/accademia',
        'Uso di AI e dashboard per ottimizzare sessioni e calendari'
      ]
    },
    {
      id: '5',
      title: 'Genitore/Tutor (Giovani e Junior Agonisti 6-18 anni)',
      description: 'Supporto informativo e coinvolgimento nel percorso di sviluppo del giovane atleta.',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop',
      link: '/programs/parent',
      features: [
        'Accesso a report semplici e leggibili, con dati tecnici, fisici e mentali',
        'Possibilità di seguire in streaming allenamenti e partite',
        'Aggiornamenti regolari sull\'evoluzione tecnica e psico-fisica del ragazzo/a',
        'Canali diretti con il coach per ricevere feedback chiari e condividere obiettivi',
        'Analisi statistiche semplificate con visione d\'insieme dell\'andamento',
        'Supporto pratico per accompagnare il percorso sportivo senza pressioni inutili',
        'Filtraggio automatico dei dati per evitare interpretazioni errate o fuorvianti'
      ]
    },
    {
      id: '6',
      title: 'Amatori',
      description: 'Percorsi flessibili per giocatori amatoriali che vogliono migliorare le proprie capacità.',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop',
      link: '/programs/amateur',
      features: [
        'Allenamento personalizzato anche su base occasionale',
        'Lezioni singole o pacchetti con analisi tecnica semplificata',
        'Clinics su specifici aspetti (servizio, spostamenti, colpi)',
        'Affitto campi con tecnologia attiva (per analisi post-sessione)',
        'Percorsi di miglioramento progressivo senza sovraccarico',
        'Report leggibili con focus su controllo, postura e miglioramenti visibili'
      ]
    }
  ];

  // Other programs data (keeping some original programs)
  const additionalPrograms = [
    {
      id: '8',
      title: 'Summer Camps',
      description: 'Programmi intensivi di 1-4 settimane per giocatori di tutte le età e livelli.',
      image: 'https://images.unsplash.com/photo-1544298621-35a989e4e54a?q=80&w=2070&auto=format&fit=crop',
      link: '/programs/camps',
      features: [
        'Programmi per diverse fasce d\'età',
        'Allenamento intensivo giornaliero',
        'Attività complementari e team building',
        'Analisi tecnica con sistema VICKI'
      ]
    },
    {
      id: '9',
      title: 'Performance Analysis',
      description: 'Analisi completa del gioco con tecnologia avanzata e feedback personalizzato.',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop',
      link: '/programs/analysis',
      features: [
        'Analisi biomeccanica completa',
        'Heatmap e pattern di spostamento',
        'Statistiche avanzate di gioco',
        'Report dettagliato con raccomandazioni'
      ]
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Programmi ATH" 
          subtitle="Approccio metodologico personalizzato per ogni profilo di utente"
          imageSrc="https://images.unsplash.com/photo-1595435934819-5704d86e29a1?q=80&w=2070&auto=format&fit=crop"
          buttons={[
            { text: 'PRENOTA UNA PROVA', href: '/contact' },
            { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
          ]}
          contentPosition="left"
          overlayOpacity="medium"
        />
        
        <section className="py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <RevealAnimation>
              <h2 className="text-3xl md:text-4xl font-display mb-4">Metodologia ATH</h2>
            </RevealAnimation>
            
            <RevealAnimation delay={100}>
              <p className="text-lg text-gray-600 max-w-3xl mb-12">
                In ATH integriamo tecnologia avanzata con coaching esperto. Il nostro sistema proprietario VICKI monitora oltre 70 parametri della performance tennistica per fornire analisi dettagliate e programmi di allenamento personalizzati.
              </p>
            </RevealAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <RevealAnimation delay={150} className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Sviluppo Tecnico</h3>
                <p className="text-gray-600">I nostri coach utilizzano analisi video avanzate e feedback in tempo reale per perfezionare la tua tecnica su tutti i colpi.</p>
              </RevealAnimation>
              
              <RevealAnimation delay={200} className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Preparazione Fisica</h3>
                <p className="text-gray-600">Programmi di fitness personalizzati specifici per il tennis, focalizzati su velocità, agilità, forza e resistenza.</p>
              </RevealAnimation>
              
              <RevealAnimation delay={250} className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Allenamento Mentale</h3>
                <p className="text-gray-600">Sviluppa resistenza mentale, concentrazione e pensiero strategico con i nostri metodi di allenamento psicologico specializzati.</p>
              </RevealAnimation>
            </div>
          </div>
        </section>
        
        <ProgramsSection 
          title="Programmi"
          subtitle="Percorsi metodologici personalizzati in base alle tue esigenze specifiche"
          programs={methodologyPrograms}
          className="bg-ath-gray"
        />
        
        <ProgramsSection 
          title="Programmi Specializzati"
          subtitle="Opzioni di allenamento aggiuntive per completare il tuo sviluppo"
          programs={additionalPrograms}
        />
        
        <AboutSection 
          title="Il Vantaggio ATH"
          description={
            <div className="space-y-4">
              <p>
                Ciò che distingue ATH è la nostra integrazione di tecnologia all'avanguardia con competenze di coaching di livello mondiale. Il nostro sistema VICKI cattura e analizza oltre 70 parametri delle tue prestazioni tennistiche, consentendo ai nostri coach di fornire un allenamento altamente personalizzato.
              </p>
              <p>
                Questo approccio basato sui dati elimina le congetture e garantisce che ogni minuto del tuo allenamento sia ottimizzato per il massimo miglioramento. Che tu sia un principiante o un giocatore d'élite, la nostra metodologia si adatta alle tue esigenze e obiettivi unici.
              </p>
              <p>
                Unisciti alla rivoluzione nell'allenamento tennistico e sperimenta i risultati che hanno reso ATH la scelta di giocatori ricreativi e campioni.
              </p>
            </div>
          }
          image="https://images.unsplash.com/photo-1531315396756-905d68d21b56"
          buttons={[
            { text: 'PRENOTA UNA PROVA', href: '/contact' }
          ]}
          reversed={true}
        />
        
        <section className="py-20 px-6 lg:px-10 bg-ath-gray">
          <div className="max-w-7xl mx-auto">
            <RevealAnimation>
              <h2 className="text-3xl md:text-4xl font-display text-center mb-4">Prezzi Programmi</h2>
            </RevealAnimation>
            
            <RevealAnimation delay={100}>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
                Offriamo opzioni di prezzo flessibili per adattarsi a diverse esigenze e impegni.
              </p>
            </RevealAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <RevealAnimation delay={150} className="bg-white p-8 flex flex-col shadow-sm">
                <h3 className="text-xl font-medium mb-4">Abbonamento Mensile</h3>
                <div className="text-3xl font-bold mb-2">€250<span className="text-sm font-normal">/mese</span></div>
                <p className="text-gray-600 mb-6">Accesso alle sessioni di allenamento di gruppo e alle strutture.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>3 sessioni di gruppo a settimana</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Analisi delle prestazioni di base</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Accesso al centro fitness</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto px-6 py-3 bg-black text-white text-center hover:bg-opacity-90 transition-all">
                  ISCRIVITI ORA
                </Link>
              </RevealAnimation>
              
              <RevealAnimation delay={200} className="bg-white p-8 flex flex-col shadow-md relative">
                <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 text-sm">
                  POPOLARE
                </div>
                <h3 className="text-xl font-medium mb-4">Abbonamento Premium</h3>
                <div className="text-3xl font-bold mb-2">€450<span className="text-sm font-normal">/mese</span></div>
                <p className="text-gray-600 mb-6">Allenamento avanzato con attenzione personalizzata.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>5 sessioni di gruppo a settimana</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>2 sessioni di coaching privato mensili</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Analisi avanzata delle prestazioni</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Accesso completo a tutte le strutture</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto px-6 py-3 bg-black text-white text-center hover:bg-opacity-90 transition-all">
                  ISCRIVITI ORA
                </Link>
              </RevealAnimation>
              
              <RevealAnimation delay={250} className="bg-white p-8 flex flex-col shadow-sm">
                <h3 className="text-xl font-medium mb-4">Abbonamento Elite</h3>
                <div className="text-3xl font-bold mb-2">€950<span className="text-sm font-normal">/mese</span></div>
                <p className="text-gray-600 mb-6">Programma completo per giocatori seri.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Sessioni di gruppo illimitate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Coaching privato settimanale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Piano di sviluppo personalizzato</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Sessioni di coaching mentale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Supporto per i tornei</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto px-6 py-3 bg-black text-white text-center hover:bg-opacity-90 transition-all">
                  ISCRIVITI ORA
                </Link>
              </RevealAnimation>
            </div>
          </div>
        </section>
        
        <ContactSection 
          title="Pronto a Iniziare?"
          subtitle="Contattaci per saperne di più sui nostri programmi o per pianificare una valutazione."
          address="Via del Tennis 123, 20873 Rodano (MI)"
          phone="+39 02 1234567"
          email="info@ath-tennis.it"
        />
        
        <JoinRevolutionSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Programs;
