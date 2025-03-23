import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProgramsSection from '@/components/ProgramsSection';
import AboutSection from '@/components/AboutSection';
import RevealAnimation from '@/components/RevealAnimation';
import ContactSection from '@/components/ContactSection';
import { Link } from 'react-router-dom';

const Programs = () => {
  // Smooth scroll functionality
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Programs data with detailed features for each user profile
  const methodologyPrograms = [
    {
      id: '1',
      title: 'Agonista Junior',
      description: 'Programma completo per giovani atleti che vogliono competere a livello agonistico.',
      image: 'https://images.unsplash.com/photo-1551773148-efc73c5fdc70',
      link: '/programs/junior-competitive',
      features: [
        'Percorso tecnico-tattico personalizzato',
        'Valutazioni biomeccaniche periodiche',
        'Programma di prevenzione infortuni',
        'Analisi mentale e resilienza in partita',
        'Allenamento coordinazione e crescita fisica',
        'Gestione calendario agonistico',
        'Report evolutivi e storico prestazioni',
        'Programmi adattivi per fasi di sviluppo'
      ]
    },
    {
      id: '2',
      title: 'Professionista',
      description: 'Supporto completo per atleti professionisti con analisi avanzata e ottimizzazione della performance.',
      image: 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3',
      link: '/programs/professional',
      features: [
        'Programmazione cicli tecnico-fisico-mentale',
        'Analisi predittiva e comparazione con storico',
        'Ottimizzazione biomeccanica (servizio, swing, postura)',
        'Integrazione con team tecnico, medico, atletico',
        'Report video con sovrapposizione dati',
        'Sessioni mirate su recupero e gestione carico'
      ]
    },
    {
      id: '3',
      title: 'Coach',
      description: 'Formazione avanzata e strumenti per allenatori che vogliono integrare la metodologia ATH.',
      image: 'https://images.unsplash.com/photo-1622279888158-c6a5e6c4587c',
      link: '/programs/coach',
      features: [
        'Training personalizzato per costruzione metodo',
        'Percorso di codifica del proprio approccio',
        'Accesso a strumenti VICKI in sede e da remoto',
        'Reportistica automatizzata per atleti seguiti',
        'Formazione continua in piattaforma',
        'Programma di monetizzazione metodo'
      ]
    },
    {
      id: '4',
      title: 'Genitore / Tutor',
      description: 'Supporto informativo e coinvolgimento nel percorso di sviluppo dell\'atleta.',
      image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa',
      link: '/programs/parent',
      features: [
        'Percorso informativo sullo sviluppo dell\'atleta',
        'Accesso a report filtrati dal coach',
        'Visualizzazione video-allenamenti con spiegazione',
        'Supporto alla scelta dei programmi in base all\'evoluzione',
        'Comunicazione tecnico-pedagogica con il team'
      ]
    },
    {
      id: '5',
      title: 'Amatore',
      description: 'Percorsi flessibili per giocatori amatoriali che vogliono migliorare le proprie capacità.',
      image: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece',
      link: '/programs/amateur',
      features: [
        'Percorso personalizzato per obiettivi specifici',
        'Lezioni singole o cicli brevi',
        'Clinics tematici (servizio, spostamenti, colpi)',
        'Analisi base con heatmap e feedback tecnico',
        'Possibilità di affitto campo con tecnologia attiva',
        'Programma miglioramento progressivo senza pressione'
      ]
    }
  ];

  // Other programs data (keeping some original programs)
  const additionalPrograms = [
    {
      id: '6',
      title: 'Summer Camps',
      description: 'Programmi intensivi di 1-4 settimane per giocatori di tutte le età e livelli.',
      image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff',
      link: '/programs/camps',
      features: [
        'Programmi per diverse fasce d\'età',
        'Allenamento intensivo giornaliero',
        'Attività complementari e team building',
        'Analisi tecnica con sistema VICKI'
      ]
    },
    {
      id: '7',
      title: 'Performance Analysis',
      description: 'Analisi completa del gioco con tecnologia avanzata e feedback personalizzato.',
      image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29',
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
          imageSrc="https://images.unsplash.com/photo-1464278533981-50e57c2b7d1b"
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
                In ATH integriamo tecnologia avanzata con coaching esperto. Il nostro sistema proprietario monitora oltre 70 parametri della performance tennistica per fornire analisi dettagliate e programmi di allenamento personalizzati.
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
          title="Approccio Metodologico per Profilo Utente"
          subtitle="Scopri i nostri percorsi personalizzati in base alle tue esigenze"
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
                Ciò che distingue ATH è la nostra integrazione di tecnologia all'avanguardia con competenze di coaching di livello mondiale. Il nostro sofisticato sistema cattura e analizza oltre 70 parametri delle tue prestazioni tennistiche, consentendo ai nostri coach di fornire un allenamento altamente personalizzato.
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Programs;
