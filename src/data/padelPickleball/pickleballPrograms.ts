
import { Program } from './types';

export const pickleballPrograms: Program[] = [
  {
    id: "pickleball-beginners",
    title: "Pickleball Principianti",
    description: "Introduzione al pickleball per neofiti. Impara le regole, le tecniche di base e divertiti con questo sport in rapida crescita.",
    image: "/lovable-uploads/c4c120e8-c90d-48a3-933c-d4cce08b5129.png",
    link: "/padel-pickleball#pickleball-beginners",
    features: [
      "Introduzione alle regole e al campo da gioco",
      "Tecnica di base: impugnatura, servizio e colpi fondamentali",
      "Sessioni di gioco guidate",
      "Analisi del movimento con sistema Vicki™"
    ],
    vickiOnRequest: true
  },
  {
    id: "pickleball-intermediate",
    title: "Pickleball Intermedio",
    description: "Programma per migliorare la tecnica e sviluppare strategie di gioco efficaci. Per chi ha già esperienza di base nel pickleball.",
    image: "/lovable-uploads/c4c120e8-c90d-48a3-933c-d4cce08b5129.png",
    link: "/padel-pickleball#pickleball-intermediate",
    features: [
      "Perfezionamento dei colpi d'attacco e difesa",
      "Strategie di posizionamento in coppia",
      "Tattica di gioco nelle diverse zone del campo",
      "Sessioni pratiche con situazioni di gioco reali"
    ],
    vickiOnRequest: true
  },
  {
    id: "pickleball-advanced",
    title: "Pickleball Avanzato",
    description: "Programma intensivo per giocatori esperti con focus su tecnica avanzata, strategia e preparazione per competizioni.",
    image: "/lovable-uploads/c4c120e8-c90d-48a3-933c-d4cce08b5129.png",
    link: "/padel-pickleball#pickleball-advanced",
    features: [
      "Analisi tecnica dettagliata con tecnologia Vicki™",
      "Perfezionamento delle tecniche avanzate",
      "Preparazione fisica specifica per il pickleball",
      "Strategie di gioco per competizioni"
    ],
    vickiMonitoringLevel: "core"
  }
];
