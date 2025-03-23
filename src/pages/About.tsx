
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import TechnologySection from '@/components/TechnologySection';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Check if there's a hash in the URL and scroll to that section
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="py-20 px-6 lg:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display text-center mb-12">Cos'è ATH</h1>
            
            <div className="prose prose-lg max-w-4xl mx-auto">
              <p className="lead text-xl mb-6">
                Advanced Tennis Hub (ATH) è il primo centro tennistico costruito appositamente per ottimizzare l'utilizzo del metodo ATH, integrando tecnologia avanzata e competenza umana.
              </p>
              
              <p>
                Situato a Rodano, ATH ridefinisce l'eccellenza nel tennis, ottimizzando le performance di tutti, dai principianti ai professionisti. Il nostro approccio innovativo unisce la tecnologia più avanzata con metodologie di allenamento all'avanguardia.
              </p>
              
              <h2 id="method" className="text-3xl font-display mt-16 mb-8">Il Metodo ATH</h2>
              
              <p>
                Il metodo ATH rappresenta una rivoluzione nel mondo del tennis. Combina la precisione della tecnologia con l'esperienza di coach professionisti per offrire un approccio completamente personalizzato allo sviluppo del giocatore.
              </p>
              
              <p>
                L'anima tecnologica del metodo ATH è un sistema sofisticato che monitora e analizza oltre 70 parametri specifici della performance tennistica. Durante ogni sessione di gioco, sensori avanzati e telecamere ad alta velocità catturano ogni movimento, colpo e decisione tattica.
              </p>
              
              <p>
                Questi dati vengono elaborati in tempo reale, fornendo insights immediati che permettono aggiustamenti istantanei durante l'allenamento. Ma la vera magia accade dopo la sessione, quando il sistema di intelligenza artificiale analizza approfonditamente ogni aspetto della performance, identificando pattern, aree di miglioramento e opportunità di sviluppo che potrebbero sfuggire anche all'occhio più esperto.
              </p>
              
              <h3 className="text-2xl font-display mt-12 mb-4">L'Arte della Personalizzazione</h3>
              
              <p>
                Ciò che rende il metodo veramente unico è il modo in cui la tecnologia potenzia, senza mai sostituire, l'expertise umana. I professionisti del centro utilizzano i dati raccolti come una bussola per navigare il percorso di sviluppo di ogni atleta.
              </p>
              
              <p>
                Ogni programma di allenamento diventa estremamente personalizzato, modellato sulle caratteristiche uniche del giocatore, sui suoi obiettivi e sul suo stile di gioco. Il sistema di machine learning continua ad apprendere e ad evolversi con ogni sessione, raffinando costantemente le sue analisi e i suoi suggerimenti.
              </p>
              
              <h3 className="text-2xl font-display mt-12 mb-4">Una Rivoluzione Democratica</h3>
              
              <p>
                La vera rivoluzione di ATH sta nella sua capacità di rendere accessibile a tutti ciò che un tempo era privilegio di pochi. Le metodologie di allenamento utilizzate dai campioni, gli strumenti di analisi più sofisticati, il supporto di professionisti di alto livello: tutto questo diventa disponibile per ogni atleta che varca le porte del centro.
              </p>
              
              <p>
                I progressi non sono più basati su sensazioni o impressioni, ma su dati concreti e misurabili, permettendo a ogni giocatore di vedere e comprendere la propria evoluzione in modo tangibile.
              </p>
            </div>
          </div>
        </section>
        
        <TechnologySection 
          title=""
          subtitle="Il nostro innovativo sistema tecnologico integra analisi avanzate e AI per rivoluzionare l'allenamento del tennis"
        />
        
        <AboutSection 
          title="Unisciti alla Rivoluzione ATH"
          description="Scopri come ATH può trasformare il tuo gioco e portarti a livelli che non avresti mai immaginato. Contattaci oggi per una visita o per prenotare una sessione di prova."
          image="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=1000"
          buttons={[
            { text: "Contattaci", href: '/contact' }
          ]}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
