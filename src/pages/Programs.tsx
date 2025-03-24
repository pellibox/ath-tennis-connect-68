import { useEffect, useState } from 'react';
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
import { loadUserPreferences, UserGender, UserType } from '@/components/UserTypeSelector';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Programs = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [showAllPrograms, setShowAllPrograms] = useState(false);
  
  useEffect(() => {
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const getVimeoEmbed = () => {
    let videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596952?h=b7fa539b1c&autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Main Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    
    if (userGender === 'female') {
      videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/867339842?h=5ecc384219&autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      
      if (userType === 'professional') {
        videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596920?h=7f23339d4b&autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Professional"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      } 
      else if (userType === 'performance') {
        videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596969?h=9bbee986ef&autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Performance"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      }
    }
    
    if (userGender === 'male' && userType === 'professional') {
      videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596901?h=2ac5605207&autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Male Professional"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
    
    if (userType === 'coach') {
      videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068604198?h=07d9021fd2&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Coach"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
    
    if (userType === 'parent') {
      videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068629360?h=46b5c52b31&autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Parent"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
    
    return videoEmbed;
  };

  const juniorPrograms = [
    {
      id: '11',
      title: 'Scuola Individuazione Talenti (4-10 anni)',
      description: 'Programma specializzato per l\'identificazione precoce dei talenti tennistici tramite il sistema Vicki™ che monitora patterns e caratteristiche del piccolo talento.',
      image: 'https://images.unsplash.com/photo-1596463059283-da257325bab8?q=80&w=2070&auto=format&fit=crop',
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068618561?h=f1a4f80a91&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
      link: '/programs/talent-identification',
      features: [
        'Valutazione iniziale con sistema Vicki™ che monitora pattern motori e attitudinali',
        'Approccio ludico e divertente all\'apprendimento tecnico',
        'Monitoraggio dello sviluppo fisico e delle attitudini con parametri oggettivi',
        'Insegnamento dei fondamentali tecnici adattati all\'età',
        'Sviluppo della passione per il tennis e lo sport',
        'Percorsi personalizzati basati sulle caratteristiche individuali rilevate da Vicki™',
        'Supporto per genitori con report dettagliati e indicazioni sul potenziale'
      ]
    },
    {
      id: '1',
      title: 'Agonista Junior (6-12 anni)',
      description: 'Programma formativo per giovani atleti in fase di sviluppo tecnico e fisico.',
      image: 'https://images.unsplash.com/photo-1612458225454-41c3991c0c49?q=80&w=1973&auto=format&fit=crop',
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596987?h=c9dad61d03&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
      link: '/programs/junior-competitive',
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
    }
  ];

  const elitePrograms = [
    {
      id: '2',
      title: 'Agonista Junior (13-18 anni)',
      description: 'Programma completo per giovani atleti che vogliono competere a livello agonistico.',
      image: '/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png',
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596935?h=222acb69b2&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
      link: '/programs/young-athletes',
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
      id: '3',
      title: 'Professionisti',
      description: 'Supporto completo per atleti professionisti con analisi avanzata e ottimizzazione della performance.',
      image: '/lovable-uploads/53047a4d-087d-4e68-942b-d441b33bf6ab.png',
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596901?h=2ac5605207&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
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
    }
  ];

  const adultPrograms = [
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

  const summerCamps = [
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
    }
  ];

  const coachPrograms = [
    {
      id: '4',
      title: 'Coach / Allenatori / Club',
      description: 'Formazione avanzata e strumenti per allenatori che vogliono integrare la metodologia ATH e VICKI.',
      image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2069&auto=format&fit=crop',
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068604198?h=07d9021fd2&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
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
      id: '10',
      title: 'Lezioni Private',
      description: 'Sessioni di allenamento personalizzate con coach esperti e feedback immediato tramite VICKI™.',
      image: 'https://images.unsplash.com/photo-1588453251771-cd919ff14bee?q=80&w=2070&auto=format&fit=crop',
      link: '/programs/private-lessons',
      features: [
        'Sessioni one-to-one con coach certificati',
        'Analisi dettagliata della tecnica con VICKI™',
        'Focus su obiettivi specifici',
        'Opzioni per singole lezioni o pacchetti'
      ]
    }
  ];

  const programCategories = [
    {
      id: 'elite-program',
      title: 'Elite Program',
      programs: elitePrograms
    },
    {
      id: 'junior-program',
      title: 'Junior Program',
      programs: juniorPrograms
    },
    {
      id: 'coach-private',
      title: 'Coach & Private Lessons',
      programs: coachPrograms
    },
    {
      id: 'adult-training',
      title: 'Adult Training',
      programs: adultPrograms
    },
    {
      id: 'summer-camps',
      title: 'Summer Camps',
      programs: summerCamps
    }
  ];

  const getFilteredProgramCategories = () => {
    if (!userType || showAllPrograms) {
      return programCategories;
    }

    let filteredCategories = [];
    let relevantPrograms = [];

    switch (userType) {
      case 'junior':
        relevantPrograms = juniorPrograms;
        filteredCategories.push({
          id: 'junior-program',
          title: 'Junior Program',
          programs: juniorPrograms
        });
        break;
      case 'performance':
        const performancePrograms = elitePrograms.filter(p => p.id === '2');
        filteredCategories.push({
          id: 'performance-program',
          title: 'Performance Program',
          programs: performancePrograms
        });
        break;
      case 'professional':
        const professionalPrograms = elitePrograms.filter(p => p.id === '3');
        filteredCategories.push({
          id: 'professional-program',
          title: 'Professional Program',
          programs: professionalPrograms
        });
        break;
      case 'coach':
        filteredCategories.push({
          id: 'coach-program',
          title: 'Coach Program',
          programs: coachPrograms.filter(p => p.id === '4')
        });
        break;
      case 'parent':
        filteredCategories.push({
          id: 'parent-program',
          title: 'Genitore/Tutor Program',
          programs: juniorPrograms.filter(p => p.id === '5')
        });
        break;
    }

    return filteredCategories;
  };

  const getPersonalizedSubtitle = () => {
    if (!userType) {
      return "Approccio metodologico unico e personalizzato per ogni profilo di giocatore";
    }

    switch (userType) {
      case 'junior':
        return "Programmi specializzati per giovani tennisti in fase di sviluppo";
      case 'performance':
        return "Programmi avanzati per tennisti agonisti performance";
      case 'professional':
        return "Programmi elite per professionisti che cercano il massimo delle prestazioni";
      case 'coach':
        return "Programmi e strumenti avanzati per allenatori";
      case 'parent':
        return "Supporto e coinvolgimento per genitori di giovani atleti";
      default:
        return "Approccio metodologico unico e personalizzato per ogni profilo di giocatore";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Programmi ATH" 
            vimeoEmbed={getVimeoEmbed()}
            buttons={[
              { text: 'PRENOTA UNA PROVA', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          {/* Black banner with claim text - matching Method page style */}
          <div className="w-full bg-black py-8 relative" style={{ height: '200px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex flex-col items-center justify-center h-full">
                <Logo variant="default" onDarkBackground={true} className="mb-4" />
                <div className="flex items-center">
                  <h2 className="text-white text-lg font-display mr-3">PROGRAMMI:</h2>
                  <p className="text-white text-lg font-swiss max-w-3xl">
                    Approccio metodologico unico e personalizzato per ogni profilo di giocatore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <RevealAnimation>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl md:text-4xl font-display">Programmi basati sul Metodo ATH</h2>
                
                {userType && (
                  <Button 
                    variant="outline" 
                    onClick={() => setShowAllPrograms(!showAllPrograms)}
                    className="hidden md:block"
                  >
                    {showAllPrograms ? 'Mostra solo programmi rilevanti' : 'Vedi tutti i programmi'}
                  </Button>
                )}
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={100}>
              <div className="text-lg text-gray-600 max-w-3xl mb-6 space-y-4">
                <p>
                  Tutti i nostri programmi si basano sul metodo ATH, un sistema innovativo che integra tecnologia avanzata con coaching esperto. 
                  Il nostro approccio garantisce che ogni atleta, indipendentemente dal livello o dall'età, riceva un allenamento personalizzato 
                  basato su dati oggettivi e supportato da professionisti altamente qualificati.
                </p>
                
                {userType && (
                  <Button 
                    variant="outline" 
                    onClick={() => setShowAllPrograms(!showAllPrograms)}
                    className="md:hidden w-full mt-4"
                  >
                    {showAllPrograms ? 'Mostra solo programmi rilevanti' : 'Vedi tutti i programmi'}
                  </Button>
                )}
                
                <div className="mt-6">
                  <Link to="/method" className="inline-flex items-center text-ath-clay font-medium hover:underline">
                    Scopri di più sul Metodo ATH e il sistema VICKI™ →
                  </Link>
                </div>
              </div>
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
          title={userType && !showAllPrograms ? `Programmi per ${userType === 'coach' ? 'Coach' : 
                                    userType === 'parent' ? 'Genitori/Tutor' : 
                                    userType === 'professional' ? 'Professionisti' : 
                                    userType === 'performance' ? 'Agonisti Performance' : 
                                    'Junior'}` : "Programmi ATH"}
          subtitle={userType && !showAllPrograms ? 
                   `Soluzioni specifiche per ${userType === 'coach' ? 'allenatori' : 
                                   userType === 'parent' ? 'genitori e tutor' : 
                                   userType === 'professional' ? 'tennisti professionisti' : 
                                   userType === 'performance' ? 'agonisti di alto livello' : 
                                   'giovani tennisti'}` : 
                   "Percorsi metodologici personalizzati in base alle tue esigenze specifiche"}
          categories={getFilteredProgramCategories()}
          className="bg-ath-gray"
        />
        
        <AboutSection 
          title="Il Vantaggio ATH"
          description={
            <div className="space-y-4">
              <p>
                Ciò che distingue ATH è la nostra integrazione di tecnologia all'avanguardia con competenze di coaching di livello mondiale. Il nostro sistema VICKI™ cattura e analizza oltre 70 parametri delle tue prestazioni tennistiche, consentendo ai nostri coach di fornire un allenamento altamente personalizzato.
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
