
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import ContactSection from '@/components/ContactSection';
import { Badge } from "@/components/ui/badge";
import RelatedPrograms from '@/components/programs/RelatedPrograms';
import ProgramOffers from '@/components/programs/parent-tutor/ProgramOffers';
import ProgramPricing from '@/components/programs/parent-tutor/ProgramPricing';
import ProgramBenefits from '@/components/programs/parent-tutor/ProgramBenefits';
import TechnologySupport from '@/components/programs/parent-tutor/TechnologySupport';
import { useIsMobile } from '@/hooks/use-mobile';

const ParentTutorProgram = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);

  const programOffers = [
    {
      title: 'Supporto tecnologico:',
      description: 'Report intuitivi, streaming di allenamenti e partite, analisi statistiche semplificate'
    },
    {
      title: 'Formazione continua:',
      description: 'Workshop periodici, incontri individuali e materiali formativi'
    },
    {
      title: 'Strumenti pratici:',
      description: 'Guide alla comunicazione efficace, checklist pre-torneo, diario di bordo'
    },
    {
      title: 'Competenze specifiche:',
      description: 'Gestione delle emozioni legate alle competizioni, comunicazione costruttiva con coach e atleti'
    },
    {
      title: 'Comunità di supporto:',
      description: 'Rete di genitori con esperienze simili, moderata da esperti del settore'
    }
  ];

  const programInclusions = [
    { text: '4 workshop formativi durante l\'anno' },
    { text: '2 incontri di gruppo con il mental coach' },
    { text: 'Accesso alla piattaforma Vicki™ per genitori' },
    { text: 'Materiali educativi e risorse dedicate' }
  ];

  const techSupportFeatures = [
    {
      title: 'Report semplificati',
      description: 'Visualizzazione chiara e comprensibile dei dati tecnici, fisici e mentali dell\'atleta, con focus sui progressi e sulle aree di miglioramento.'
    },
    {
      title: 'Streaming delle sessioni',
      description: 'Possibilità di seguire in diretta o in differita gli allenamenti e le partite, con accesso a statistiche e analisi in tempo reale.'
    },
    {
      title: 'Comunicazione diretta',
      description: 'Canale privilegiato di comunicazione con il team tecnico, per aggiornamenti costanti e allineamento sugli obiettivi dell\'atleta.'
    }
  ];

  const programBenefits = [
    'Miglioramento della comunicazione genitore-atleta',
    'Comprensione approfondita del percorso tennistico',
    'Gestione efficace dello stress competitivo',
    'Creazione di un ambiente di supporto ottimale',
    'Equilibrio tra ambizioni sportive e benessere generale',
    'Costruzione di una collaborazione positiva con i coach'
  ];

  const relatedPrograms = [
    {
      title: "SAT - Scuola Avviamento al Tennis",
      description: "Un viaggio entusiasmante alla scoperta del tennis, per bambini dai 4 ai 10+ anni.",
      link: "/programs/sat"
    },
    {
      title: "SIT - Scuola Individuazione Talenti",
      description: "Programma specializzato per l'identificazione precoce dei talenti tennistici (6-10+ anni).",
      link: "/programs/talent-identification"
    },
    {
      title: "Performance 4",
      description: "Programma intensivo con 4 giorni di allenamento settimanale per giovani atleti agonisti.",
      link: "/programs/performance-4"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Genitore/Tutor"
            subtitle="Programma di supporto per genitori e tutor di atleti tra i 6 e i 18 anni"
            imageSrc="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068629360?h=46b5c52b31&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Parent Tutor Program"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: 'RICHIEDI INFORMAZIONI', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-10 md:py-16 px-4">
            <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
              <h2 className="text-white text-lg font-display mb-2 md:mb-4">PROGRAMMA GENITORE/TUTOR:</h2>
              <p className="text-white text-base md:text-lg font-swiss max-w-3xl">
                Un programma innovativo creato da mental coach specializzati per supportare i genitori e tutori di giovani tennisti nel loro ruolo fondamentale di accompagnamento sportivo.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge variant="ath" className="text-white">Vicki™ report and stream</Badge>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16">
          <div className="mb-8 md:mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-4 md:mb-6">
                <h2 className={`${isMobile ? "text-xl" : "text-3xl"} font-swiss`}>Genitore/Tutor (Giovani e Junior Agonisti 6-18 anni)</h2>
                <Badge variant="ath" className="text-white">Vicki™ report and stream</Badge>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className={`${isMobile ? "text-base" : "text-lg"} mb-4 md:mb-6 font-swiss`}>Programma creato da mental coach specializzati per supportare correttamente l'atleta nel suo percorso formativo.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-3 md:mb-4 font-swiss text-sm md:text-base">
                Il programma combina tecnologia avanzata e supporto psicopedagogico per creare un ambiente positivo che bilanci ambizioni sportive e benessere psicofisico dei giovani atleti. 
                Attraverso la tecnologia VICKI™, i genitori hanno accesso a report semplificati e comprensibili che illustrano i progressi tecnici, fisici e mentali dei ragazzi.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="mb-3 md:mb-4 font-swiss text-sm md:text-base">
                Questo programma riconosce l'importanza della sinergia tra famiglia e staff tecnico, fornendo ai genitori tutti gli strumenti necessari per accompagnare efficacemente i giovani 
                nel loro percorso tennistico, creando un ambiente stimolante e bilanciato che favorisce sia la crescita sportiva che personale.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={250}>
              <p className="font-swiss mb-3 md:mb-4 text-sm md:text-base">
                Incluso nei percorsi Elite Performance e Elite Performance Full, e disponibile come opzione a pagamento per gli altri programmi,
                questo programma rappresenta un elemento fondamentale dell'approccio olistico di ATH allo sviluppo dei giovani tennisti,
                riconoscendo il ruolo cruciale dei genitori nel percorso sportivo dei ragazzi.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-8 md:mb-12">
            <ProgramOffers offers={programOffers} />
            
            <ProgramPricing 
              includedPrograms="Nei programmi Elite Performance e Elite Performance Full"
              regularPrice="€150/anno"
              regularPriceDescription="Per tutti gli altri programmi"
              inclusions={programInclusions}
              documentUrl="/documents/programma-genitore-tutor.pdf"
            />
          </div>
          
          <ProgramBenefits 
            title="I Benefici del Programma Genitore/Tutor"
            description="Il nostro programma offre numerosi vantaggi sia per i genitori che per i giovani atleti:"
            benefits={programBenefits}
            ctaText="Contattaci per maggiori informazioni"
            ctaLink="/contact"
          />
          
          <RevealAnimation delay={450}>
            <RelatedPrograms 
              title="Programmi Correlati"
              programs={relatedPrograms}
            />
          </RevealAnimation>
        </div>
        
        <TechnologySupport 
          title="Il supporto tecnologico per i genitori"
          subtitle="Monitoraggio e comunicazione avanzati"
          features={techSupportFeatures}
        />
        
        <ContactSection 
          title="Vuoi saperne di più?" 
          subtitle="Contattaci per informazioni sul programma Genitore/Tutor"
          address="Via F. Turati, 9, 20090 Rodano MI, Italia"
          email="info@ath.tennis"
          phone="+39 02 1234567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ParentTutorProgram;
