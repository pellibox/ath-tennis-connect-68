
import { Program } from './types';

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
    vickiPowered: true,
    vickiMonitoringLevel: 'advanced'
  },
  {
    id: '10',
    title: 'Private Personal Coaching (13+ anni)',
    description: 'Sessioni di allenamento personalizzate con maestro e sparring dedicati, disponibili solo su prenotazione.',
    image: 'https://images.unsplash.com/photo-1588453251771-cd919ff14bee?q=80&w=2070&auto=format&fit=crop',
    vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
    link: '/programs/private',
    features: [
      'Sessioni one-to-one con maestro certificato',
      'Sparring professionale incluso (minimo 2.8 FIT o di categoria pari o superiore all\'atleta)',
      'Analisi dettagliata della tecnica con VICKI™ in modalità Elite o Advanced',
      'Focus su obiettivi specifici e correzioni in tempo reale',
      'Disponibile solo su prenotazione (soggetto a disponibilità)',
      'Riservato ad atleti dai 13 anni in su'
    ],
    vickiPowered: true,
    vickiMonitoringLevel: 'elite'
  },
  {
    id: '12',
    title: 'Lezioni Private',
    description: 'Lezioni individuali o in piccoli gruppi (max 2 allievi) con un maestro certificato.',
    image: 'https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?q=80&w=2035&auto=format&fit=crop',
    vimeoEmbed: '<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Private Lessons"></iframe></div>',
    link: '/programs/personal',
    features: [
      'Lezioni individuali o in piccoli gruppi (max 2 allievi)',
      'Maestro certificato dedicato',
      'Monitoraggio e analisi VICKI™ disponibile su richiesta',
      'Prezzo personalizzato in base alla frequenza e alle specifiche richieste',
      'Disponibile su prenotazione'
    ],
    vickiOnRequest: true,
    vickiMonitoringLevel: 'standard'
  }
];
