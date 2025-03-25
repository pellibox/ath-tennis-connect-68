
import { Program } from './types';

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
      'Supporto per genitori con report dettagliati e indicazioni sul potenziale',
      'Analisi iniziale completa inclusa nel programma',
      'Possibilità di accesso dal programma SAT dopo valutazione specifica'
    ],
    vickiPowered: true,
    vickiMonitoringLevel: 'basic'
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
    vickiPowered: true,
    vickiMonitoringLevel: 'standard'
  },
  {
    id: '5',
    title: 'Genitore/Tutor (Giovani e Junior Agonisti 6-18 anni)',
    description: 'Sì, abbiamo un programma anche per te! Per aiutare anche i genitori a supportare correttamente l\'atleta nel suo percorso formativo attraverso informazioni e coinvolgimento nello sviluppo del giovane atleta.',
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
      'Filtraggio automatico dei dati per evitare interpretazioni errate o fuorvianti',
      'Programma creato da mental coach specializzati con momenti di formazione durante l\'anno',
      'Incluso in tutti i programmi Elite e Junior'
    ],
    vickiCustomBadge: 'Vicki™ report and stream'
  }
];
