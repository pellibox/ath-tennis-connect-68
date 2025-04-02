
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgramDetails from '@/components/programs/ProgramDetails';
import ProgramFeaturesAndPricing from '@/components/programs/ProgramFeaturesAndPricing';
import ProgramWhyChoose from '@/components/programs/ProgramWhyChoose';
import StandardHeroVideo from '@/components/StandardHeroVideo';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';

const TouchTennisJunior = () => {
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
          title="TouchTennis Junior (8-14 anni)"
          subtitle="Programma dedicato ai giovani atleti"
        />
        
        <div className="container mx-auto px-4 py-12">
          <ProgramDetails
            title="TouchTennis Junior (8-14 anni)"
            subtitle="Programma specifico per giovani atleti che vogliono approcciarsi al TouchTennis in modo divertente e strutturato."
            description={[
              "Il programma TouchTennis Junior è appositamente progettato per ragazzi dagli 8 ai 14 anni che desiderano avvicinarsi al mondo del tennis attraverso un approccio graduale e divertente. Il TouchTennis, con il suo campo ridotto e le palline più morbide, è perfetto per i giovani atleti, permettendo loro di sviluppare abilità tennistiche senza le difficoltà tecniche del tennis tradizionale.",
              "Durante le sessioni, i ragazzi svilupperanno coordinazione, equilibrio e abilità motorie di base, mentre imparano i fondamentali del tennis in un ambiente ludico e stimolante. Gli allenamenti sono strutturati in piccoli gruppi per garantire che ogni bambino riceva l'attenzione necessaria per progredire al proprio ritmo.",
              "Il programma utilizza la tecnologia VICKI™ a livello standard, adattata specificamente per monitorare e supportare lo sviluppo dei giovani atleti, fornendo feedback adeguati alla loro età e livello di comprensione."
            ]}
            userType="junior"
            vickiLevel="standard"
          />
          
          <ProgramFeaturesAndPricing
            features={{
              title: "Caratteristiche del Programma",
              features: [
                "Metodologia adattata per giovani atleti",
                "Focus su coordinazione e sviluppo motorio",
                "Approccio ludico all'apprendimento",
                "Piccoli gruppi per attenzione personalizzata",
                "2 sessioni settimanali da 60 minuti",
                "Monitoraggio con tecnologia VICKI™ Standard"
              ]
            }}
            pricing={{
              price: "€ 500",
              period: "30 settimane",
              notes: [
                "Il prezzo include l'attrezzatura necessaria per le lezioni.",
                "Possibilità di partecipare a piccoli tornei interni adatti all'età."
              ],
              ctaText: "Contattaci per Iscrivere tuo Figlio",
              ctaLink: "/contact"
            }}
          />
          
          <ProgramWhyChoose
            title="Perché Scegliere il Programma TouchTennis Junior"
            benefits={[
              {
                title: "Apprendimento Facilitato",
                description: "Il campo più piccolo e le palline più morbide rendono più facile l'apprendimento dei fondamentali."
              },
              {
                title: "Sviluppo Motorio",
                description: "Migliora coordinazione, equilibrio e capacità motorie in modo divertente e coinvolgente."
              },
              {
                title: "Ambiente Positivo",
                description: "Gli allenamenti sono strutturati per incoraggiare la partecipazione e costruire la fiducia."
              },
              {
                title: "Preparazione al Tennis",
                description: "Ottima base per eventualmente passare al tennis tradizionale con solide fondamenta tecniche."
              }
            ]}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TouchTennisJunior;
