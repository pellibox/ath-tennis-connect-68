
import { Program } from './types';

export const clinicsPrograms: Program[] = [
  {
    id: 'padel-clinics',
    title: 'Clinics di Padel',
    description: 'Sessioni intensive di allenamento di 1-2 giorni focalizzate su aspetti specifici del gioco del Padel.',
    image: 'https://images.unsplash.com/photo-1620211129334-32fab5a13a81?q=80&w=2070&auto=format&fit=crop',
    link: '/padel-pickleball#padel-clinics',
    features: [
      'Workshop tematici (es. gioco di parete, volée, smash)',
      'Sessioni intensive con coach specializzati',
      'Analisi video con feedback immediato',
      'Gruppi di massimo 6 partecipanti',
      'Materiale didattico incluso'
    ],
    vickiPowered: true,
    vickiMonitoringLevel: 'standard'
  },
  {
    id: 'pickleball-clinics',
    title: 'Clinics di Pickleball',
    description: 'Workshop intensivi dedicati a migliorare specifici aspetti del gioco del Pickleball in breve tempo.',
    image: 'https://images.unsplash.com/photo-1612194562948-7b222fb4104e?q=80&w=2070&auto=format&fit=crop',
    link: '/padel-pickleball#pickleball-clinics',
    features: [
      'Focus su tecniche specifiche (serve, dink, terzo colpo)',
      'Strategie di gioco avanzate',
      'Sessioni pratiche con rotazione dei partner',
      'Analisi e correzione in tempo reale',
      'Gruppi di massimo 8 partecipanti'
    ],
    vickiOnRequest: true,
    vickiMonitoringLevel: 'basic'
  }
];
