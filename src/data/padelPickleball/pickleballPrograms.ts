
import { Program } from './types';

export const pickleballPrograms: Program[] = [
  {
    id: 'pickleball-beginner',
    title: 'Pickleball Principianti',
    description: 'Programma introduttivo per chi si avvicina per la prima volta al Pickleball, con focus sulle regole e tecniche di base.',
    image: 'https://images.unsplash.com/photo-1622279488428-3b653259187b?q=80&w=2070&auto=format&fit=crop',
    link: '/padel-pickleball#pickleball-beginner',
    features: [
      'Lezioni in piccoli gruppi (max 4 persone)',
      'Introduzione alle regole del gioco',
      'Tecniche di base: dink, serve, volley',
      'Attrezzatura inclusa per i principianti',
      'Sessioni pratiche con partite guidate'
    ],
    vickiOnRequest: true,
    vickiMonitoringLevel: 'basic'
  },
  {
    id: 'pickleball-advanced',
    title: 'Pickleball Avanzato',
    description: 'Programma intensivo per giocatori con esperienza che vogliono migliorare le proprie capacità tecniche e strategiche.',
    image: 'https://images.unsplash.com/photo-1622736319422-d3741b3ffce0?q=80&w=2070&auto=format&fit=crop',
    link: '/padel-pickleball#pickleball-advanced',
    features: [
      'Lezioni in piccoli gruppi (max 3 persone)',
      'Tecniche avanzate: third shot drop, colpi strategici',
      'Strategie di gioco in singolo e doppio',
      'Analisi video personalizzata',
      'Preparazione fisica specifica per il Pickleball',
      'Sessioni di match con feedback dettagliato'
    ],
    vickiPowered: true,
    vickiMonitoringLevel: 'standard'
  }
];
