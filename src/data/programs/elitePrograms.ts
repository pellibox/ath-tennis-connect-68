
import { Program } from './types';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';

export const elitePrograms: Program[] = [
  {
    id: '2',
    title: 'Elite Performance Full',
    description: 'Programma completo e immersivo per atleti con aspirazioni professionali.',
    image: '/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png',
    vimeoEmbed: createStandardVimeoEmbed('1071002692?h=a2668fa56d', true, true, true),
    link: '/programs/elite-full',
    features: [
      'Eccellenza Tecnica: Analisi biomeccanica dettagliata e feedback immediato',
      'Preparazione Atletica: Ottimizzazione degli spostamenti e dominanza fisica',
      'Forza Mentale: Gestione dello stress agonistico e reazione sotto pressione',
      'Tattica & Strategia: Piani partita personalizzati e adattamento tattico',
      '10 sessioni tennis + 7 atletica a settimana',
      'Supporto nutrizionale e psicologico',
      'Percorso collaudato con storici di successo dimostrabili'
    ],
    vickiMonitoringLevel: 'pro'
  },
  {
    id: '1',
    title: 'Elite Performance',
    description: 'Programma avanzato per atleti agonisti con obiettivi competitivi di alto livello.',
    image: '/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png',
    vimeoEmbed: createStandardVimeoEmbed('1071002692?h=a2668fa56d', true, true, true),
    link: '/programs/elite-performance',
    features: [
      'Eccellenza Tecnica: Analisi biomeccanica dettagliata di ogni colpo',
      'Preparazione Atletica: Monitoraggio costante e programmi personalizzati',
      'Forza Mentale: Sviluppo delle abilità cognitive e gestione dello stress',
      'Tattica & Strategia: Analisi del gioco avversario e piani partita personalizzati',
      '5 giorni a settimana, 40 settimane all\'anno',
      'Massimo 2 atleti per campo'
    ],
    vickiMonitoringLevel: 'pro'
  },
  {
    id: '3',
    title: 'Performance 2, 3 & 4 (11+ anni)',
    description: 'Programmi completi per giovani atleti dai 11 anni in su che vogliono sviluppare un percorso agonistico strutturato, con opzioni da 2 a 4 giorni settimanali, supportati dalla tecnologia VICKI™ per un allenamento personalizzato e mirato.',
    image: '/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png',
    vimeoEmbed: createStandardVimeoEmbed('1071002692?h=a2668fa56d', true, true, true),
    link: '/programs/performance-2',
    features: [
      'Percorsi flessibili: 2, 3 o 4 giorni settimanali di allenamento',
      'Analisi in tempo reale di tecnica, tattica, parametri mentali e fisici',
      'Feedback continuo (durante e dopo la sessione)',
      'Database personale per pianificare il calendario tornei',
      'Monitoraggio carico di lavoro e progressi',
      'Prevenzione infortuni grazie all\'identificazione automatica delle aree critiche',
      'Percorsi personalizzati in base allo sviluppo fisico, biotipo e stile di gioco',
      'Integrazione tra valutazioni tecniche, fisiche, mediche e mentali',
      'Coordinamento tra coach, preparatore, mental coach, medico'
    ],
    vickiMonitoringLevel: 'advanced',
    vickiPowered: true
  }
];
