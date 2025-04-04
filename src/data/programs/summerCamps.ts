
import { Program } from './types';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';

// Summer Camps
export const summerCamps: Program[] = [
  {
    id: '8',
    title: 'Clinics e Summer Camps',
    description: 'Programmi intensivi di 1-4 settimane per giocatori di tutte le età e livelli.',
    image: 'https://images.unsplash.com/photo-1544298621-35a989e4e54a?q=80&w=2070&auto=format&fit=crop',
    vimeoEmbed: createStandardVimeoEmbed('1071002692?h=a2668fa56d', true, true, true),
    link: '/programs/camps',
    features: [
      'Programmi per diverse fasce d\'età',
      'Allenamento intensivo giornaliero',
      'Attività complementari e team building',
      'Analisi tecnica con sistema VICKI',
      'Per gli agonisti: 1,5 ore di atletica per sessione'
    ],
    vickiOnRequest: true,
    vickiMonitoringLevel: 'core'
  }
];
