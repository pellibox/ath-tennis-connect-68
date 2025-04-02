
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgramDetails from '@/components/programs/ProgramDetails';
import ProgramFeaturesAndPricing from '@/components/programs/ProgramFeaturesAndPricing';
import ProgramWhyChoose from '@/components/programs/ProgramWhyChoose';
import StandardHeroVideo from '@/components/StandardHeroVideo';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';

const TouchTennisAdvanced = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const vimeoEmbed = createStandardVimeoEmbed('1071002692?h=a2668fa56d', true, true, true);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <StandardHeroVideo
          vimeoEmbed={vimeoEmbed}
          title="TouchTennis Avanzato"
          subtitle="Programma intensivo per giocatori esperti di TouchTennis"
        />
        
        <div className="container mx-auto px-4 py-12">
          <ProgramDetails
            title="TouchTennis Avanzato"
            subtitle="Programma per giocatori con esperienza nel TouchTennis che vogliono migliorare le proprie abilità tecniche e tattiche."
            description={[
              "Il programma TouchTennis Avanzato è progettato per giocatori che hanno già acquisito una buona padronanza dei fondamentali e desiderano portare il loro gioco a un livello superiore. In questo percorso, si lavorerà sull'affinamento della tecnica, sullo sviluppo di strategie di gioco avanzate e sulla preparazione per competizioni.",
              "Le sessioni di allenamento saranno intensive e personalizzate, con un focus particolare sugli aspetti tecnici e tattici del TouchTennis. I partecipanti avranno l'opportunità di partecipare a match play con analisi dettagliata post-partita, utile per identificare punti di forza e aree di miglioramento.",
              "Il programma utilizza la tecnologia VICKI™ a livello avanzato, che fornisce un'analisi approfondita del gioco e permette di monitorare i progressi in modo oggettivo e dettagliato."
            ]}
            vickiLevel="advanced"
          />
          
          <ProgramFeaturesAndPricing
            features={{
              title: "Caratteristiche del Programma",
              features: [
                "Allenamento tecnico avanzato",
                "Sviluppo di strategie di gioco specifiche",
                "Sessioni di match play con analisi",
                "Preparazione per tornei e competizioni",
                "3 sessioni settimanali da 90 minuti",
                "Analisi avanzata con tecnologia VICKI™"
              ]
            }}
            pricing={{
              price: "€ 900",
              period: "30 settimane",
              notes: [
                "Il prezzo include l'accesso alle strutture durante le ore di lezione.",
                "Possibilità di partecipare a tornei interni ed esterni."
              ],
              ctaText: "Contattaci per Iscriverti",
              ctaLink: "/contact"
            }}
          />
          
          <ProgramWhyChoose
            title="Perché Scegliere il Programma TouchTennis Avanzato"
            benefits={[
              {
                title: "Miglioramento Tecnico",
                description: "Perfeziona la tua tecnica con un coaching personalizzato e feedback dettagliati."
              },
              {
                title: "Preparazione Agonistica",
                description: "Sviluppa le competenze necessarie per competere ad alti livelli nel TouchTennis."
              },
              {
                title: "Analisi Approfondita",
                description: "Beneficia dell'analisi VICKI™ avanzata per identificare punti di forza e debolezze."
              },
              {
                title: "Comunità di Giocatori",
                description: "Allenati con altri giocatori appassionati in un ambiente stimolante e competitivo."
              }
            ]}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TouchTennisAdvanced;
