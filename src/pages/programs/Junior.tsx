import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import ProgramsSection from '@/components/ProgramsSection';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import Hero from '@/components/Hero';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';

const JuniorProgram = () => {
  const { t } = useLanguage();
  const [userProfile, setUserProfile] = useState<{ gender: UserGender | null, type: UserType | null }>({ gender: null, type: null });
  const [vimeoEmbed, setVimeoEmbed] = useState<string>('');
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Carica le preferenze dell'utente
    const preferences = loadUserPreferences();
    setUserProfile(preferences);
    
    // Set video based on user type
    if (preferences.type === 'junior') {
      setVimeoEmbed('<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596987?h=c9dad61d03&autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Junior Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>');
    }
  }, []);

  // Definisci i programmi junior di base
  const getJuniorPrograms = () => {
    const basePrograms = [
      {
        id: 'talent-id',
        title: 'Scuola Individuazione Talenti (4-10 anni)',
        description: 'Programma specializzato per l\'identificazione precoce dei talenti tennistici tramite il sistema Vicki™.',
        image: 'https://images.unsplash.com/photo-1596463059283-da257325bab8?q=80&w=2070&auto=format&fit=crop',
        vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068618561?h=f1a4f80a91&autoplay=0&loop=1&title=0&byline=0&portrait=0&controls=0&background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
        link: '#',
        features: [
          'Valutazione iniziale con sistema Vicki™ che monitora pattern motori e attitudinali',
          'Approccio ludico e divertente all\'apprendimento tecnico',
          'Monitoraggio dello sviluppo fisico e delle attitudini con parametri oggettivi'
        ],
        monitoringLevel: 'basic' as MonitoringLevel
      },
      {
        id: 'junior-competitive',
        title: 'Agonista Junior (6-12 anni)',
        description: 'Programma formativo per giovani atleti in fase di sviluppo tecnico e fisico.',
        image: 'https://images.unsplash.com/photo-1612458225454-41c3991c0c49?q=80&w=1973&auto=format&fit=crop',
        vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596987?h=c9dad61d03&autoplay=0&loop=1&title=0&byline=0&portrait=0&controls=0&background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
        link: '#',
        features: [
          'Valutazioni tecniche, fisiche, mentali e tattiche costanti',
          'Analisi biomeccanica in campo',
          'Monitoraggio crescita per evitare sovraccarichi',
          'Programmi adattati all\'età e all\'evoluzione motoria'
        ],
        monitoringLevel: 'advanced' as MonitoringLevel
      },
      {
        id: 'parent-support',
        title: 'Genitore/Tutor (Giovani e Junior Agonisti 6-18 anni)',
        description: 'Supporto informativo e coinvolgimento nel percorso di sviluppo del giovane atleta.',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop',
        vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068621034?h=7b8c99f420&ts=0&autoplay=0&loop=1&title=0&byline=0&portrait=0&controls=0&background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
        link: '#',
        features: [
          'Accesso a report semplici e leggibili, con dati tecnici, fisici e mentali',
          'Possibilità di seguire in streaming allenamenti e partite',
          'Aggiornamenti regolari sull\'evoluzione tecnica e psico-fisica'
        ],
        monitoringLevel: 'basic' as MonitoringLevel
      }
    ];
    
    // Personalizza in base al profilo dell'utente
    if (userProfile.type === 'parent') {
      // Evidenzia il programma per genitori
      return basePrograms.map(program => 
        program.id === 'parent-support' 
          ? {...program, image: 'https://images.unsplash.com/photo-1534367990512-edbdca781b00?q=80&w=2070&auto=format&fit=crop'} 
          : program
      );
    } else if ((userProfile.type === 'junior' || userProfile.type === 'performance') && userProfile.gender === 'female') {
      // Personalizza per atlete femminili (junior o performance)
      return basePrograms.map(program => 
        program.id === 'junior-competitive'
          ? {...program, image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop'}
          : program
      );
    }
    
    return basePrograms;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title={t('footer.junior')}
            subtitle="Sviluppo completo di giovani atleti in un ambiente innovativo e stimolante"
            vimeoEmbed={vimeoEmbed}
            imageSrc={vimeoEmbed ? undefined : "https://images.unsplash.com/photo-1612458225454-41c3991c0c49?q=80&w=1973&auto=format&fit=crop"}
            buttons={[
              { text: 'PRENOTA UNA PROVA', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          {/* Black banner with claim text - matching Method page style */}
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">JUNIOR:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Sviluppo completo di giovani atleti in un ambiente innovativo e stimolante
                </p>
              </div>
              <div className="mt-4">
                <VickiMonitoringBadge level="advanced" className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-display">{t('programs.junior')}</h2>
                <VickiMonitoringBadge level="advanced" />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6">{t('programs.junior.desc')}</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4">
                Il nostro programma Junior è stato progettato per sviluppare giovani atleti dai 8 ai 18 anni, 
                fornendo loro le competenze tecniche, tattiche, fisiche e mentali necessarie per eccellere nel tennis competitivo.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p>
                Utilizzando la tecnologia VICKI™, monitoriamo e analizziamo lo sviluppo di ogni atleta, 
                personalizzando il percorso formativo in base alle esigenze individuali e garantendo un progresso continuo e misurabile.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Allenamento tecnico personalizzato basato su dati oggettivi</li>
                <li>Sviluppo tattico progressivo adattato all'età e al livello</li>
                <li>Preparazione fisica integrata nel percorso tennistico</li>
                <li>Supporto mentale per la gestione della pressione agonistica</li>
                <li>Monitoraggio continuo dello sviluppo attraverso la piattaforma VICKI™</li>
                <li>Feedback dettagliati e regolari per atleti e genitori</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefici</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Sviluppo completo del potenziale tennistico</li>
                <li>Continuità metodologica indipendentemente dal coach presente</li>
                <li>Riduzione del rischio di infortuni attraverso una tecnica ottimizzata</li>
                <li>Maggiore efficacia nell'allenamento grazie ai dati oggettivi</li>
                <li>Costruzione di una solida fondazione per il tennis competitivo</li>
                <li>Coinvolgimento attivo dei genitori nel processo di sviluppo</li>
              </ul>
            </RevealAnimation>
          </div>
          
          <RevealAnimation delay={100}>
            <div className="mt-16">
              <h3 className="text-2xl font-display mb-8">I nostri programmi Junior</h3>
              <ProgramsSection 
                title="Programmi Junior"
                programs={getJuniorPrograms()}
                gridLayout="dense"
              />
            </div>
          </RevealAnimation>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JuniorProgram;
