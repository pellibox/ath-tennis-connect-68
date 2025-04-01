
import { Program } from './types';

// Adult Programs
export const adultPrograms: Program[] = [
  {
    id: '6',
    title: 'Amatori',
    description: 'Percorsi flessibili per giocatori amatoriali che vogliono migliorare le proprie capacità.',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c990c4b?q=80&w=2070&auto=format&fit=crop',
    vimeoEmbed: '<iframe src="https://player.vimeo.com/video/1068788229?h=5f3c14e5ec&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe><script src="https://player.vimeo.com/api/player.js"></script>',
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
