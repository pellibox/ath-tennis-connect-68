
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoachesSection from '@/components/CoachesSection';
import AboutSection from '@/components/AboutSection';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';

// Mock data for coaches
const coaches = [
  {
    id: "coach-1",
    name: "Marco Rossi",
    title: "Head Coach | Specialista Tecnica",
    image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=2070",
    bio: "Esperto nell'integrazione tra metodologia tradizionale e analisi dati avanzata"
  },
  {
    id: "coach-2",
    name: "Giulia Bianchi",
    title: "Coach | Specialista Tattica",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974",
    bio: "Focalizzata sull'ottimizzazione delle strategie di gioco attraverso l'analisi dei pattern"
  },
  {
    id: "coach-3",
    name: "Alessandro Verdi",
    title: "Preparatore Atletico",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070",
    bio: "Integra biomeccanica avanzata e monitoraggio delle performance fisiche"
  },
  {
    id: "coach-4",
    name: "Francesca Neri",
    title: "Mental Coach",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070",
    bio: "Specializzata nell'analisi dei pattern cognitivi e nella gestione della pressione agonistica"
  },
  {
    id: "coach-5",
    name: "Luca Marino",
    title: "Analista Dati",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2074",
    bio: "Sviluppa modelli predittivi per l'ottimizzazione delle performance individuali"
  },
  {
    id: "coach-6",
    name: "Claudia Romano",
    title: "Fisioterapista",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2034",
    bio: "Integra i dati biomeccanici nella prevenzione e recupero degli infortuni"
  }
];

const CoachesPage = () => {
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
          title="Team Tecnico ATH"
          subtitle="Professionisti specializzati nell'integrazione tra expertise tecnica e analisi avanzata dei dati"
          imageSrc="https://images.unsplash.com/photo-1551927336-09d50efd69cd?q=80&w=2069"
          fullHeight={false}
          overlayOpacity="medium"
          buttons={[
            { text: "Contattaci", href: '/contact' }
          ]}
        />
      
        <section className="py-16 px-6 lg:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display text-center mb-12">I Nostri Coach</h1>
            
            <div className="prose prose-lg max-w-4xl mx-auto mb-16">
              <p className="lead text-xl mb-6">
                Il team tecnico di ATH è composto da professionisti altamente qualificati, formati specificamente nell'utilizzo della tecnologia VICKI per massimizzare il potenziale di ogni atleta.
              </p>
              
              <p>
                Ogni coach ATH integra la propria metodologia personale con l'analisi oggettiva dei dati, creando percorsi personalizzati che garantiscono continuità ed efficacia nel processo evolutivo dell'atleta.
              </p>
            </div>
          </div>
        </section>
        
        <CoachesSection 
          title="Staff Tecnico"
          subtitle="Professionisti specializzati nell'integrazione tra expertise tecnica e analisi dei dati"
          coaches={coaches}
        />
        
        <section id="coaching-approach" className="py-16 px-6 lg:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display text-center mb-12">Approccio Tecnico</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Integrazione Tecnologica</h3>
                <p className="text-gray-700">Ogni coach utilizza VICKI come supporto all'approccio individuale, permettendo analisi oggettive e feedback immediati durante le sessioni.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Metodo Personalizzato</h3>
                <p className="text-gray-700">Il sistema permette ad ogni tecnico di codificare e applicare il proprio metodo, garantendo allo stesso tempo continuità metodologica nel percorso dell'atleta.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Formazione Continua</h3>
                <p className="text-gray-700">I nostri coach seguono un programma di aggiornamento costante sulle metodologie di allenamento e sull'utilizzo ottimale della tecnologia VICKI.</p>
              </div>
            </div>
          </div>
        </section>
        
        <AboutSection 
          title="Collabora con Noi"
          description="ATH è una rete aperta a coach e specialisti interessati a integrare tecnologia avanzata e metodologie d'allenamento. Contattaci per scoprire le possibilità di collaborazione."
          image="https://images.unsplash.com/photo-1529339944280-1a37d3d6fa8c?q=80&w=1000"
          buttons={[
            { text: "Contattaci", href: '/contact' }
          ]}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default CoachesPage;
