import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import VickiUnifiedBadge from '@/components/VickiUnifiedBadge';
import ContactSection from '@/components/ContactSection';
import ProgramDetails from '@/components/programs/ProgramDetails';
import ProgramFeaturesAndPricing from '@/components/programs/ProgramFeaturesAndPricing';
import ProgramWhyChoose from '@/components/programs/ProgramWhyChoose';
import RelatedPrograms from '@/components/programs/RelatedPrograms';

const ElitePerformanceFullProgram = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Load user preferences
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);

  const programDescription = [
    "L'Elite Performance Full rappresenta il programma più completo e intensivo di ATH, destinato ad atleti che mirano all'eccellenza assoluta nel tennis. Con 10 sessioni settimanali di tennis, distribuite tra mattina e pomeriggio, e 7 sessioni di preparazione atletica, questo programma offre oltre 30 ore settimanali di allenamento professionale.",
    "Limitato a massimo 2 atleti per campo, garantisce un livello di attenzione e personalizzazione paragonabile a un training individuale. La tecnologia VICKI™ monitora ogni aspetto dell'allenamento, permettendo aggiustamenti in tempo reale e un'ottimizzazione costante del percorso di sviluppo.",
    "Questo programma è concepito per giovani atleti con aspirazioni professionistiche e include un supporto completo per la partecipazione a tornei nazionali e internazionali. L'approccio olistico integra tutti gli aspetti necessari per formare un tennista di alto livello."
  ];

  const programFeatures = {
    title: "Caratteristiche del Programma",
    features: [
      "5 sessioni tennis mattina + 5 pomeriggio (totale 20 ore settimanali)",
      "7 sessioni atletica da 1,5 ore (10,5 ore settimanali)",
      "Massimo 2 atleti per campo",
      "40 settimane di allenamento",
      "Monitoraggio professionale avanzato con VICKI™",
      "Analisi video dettagliata quotidiana",
      "Programma di sviluppo completo personalizzato",
      "Supporto per pianificazione tornei",
      "Consulenza nutrizionale",
      "Supporto psicologico sportivo",
      "Report dettagliati settimanali"
    ]
  };

  const programPricing = {
    price: "€15.000",
    period: "per stagione (40 settimane)",
    notes: [
      "Possibilità di pagamento rateizzato. Contattaci per maggiori informazioni sui piani di pagamento."
    ],
    ctaText: "Richiedi informazioni",
    ctaLink: "/contact"
  };

  const whyChoose = {
    title: "Perché scegliere Elite Performance Full?",
    description: "Il programma Elite Performance Full rappresenta la soluzione definitiva per gli atleti agonisti che mirano a costruire una carriera tennistica professionale. È strutturato seguendo metodologie utilizzate nel circuito professionistico e adattate alle esigenze di sviluppo di ogni atleta.",
    benefits: [
      "Approccio professionale identico a quello utilizzato dai top players internazionali",
      "Attenzione altamente personalizzata con massimo 2 atleti per campo",
      "Monitoraggio avanzato con tecnologia VICKI™ di livello professionistico",
      "Team multidisciplinare dedicato alla crescita dell'atleta",
      "Percorso collaudato con storici di successo dimostrabili"
    ],
    ctaText: "Prenota una valutazione",
    ctaLink: "/contact"
  };

  const relatedPrograms = {
    title: "Programmi Correlati",
    programs: [
      {
        title: "Elite Performance",
        description: "5 giorni a settimana, ideale per atleti agonisti di alto livello che non possono ancora accedere a un percorso full-time.",
        link: "/programs/elite-performance"
      },
      {
        title: "Performance 4",
        description: "4 giorni a settimana, ideale per chi ha altri impegni ma vuole risultati concreti nel percorso agonistico.",
        link: "/programs/performance-4"
      },
      {
        title: "Performance 3",
        description: "3 giorni a settimana per un'intensità bilanciata, ideale per chi vuole risultati competitivi mantenendo altri impegni.",
        link: "/programs/performance-3"
      },
      {
        title: "Genitore/Tutor",
        description: "Programma di supporto per genitori e tutor di atleti tra i 6 e i 18 anni. Incluso nel programma Elite Performance Full.",
        link: "/programs/parent"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Elite Performance Full"
            subtitle="Programma completo (40 settimane)"
            imageSrc="https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?q=80&w=2071&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Elite Performance Full"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: 'PRENOTA UNA VALUTAZIONE', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: 'auto', minHeight: '400px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center py-8">
              <h2 className="text-white text-lg font-display mb-4">ELITE PERFORMANCE FULL:</h2>
              <p className="text-white text-lg font-swiss max-w-3xl mb-6">
                Offre la preparazione completa e collaudata che ha già portato numerosi nostri atleti al successo nei circuiti nazionali e internazionali.
              </p>
              <ul className="text-white space-y-3 font-swiss max-w-3xl">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>Eccellenza Tecnica:</strong> Analisi biomeccanica dettagliata di ogni colpo e movimento, con feedback immediato e perfezionamento del controllo delle traiettorie in ogni situazione di gioco.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>Preparazione Atletica:</strong> Programmi personalizzati con monitoraggio costante, ottimizzazione degli spostamenti e dominanza fisica nelle fasi critiche del match.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>Forza Mentale:</strong> Sviluppo delle abilità cognitive, gestione dello stress agonistico e capacità di reazione alle situazioni avverse sotto pressione.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>Tattica & Strategia:</strong> Analisi del gioco avversario, sviluppo di piani di partita personalizzati e adattamento tattico durante i match.</span>
                </li>
              </ul>
              <p className="text-white mt-6 font-swiss max-w-3xl">
                Tutto potenziato dalla tecnologia VICKI™ per un'analisi dettagliata della performance.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiUnifiedBadge level="pro" className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <ProgramDetails 
            title="Elite Performance Full"
            subtitle="Programma completo, 40 settimane all'anno."
            description={programDescription}
            userGender={userGender}
            userType={userType}
          />
          
          <ProgramFeaturesAndPricing 
            features={programFeatures}
            pricing={programPricing}
          />
          
          <ProgramWhyChoose 
            title={whyChoose.title}
            description={whyChoose.description}
            benefits={whyChoose.benefits}
            ctaText={whyChoose.ctaText}
            ctaLink={whyChoose.ctaLink}
          />
          
          <RelatedPrograms 
            title={relatedPrograms.title}
            programs={relatedPrograms.programs}
          />
        </div>
        
        <ContactSection 
          title="Vuoi saperne di più?" 
          subtitle="Contattaci per una valutazione"
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ElitePerformanceFullProgram;
