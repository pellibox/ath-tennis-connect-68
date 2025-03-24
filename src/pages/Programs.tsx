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
import VickiPoweredBadge from '@/components/VickiPoweredBadge';

const Programs = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [showAllPrograms, setShowAllPrograms] = useState(false);
  const [logoYOffset, setLogoYOffset] = useState<number>(0);
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  
  useEffect(() => {
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      setLogoYOffset(scrollY * 0.2);
      
      const fadeThreshold = 100;
      const fadeOutBy = 300;
      
      if (scrollY > fadeThreshold) {
        const opacity = Math.max(0, 1 - (scrollY - fadeThreshold) / (fadeOutBy - fadeThreshold));
        setLogoOpacity(opacity);
      } else {
        setLogoOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
      ],
      vickiPowered: true
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
      ],
      vickiPowered: true
    },
    {
      id: '5',
      title: 'Genitore/Tutor (Giovani e Junior Agonisti 6-18 anni)',
      description: 'Supporto informativo e coinvolgimento nel percorso di sviluppo del giovane atleta.',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop',
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068629360?h=46b5c52b31&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
      link: '/programs/parent',
      features: [
        'Accesso a report semplici e leggibili, con dati tecnici, fisici e mentali',
        'Possibilità di seguire in streaming allenamenti e partite',
        'Aggiornamenti regolari sull\'evoluzione tecnica e psico-fisica del ragazzo/a',
        'Canali diretti con il coach per ricevere feedback chiari e condividere obiettivi',
        'Analisi statistiche semplificate con visione d\'insieme dell\'andamento',
        'Supporto pratico per accompagnare il percorso sportivo senza pressioni inutili',
        'Filtraggio automatico dei dati per evitare interpretazioni errate o fuorvianti'
      ],
      vickiOnRequest: true
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
      ],
      vickiPowered: true
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
      ],
      vickiPowered: true
    },
    {
      id: '9',
      title: 'Performance Analysis',
      description: 'Analisi completa del gioco con tecnologia avanzata e feedback personalizzato.',
      image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop',
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068785493?h=fe90d50dae&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
      link: '/programs/analysis',
      features: [
        'Analisi biomeccanica completa',
        'Heatmap e pattern di spostamento',
        'Statistiche avanzate di gioco',
        'Report dettagliato con raccomandazioni'
      ],
      vickiPowered: true
    }
  ];

  const adultPrograms = [
    {
      id: '6',
      title: 'Amatori',
      description: 'Percorsi flessibili per giocatori amatoriali che vogliono migliorare le proprie capacità.',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c990c4b?q=80&w=2070&auto=format&fit=crop',
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788229?h=5f3c14e5ec&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
      link: '/programs/amateur',
      features: [
        'Allenamento personalizzato anche su base occasionale',
        'Lezioni singole o pacchetti con analisi tecnica semplificata',
        'Clinics su specifici aspetti (servizio, spostamenti, colpi)',
        'Affitto campi con tecnologia attiva (per analisi post-sessione)',
        'Percorsi di miglioramento progressivo senza sovraccarico',
        'Report leggibili con focus su controllo, postura e miglioramenti visibili'
      ],
      vickiOnRequest: true
    }
  ];

  const summerCamps = [
    {
      id: '8',
      title: 'Summer Camps',
      description: 'Programmi intensivi di 1-4 settimane per giocatori di tutte le età e livelli.',
      image: 'https://images.unsplash.com/photo-1544298621-35a989e4e54a?q=80&w=2070&auto=format&fit=crop',
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068835737?h=f0a05fef01&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
      link: '/programs/camps',
      features: [
        'Programmi per diverse fasce d\'età',
        'Allenamento intensivo giornaliero',
        'Attività complementari e team building',
        'Analisi tecnica con sistema VICKI'
      ],
      vickiOnRequest: true
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
      ],
      vickiPowered: true
    },
    {
      id: '10',
      title: 'Lezioni Private',
      description: 'Sessioni di allenamento personalizzate con coach esperti e feedback immediato tramite VICKI™.',
      image: 'https://images.unsplash.com/photo-1588453251771-cd919ff14bee?q=80&w=2070&auto=format&fit=crop',
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
      link: '/programs/private',
      features: [
        'Sessioni one-to-one con coach certificati',
        'Analisi dettagliata della tecnica con VICKI™',
        'Focus su obiettivi specifici',
        'Opzioni per singole lezioni o pacchetti'
      ],
      vickiPowered: true
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
    <div className="flex flex-col min-h-screen relative">
      <div 
        className="fixed top-[calc(25%-100px)] left-1/2 transform -translate-x-1/2 z-50 w-40 h-40 pointer-events-none transition-opacity duration-300 flex justify-center"
        style={{
          transform: `translate(-50%, -${logoYOffset}px)`,
          opacity: logoOpacity
        }}
      >
        <Logo 
          onDarkBackground={true} 
          className="w-full h-full"
        />
      </div>
      
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
          <div dangerouslySetInnerHTML={{ __html: getVimeoEmbed() }} />
        </div>
        
        <div className="w-full bg-black py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white text-xl md:text-2xl font-swiss uppercase mb-2">
              PROGRAMMI:
            </h2>
            <p className="text-white text-xl md:text-2xl opacity-90 font-swiss drop-shadow-md">
              Approccio metodologico unico e personalizzato per ogni profilo di giocatore
            </p>
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
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
                I corsi seguono una programmazione annuale. I programmi agonistici si sviluppano su 48 settimane, mentre i corsi giovanili e propedeutici seguono un calendario su 40 settimane.
              </p>
            </RevealAnimation>
            
            <RevealAnimation delay={120}>
              <h3 className="text-2xl font-display text-center mb-8">Agonisti</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
                I percorsi agonistici sono suddivisi per intensità settimanale. Includono attività tecnica sul campo e preparazione atletica.
              </p>
            </RevealAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
              <RevealAnimation delay={150} className="bg-white p-8 flex flex-col shadow-sm relative">
                <VickiPoweredBadge logoOnly small className="absolute top-2 right-2" />
                <h3 className="text-xl font-medium mb-4">Agonisti - 4 volte a settimana</h3>
                <div className="text-3xl font-bold mb-2">€6.500<span className="text-sm font-normal">/anno</span></div>
                <p className="text-gray-600 mb-6">Programma intensivo con allenamenti 4 volte a settimana.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>4 sessioni di tennis da 1,5 ore (6 ore settimanali)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>4 sessioni di preparazione atletica da 1,5 ore (6 ore settimanali)</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto px-6 py-3 bg-black text-white text-center hover:bg-opacity-90 transition-all">
                  CONTATTACI
                </Link>
              </RevealAnimation>
              
              <RevealAnimation delay={200} className="bg-white p-8 flex flex-col shadow-sm relative">
                <VickiPoweredBadge logoOnly small className="absolute top-2 right-2" />
                <h3 className="text-xl font-medium mb-4">Agonisti - 3 volte a settimana</h3>
                <div className="text-3xl font-bold mb-2">€5.000<span className="text-sm font-normal">/anno</span></div>
                <p className="text-gray-600 mb-6">Programma avanzato con allenamenti 3 volte a settimana.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>3 sessioni di tennis da 1,5 ore (4,5 ore settimanali)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>3 sessioni di preparazione atletica da 1,5 ore (4,5 ore settimanali)</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto px-6 py-3 bg-black text-white text-center hover:bg-opacity-90 transition-all">
                  CONTATTACI
                </Link>
              </RevealAnimation>
              
              <RevealAnimation delay={250} className="bg-white p-8 flex flex-col shadow-sm relative">
                <VickiPoweredBadge logoOnly small className="absolute top-2 right-2" />
                <h3 className="text-xl font-medium mb-4">Agonisti - 2 volte a settimana</h3>
                <div className="text-3xl font-bold mb-2">€4.000<span className="text-sm font-normal">/anno</span></div>
                <p className="text-gray-600 mb-6">Programma base per agonisti con 2 allenamenti settimanali.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>2 sessioni di tennis da 1,5 ore (3 ore settimanali)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>2 sessioni di preparazione atletica da 1,5 ore (3 ore settimanali)</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto px-6 py-3 bg-black text-white text-center hover:bg-opacity-90 transition-all">
                  CONTATTACI
                </Link>
              </RevealAnimation>
              
              <RevealAnimation delay={275} className="bg-white p-8 flex flex-col shadow-sm relative">
                <div className="absolute top-0 right-0 bg-ath-clay text-white px-4 py-1 text-sm">
                  VICKI™
                </div>
                <VickiPoweredBadge logoOnly small className="absolute top-8 right-2" />
                <h3 className="text-xl font-medium mb-4">Agonisti Elite - 5 volte a settimana</h3>
                <div className="text-3xl font-bold mb-2">€7.500<span className="text-sm font-normal">/anno</span></div>
                <p className="text-gray-600 mb-6">Programma elite con analisi avanzata Vicki™.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>5 sessioni di tennis da 1,5 ore (7,5 ore settimanali)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>5 sessioni di preparazione atletica da 1,5 ore (7,5 ore settimanali)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Analisi Vicki™ completa su tutti gli allenamenti</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto px-6 py-3 bg-black text-white text-center hover:bg-opacity-90 transition-all">
                  CONTATTACI
                </Link>
              </RevealAnimation>
              
              <RevealAnimation delay={300} className="bg-white p-8 flex flex-col shadow-md relative">
                <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 text-sm">
                  ELITE
                </div>
                <VickiPoweredBadge logoOnly small className="absolute top-8 right-2" />
                <h3 className="text-xl font-medium mb-4">Performance Full Time</h3>
                <div className="text-3xl font-bold mb-2">€15.000<span className="text-sm font-normal">/anno</span></div>
                <p className="text-gray-600 mb-6">Programma completo per agonisti professionisti.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>5 sessioni tennis mattina + 5 pomeriggio da 2 ore (20 ore settimanali)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>7 sessioni di preparazione atletica da 1,5 ore (10,5 ore settimanali)</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto px-6 py-3 bg-black text-white text-center hover:bg-opacity-90 transition-all">
                  CONTATTACI
                </Link>
              </RevealAnimation>
            </div>
            
            <RevealAnimation delay={350}>
              <h3 className="text-2xl font-display text-center mb-8">Settore Giovanile</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
                I corsi giovanili sono orientati all'apprendimento tecnico, allo sviluppo motorio e al gioco.
              </p>
            </RevealAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <RevealAnimation delay={400} className="bg-white p-8 flex flex-col shadow-sm relative">
                <VickiPoweredBadge logoOnly small className="absolute top-2 right-2" />
                <h3 className="text-xl font-medium mb-4">Scuola SIT (Selezione e Individuazione Talenti)</h3>
                <div className="text-3xl font-bold mb-2">€950<span className="text-sm font-normal">/anno</span></div>
                <p className="text-gray-600 mb-6">Programma specializzato per l'identificazione precoce dei talenti tennistici.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>1 sessione di tennis da 1 ora a settimana</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>2 sessioni di preparazione atletica da 1 ora a settimana</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto px-6 py-3 bg-black text-white text-center hover:bg-opacity-90 transition-all">
                  CONTATTACI
                </Link>
              </RevealAnimation>
              
              <RevealAnimation delay={450} className="bg-white p-8 flex flex-col shadow-sm relative">
                <h3 className="text-xl font-medium mb-4">Scuola SAT - Propedeutico (sede di Rodano)</h3>
                <div className="text-3xl font-bold mb-2">€500<span className="text-sm font-normal">/anno</span></div>
                <p className="text-gray-600 mb-6">Percorso introduttivo per giovani atleti.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>1 sessione di tennis da 1 ora a settimana</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>1 sessione di preparazione atletica da 30 minuti a settimana</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto px-6 py-3 bg-black text-white text-center hover:bg-opacity-90 transition-all">
                  CONTATTACI
                </Link>
              </RevealAnimation>
            </div>
            
            <RevealAnimation delay={500}>
              <h3 className="text-2xl font-display text-center mb-8">Personal Training</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
                Percorsi individuali per migliorare aspetti tecnici specifici.
              </p>
            </RevealAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <RevealAnimation delay={550} className="bg-white p-8 flex flex-col shadow-sm relative">
                <VickiPoweredBadge logoOnly small className="absolute top-2 right-2" />
                <h3 className="text-xl font-medium mb-4">Personal Training (under 13-18)</h3>
                <div className="text-3xl font-bold mb-2">€2.000<span className="text-sm font-normal">/anno</span></div>
                <p className="text-gray-600 mb-6">Programma di allenamento personalizzato per giovani talenti.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>1 sessione di tennis da 1 ora a settimana</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto px-6 py-3 bg-black text-white text-center hover:bg-opacity-90 transition-all">
                  CONTATTACI
                </Link>
              </RevealAnimation>
              
              <RevealAnimation delay={600} className="bg-white p-8 flex flex-col shadow-sm relative">
                <VickiPoweredBadge logoOnly small className="absolute top-2 right-2" />
                <h3 className="text-xl font-medium mb-4">Private Personal Training (su richiesta)</h3>
                <div className="text-2xl font-bold mb-2">Prezzo su richiesta</div>
                <p className="text-gray-600 mb-6">Sessioni private completamente personalizzate.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>1 sessione di tennis da 1 ora a settimana</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Programma adattato alle esigenze individuali</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto px-6 py-3 bg-black text-white text-center hover:bg-opacity-90 transition-all">
                  CONTATTACI
                </Link>
              </RevealAnimation>
            </div>
            
            <RevealAnimation delay={650}>
              <h3 className="text-2xl font-display text-center mb-8">Adulti e Universitari</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-8">
                Corsi pensati per adulti e studenti universitari, anche con scuola online.
              </p>
            </RevealAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <RevealAnimation delay={700} className="bg-white p-8 flex flex-col shadow-sm relative">
                <VickiPoweredBadge logoOnly small className="absolute top-2 right-2" />
                <h3 className="text-xl font-medium mb-4">Adult Training</h3>
                <div className="text-3xl font-bold mb-2">€700<span className="text-sm font-normal">/anno</span></div>
                <p className="text-gray-600 mb-6">Programma per adulti che vogliono migliorare il proprio tennis.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>1 sessione di tennis da 1 ora a settimana</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto px-6 py-3 bg-black text-white text-center hover:bg-opacity-90 transition-all">
                  CONTATTACI
                </Link>
              </RevealAnimation>
              
              <RevealAnimation delay={750} className="bg-white p-8 flex flex-col shadow-sm relative">
                <h3 className="text-xl font-medium mb-4">Settore Universitari / Scuole Online</h3>
                <div className="text-3xl font-bold mb-2">€1.000<span className="text-sm font-normal">/anno</span></div>
                <p className="text-gray-600 mb-6">Programma flessibile per studenti universitari.</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>1 sessione a settimana da 1,5 ore</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span>Programma flessibile</span>
                  </li>
                </ul>
                <Link to="/contact" className="mt-auto px-6 py-3 bg-black text-white text-center hover:bg-opacity-90 transition-all">
                  CONTATTACI
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
