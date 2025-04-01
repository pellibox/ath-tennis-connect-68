
import { Program } from './types';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';

// Professional Programs
export const professionalPrograms: Program[] = [
  {
    id: '3',
    title: 'Professionisti',
    description: 'Supporto completo per atleti professionisti con analisi avanzata e ottimizzazione della performance.',
    image: '/lovable-uploads/53047a4d-087d-4e68-942b-d441b33bf6ab.png',
    vimeoEmbed: createStandardVimeoEmbed('1071006843', true, true, true),
    link: '/programs/professionals',
    features: [
      'Allenamento completamente personalizzato su tutti i fronti',
      'Collaborazione tra coach, preparatore, mental coach e medico',
      'Analisi biomeccanica e mentale avanzata in tempo reale',
      'Analisi predittiva e adattamento continuo via AI',
      'Supporto tecnico sia in sede che da remoto',
      'Gestione ottimale dei cicli di carico, recupero e picco forma',
      'Integrazione di parametri medici e biochimici per massimizzare la performance'
    ],
    vickiPowered: true,
    vickiMonitoringLevel: 'elite'
  }
];
