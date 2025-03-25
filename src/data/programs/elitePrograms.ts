
import { Program } from './types';

// Elite Programs
export const elitePrograms: Program[] = [
  {
    id: '2',
    title: 'Agonista Performance (13+ anni)',
    description: 'Programma completo per giovani atleti che vogliono competere a livello agonistico.',
    image: '/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png',
    vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596935?h=222acb69b2&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
    link: '/programs/young-athletes',
    features: [
      'Analisi in tempo reale di tecnica, tattica, parametri mentali e fisici',
      'Feedback continuo (durante e dopo la sessione)',
      'Database personale per pianificare il calendario tornei',
      'Monitoraggio carico di lavoro e progressi',
      'Prevenzione infortuni grazie all\'identificazione automatica delle aree critiche',
      'Percorsi personalizzati in base allo sviluppo fisico, biotipo e stile di gioco',
      'Integrazione tra valutazioni tecniche, fisiche, mediche e mentali',
      'Coordinamento tra coach, preparatore, mental coach, medico'
    ],
    vickiPowered: true,
    vickiMonitoringLevel: 'advanced'
  }
];
