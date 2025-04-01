
import { Program } from './types';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';

// Adult Programs
export const adultPrograms: Program[] = [
  {
    id: '6',
    title: 'Amatori',
    description: 'Percorsi flessibili per giocatori amatoriali che vogliono migliorare le proprie capacità.',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c990c4b?q=80&w=2070&auto=format&fit=crop',
    vimeoEmbed: createStandardVimeoEmbed('1068788229?h=5f3c14e5ec', true, true, true),
    link: '/programs/amateur',
    features: [
      'Allenamento personalizzato anche su base occasionale',
      'Lezioni singole o pacchetti con analisi tecnica semplificata',
      'Clinics su specifici aspetti (servizio, spostamenti, colpi)',
      'Affitto campi con tecnologia attiva (per analisi post-sessione)',
      'Percorsi di miglioramento progressivo senza sovraccarico',
      'Report leggibili con focus su controllo, postura e miglioramenti visibili'
    ],
    vickiOnRequest: true,
    vickiMonitoringLevel: 'basic'
  }
];
