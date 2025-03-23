
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import ProgramsSection from '@/components/ProgramsSection';
import RevealAnimation from '@/components/RevealAnimation';

const JuniorProgram = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const juniorPrograms = [
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
      ]
    },
    {
      id: 'junior-competitive',
      title: 'Agonista Junior (13-18 anni)',
      description: 'Programma completo per giovani atleti che vogliono competere a livello agonistico.',
      image: 'https://images.unsplash.com/photo-1612458225454-41c3991c0c49?q=80&w=1973&auto=format&fit=crop',
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596987?h=c9dad61d03&autoplay=0&loop=1&title=0&byline=0&portrait=0&controls=0&background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
      link: '#',
      features: [
        'Analisi in tempo reale di tecnica, tattica, parametri mentali e fisici',
        'Feedback continuo (durante e dopo la sessione)',
        'Database personale per pianificare il calendario tornei',
        'Monitoraggio carico di lavoro e progressi'
      ]
    },
    {
      id: 'parent-support',
      title: 'Genitore/Tutor (Giovani e Junior Agonisti 6-18 anni)',
      description: 'Supporto informativo e coinvolgimento nel percorso di sviluppo del giovane atleta.',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop',
      vimeoEmbed: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068621034?h=7b8c99f420&autoplay=0&loop=1&title=0&byline=0&portrait=0&controls=0&background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
      link: '#',
      features: [
        'Accesso a report semplici e leggibili, con dati tecnici, fisici e mentali',
        'Possibilità di seguire in streaming allenamenti e partite',
        'Aggiornamenti regolari sull\'evoluzione tecnica e psico-fisica'
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="h-40 bg-gradient-to-b from-ath-clay to-ath-secondary flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-display text-white">{t('footer.junior')}</h1>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-display mb-6">{t('programs.junior')}</h2>
            <p className="text-lg mb-6">{t('programs.junior.desc')}</p>
            <p className="mb-4">
              Il nostro programma Junior è stato progettato per sviluppare giovani atleti dai 8 ai 18 anni, 
              fornendo loro le competenze tecniche, tattiche, fisiche e mentali necessarie per eccellere nel tennis competitivo.
            </p>
            <p>
              Utilizzando la tecnologia VICKI™, monitoriamo e analizziamo lo sviluppo di ogni atleta, 
              personalizzando il percorso formativo in base alle esigenze individuali e garantendo un progresso continuo e misurabile.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Allenamento tecnico personalizzato basato su dati oggettivi</li>
                <li>Sviluppo tattico progressivo adattato all'età e al livello</li>
                <li>Preparazione fisica integrata nel percorso tennistico</li>
                <li>Supporto mentale per la gestione della pressione agonistica</li>
                <li>Monitoraggio continuo dello sviluppo attraverso la piattaforma VICKI™</li>
                <li>Feedback dettagliati e regolari per atleti e genitori</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefici</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Sviluppo completo del potenziale tennistico</li>
                <li>Continuità metodologica indipendentemente dal coach presente</li>
                <li>Riduzione del rischio di infortuni attraverso una tecnica ottimizzata</li>
                <li>Maggiore efficacia nell'allenamento grazie ai dati oggettivi</li>
                <li>Costruzione di una solida fondazione per il tennis competitivo</li>
                <li>Coinvolgimento attivo dei genitori nel processo di sviluppo</li>
              </ul>
            </div>
          </div>
          
          <RevealAnimation delay={100}>
            <div className="mt-16">
              <h3 className="text-2xl font-display mb-8">I nostri programmi Junior</h3>
              <ProgramsSection 
                title="Programmi Junior"
                programs={juniorPrograms}
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
