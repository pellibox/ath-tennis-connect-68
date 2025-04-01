
import { Program } from './types';

// Summer Camps
export const summerCamps: Program[] = [
  {
    id: '8',
    title: 'Clinics e Summer Camps',
    description: 'Programmi intensivi di 1-4 settimane per giocatori di tutte le età e livelli.',
    image: 'https://images.unsplash.com/photo-1544298621-35a989e4e54a?q=80&w=2070&auto=format&fit=crop',
    vimeoEmbed: '<iframe src="https://player.vimeo.com/video/1068835737?h=f0a05fef01&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe><script src="https://player.vimeo.com/api/player.js"></script>',
    link: '/programs/camps',
    features: [
      'Programmi per diverse fasce d\'età',
      'Allenamento intensivo giornaliero',
      'Attività complementari e team building',
      'Analisi tecnica con sistema VICKI',
      'Per gli agonisti: 1,5 ore di atletica per sessione'
    ],
    vickiOnRequest: true,
    vickiMonitoringLevel: 'standard'
  }
];
