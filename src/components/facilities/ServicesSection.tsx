
import RevealAnimation from '../RevealAnimation';

interface ServiceItemProps {
  title: string;
  description: string;
}

const ServiceItem = ({ title, description }: ServiceItemProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-3 font-swiss">{title}</h3>
      <p className="text-gray-700 font-swiss text-base">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Noleggio Campi da Tennis, Padel e Pickleball",
      description: "Prenota i nostri campi tecnologicamente avanzati e a standard internazionale per Tennis, Padel e Pickleball. Tutti i campi sono dotati di attrezzature professionali e possibilità di integrazione con sistema Vicki™ su richiesta."
    },
    {
      title: "Affitti Premium",
      description: "Prenota un campo con sistema Vicki™ integrato per sessioni di allenamento con analisi dati in tempo reale. Ideale per giocatori che vogliono approfondire specifici aspetti tecnici."
    },
    {
      title: "Clinics Tematici",
      description: "Sessioni specializzate su aspetti specifici del gioco, con analisi dettagliate e feedback personalizzati basati sui dati raccolti."
    },
    {
      title: "Percorsi Valutativi",
      description: "Valutazioni complete delle performance tecniche, fisiche e tattiche, con report dettagliati e suggerimenti personalizzati per il miglioramento."
    },
    {
      title: "Eventi e Tornei",
      description: "Competizioni con analisi avanzata delle performance, ideali per testare in ambiente competitivo i progressi ottenuti durante gli allenamenti."
    },
    {
      title: "Corsi Specialistici",
      description: "Programmi formativi dedicati ad aspetti specifici del tennis come servizio, risposta, gioco di rete o tattica. Ogni corso utilizza l'analisi Vicki™ per personalizzare l'apprendimento."
    }
  ];

  return (
    <section className="py-12 px-6 lg:px-10 bg-gray-50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <h2 className="text-3xl md:text-4xl font-swiss text-center mb-8">Servizi Offerti</h2>
        </RevealAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <RevealAnimation key={index} delay={index * 100}>
              <ServiceItem 
                title={service.title} 
                description={service.description} 
              />
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
