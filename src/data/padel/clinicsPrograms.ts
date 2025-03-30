
import { Program } from './types';

export const clinicsPrograms: Program[] = [
  {
    id: "padel-clinics",
    title: "Padel Clinics",
    description: "Sessioni intensive di gruppo focalizzate su aspetti specifici del gioco del padel, guidate da coach di alto livello.",
    image: "/lovable-uploads/a0219ce4-c446-4249-b8b6-07f6f074c431.png", // Updated image
    link: "/padel#padel-clinics",
    features: [
      "Workshop tematici su colpi specifici",
      "Sessioni intensive di 2-3 ore",
      "Gruppi omogenei per livello",
      "Analisi tecnica con sistema Vicki™"
    ],
    vickiPowered: true
  },
  {
    id: "racquet-sports-camp",
    title: "Camp Multi-Sport con Racchetta",
    description: "Esperienza immersiva che combina tennis, padel e pickleball per migliorare le abilità generali negli sport con racchetta.",
    image: "/lovable-uploads/f0450714-c612-44b3-b474-41565f8d9336.png",
    link: "/padel#racquet-sports-camp",
    features: [
      "Programma intensivo di 3-5 giorni",
      "Allenamento nei tre sport con approccio integrato",
      "Preparazione fisica specifica",
      "Analisi comparata della tecnica nei diversi sport"
    ],
    vickiCustomBadge: "Multi-Sport Vicki™"
  }
];
