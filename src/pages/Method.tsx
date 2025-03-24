import { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { loadUserPreferences, UserGender, UserType } from '@/components/UserTypeSelector';
import RevealAnimation from '@/components/RevealAnimation';
import Logo from '@/components/Logo';

const MethodPage = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [logoYOffset, setLogoYOffset] = useState<number>(0);
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  
  useEffect(() => {
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      setLogoYOffset(scrollY * 0.2);
      
      const fadeThreshold = 100;
      const fadeOutBy = 300;
      
      if (scrollY > fadeThreshold) {
        const opacity = Math.max(0, 1 - (scrollY - fadeThreshold) / (fadeOutBy - fadeThreshold));
        setLogoOpacity(opacity);
      } else {
        setLogoOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getVimeoEmbed = () => {
    let videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596952?h=b7fa539b1c&autoplay=1&loop=1&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ATH Main Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    
    if (userGender === 'female') {
      videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/867339842?h=5ecc384219&autoplay=1&loop=1&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      
      if (userType === 'professional') {
        videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596920?h=7f23339d4b&autoplay=1&loop=1&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Professional"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      } 
      else if (userType === 'performance') {
        videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596969?h=9bbee986ef&autoplay=1&loop=1&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Female Performance"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
      }
    }
    
    if (userGender === 'male' && userType === 'professional') {
      videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068596901?h=2ac5605207&autoplay=1&loop=1&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Male Professional"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
    
    if (userType === 'coach') {
      videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068604198?h=07d9021fd2&autoplay=1&loop=1&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Coach"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
    
    if (userType === 'parent') {
      videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068629360?h=46b5c52b31&autoplay=1&loop=1&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Parent"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
    }
    
    return videoEmbed;
  };

  const getPersonalizedMethodDescription = () => {
    if (!userType) {
      return "Il Metodo ATH è un sistema integrato che unisce tecnologia avanzata e coaching esperto";
    }

    switch (userType) {
      case 'junior':
        return "Il Metodo ATH per giovani tennisti combina divertimento e apprendimento tecnico con monitoraggio dello sviluppo";
      case 'performance':
        return "Il Metodo ATH per agonisti offre analisi avanzata e ottimizzazione della performance per competizioni di alto livello";
      case 'professional':
        return "Il Metodo ATH per professionisti garantisce un'analisi completa e integrazione di tutti gli aspetti della performance";
      case 'coach':
        return "Il Metodo ATH per coach fornisce strumenti avanzati di analisi e supporto per sviluppare una metodologia efficace";
      case 'parent':
        return "Il Metodo ATH per genitori offre supporto e trasparenza nel percorso di sviluppo del giovane atleta";
      default:
        return "Il Metodo ATH è un sistema integrato che unisce tecnologia avanzata e coaching esperto";
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <div 
        className="fixed top-[calc(25%-100px)] left-1/2 transform -translate-x-1/2 z-50 w-40 h-40 pointer-events-none transition-opacity duration-300"
        style={{
          transform: `translate(-50%, -${logoYOffset}px)`,
          opacity: logoOpacity
        }}
      >
        <Logo 
          onDarkBackground={true} 
          className="w-full h-full"
        />
      </div>
      
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
          <div dangerouslySetInnerHTML={{ __html: getVimeoEmbed() }} />
        </div>
        
        <div className="w-full bg-black py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white text-xl md:text-2xl font-swiss uppercase mb-2">
              IL METODO:
            </h2>
            <p className="text-white text-xl md:text-2xl opacity-90 font-swiss drop-shadow-md">
              Tecnologia e competenza umana al servizio dell'eccellenza tennistica
            </p>
          </div>
        </div>
        
        <section className="py-16 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <RevealAnimation>
              <h2 className="text-3xl md:text-4xl font-display mb-6">
                {getPersonalizedMethodDescription()}
              </h2>
            </RevealAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              <RevealAnimation delay={100}>
                <div>
                  <h3 className="text-2xl font-display mb-4">Approccio basato sui dati</h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Il Metodo ATH utilizza analisi avanzata e tecnologia per fornire feedback oggettivi e misurazioni precise della performance.
                    Ogni sessione di allenamento genera dati che vengono utilizzati per personalizzare il percorso dell'atleta.
                  </p>
                  <p className="text-lg text-gray-600">
                    Attraverso il sistema VICKI™, monitoriamo oltre 70 parametri che coprono tutti gli aspetti del gioco, dalla tecnica alla tattica, 
                    dalla preparazione fisica alle componenti mentali.
                  </p>
                </div>
              </RevealAnimation>
              
              <RevealAnimation delay={200}>
                <div>
                  <h3 className="text-2xl font-display mb-4">Coaching personalizzato</h3>
                  <p className="text-lg text-gray-600 mb-4">
                    I nostri coach utilizzano i dati raccolti per creare programmi di allenamento su misura per ogni atleta, tenendo conto 
                    delle caratteristiche individuali, degli obiettivi specifici e dello stile di gioco.
                  </p>
                  <p className="text-lg text-gray-600">
                    Questo approccio garantisce che ogni minuto di allenamento sia ottimizzato per il massimo miglioramento, eliminando 
                    congetture e metodologie standardizzate.
                  </p>
                </div>
              </RevealAnimation>
            </div>
            
            {userType && (
              <RevealAnimation>
                <div className="bg-ath-gray p-8 rounded-lg mb-16">
                  <h3 className="text-2xl font-display mb-4">
                    {userType === 'coach' ? 'Per i Coach' : 
                     userType === 'parent' ? 'Per i Genitori' : 
                     userType === 'professional' ? 'Per i Professionisti' : 
                     userType === 'performance' ? 'Per gli Agonisti' : 
                     'Per i Giovani Tennisti'}
                  </h3>
                  
                  {userType === 'professional' && (
                    <div className="space-y-4">
                      <p className="text-lg">
                        Il Metodo ATH per tennisti professionisti si concentra sull'ottimizzazione completa della performance, integrando analisi tecnica, 
                        preparazione fisica, allenamento mentale e analisi tattica in un sistema coerente.
                      </p>
                      <p className="text-lg">
                        Ogni dettaglio viene monitorato e analizzato per identificare i margini di miglioramento anche minimi che, a livello professionale, 
                        possono fare la differenza tra vittoria e sconfitta.
                      </p>
                      <p className="text-lg">
                        Il nostro approccio con i professionisti include anche la gestione dei cicli di carico e recupero, il monitoraggio biochimico 
                        e la pianificazione strategica della stagione agonistica.
                      </p>
                    </div>
                  )}
                  
                  {userType === 'performance' && (
                    <div className="space-y-4">
                      <p className="text-lg">
                        Per gli agonisti di alto livello, il Metodo ATH si concentra sul perfezionamento tecnico-tattico e sullo sviluppo delle capacità 
                        fisiche e mentali necessarie per competire ad alto livello.
                      </p>
                      <p className="text-lg">
                        La tecnologia VICKI™ permette di identificare pattern di gioco efficaci e inefficaci, analizzare le prestazioni in partita 
                        e monitorare l'evoluzione del carico di lavoro per prevenire infortuni.
                      </p>
                      <p className="text-lg">
                        Il metodo include anche la preparazione specifica per i tornei, con simulazioni di match e analisi degli avversari.
                      </p>
                    </div>
                  )}
                  
                  {userType === 'junior' && (
                    <div className="space-y-4">
                      <p className="text-lg">
                        Per i giovani tennisti, il Metodo ATH bilancia lo sviluppo tecnico con la componente ludica, monitorando attentamente 
                        la crescita fisica e lo sviluppo delle capacità coordinative.
                      </p>
                      <p className="text-lg">
                        Il sistema VICKI™ identifica precocemente qualità e talenti, permettendo di personalizzare il percorso formativo in base 
                        alle caratteristiche individuali del giovane atleta.
                      </p>
                      <p className="text-lg">
                        Grande attenzione viene data allo sviluppo armonico, evitando specializzazioni precoci e favorendo la multidisciplinarietà 
                        e il corretto sviluppo motorio.
                      </p>
                    </div>
                  )}
                  
                  {userType === 'coach' && (
                    <div className="space-y-4">
                      <p className="text-lg">
                        Per i coach, il Metodo ATH fornisce strumenti avanzati di analisi e monitoraggio, permettendo di codificare la propria 
                        metodologia all'interno del sistema e di tracciare l'evoluzione dei propri atleti.
                      </p>
                      <p className="text-lg">
                        La piattaforma facilita la collaborazione con altri professionisti (preparatori, mental coach, medici) e permette 
                        di creare programmi personalizzati basati su dati oggettivi.
                      </p>
                      <p className="text-lg">
                        I coach possono accedere a dashboard personalizzabili, report dettagliati e strumenti di analisi avanzata per 
                        ottimizzare il proprio lavoro e massimizzare i risultati dei propri atleti.
                      </p>
                    </div>
                  )}
                  
                  {userType === 'parent' && (
                    <div className="space-y-4">
                      <p className="text-lg">
                        Per i genitori, il Metodo ATH garantisce trasparenza e coinvolgimento nel percorso di sviluppo del giovane atleta, 
                        con report chiari e comprensibili sui progressi e sugli obiettivi.
                      </p>
                      <p className="text-lg">
                        Il sistema fornisce indicazioni pratiche su come supportare al meglio il percorso sportivo del ragazzo/a, senza 
                        pressioni eccessive e con un'attenzione costante al benessere psico-fisico.
                      </p>
                      <p className="text-lg">
                        La comunicazione con lo staff tecnico è facilitata attraverso canali diretti e aggiornamenti regolari, creando 
                        un ambiente collaborativo che favorisce la crescita serena del giovane tennista.
                      </p>
                    </div>
                  )}
                </div>
              </RevealAnimation>
            )}
            
            <RevealAnimation delay={300}>
              <h3 className="text-2xl font-display mb-4">I quattro pilastri del Metodo ATH</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="bg-white p-6 shadow-sm">
                  <h4 className="text-xl font-medium mb-3">1. Tecnica</h4>
                  <p>Analisi biomeccanica dettagliata di ogni colpo e movimento, con feedback immediato e indicazioni correttive precise.</p>
                </div>
                
                <div className="bg-white p-6 shadow-sm">
                  <h4 className="text-xl font-medium mb-3">2. Fisico</h4>
                  <p>Monitoraggio delle capacità atletiche, programmi di sviluppo personalizzati e prevenzione infortuni basata sui dati.</p>
                </div>
                
                <div className="bg-white p-6 shadow-sm">
                  <h4 className="text-xl font-medium mb-3">3. Mentale</h4>
                  <p>Sviluppo delle abilità cognitive, gestione dello stress agonistico e ottimizzazione della concentrazione in partita.</p>
                </div>
                
                <div className="bg-white p-6 shadow-sm">
                  <h4 className="text-xl font-medium mb-3">4. Tattico</h4>
                  <p>Analisi dei pattern di gioco, strategia match-specific e capacità decisionale sotto pressione.</p>
                </div>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={400}>
              <div className="bg-black text-white p-8 rounded-lg">
                <h3 className="text-2xl font-display mb-4">Integrazione completa</h3>
                <p className="text-lg mb-4">
                  La vera unicità del Metodo ATH sta nella perfetta integrazione di questi quattro pilastri, supportata dalla tecnologia VICKI™ 
                  e dalla competenza dei nostri professionisti.
                </p>
                <p className="text-lg">
                  Questo approccio olistico garantisce che ogni aspetto della formazione tennistica sia curato con la massima attenzione, 
                  creando un percorso di sviluppo coerente, efficace e personalizzato.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MethodPage;
