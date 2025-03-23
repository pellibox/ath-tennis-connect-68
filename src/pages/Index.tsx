import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import CoachesSection from '@/components/CoachesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatsSection from '@/components/StatsSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import ContactSection from '@/components/ContactSection';
import TechnologySection from '@/components/TechnologySection';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';
import StatsAndNavSection from '@/components/StatsAndNavSection';
import UserTypeSelector, { UserGender, UserType } from '@/components/UserTypeSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const HomePage = () => {
  // Get translation function
  const { t } = useLanguage();
  
  // User selection state
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [showSelector, setShowSelector] = useState(false);
  
  // Smooth scroll functionality
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Determine which Vimeo video to show based on user selection
  const getVimeoEmbed = () => {
    // Default video (male)
    let videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596952?h=b7fa539b1c&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Junior male 2"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    
    // Change based on gender
    if (userGender === 'female') {
      videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596920/7f23339d4b?h=b7fa539b1c&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
    
    // If professional, use professional video
    if (userType === 'professional') {
      videoEmbed = `<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596901/2ac5605207a?h=b7fa539b1c&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Professional"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
    
    return videoEmbed;
  };

  // Handle user type selection
  const handleUserSelection = (gender: UserGender, type: UserType) => {
    setUserGender(gender);
    setUserType(type);
    setShowSelector(false);
    
    // Scroll smoothly down after selection
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }, 500);
  };

  // Coach video embed
  const coachVimeoEmbed = `<div style="padding:133.33% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068604216?h=db6df002bf&autoplay=0&loop=1&background=1&autopause=0&player_id=0&app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Coaches"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;

  // Filter programs based on user type
  const filterContentForUserType = (type: UserType | null) => {
    // Show all programs by default
    if (!type) return null;
    
    // Map user types to relevant content
    const userTypeMap: Record<UserType, string[]> = {
      junior: ['Agonisti 6-12 anni', 'Junior 13-18 anni'],
      performance: ['Agonisti 6-12 anni', 'Junior 13-18 anni', 'Percorsi Specifici'],
      professional: ['Professionisti', 'Percorsi Specifici'],
      coach: ['Coaching a Distanza'],
      parent: ['Agonisti 6-12 anni', 'Junior 13-18 anni']
    };
    
    return userTypeMap[type];
  };

  // Programmi aggiornati con descrizioni tecniche più concise
  const programs = [
    {
      id: '1',
      title: 'Agonisti 6-12 anni',
      description: 'Programma specializzato per giovani agonisti con monitoraggio completo dello sviluppo tecnico.',
      image: '/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png',
      videoSrc: '/videos/young-athlete-sample.mp4', // Placeholder for future video
      link: '/programs/agonisti',
      features: [
        'Sviluppo tecnico fondamentale',
        'Coordinazione specifica per età',
        'Approccio mentale adeguato'
      ]
    },
    {
      id: '2',
      title: 'Junior 13-18 anni',
      description: 'Percorso tecnico-tattico per adolescenti con analisi dati per ottimizzare la progressione.',
      image: 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3',
      link: '/programs/junior',
      features: [
        'Perfezionamento tecnico avanzato',
        'Preparazione fisica specifica',
        'Sviluppo autonomia decisionale'
      ]
    },
    {
      id: '3',
      title: 'Professionisti',
      description: 'Programma per atleti professionisti con analisi completa e ottimizzazione della performance.',
      image: 'https://images.unsplash.com/photo-1622279888158-c6a5e6c4587c',
      link: '/programs/pro',
      features: [
        'Analisi multidimensionale',
        'Ottimizzazione performance',
        'Pianificazione stagione agonistica'
      ]
    },
    {
      id: '4',
      title: 'Adulti',
      description: 'Programmi per giocatori amatoriali con supporto tecnologico personalizzato.',
      image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff',
      link: '/programs/adult',
      features: [
        'Lezioni individuali e gruppi',
        'Affitto campi con analisi',
        'Clinics tematiche'
      ]
    },
    {
      id: '5',
      title: 'Coaching a Distanza',
      description: 'Supporto remoto continuo con analisi video, feedback tecnici e programmi personalizzati.',
      image: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa',
      link: '/programs/remote',
      features: [
        'Analisi video dettagliata',
        'Feedback tecnici periodici',
        'Programmi personalizzati'
      ]
    },
    {
      id: '6',
      title: 'Percorsi Specifici',
      description: 'Preparazione intensiva per obiettivi mirati con protocolli personalizzati e monitoraggio.',
      image: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece',
      link: '/programs/specific',
      features: [
        'Preparazione tornei',
        'Recupero tecnico/fisico post-infortunio',
        'Valutazioni approfondite'
      ]
    },
  ];

  // Filter programs based on user type
  const filteredPrograms = () => {
    const relevantPrograms = filterContentForUserType(userType);
    if (!relevantPrograms) return programs;
    
    return programs.filter(program => 
      relevantPrograms.includes(program.title)
    );
  };

  // Dati aggiornati degli allenatori con focus sulle competenze tecniche
  const coaches = [
    {
      id: '1',
      name: 'Marco Rossi',
      title: 'Head Coach',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136',
      vimeoEmbed: coachVimeoEmbed,
      bio: 'Certificazione ITF Livello 3. Specializzato in analisi biomeccanica e integrazione dati VICKI.'
    },
    {
      id: '2',
      name: 'Sofia Garcia',
      title: 'Junior Development Coach',
      image: 'https://images.unsplash.com/photo-1615109398623-88346a601842',
      bio: 'Esperta nello sviluppo atletico giovanile. Integra metodologie tecniche con crescita psicofisica.'
    },
    {
      id: '3',
      name: 'David Chen',
      title: 'Performance Specialist',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
      bio: 'Specialista in preparazione atletica tennistica con focus su prevenzione infortuni e ottimizzazione.'
    },
  ];

  // Testimonianze più dirette e tecniche
  const testimonials = [
    {
      id: '1',
      quote: "L'analisi oggettiva di ATH ha migliorato significativamente i miei parametri tecnici. I dati raccolti hanno permesso un'ottimizzazione precisa del mio gioco.",
      author: 'Emma Martins',
      role: 'Giocatore Junior, 16'
    },
    {
      id: '2',
      quote: "L'integrazione tra coaching tradizionale e sistema VICKI ha migliorato la mia consistenza del 23% in tre mesi, con rilevamenti oggettivi delle performance.",
      author: 'Michael Johnson',
      role: 'Giocatore Professionista'
    },
    {
      id: '3',
      quote: 'Il monitoraggio parametrico ha evidenziato inefficienze tecniche nel mio servizio che nessun coach aveva identificato prima, permettendomi correzioni mirate.',
      author: 'Robert Chen',
      role: 'Membro del Programma per Adulti'
    },
  ];

  // Updated stats to include hours monitored
  const stats = [
    {
      id: '1',
      value: 6,
      label: 'Campi'
    },
    {
      id: '2',
      value: 70,
      suffix: '+',
      label: 'Parametri Monitorati'
    },
    {
      id: '3',
      value: 7000,
      suffix: '+',
      label: 'Ore Monitorate a Stagione'
    },
    {
      id: '4',
      value: 1,
      label: 'Primo Centro al Mondo'
    },
  ];

  // Updated facilities with Players Lounge and Headquarters
  const facilities = [
    {
      id: '1',
      title: 'Campo Centrale ATP',
      description: 'Campo principale con sistema Vicki™ integrato, tribuna spettatori e standard ATP per tornei internazionali.',
      image: '/lovable-uploads/d4ba3935-f901-4a99-972b-6a86e47787db.png',
      features: [
        'Dimensioni ATP standard',
        'Illuminazione LED ad alta efficienza',
        'Condizionamento e ventilazione ottimizzati'
      ]
    },
    {
      id: '2',
      title: 'Campi in Superficie Veloce',
      description: 'Due campi in superficie sintetica con coefficiente di attrito standardizzato e sistema di tracciamento Vicki™ integrato.',
      image: '/lovable-uploads/f9c89e9c-6847-411b-b1f9-e208caf726b4.png',
      features: [
        'N1 campo coperto tutto l\'anno N1 campo con copetura rimuovibile',
        'Illuminazione led per sessioni serali',
        'Tecnologia Vicki™'
      ]
    },
    {
      id: '3',
      title: 'Campi in Terra Rossa',
      description: 'Quattro campi in terra rossa calibrata, con manutenzione quotidiana e rilevamento parametrico Vicki™ completo.',
      image: '/lovable-uploads/a16b623a-92f5-4f89-9c3d-d01262778f95.png',
      features: [
        'Manutenzione quotidiana professionale',
        'Calibrazione personalizzata della superficie',
        'Sistema Vicki™ completo'
      ]
    },
    {
      id: '4',
      title: 'Centro Performance',
      description: 'Area dedicata all\'analisi dati e preparazione fisica, con strumentazione per valutazioni biomeccaniche e recupero.',
      image: '/lovable-uploads/b0cf5344-de4c-404e-9c7b-916d765a8df0.png',
      features: [
        'Attrezzature biomeccaniche avanzate',
        'Zona training funzionale',
        'Analisi e monitoraggio in tempo reale',
        'Design minimalista ed efficiente'
      ]
    },
    {
      id: '5',
      title: 'Strutture per Giocatori',
      description: 'Spazi dedicati con connessione diretta al sistema Vicki™ per revisione dati, analisi video e pianificazione sessioni.',
      image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=1920'
    },
    {
      id: '6',
      title: 'Players Lounge',
      description: 'Area esclusiva di relax per atleti con monitor per analisi dati, connessione al sistema Vicki™ e ambiente premium.',
      image: '/lovable-uploads/a39367a8-2cd2-4dca-88ac-68898efc50da.png',
      features: [
        'Postazioni multimediali integrate',
        'Area relax ergonomica',
        'Connessione diretta al sistema di analisi',
        'Design moderno e funzionale'
      ]
    },
    {
      id: '7',
      title: 'Headquarters',
      description: 'Edificio principale con architettura contemporanea, reception, uffici amministrativi e sale riunioni per il team tecnico.',
      image: '/lovable-uploads/38147937-4cd3-4caa-9a19-c801e8255f36.png',
      features: [
        'Design architettonico all\'avanguardia',
        'Spazi amministrativi e direzionali con sistemi di visualizzazione dei campi',
        'Video analisi con Vicki™ in stanze dedicate',
        'Spogliatoi e aree recovery con ice bath, sauna e bagno turco',
        'Ristorante con dehor e vista su campo centrale',
        'Aree direzionali, locali medici e proshop'
      ]
    },
  ];
  
  // Custom welcome message based on user type
  const getWelcomeMessage = () => {
    if (!userType) return "Centro di allenamento ad alta specializzazione con monitoraggio parametrico completo e metodologia integrata";
    
    const messages = {
      junior: "Percorsi specializzati per giovani tennisti con supporto tecnologico completo",
      performance: "Ottimizzazione parametrica completa per agonisti di alto livello",
      professional: "Analisi avanzata e supporto integrato per atleti professionisti",
      coach: "Strumenti di analisi professionali per supportare la tua metodologia",
      parent: "Supporto completo per la crescita tennistica dei giovani atleti"
    };
    
    return messages[userType];
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Advanced Tennis Hub"
            subtitle={getWelcomeMessage()}
            vimeoEmbed={getVimeoEmbed()}
            imageSrc="/lovable-uploads/6ea13aa7-2578-488b-8ed4-4b17fc2ddc4e.png"
            buttons={[
              { text: "Programmi", href: '/programs' },
              { text: "Contattaci", href: '/contact', variant: 'outline' }
            ]}
            overlayOpacity="medium"
            contentVerticalPosition="bottom"
            contentPosition="center"
            subtitlePosition="bottom"
          />
          
          {/* User Selection Overlay - Positioned at 3/4 from the top */}
          {!userType && (
            <div className="absolute top-3/4 left-0 right-0 flex justify-center px-4 z-20">
              {showSelector ? (
                <UserTypeSelector onSelectionComplete={handleUserSelection} />
              ) : (
                <button 
                  onClick={() => setShowSelector(true)}
                  className="bg-white hover:bg-white/90 text-ath-clay px-8 py-4 rounded-xl text-lg font-medium shadow-lg transition-all hover:shadow-xl"
                >
                  Dimmi chi sei
                </button>
              )}
            </div>
          )}
        </div>
        
        <StatsAndNavSection stats={stats} />
        
        <AboutSection 
          title="Chi Siamo"
          subtitle="ATH - Advanced Tennis Hub"
          description={
            <div className="space-y-4">
              <p>ATH è un centro di allenamento specializzato che integra tecnologia avanzata e metodologia strutturata per offrire percorsi evolutivi personalizzati basati su dati oggettivi.</p>
              <p>Il sistema di monitoraggio parametrico garantisce continuità metodologica e supporto tecnico costante, indipendentemente dal coach presente in campo.</p>
              <p>La struttura costituisce una rete professionale aperta a coach, atleti e specialisti per ottimizzare il processo evolutivo tennistico attraverso un metodo oggettivo e misurabile.</p>
            </div>
          }
          image="/lovable-uploads/9e980860-a20e-4ae3-839c-6d91f306bd07.png"
          buttons={[
            { text: "Scopri di più", href: '/about' }
          ]}
        />
        
        <ProgramsSection 
          title="Programmi"
          subtitle="Percorsi personalizzati con monitoraggio parametrico completo"
          programs={filteredPrograms()}
          className="bg-ath-gray"
          gridLayout="dense"
        />
        
        <TechnologySection 
          title="Tecnologia VICKI"
          subtitle="Sistema di analisi con visione artificiale, AI e tracciamento 3D che analizza oltre 70 parametri in tempo reale"
        />
        
        <FacilitiesSection 
          title="Strutture"
          subtitle="Campi e spazi dotati di tecnologia Vicki™ per allenamento, analisi e ottimizzazione"
          facilities={facilities}
        />
        
        <CoachesSection 
          title="Coach e Staff"
          subtitle="Team tecnico specializzato nell'integrazione tra metodologia tradizionale e sistema Vicki™"
          coaches={coaches}
        />
        
        <TestimonialsSection 
          title="Riscontri Oggettivi"
          subtitle="Risultati misurabili ottenuti attraverso il sistema di monitoraggio parametrico"
          testimonials={testimonials}
        />
        
        <AboutSection 
          title="Il Metodo ATH"
          description={
            <div className="space-y-4">
              <p>Il metodo ATH si basa su parametri oggettivi ottenuti attraverso tecnologia avanzata per guidare scientificamente il percorso evolutivo di ogni atleta.</p>
              <p>L'approccio integra tecnica, fisico, tattica, mentale e salute, garantendo continuità metodologica indipendentemente dal coach in campo.</p>
              <p>Ogni atleta riceve un supporto evolutivo costante con analisi dettagliate, feedback immediati e programmi personalizzati basati su dati misurabili.</p>
            </div>
          }
          image="/lovable-uploads/fc6643c2-4357-4c86-9e52-6f33d698668f.png"
          buttons={[
            { text: "Contattaci", href: '/contact' }
          ]}
          reversed={true}
        />
        
        <JoinRevolutionSection />
        
        <ContactSection 
          title="Contatti"
          subtitle="Richiedi informazioni tecniche o prenota una sessione di valutazione"
          address="Via del Tennis 123, 20873 Rodano (MI)"
          phone="+39 02 1234567"
          email="info@ath-tennis.it"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
