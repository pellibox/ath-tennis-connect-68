
import { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProfile } from '@/contexts/ProfileContext';
import RevealAnimation from '@/components/RevealAnimation';
import Logo from '@/components/Logo';
import { getVimeoEmbed, getPersonalizedMethodDescription } from '@/utils/videoUtils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Activity, Target, Brain, Settings } from 'lucide-react';

const MethodPage = () => {
  const { t } = useLanguage();
  const { userGender, userType } = useProfile();
  const isMobile = useIsMobile();
  
  const [logoYOffset, setLogoYOffset] = useState<number>(0);
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  
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

  const vimeoEmbed = getVimeoEmbed(userGender, userType, false);

  return (
    <div className="flex flex-col min-h-screen relative">
      <div 
        className="fixed z-50 pointer-events-none transition-opacity duration-300 left-0 right-0 flex justify-center"
        style={{
          top: isMobile ? '140px' : '180px',
          opacity: logoOpacity
        }}
      >
        <div 
          style={{
            width: isMobile ? '120px' : '160px',
            transform: `translateY(-${logoYOffset}px)`
          }}
          className="flex justify-center" // Added to ensure centering
        >
          <Logo 
            onDarkBackground={true} 
            className="w-full h-auto"
            isCentered={true}
          />
        </div>
      </div>
      
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
          <div dangerouslySetInnerHTML={{ __html: vimeoEmbed }} />
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
              <h2 className="text-3xl md:text-4xl font-display mb-6 text-center md:text-left">
                {getPersonalizedMethodDescription(userType)}
              </h2>
            </RevealAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              <RevealAnimation delay={100}>
                <div>
                  <h3 className="text-2xl font-display mb-4 text-center md:text-left">Approccio basato sui dati</h3>
                  <p className="text-lg text-gray-600 mb-4 text-center md:text-left">
                    Il Metodo ATH utilizza analisi avanzata e tecnologia per fornire feedback oggettivi e misurazioni precise della performance.
                    Ogni sessione di allenamento genera dati che vengono utilizzati per personalizzare il percorso dell'atleta.
                  </p>
                  <p className="text-lg text-gray-600 text-center md:text-left">
                    Attraverso il sistema VICKI™, monitoriamo oltre 70 parametri che coprono tutti gli aspetti del gioco, dalla tecnica alla tattica, 
                    dalla preparazione fisica alle componenti mentali.
                  </p>
                </div>
              </RevealAnimation>
              
              <RevealAnimation delay={200}>
                <div>
                  <h3 className="text-2xl font-display mb-4 text-center md:text-left">Coaching personalizzato</h3>
                  <p className="text-lg text-gray-600 mb-4 text-center md:text-left">
                    I nostri coach utilizzano i dati raccolti per creare programmi di allenamento su misura per ogni atleta, tenendo conto 
                    delle caratteristiche individuali, degli obiettivi specifici e dello stile di gioco.
                  </p>
                  <p className="text-lg text-gray-600 text-center md:text-left">
                    Questo approccio garantisce che ogni minuto di allenamento sia ottimizzato per il massimo miglioramento, eliminando 
                    congetture e metodologie standardizzate.
                  </p>
                </div>
              </RevealAnimation>
            </div>
            
            {userType && (
              <RevealAnimation>
                <div className="bg-ath-gray p-8 rounded-lg mb-16">
                  <h3 className="text-2xl font-display mb-4 text-center md:text-left">
                    {userType === 'coach' ? 'Per i Coach' : 
                     userType === 'parent' ? 'Per i Genitori' : 
                     userType === 'professional' ? 'Per i Professionisti' : 
                     userType === 'performance' ? 'Per gli Agonisti' : 
                     'Per i Giovani Tennisti'}
                  </h3>
                  
                  {userType === 'professional' && (
                    <div className="space-y-4">
                      <p className="text-lg text-center md:text-left">
                        Il Metodo ATH per tennisti professionisti si concentra sull'ottimizzazione completa della performance, integrando analisi tecnica, 
                        preparazione fisica, allenamento mentale e analisi tattica in un sistema coerente.
                      </p>
                      <p className="text-lg text-center md:text-left">
                        Ogni dettaglio viene monitorato e analizzato per identificare i margini di miglioramento anche minimi che, a livello professionale, 
                        possono fare la differenza tra vittoria e sconfitta.
                      </p>
                      <p className="text-lg text-center md:text-left">
                        Il nostro approccio con i professionisti include anche la gestione dei cicli di carico e recupero, il monitoraggio biochimico 
                        e la pianificazione strategica della stagione agonistica.
                      </p>
                    </div>
                  )}
                  
                  {userType === 'performance' && (
                    <div className="space-y-4">
                      <p className="text-lg text-center md:text-left">
                        Per gli agonisti di alto livello, il Metodo ATH si concentra sul perfezionamento tecnico-tattico e sullo sviluppo delle capacità 
                        fisiche e mentali necessarie per competere ad alto livello.
                      </p>
                      <p className="text-lg text-center md:text-left">
                        La tecnologia VICKI™ permette di identificare pattern di gioco efficaci e inefficaci, analizzare le prestazioni in partita 
                        e monitorare l'evoluzione del carico di lavoro per prevenire infortuni.
                      </p>
                      <p className="text-lg text-center md:text-left">
                        Il metodo include anche la preparazione specifica per i tornei, con simulazioni di match e analisi degli avversari.
                      </p>
                    </div>
                  )}
                  
                  {userType === 'junior' && (
                    <div className="space-y-4">
                      <p className="text-lg text-center md:text-left">
                        Per i giovani tennisti, il Metodo ATH bilancia lo sviluppo tecnico con la componente ludica, monitorando attentamente 
                        la crescita fisica e lo sviluppo delle capacità coordinative.
                      </p>
                      <p className="text-lg text-center md:text-left">
                        Il sistema VICKI™ identifica precocemente qualità e talenti, permettendo di personalizzare il percorso formativo in base 
                        alle caratteristiche individuali del giovane atleta.
                      </p>
                      <p className="text-lg text-center md:text-left">
                        Grande attenzione viene data allo sviluppo armonico, evitando specializzazioni precoci e favorendo la multidisciplinarietà 
                        e il corretto sviluppo motorio.
                      </p>
                    </div>
                  )}
                  
                  {userType === 'coach' && (
                    <div className="space-y-4">
                      <p className="text-lg text-center md:text-left">
                        Per i coach, il Metodo ATH fornisce strumenti avanzati di analisi e monitoraggio, permettendo di codificare la propria 
                        metodologia all'interno del sistema e di tracciare l'evoluzione dei propri atleti.
                      </p>
                      <p className="text-lg text-center md:text-left">
                        La piattaforma facilita la collaborazione con altri professionisti (preparatori, mental coach, medici) e permette 
                        di creare programmi personalizzati basati su dati oggettivi.
                      </p>
                      <p className="text-lg text-center md:text-left">
                        I coach possono accedere a dashboard personalizzabili, report dettagliati e strumenti di analisi avanzata per 
                        ottimizzare il proprio lavoro e massimizzare i risultati dei propri atleti.
                      </p>
                    </div>
                  )}
                  
                  {userType === 'parent' && (
                    <div className="space-y-4">
                      <p className="text-lg text-center md:text-left">
                        Per i genitori, il Metodo ATH garantisce trasparenza e coinvolgimento nel percorso di sviluppo del giovane atleta, 
                        con report chiari e comprensibili sui progressi e sugli obiettivi.
                      </p>
                      <p className="text-lg text-center md:text-left">
                        Il sistema fornisce indicazioni pratiche su come supportare al meglio il percorso sportivo del ragazzo/a, senza 
                        pressioni eccessive e con un'attenzione costante al benessere psico-fisico.
                      </p>
                      <p className="text-lg text-center md:text-left">
                        La comunicazione con lo staff tecnico è facilitata attraverso canali diretti e aggiornamenti regolari, creando 
                        un ambiente collaborativo che favorisce la crescita serena del giovane tennista.
                      </p>
                    </div>
                  )}
                </div>
              </RevealAnimation>
            )}
            
            <RevealAnimation delay={300}>
              <h3 className="text-2xl font-display mb-6 text-center">I quattro pilastri del Metodo ATH</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="bg-gradient-to-b from-white to-ath-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-ath-clay text-white rounded-full">
                      <Settings className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-center mb-3">Eccellenza Tecnica</h4>
                  <p className="text-gray-600 text-center">Analisi biomeccanica dettagliata di ogni colpo e movimento, con feedback immediato e indicazioni correttive precise. Perfezionamento del contatto con la pallina e controllo superiore delle traiettorie in ogni situazione di gioco.</p>
                </div>
                
                <div className="bg-gradient-to-b from-white to-ath-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-ath-clay text-white rounded-full">
                      <Activity className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-center mb-3">Preparazione Atletica</h4>
                  <p className="text-gray-600 text-center">Monitoraggio delle capacità atletiche, programmi di sviluppo personalizzati e prevenzione infortuni basata sui dati. Ottimizzazione degli spostamenti sul campo e dominanza fisica nelle fasi critiche del match.</p>
                </div>
                
                <div className="bg-gradient-to-b from-white to-ath-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-ath-clay text-white rounded-full">
                      <Brain className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-center mb-3">Forza Mentale</h4>
                  <p className="text-gray-600 text-center">Sviluppo delle abilità cognitive, gestione dello stress agonistico e ottimizzazione della concentrazione in partita. Capacità avanzata di reazione alle situazioni avverse e controllo emotivo sotto pressione.</p>
                </div>
                
                <div className="bg-gradient-to-b from-white to-ath-gray p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-ath-clay text-white rounded-full">
                      <Target className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-center mb-3">Tattica & Strategia</h4>
                  <p className="text-gray-600 text-center">Analisi dei pattern di gioco, strategia match-specific e capacità decisionale sotto pressione. Lettura anticipata del gioco avversario e adattamento strategico superiore nelle diverse situazioni competitive.</p>
                </div>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={400}>
              <div className="bg-black text-white p-8 rounded-lg">
                <h3 className="text-2xl font-display mb-4 text-center md:text-left">Integrazione completa</h3>
                <p className="text-lg mb-4 text-center md:text-left">
                  La vera unicità del Metodo ATH sta nella perfetta integrazione di questi quattro pilastri, supportata dalla tecnologia VICKI™ 
                  e dalla competenza dei nostri professionisti.
                </p>
                <p className="text-lg text-center md:text-left">
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
