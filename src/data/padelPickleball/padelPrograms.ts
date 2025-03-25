
import { Program } from './types';

export const padelPrograms: Program[] = [
  {
    id: 'padel-basic',
    title: 'Padel Base',
    description: 'Programma introduttivo per principianti e giocatori occasionali che vogliono imparare le basi del Padel.',
    image: 'https://images.unsplash.com/photo-1617339860293-ebb29552886d?q=80&w=2070&auto=format&fit=crop',
    link: '/padel-pickleball#padel-basic',
    features: [
      'Lezioni in piccoli gruppi (max 4 persone)',
      'Introduzione alle regole e alla tecnica di base',
      'Focus sui colpi fondamentali e posizionamento in campo',
      'Sessioni pratiche con match guidati',
      'Feedback personalizzato dai coach'
    ],
    vickiOnRequest: true,
    vickiMonitoringLevel: 'basic'
  },
  {
    id: 'padel-advanced',
    title: 'Padel Avanzato',
    description: 'Programma completo per giocatori di livello intermedio e avanzato che vogliono migliorare le proprie capacità tecniche e tattiche.',
    image: 'https://images.unsplash.com/photo-1627231335228-400a6c957979?q=80&w=2070&auto=format&fit=crop',
    link: '/padel-pickleball#padel-advanced',
    features: [
      'Lezioni in piccoli gruppi (max 3 persone)',
      'Analisi video avanzata con tecnologia VICKI™',
      'Strategie di gioco avanzate e tattiche di coppia',
      'Tecniche per sfruttare le pareti in modo efficace',
      'Preparazione fisica specifica per il Padel',
      'Sessioni di match con analisi post-partita'
    ],
    vickiPowered: true,
    vickiMonitoringLevel: 'advanced'
  }
];
