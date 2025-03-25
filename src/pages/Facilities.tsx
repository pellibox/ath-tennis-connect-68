import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FacilitiesSection from '@/components/FacilitiesSection';
import AboutSection from '@/components/AboutSection';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';
import AnimatedLogo from '@/components/facilities/AnimatedLogo';
import FacilitiesHero from '@/components/facilities/FacilitiesHero';
import FacilitiesHeroTitle from '@/components/facilities/FacilitiesHeroTitle';
import FacilitiesIntro from '@/components/facilities/FacilitiesIntro';
import ServicesSection from '@/components/facilities/ServicesSection';

const facilities = [
  {
    id: "facility-1",
    title: "Campo Centrale ATP",
    description: "Campo principale con tribuna spettatori e standard ATP per tornei internazionali.",
    image: "/lovable-uploads/d4ba3935-f901-4a99-972b-6a86e47787db.png",
    features: [
      "Dimensioni ATP standard",
      "Illuminazione LED ad alta efficienza"
    ],
    vimeoEmbed: `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;width:100%;"><iframe src="https://player.vimeo.com/video/1068880352?h=4d6b04576c&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="ATH Campo Centrale Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
  },
  {
    id: "facility-2",
    title: "Campi in Superficie Veloce",
    description: "Due campi in superficie sintetica con coefficiente di attrito standardizzato e sistema di tracciamento Vicki™ integrato.",
    image: "/lovable-uploads/f9c89e9c-6847-411b-b1f9-e208caf726b4.png",
    features: [
      "N1 campo coperto tutto l'anno",
      "N1 campo con copetura rimuovibile",
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
      "Vicki™ powered Court"
    ]
  },
  {
    id: "facility-padel",
    title: "Campi Padel",
    description: "Due campi da padel con standard internazionali, illuminazione LED e tecnologia di tracciamento Vicki™.",
    image: "/lovable-uploads/ca117fb6-0c83-4d3a-865b-e3a4b5b743a7.png",
    features: [
      "N2 campi con standard internazionali",
      "Pareti in cristallo temperato",
      "Illuminazione LED di ultima generazione",
      "Vicki™ powered Court"
    ]
  },
  {
    id: "facility-pickleball",
    title: "Campo Pickleball",
    description: "Campo da pickleball professionale con superficie di gioco premium e tecnologia di tracciamento integrata.",
    image: "/lovable-uploads/c4c120e8-c90d-48a3-933c-d4cce08b5129.png",
    features: [
      "Superficie professionale certificata",
      "Dimensioni regolamentari ufficiali",
      "Sistema di tracciamento Vicki™",
      "Illuminazione ottimizzata"
    ]
  },
  {
    id: "facility-touch",
    title: "Campo Touch Tennis",
    description: "Campo specializzato per touch tennis, ideale per allenamento tecnico di precisione e sviluppo delle abilità di tocco.",
    image: "/lovable-uploads/f55d3f98-ba82-4220-81ac-86540f2b2862.png",
    features: [
      "Superficie studiata per gioco di precisione",
      "Dimensioni ottimizzate per sviluppo tecnico",
      "Ideale per allenamento di controllo e tocco",
      "Analisi tecnica con sistema Vicki™"
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
      "Postazioni video per streaming on court con analisi dati",
      "Area relax ergonomica",
      "Connessione diretta al sistema di analisi",
      "Reception e assistenza dedicata"
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
    ],
    vimeoEmbed: `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;width:100%;"><iframe src="https://player.vimeo.com/video/1068882045?h=ec85ec8e85&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="ATH Headquarters Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`
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

  const facilitiesVimeoEmbed = `<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;width:100%;"><iframe src="https://player.vimeo.com/video/1068878064?h=2b90638be1&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="ATH Facilities Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <AnimatedLogo />
      
      <Header />
      
      <main className="flex-grow font-swiss relative" style={{ marginTop: '80px' }}>
        <FacilitiesHero vimeoEmbed={facilitiesVimeoEmbed} />
        
        <FacilitiesHeroTitle />
        
        <FacilitiesIntro />
        
        <FacilitiesSection 
          title="Impianti"
          subtitle="Strutture progettate per massimizzare l'efficacia del metodo ATH e della tecnologia Vicki™"
          facilities={facilities}
          className="relative z-10 pt-0 mt-0"
        />
        
        <ServicesSection />
        
        <JoinRevolutionSection className="relative z-10" />
        
        <AboutSection 
          title="Tecnologia e Ambiente"
          description="ATH combina innovazione tecnologica e attenzione all'ambiente, utilizzando soluzioni sostenibili per l'illuminazione, il riscaldamento e la gestione delle risorse. I nostri campi da tennis sono integrati armoniosamente con l'ambiente naturale circostante."
          image="/lovable-uploads/dffc3218-3307-465f-b953-635b8789ae9e.png"
          buttons={[
            { text: "Prenota ora", href: '/contact' }
          ]}
          accent="clay"
          elegant={true}
          className="relative z-10"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default FacilitiesPage;
