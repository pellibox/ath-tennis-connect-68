
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FacilitiesSection from '@/components/FacilitiesSection';
import AboutSection from '@/components/AboutSection';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';

// Updated mock data for facilities with Players Lounge and Headquarters
const facilities = [
  {
    id: "facility-1",
    title: "Campo Centrale ATP",
    description: "Campo principale con sistema Vicki™ integrato, tribuna spettatori e standard ATP per tornei internazionali.",
    image: "/lovable-uploads/7ff66f98-73e6-4253-aacb-8619ac14b81b.png",
    features: [
      "Sistema Vicki™ per tracking 3D",
      "Illuminazione LED ad alta efficienza",
      "Condizionamento e ventilazione ottimizzati"
    ]
  },
  {
    id: "facility-2",
    title: "Campi in Superficie Veloce",
    description: "Due campi in superficie sintetica con coefficiente di attrito standardizzato e sistema di tracciamento Vicki™ integrato.",
    image: "https://images.unsplash.com/photo-1560012057-4372e14c5085?q=80&w=2074",
    features: [
      "Sistema di irrigazione automatizzato",
      "Illuminazione per sessioni serali",
      "Tecnologia Vicki™ portatile"
    ]
  },
  {
    id: "facility-3",
    title: "Campi in Terra Rossa",
    description: "Quattro campi in terra rossa calibrata, con manutenzione quotidiana e rilevamento parametrico Vicki™ completo.",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075",
    features: [
      "Manutenzione quotidiana professionale",
      "Calibrazione personalizzata della superficie",
      "Sistema Vicki™ completo"
    ]
  },
  {
    id: "facility-4",
    title: "Centro Performance",
    description: "Area dedicata all'analisi dati e preparazione fisica, con strumentazione per valutazioni biomeccaniche e recupero.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    features: [
      "Schermi ad alta risoluzione",
      "Software di analisi avanzata",
      "Spazio per sessioni di coaching individuali"
    ]
  },
  {
    id: "facility-5",
    title: "Players Lounge",
    description: "Area esclusiva di relax per atleti con monitor per analisi dati, connessione al sistema Vicki™ e ambiente premium.",
    image: "/lovable-uploads/a39367a8-2cd2-4dca-88ac-68898efc50da.png",
    features: [
      "Postazioni multimediali integrate",
      "Area relax ergonomica",
      "Connessione diretta al sistema di analisi",
      "Reception e assistenza dedicata",
      "Design moderno e funzionale"
    ]
  },
  {
    id: "facility-6",
    title: "Headquarters",
    description: "Edificio principale con architettura contemporanea, reception, uffici amministrativi e sale riunioni per il team tecnico.",
    image: "/lovable-uploads/38147937-4cd3-4caa-9a19-c801e8255f36.png",
    features: [
      "Design architettonico all'avanguardia",
      "Illuminazione LED perimetrale",
      "Spazi amministrativi e direzionali",
      "Vetrate a tutta altezza",
      "Materiali premium e finiture di alta qualità"
    ]
  }
];

const FacilitiesPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Check if there's a hash in the URL and scroll to that section
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <Hero
          title="Le Nostre Strutture"
          subtitle="Impianti all'avanguardia dotati di tecnologia Vicki™"
          imageSrc="/lovable-uploads/7ff66f98-73e6-4253-aacb-8619ac14b81b.png"
          fullHeight={false}
          overlayOpacity="medium"
        />
        
        <section className="py-16 px-6 lg:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display text-center mb-12">Strutture ATH</h1>
            
            <div className="prose prose-lg max-w-4xl mx-auto mb-16">
              <p className="lead text-xl mb-6">
                L'Advanced Tennis Hub di Rodano è un centro di eccellenza progettato specificamente per ottimizzare l'utilizzo del metodo ATH e della tecnologia Vicki™.
              </p>
              
              <p>
                Le nostre strutture combinano campi da tennis tecnologicamente avanzati, aree di analisi dati e spazi per la preparazione atletica, creando un ambiente integrato che supporta ogni aspetto dello sviluppo del tennista.
              </p>
            </div>
          </div>
        </section>
        
        <FacilitiesSection 
          title="Impianti"
          subtitle="Strutture progettate per massimizzare l'efficacia del metodo ATH e della tecnologia Vicki™"
          facilities={facilities}
        />
        
        <section className="py-16 px-6 lg:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display text-center mb-12">Servizi Offerti</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Affitti Premium</h3>
                <p className="text-gray-700">Prenota un campo con sistema Vicki™ integrato per sessioni di allenamento con analisi dati in tempo reale. Ideale per giocatori che vogliono approfondire specifici aspetti tecnici.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Clinics Tematici</h3>
                <p className="text-gray-700">Sessioni specializzate su aspetti specifici del gioco, con analisi dettagliate e feedback personalizzati basati sui dati raccolti.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Percorsi Valutativi</h3>
                <p className="text-gray-700">Valutazioni complete delle performance tecniche, fisiche e tattiche, con report dettagliati e suggerimenti personalizzati per il miglioramento.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Eventi e Tornei</h3>
                <p className="text-gray-700">Competizioni con analisi avanzata delle performance, ideali per testare in ambiente competitivo i progressi ottenuti durante gli allenamenti.</p>
              </div>
            </div>
          </div>
        </section>
        
        <AboutSection 
          title="Tecnologia e Ambiente"
          description="ATH combina innovazione tecnologica e attenzione all'ambiente, utilizzando soluzioni sostenibili per l'illuminazione, il riscaldamento e la gestione delle risorse."
          image="https://images.unsplash.com/photo-1620293023555-272939171e05?q=80&w=2069"
          buttons={[
            { text: "Prenota ora", href: '/contact' }
          ]}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default FacilitiesPage;
