
import { Program } from './types';

export const padelPrograms: Program[] = [
  {
    id: "padel-junior",
    title: "Padel Bambini e Teen",
    description: "Programma dedicato ai giovani giocatori di padel, con un approccio divertente e formativo per imparare le basi e sviluppare la passione per questo sport.",
    image: "/lovable-uploads/f1e4d977-925c-4b7d-aa04-145e4c5c56fd.png",
    link: "/programs/padel-kids",
    features: [
      "Approccio ludico e inclusivo adatto all'età",
      "Tecnica di base: impugnatura, posizione e colpi fondamentali", 
      "Sessioni di gioco guidate in gruppi ridotti",
      "Sviluppo della coordinazione e delle capacità motorie"
    ],
    pricing: [
      "Monosettimanale annuale: €1040",
      "Bisettimanale annuale: €2080"
    ],
    vickiPowered: true
  },
  {
    id: "padel-adult",
    title: "Padel Adulti",
    description: "Programma per adulti dai 16 anni in su che vogliono imparare o migliorare nel padel con un'ora di attività per sessione.",
    image: "/lovable-uploads/padel-courts.png",
    link: "/programs/padel-adult",
    vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1070761575?h=010aa2084b&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    features: [
      "Lezioni in piccoli gruppi (max 4 persone)",
      "Tecnica completa dal livello principiante all'intermedio",
      "Analisi video e feedback personalizzato",
      "Focus sul gioco in coppia e sul posizionamento"
    ],
    pricing: [
      "Monosettimanale annuale: €1040",
      "Bisettimanale annuale: €2080"
    ],
    vickiPowered: true
  },
  {
    id: "padel-advanced",
    title: "Padel Agonisti",
    description: "Programma intensivo per giocatori competitivi che vogliono portare il loro gioco a livello agonistico con analisi avanzata delle performance.",
    image: "/lovable-uploads/3911c0fe-e4c8-4455-8529-387eec1efde3.png",
    vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1070763412?h=0e8d74bff5&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    link: "/programs/padel-advanced",
    features: [
      "Analisi biomeccanica dei colpi con tecnologia Vicki™",
      "Perfezionamento delle tecniche avanzate",
      "Preparazione fisica specifica per il padel",
      "Strategie di gioco per competizioni"
    ],
    pricing: [
      "Monosettimanale annuale: €1400",
      "Bisettimanale annuale: €2480"
    ],
    vickiMonitoringLevel: "advanced"
  },
  {
    id: "padel-private",
    title: "Padel Coaching Privato",
    description: "Sessioni individuali o in coppia con coach specializzati e analisi completa delle performance con sistema Vicki™.",
    image: "/lovable-uploads/padel-courts.png",
    link: "/programs/padel-private",
    vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1070762124?h=81c3b348f2&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
    features: [
      "Programma personalizzato in base agli obiettivi specifici",
      "Analisi video e feedback in tempo reale",
      "Report dettagliato delle performance",
      "Pianificazione del percorso di miglioramento"
    ],
    vickiMonitoringLevel: "performance"
  }
];
