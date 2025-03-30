
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import Hero from '@/components/Hero';
import ProgramDetails from '@/components/programs/ProgramDetails';
import ProgramFeaturesAndPricing from '@/components/programs/ProgramFeaturesAndPricing';
import RelatedPrograms from '@/components/programs/RelatedPrograms';

const PadelKids = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero
          title="Padel Bambini e Teen"
          subtitle="Programma dedicato ai giovani giocatori di padel, con un approccio divertente e formativo."
          imageSrc="/lovable-uploads/padel-courts.png"
          buttons={[
            { text: 'PRENOTA UNA PROVA', href: '/contact' }
          ]}
          fullHeight={false}
        />
        
        <div className="container mx-auto px-4 py-16">
          <ProgramDetails
            title="Padel Bambini e Teen"
            subtitle="Programma dedicato ai giovani giocatori di padel, con un approccio divertente e formativo per imparare le basi e sviluppare la passione per questo sport."
            description={[
              "Il programma Padel Bambini e Teen è pensato per introdurre i giovani a questo sport dinamico e coinvolgente attraverso un percorso ludico ma tecnicamente strutturato.",
              "Il nostro approccio combina l'apprendimento delle fondamenta tecniche con attività divertenti che stimolano la coordinazione, l'agilità e il lavoro di squadra, elementi essenziali nel padel.",
              "I gruppi sono formati in base all'età e al livello, con un numero ridotto di partecipanti per garantire attenzione personalizzata da parte dei nostri coach specializzati in padel giovanile."
            ]}
          />
          
          <ProgramFeaturesAndPricing
            features={{
              title: "Caratteristiche del Programma",
              features: [
                "Approccio ludico e inclusivo adatto all'età",
                "Tecnica di base: impugnatura, posizione e colpi fondamentali",
                "Sessioni di gioco guidate in gruppi ridotti",
                "Sviluppo della coordinazione e delle capacità motorie",
                "Introduzione graduale alle regole e alla tattica di gioco",
                "Monitoraggio dei progressi con tecnologia VICKI™",
                "Percorso strutturato con obiettivi adatti all'età"
              ]
            }}
            pricing={{
              price: "€1040 / €2080",
              period: "Monosettimanale / Bisettimanale annuale",
              notes: [
                "Il programma prevede lezioni di un'ora con frequenza mono o bisettimanale",
                "L'iscrizione include l'accesso alla piattaforma VICKI™ per monitorare i progressi",
                "Possibilità di partecipare a eventi e tornei interni organizzati periodicamente"
              ],
              ctaText: "Prenota una Prova",
              ctaLink: "/contact"
            }}
          />
          
          <RevealAnimation>
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-xl font-swiss font-semibold mb-4">Perché Scegliere Questo Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss ml-4">
                <li>Primo approccio divertente e strutturato al padel per i più giovani</li>
                <li>Sviluppo delle capacità motorie e coordinative attraverso il gioco</li>
                <li>Apprendimento dei valori sportivi come il rispetto, la collaborazione e l'impegno</li>
                <li>Coach specializzati nell'insegnamento del padel ai giovani</li>
                <li>Monitoraggio dei progressi con feedback regolari ai genitori</li>
              </ul>
            </div>
          </RevealAnimation>
          
          <RelatedPrograms 
            title="Programmi Correlati" 
            programs={[
              {
                title: "Padel Adulti",
                description: "Programma per adulti dai 16 anni in su che vogliono imparare o migliorare nel padel.",
                link: "/programs/padel-adult"
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

export default PadelKids;
