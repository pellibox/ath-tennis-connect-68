
import { Program } from './types';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';

export const touchTennisPrograms: Program[] = [
  {
    id: '1',
    title: 'TouchTennis Base',
    description: 'Programma introduttivo al TouchTennis, ideale per principianti e per chi vuole scoprire questo sport dinamico e divertente.',
    image: '/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png',
    vimeoEmbed: createStandardVimeoEmbed('867339842', true, true, true), // Using known working video ID
    link: '/programs/touchtennis-base',
    features: [
      'Introduzione ai fondamentali del TouchTennis',
      'Allenamenti di gruppo con massimo 4 partecipanti',
      'Sessioni di gioco guidate',
      'Adatto a tutte le età e livelli di esperienza',
      '2 sessioni settimanali da 60 minuti'
    ],
    vickiPowered: true,
    vickiMonitoringLevel: 'basic'
  },
  {
    id: '2',
    title: 'TouchTennis Avanzato',
    description: 'Programma per giocatori con esperienza nel TouchTennis che vogliono migliorare le proprie abilità tecniche e tattiche.',
    image: '/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png',
    vimeoEmbed: createStandardVimeoEmbed('867339842', true, true, true), // Using known working video ID
    link: '/programs/touchtennis-avanzato',
    features: [
      'Allenamento tecnico avanzato',
      'Sviluppo di strategie di gioco specifiche',
      'Sessioni di match play con analisi',
      'Preparazione per tornei e competizioni',
      '3 sessioni settimanali da 90 minuti'
    ],
    vickiPowered: true,
    vickiMonitoringLevel: 'advanced'
  },
  {
    id: '3',
    title: 'TouchTennis Junior (8-14 anni)',
    description: 'Programma specifico per giovani atleti che vogliono approcciarsi al TouchTennis in modo divertente e strutturato.',
    image: '/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png',
    vimeoEmbed: createStandardVimeoEmbed('867339842', true, true, true), // Using known working video ID
    link: '/programs/touchtennis-junior',
    features: [
      'Metodologia adattata per giovani atleti',
      'Focus su coordinazione e sviluppo motorio',
      'Approccio ludico all\'apprendimento',
      'Piccoli gruppi per attenzione personalizzata',
      '2 sessioni settimanali da 60 minuti'
    ],
    vickiPowered: true,
    vickiMonitoringLevel: 'standard'
  }
];
