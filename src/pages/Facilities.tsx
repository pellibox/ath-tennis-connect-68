import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FacilitiesSection from '@/components/FacilitiesSection';
import AboutSection from '@/components/AboutSection';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';

const facilities = [
  {
    id: "facility-1",
    title: "Campo Centrale ATP",
    description: "Campo principale con tribuna spettatori e standard ATP per tornei internazionali.",
    image: "/lovable-uploads/d4ba3935-f901-4a99-972b-6a86e47787db.png",
    features: [
      "Dimensioni ATP standard",
      "Illuminazione LED ad alta efficienza"
    ]
  },
  {
    id: "facility-2",
    title: "Campi in Superficie Veloce",
    description: "Due campi in superficie sintetica con coefficiente di attrito standardizzato e sistema di tracciamento Vicki™ integrato.",
    image: "/lovable-uploads/f9c89e9c-6847-411b-b1f9-e208caf726b4.png",
    features: [
      "N1 campo coperto tutto l'anno",
      "Illuminazione led per sessioni serali",
      "Vicki™Powered court"
    ]
  },
  {
    id: "facility-3",
    title: "Campi in Terra Rossa",
    description: "Quattro campi in terra rossa calibrata, con manutenzione quotidiana e rilevamento parametrico Vicki™ completo.",
    image: "/lovable-uploads/a16b623a-92f5-4f89-9c3d-d01262778f95.png",
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
    image: "/lovable-uploads/b0cf5344-de4c-404e-9c7b-916d765a8df0.png",
    features: [
      "Attrezzature biomeccaniche avanzate",
      "Zona training funzionale",
      "Analisi e monitoraggio in tempo reale",
      "Spazio per sessioni di coaching individuali",
      "Design minimalista ed efficiente"
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
      "Spazi amministrativi e direzionali con sistemi di visualizzazione dei campi",
      "Video analisi con Vicki™ in stanze dedicate",
      "Spogliatoi e aree recovery con ice bath, sauna e bagno turco",
      "Ristorante con dehor e vista su campo centrale",
      "Aree direzionali, locali medici e proshop"
    ]
  }
];

const FacilitiesPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
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
      
      <main className="flex-grow pt-20 font-swiss">
        <Hero
          title="Le Nostre Strutture"
          subtitle="Impianti all'avanguardia dotati di tecnologia Vicki™"
          imageSrc="/lovable-uploads/9e980860-a20e-4ae3-839c-6d91f306bd07.png"
          fullHeight={false}
          overlayOpacity="medium"
        />
        
        <section className="py-16 px-6 lg:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-swiss text-center mb-12">Strutture ATH</h1>
            
            <div className="prose prose-lg max-w-4xl mx-auto mb-16">
              <p className="lead text-xl mb-6 font-swiss">
                L'Advanced Tennis Hub di Rodano è un centro di eccellenza progettato specificamente per ottimizzare l'utilizzo del metodo ATH e della tecnologia Vicki™.
              </p>
              
              <p className="font-swiss">
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
            <h2 className="text-3xl md:text-4xl font-swiss text-center mb-12">Servizi Offerti</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 font-swiss">Affitti Premium</h3>
                <p className="text-gray-700 font-swiss">Prenota un campo con sistema Vicki™ integrato per sessioni di allenamento con analisi dati in tempo reale. Ideale per giocatori che vogliono approfondire specifici aspetti tecnici.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 font-swiss">Clinics Tematici</h3>
                <p className="text-gray-700 font-swiss">Sessioni specializzate su aspetti specifici del gioco, con analisi dettagliate e feedback personalizzati basati sui dati raccolti.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 font-swiss">Percorsi Valutativi</h3>
                <p className="text-gray-700 font-swiss">Valutazioni complete delle performance tecniche, fisiche e tattiche, con report dettagliati e suggerimenti personalizzati per il miglioramento.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 font-swiss">Eventi e Tornei</h3>
                <p className="text-gray-700 font-swiss">Competizioni con analisi avanzata delle performance, ideali per testare in ambiente competitivo i progressi ottenuti durante gli allenamenti.</p>
              </div>
            </div>
          </div>
        </section>
        
        <JoinRevolutionSection />
        
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
