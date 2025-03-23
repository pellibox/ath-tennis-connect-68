
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FacilitiesSection from '@/components/FacilitiesSection';
import AboutSection from '@/components/AboutSection';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';

// Mock data for facilities
const facilities = [
  {
    id: "facility-1",
    title: "Campi Indoor",
    description: "4 campi in resina sintetica con sistema Vicki™ integrato per analisi in tempo reale",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070",
    features: [
      "Sistema Vicki™ per tracking 3D",
      "Illuminazione LED ad alta efficienza",
      "Condizionamento e ventilazione ottimizzati"
    ]
  },
  {
    id: "facility-2",
    title: "Campi Outdoor",
    description: "2 campi in terra battuta e 2 in cemento, tutti equipaggiati con tecnologia Vicki™",
    image: "https://images.unsplash.com/photo-1560012057-4372e14c5085?q=80&w=2074",
    features: [
      "Sistema di irrigazione automatizzato",
      "Illuminazione per sessioni serali",
      "Tecnologia Vicki™ portatile"
    ]
  },
  {
    id: "facility-3",
    title: "Area Fitness",
    description: "Spazio dedicato alla preparazione atletica con attrezzature specializzate",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075",
    features: [
      "Attrezzature biomeccaniche avanzate",
      "Area per allenamento funzionale",
      "Sistemi di monitoraggio delle performance"
    ]
  },
  {
    id: "facility-4",
    title: "Sala Analisi",
    description: "Ambiente dedicato all'analisi dei dati Vicki™ e alla visualizzazione delle performance",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    features: [
      "Schermi ad alta risoluzione",
      "Software di analisi avanzata",
      "Spazio per sessioni di coaching individuali"
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
          imageSrc="https://images.unsplash.com/photo-1481891683383-6fe563e2e81e?q=80&w=2070"
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
