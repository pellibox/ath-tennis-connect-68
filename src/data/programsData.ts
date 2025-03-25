// Program data types
export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  vimeoEmbed?: string;
  link: string;
  features?: string[];
  vickiPowered?: boolean;
  vickiOnRequest?: boolean;
  vickiCustomBadge?: string;
}

export interface ProgramCategory {
  id: string;
  title: string;
  programs: Program[];
}

// Junior Programs
export const juniorPrograms: Program[] = [
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
    vickiCustomBadge: 'Vicki™ report and stream'
  }
];

// Elite Programs
export const elitePrograms: Program[] = [
  {
    id: '2',
    title: 'Agonista Performance (13+ anni)',
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
    vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596901?h=2ac5605207&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Male Professional"></iframe></div>',
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
    vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068785493?h=fe90d50dae&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Performance Analysis"></iframe></div>',
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

// Adult Programs
export const adultPrograms: Program[] = [
  {
    id: '6',
    title: 'Amatori',
    description: 'Percorsi flessibili per giocatori amatoriali che vogliono migliorare le proprie capacità.',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c990c4b?q=80&w=2070&auto=format&fit=crop',
    vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788229?h=5f3c14e5ec&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Amatori"></iframe></div>',
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

// Summer Camps
export const summerCamps: Program[] = [
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

// Coach Programs
export const coachPrograms: Program[] = [
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

// Program Categories
export const programCategories: ProgramCategory[] = [
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
