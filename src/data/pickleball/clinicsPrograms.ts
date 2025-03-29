
import { Program } from './types';

export const clinicsPrograms: Program[] = [
  {
    id: "pickleball-clinics",
    title: "Pickleball Clinics",
    description: "Workshop specifici per migliorare rapidamente aspetti tecnici e tattici del pickleball in sessioni concentrate.",
    image: "/lovable-uploads/c4c120e8-c90d-48a3-933c-d4cce08b5129.png",
    link: "/pickleball#pickleball-clinics",
    features: [
      "Focus su elementi specifici del gioco",
      "Sessioni di 2 ore con coach dedicato",
      "Gruppi ridotti di massimo 4-6 persone",
      "Analisi video delle performance"
    ],
    vickiOnRequest: true
  },
  {
    id: "racquet-sports-camp",
    title: "Camp Multi-Sport con Racchetta",
    description: "Esperienza immersiva che combina tennis, padel e pickleball per migliorare le abilità generali negli sport con racchetta.",
    image: "/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png",
    link: "/pickleball#racquet-sports-camp",
    features: [
      "Programma intensivo di 3-5 giorni",
      "Allenamento nei tre sport con approccio integrato",
      "Preparazione fisica specifica",
      "Analisi comparata della tecnica nei diversi sport"
    ],
    vickiCustomBadge: "Multi-Sport Vicki™"
  }
];
