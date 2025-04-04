
import { Program } from './types';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';

export const touchTennisPrograms: Program[] = [
  {
    id: 'touchtennis-base',
    title: 'TouchTennis Base',
    description: 'Programma introduttivo al TouchTennis, ideale per principianti e per chi vuole scoprire questo sport dinamico e divertente.',
    image: '/lovable-uploads/touchtennis-icon.png',
    vimeoEmbed: createStandardVimeoEmbed('1071002692?h=a2668fa56d', true, true, true), 
    link: '/programs/touchtennis-base',
    features: [
      'Introduzione ai fondamentali del TouchTennis',
      'Allenamenti di gruppo con massimo 4 partecipanti',
      'Sessioni di gioco guidate',
      'Adatto a tutte le età e livelli di esperienza',
      '2 sessioni settimanali da 60 minuti'
    ],
    vickiPowered: true,
    vickiMonitoringLevel: 'essentials'
  },
  {
    id: 'touchtennis-avanzato',
    title: 'TouchTennis Avanzato',
    description: 'Programma per giocatori con esperienza nel TouchTennis che vogliono migliorare le proprie abilità tecniche e tattiche.',
    image: '/lovable-uploads/touchtennis-icon.png',
    vimeoEmbed: createStandardVimeoEmbed('1071002692?h=a2668fa56d', true, true, true),
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
    id: 'touchtennis-junior',
    title: 'TouchTennis Junior (8-14 anni)',
    description: 'Programma specifico per giovani atleti che vogliono approcciarsi al TouchTennis in modo divertente e strutturato.',
    image: '/lovable-uploads/touchtennis-icon.png',
    vimeoEmbed: createStandardVimeoEmbed('1071002692?h=a2668fa56d', true, true, true),
    link: '/programs/touchtennis-junior',
    features: [
      'Metodologia adattata per giovani atleti',
      'Focus su coordinazione e sviluppo motorio',
      'Approccio ludico all\'apprendimento',
      'Piccoli gruppi per attenzione personalizzata',
      '2 sessioni settimanali da 60 minuti'
    ],
    vickiPowered: true,
    vickiMonitoringLevel: 'core'
  }
];
