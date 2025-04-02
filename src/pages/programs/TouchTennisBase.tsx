
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgramDetails from '@/components/programs/ProgramDetails';
import ProgramFeaturesAndPricing from '@/components/programs/ProgramFeaturesAndPricing';
import ProgramWhyChoose from '@/components/programs/ProgramWhyChoose';
import StandardHeroVideo from '@/components/StandardHeroVideo';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';

const TouchTennisBase = () => {
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
          title="TouchTennis Base"
          subtitle="Programma introduttivo al TouchTennis per tutti i livelli"
        />
        
        <div className="container mx-auto px-4 py-12">
          <ProgramDetails
            title="TouchTennis Base"
            subtitle="Programma introduttivo al TouchTennis, ideale per principianti e per chi vuole scoprire questo sport dinamico e divertente."
            description={[
              "Il programma TouchTennis Base è pensato per chi si avvicina per la prima volta a questo sport o per chi desidera migliorare le proprie abilità di base. Il TouchTennis è una versione ridotta del tennis tradizionale, giocata su un campo più piccolo con racchette e palline più morbide, che lo rendono accessibile a tutti.",
              "Durante le sessioni di allenamento, i partecipanti impareranno i fondamentali del TouchTennis: dritto, rovescio, volée, servizio e risposta. Le lezioni si svolgeranno in gruppi di massimo 4 persone per garantire un'attenzione personalizzata da parte dei coach.",
              "Il programma è supportato dalla tecnologia VICKI™ a livello base, che consente un'analisi oggettiva dei movimenti e dei progressi di ogni partecipante."
            ]}
            vickiLevel="basic"
          />
          
          <ProgramFeaturesAndPricing
            features={{
              title: "Caratteristiche del Programma",
              features: [
                "Introduzione ai fondamentali del TouchTennis",
                "Allenamenti di gruppo con massimo 4 partecipanti",
                "Sessioni di gioco guidate",
                "Adatto a tutte le età e livelli di esperienza",
                "2 sessioni settimanali da 60 minuti",
                "Monitoraggio dei progressi con tecnologia VICKI™ di livello Basic"
              ]
            }}
            pricing={{
              price: "€ 600",
              period: "30 settimane",
              notes: [
                "Il prezzo include l'accesso alle strutture durante le ore di lezione.",
                "Attrezzatura disponibile a noleggio per i principianti."
              ],
              ctaText: "Contattaci per Iscriverti",
              ctaLink: "/contact"
            }}
          />
          
          <ProgramWhyChoose
            title="Perché Scegliere il Programma TouchTennis Base"
            benefits={[
              {
                title: "Accessibilità",
                description: "Il TouchTennis è facile da imparare e adatto a tutte le età e livelli di abilità."
              },
              {
                title: "Divertimento Immediato",
                description: "Le palline più lente e il campo più piccolo permettono di giocare scambi più lunghi fin dalle prime lezioni."
              },
              {
                title: "Sviluppo Tecnico",
                description: "Perfetto per affinare la tecnica di gioco e la coordinazione."
              },
              {
                title: "Approccio Graduale",
                description: "Ideale come introduzione al tennis tradizionale o come attività a sé stante."
              }
            ]}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TouchTennisBase;
