import { Program } from './types';

export const juniorPrograms: Program[] = [
  {
    id: '11',
    titleKey: 'programs.junior.sit.title',
    title: 'SIT - Scuola Individuazione Talenti (6-10+ anni)',
    descriptionKey: 'programs.junior.sit.description',
    description: 'Programma specializzato per l\'identificazione precoce dei talenti tennistici tramite il sistema Vicki™ che monitora patterns e caratteristiche del piccolo talento.',
    image: 'https://images.unsplash.com/photo-1596463059283-da257325bab8?q=80&w=2070&auto=format&fit=crop',
    vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068618561?h=f1a4f80a91&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
    link: '/programs/talent-identification',
    featureKeys: [
      'programs.junior.sit.feature1',
      'programs.junior.sit.feature2',
      'programs.junior.sit.feature3',
      'programs.junior.sit.feature4',
      'programs.junior.sit.feature5',
      'programs.junior.sit.feature6',
      'programs.junior.sit.feature7',
      'programs.junior.sit.feature8',
      'programs.junior.sit.feature9'
    ],
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
    vickiMonitoringLevel: 'essentials'
  },
  {
    id: '1',
    titleKey: 'programs.junior.sat.title',
    title: 'SAT - Scuola Avviamento al Tennis (4-10+ anni)',
    descriptionKey: 'programs.junior.sat.description',
    description: 'Un viaggio entusiasmante alla scoperta del tennis, dove ogni bambino può esprimersi attraverso il gioco e il movimento.',
    image: 'https://images.unsplash.com/photo-1612458225454-41c3991c0c49?q=80&w=1973&auto=format&fit=crop',
    vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596987?h=c9dad61d03&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
    link: '/programs/sat',
    featureKeys: [
      'programs.junior.sat.feature1',
      'programs.junior.sat.feature2',
      'programs.junior.sat.feature3',
      'programs.junior.sat.feature4',
      'programs.junior.sat.feature5',
      'programs.junior.sat.feature6',
      'programs.junior.sat.feature7'
    ],
    features: [
      'Approccio ludico e inclusivo per introdurre i bambini al tennis',
      'Circuiti avventurosi che stimolano la coordinazione attraverso sfide adatte all\'età',
      'Giochi colorati e dinamici che introducono i movimenti fondamentali in modo naturale',
      'Ambiente positivo che promuove divertimento e socializzazione',
      'Tecnologia VICKI™ per un monitoraggio personalizzato dei progressi',
      'Giochi-test per adattare le attività alle caratteristiche di ciascun bambino',
      'Possibilità di upgrade al programma SIT dopo valutazione specifica'
    ],
    vickiPowered: true,
    vickiMonitoringLevel: 'essentials'
  },
  {
    id: '5',
    titleKey: 'programs.junior.parent.title',
    title: 'Genitore/Tutor (Giovani e Junior Agonisti 6-18 anni)',
    descriptionKey: 'programs.junior.parent.description',
    description: 'Un programma innovativo creato da mental coach specializzati per supportare i genitori e tutori di giovani tennisti nel loro ruolo fondamentale di accompagnamento sportivo.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop',
    vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068629360?h=46b5c52b31&autoplay=0&loop=1&title=0&byline=0&portrait=0&controls=0&background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
    link: '/programs/parent',
    featureKeys: [
      'programs.junior.parent.feature1',
      'programs.junior.parent.feature2',
      'programs.junior.parent.feature3',
      'programs.junior.parent.feature4',
      'programs.junior.parent.feature5',
      'programs.junior.parent.feature6',
      'programs.junior.parent.feature7',
      'programs.junior.parent.feature8'
    ],
    features: [
      'Supporto tecnologico: Report intuitivi, streaming di allenamenti e partite, analisi statistiche semplificate',
      'Formazione continua: 4 workshop formativi durante l\'anno e 2 incontri di gruppo con il mental coach',
      'Strumenti pratici: Guide alla comunicazione efficace, checklist pre-torneo, diario di bordo',
      'Competenze specifiche: Gestione delle emozioni legate alle competizioni, comunicazione costruttiva',
      'Comunità di supporto: Rete di genitori con esperienze simili, moderata da esperti del settore',
      'Accesso alla piattaforma Vicki™ per genitori con report e streaming',
      'Materiali educativi e risorse dedicate',
      'Incluso nei programmi Elite Performance e Elite Performance Full, €150/anno per tutti gli altri programmi'
    ],
    vickiCustomBadge: 'Vicki™ report and stream'
  }
];
