
import { ProgramCategory } from './programs/types';

export const touchTennisCategories: ProgramCategory[] = [
  {
    id: 'touchtennis-basics',
    title: 'TouchTennis Basics',
    programs: [
      {
        id: 'touchtennis-intro',
        title: 'Introduzione al TouchTennis',
        description: 'Corso introduttivo per scoprire questo sport divertente e accessibile, perfetto per principianti e famiglie.',
        image: 'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=2574&auto=format&fit=crop',
        link: '/touchtennis/intro',
        features: [
          'Lezioni settimanali di 1 ora',
          'Attrezzatura fornita',
          'Coach dedicati e qualificati',
          'Gruppi ridotti per maggiore attenzione',
        ],
        vickiOnRequest: true,
        vickiMonitoringLevel: 'basic'
      }
    ],
    applicableUserTypes: ['junior', 'adult'],
    sports: ['touchtennis']
  },
  {
    id: 'touchtennis-performance',
    title: 'TouchTennis Performance',
    programs: [
      {
        id: 'touchtennis-advanced',
        title: 'TouchTennis Avanzato',
        description: 'Programma intensivo per chi vuole perfezionare la tecnica e la tattica di gioco nel TouchTennis.',
        image: 'https://images.unsplash.com/photo-1622279457486-28f24ae5d710?q=80&w=2574&auto=format&fit=crop',
        link: '/touchtennis/advanced',
        features: [
          'Analisi avanzata della tecnica',
          'Preparazione per tornei',
          'Sessioni tattiche specializzate',
          'Monitoraggio progressi con sistema Vicki™'
        ],
        vickiPowered: true,
        vickiMonitoringLevel: 'standard'
      }
    ],
    applicableUserTypes: ['performance'],
    sports: ['touchtennis']
  }
];
