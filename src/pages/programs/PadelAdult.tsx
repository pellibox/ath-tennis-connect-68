
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import Hero from '@/components/Hero';
import ProgramDetails from '@/components/programs/ProgramDetails';
import ProgramFeaturesAndPricing from '@/components/programs/ProgramFeaturesAndPricing';
import RelatedPrograms from '@/components/programs/RelatedPrograms';

const PadelAdult = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero
          title="Padel Adulti"
          subtitle="Programma per adulti dai 16 anni in su che vogliono imparare o migliorare nel padel."
          imageSrc="/lovable-uploads/padel-courts.png"
          buttons={[
            { text: 'PRENOTA UNA PROVA', href: '/contact' }
          ]}
          fullHeight={false}
        />
        
        <div className="container mx-auto px-4 py-16">
          <ProgramDetails
            title="Padel Adulti"
            subtitle="Programma per adulti dai 16 anni in su che vogliono imparare o migliorare nel padel con un'ora di attività per sessione."
            description={[
              "Il programma Padel Adulti è ideale per chi desidera avvicinarsi a questa disciplina o migliorare le proprie abilità in un ambiente stimolante e professionale.",
              "Le lezioni, strutturate in piccoli gruppi (massimo 4 persone), consentono di ricevere un'attenzione personalizzata dal coach mentre si beneficia del confronto con altri giocatori di livello simile.",
              "Il metodo ATH applicato al padel garantisce un approccio completo che copre tecnica, tattica, preparazione fisica e mentale, elementi chiave per progredire rapidamente in questo sport dinamico."
            ]}
          />
          
          <ProgramFeaturesAndPricing
            features={{
              title: "Caratteristiche del Programma",
              features: [
                "Lezioni in piccoli gruppi (max 4 persone)",
                "Tecnica completa dal livello principiante all'intermedio",
                "Analisi video e feedback personalizzato",
                "Focus sul gioco in coppia e sul posizionamento",
                "Esercitazioni tattiche specifiche per il padel",
                "Supporto tecnologico con sistema VICKI™",
                "Adattamento del programma in base al livello dei partecipanti"
              ]
            }}
            pricing={{
              price: "€1040 / €2080",
              period: "Monosettimanale / Bisettimanale annuale",
              notes: [
                "Il programma prevede lezioni di un'ora con frequenza mono o bisettimanale",
                "L'iscrizione include l'accesso alla piattaforma VICKI™ per monitorare i progressi",
                "Possibilità di partecipare a tornei sociali e eventi dedicati"
              ],
              ctaText: "Prenota una Prova",
              ctaLink: "/contact"
            }}
          />
          
          <RevealAnimation>
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-xl font-swiss font-semibold mb-4">Perché Scegliere Questo Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss ml-4">
                <li>Approccio strutturato con progressione tecnica adatta a ogni livello</li>
                <li>Lezioni in piccoli gruppi che garantiscono attenzione personalizzata</li>
                <li>Utilizzo di tecnologia avanzata per analizzare e migliorare il gioco</li>
                <li>Ambiente sociale stimolante che rende l'apprendimento divertente</li>
                <li>Coach certificati con esperienza specifica nell'insegnamento del padel</li>
              </ul>
            </div>
          </RevealAnimation>
          
          <RelatedPrograms 
            title="Programmi Correlati" 
            programs={[
              {
                title: "Padel Bambini e Teen",
                description: "Programma dedicato ai giovani giocatori di padel, con un approccio divertente e formativo.",
                link: "/programs/padel-kids"
              },
              {
                title: "Padel Agonisti",
                description: "Programma intensivo per giocatori competitivi che vogliono portare il loro gioco a livello agonistico.",
                link: "/programs/padel-advanced"
              },
              {
                title: "Padel Coaching Privato",
                description: "Sessioni individuali o in coppia con coach specializzati e analisi completa delle performance.",
                link: "/programs/padel-private"
              }
            ]}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PadelAdult;
