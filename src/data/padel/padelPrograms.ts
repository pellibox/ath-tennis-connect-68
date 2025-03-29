
import { Program } from './types';

export const padelPrograms: Program[] = [
  {
    id: "padel-beginners",
    title: "Padel Principianti",
    description: "Programma introduttivo al padel per chi si avvicina per la prima volta a questo sport. Impara le basi, la tecnica e le regole fondamentali.",
    image: "/lovable-uploads/padel-courts.png",
    link: "/padel#padel-beginners",
    features: [
      "Introduzione alle regole e al campo da gioco",
      "Tecnica di base: impugnatura, posizione e colpi fondamentali", 
      "Sessioni di gioco guidate",
      "Analisi tecnica con sistema Vicki™"
    ],
    vickiPowered: true
  },
  {
    id: "padel-intermediate",
    title: "Padel Intermedio",
    description: "Perfeziona la tua tecnica e sviluppa strategie di gioco più avanzate. Ideale per chi ha già esperienza base nel padel.",
    image: "/lovable-uploads/padel-courts.png",
    link: "/padel#padel-intermediate",
    features: [
      "Perfezionamento dei colpi speciali: bandeja, vibora e chiquita",
      "Strategie di posizionamento in coppia",
      "Tattica offensiva e difensiva",
      "Allenamento specifico con focus sulla risposta al servizio"
    ],
    vickiPowered: true
  },
  {
    id: "padel-advanced",
    title: "Padel Avanzato",
    description: "Programma intensivo per giocatori esperti che vogliono portare il loro gioco a livello competitivo con analisi avanzata delle performance.",
    image: "/lovable-uploads/padel-courts.png",
    link: "/padel#padel-advanced",
    features: [
      "Analisi biomeccanica dei colpi con tecnologia Vicki™",
      "Perfezionamento delle tecniche avanzate",
      "Preparazione fisica specifica per il padel",
      "Strategie di gioco per competizioni"
    ],
    vickiMonitoringLevel: "advanced"
  },
  {
    id: "padel-private",
    title: "Padel Coaching Privato",
    description: "Sessioni individuali o in coppia con coach specializzati e analisi completa delle performance con sistema Vicki™.",
    image: "/lovable-uploads/padel-courts.png",
    link: "/padel#padel-private",
    features: [
      "Programma personalizzato in base agli obiettivi specifici",
      "Analisi video e feedback in tempo reale",
      "Report dettagliato delle performance",
      "Pianificazione del percorso di miglioramento"
    ],
    vickiMonitoringLevel: "elite"
  }
];
