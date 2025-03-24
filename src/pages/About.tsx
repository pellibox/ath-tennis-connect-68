
import { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';
import { useLanguage } from '@/contexts/LanguageContext';
import ButtonLink from '@/components/ButtonLink';
import { Award, Users, BarChart, Target, Layers, Headphones } from 'lucide-react';
import RevealAnimation from '@/components/RevealAnimation';
import Logo from '@/components/Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed } from '@/utils/videoUtils';

const AboutPage = () => {
  const { t } = useLanguage();
  const { userGender, userType } = useProfile();
  const [logoYOffset, setLogoYOffset] = useState<number>(0);
  const [logoOpacity, setLogoOpacity] = useState<number>(1);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Handle scroll effect for the logo
  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const scrollY = window.scrollY;
      
      // Calculate offset to move the logo up as user scrolls down
      setLogoYOffset(scrollY * 0.2); // Adjust the multiplier to control the speed
      
      // Fade out logo as user scrolls down
      // Start fading at 100px of scroll, completely fade out by 300px
      const fadeThreshold = 100;
      const fadeOutBy = 300;
      
      if (scrollY > fadeThreshold) {
        const opacity = Math.max(0, 1 - (scrollY - fadeThreshold) / (fadeOutBy - fadeThreshold));
        setLogoOpacity(opacity);
      } else {
        setLogoOpacity(1);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial calculation
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Icon sizes based on device type
  const iconSize = isMobile ? 40 : 64;
  const iconContainerSize = isMobile ? "w-20 h-20" : "w-36 h-36";
  
  // Get personalized video based on user profile
  const vimeoEmbed = getVimeoEmbed(userGender, userType);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Centered logo with improved positioning for both mobile and desktop */}
      <div 
        className="fixed z-50 pointer-events-none transition-opacity duration-300 left-0 right-0 flex justify-center"
        style={{
          top: isMobile ? '140px' : '180px', // Adjusted position
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
        {/* Video background - using personalized video based on user profile */}
        <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
          <div dangerouslySetInnerHTML={{ __html: vimeoEmbed }} />
        </div>
        
        {/* Black frame with claim */}
        <div className="w-full bg-black py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white text-xl md:text-2xl font-swiss uppercase mb-2">
              PERCHÉ ATH:
            </h2>
            <p className="text-white text-xl md:text-2xl opacity-90 font-swiss drop-shadow-md">
              La rivoluzione nell'allenamento del tennis moderno
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-ath-clay/5 to-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <RevealAnimation>
                <h2 className="text-3xl md:text-4xl font-display mb-6 text-ath-clay">Le Sfide del Tennis Moderno e le Soluzioni di ATH</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Il tennis contemporaneo affronta diverse sfide che ne limitano l'evoluzione e l'accessibilità. 
                  ATH ha sviluppato soluzioni specifiche per superarle.
                </p>
              </RevealAnimation>
            </div>
          </div>
        </div>
        
        <AboutSection 
          title="Accesso Limitato alle Competenze"
          subtitle="Sfida #1"
          description={
            <div className="space-y-4">
              <p className="font-medium text-ath-clay">La Sfida:</p>
              <p>Solo un'élite di giocatori ha accesso a programmi e coaching di alto livello. L'esperienza dei coach di primo piano non è equamente distribuita e risulta difficile seguire molti atleti senza perdere qualità.</p>
              <p className="font-medium text-ath-clay">La Soluzione ATH:</p>
              <p>Per ampliare l'accesso all'allenamento d'élite, ATH utilizza strumenti digitali che raccolgono dati su tecnica, tattica, stato fisico, approccio mentale, oltre a parametri medici e biochimici. Gli head coach possono così fornire un supporto estremamente personalizzato, ottimizzando i tempi e le risorse a vantaggio di ogni atleta.</p>
            </div>
          }
          icon={
            <div className={`${iconContainerSize} bg-white rounded-full flex items-center justify-center shadow-inner`}>
              <Headphones size={iconSize} className="text-ath-clay" />
            </div>
          }
          accent="clay"
          elegant={true}
        />
        
        <AboutSection 
          title="Inconsistenza nell'Insegnamento"
          subtitle="Sfida #2"
          description={
            <div className="space-y-4">
              <p className="font-medium text-ath-clay">La Sfida:</p>
              <p>Per compensare i limiti dei coach principali, si formano altri coach che però creano discontinuità nell'allenamento. Questo genera incoerenza e ostacola la crescita dell'atleta.</p>
              <p className="font-medium text-ath-clay">La Soluzione ATH:</p>
              <p>Utilizziamo dati concreti da sistemi di tracking, analisi video, test atletici, valutazioni mentali e parametri medici. Organizziamo riunioni continue, supportate dall'AI, per adeguare le linee di allenamento alle esigenze reali di ogni atleta. Questo garantisce istruzioni coerenti e dettagliate, come avviene nell'ambito professionistico, con analisi delle performance, personalizzazione degli allenamenti e pianificazione agonistica.</p>
            </div>
          }
          icon={
            <div className={`${iconContainerSize} bg-white rounded-full flex items-center justify-center shadow-inner`}>
              <Users size={iconSize} className="text-ath-clay" />
            </div>
          }
          reversed={true}
          accent="clay"
          elegant={true}
          className="bg-white"
        />
        
        <AboutSection 
          title="Analisi Insufficiente"
          subtitle="Sfida #3"
          description={
            <div className="space-y-4">
              <p className="font-medium text-ath-clay">La Sfida:</p>
              <p>Un coach, per quanto esperto, non può monitorare costantemente un atleta se non lo segue a tempo pieno. Le sue decisioni si fondano quindi su informazioni frammentarie e riportate, riducendo l'accuratezza dell'analisi.</p>
              <p className="font-medium text-ath-clay">La Soluzione ATH:</p>
              <p>La nostra tecnologia in tempo reale cattura ogni dettaglio, compresi gli aspetti tecnici, fisici, mentali, medici e biochimici. I coach ricevono feedback immediato e certo, favorendo miglioramenti continui e misurabili.</p>
            </div>
          }
          icon={
            <div className={`${iconContainerSize} bg-white rounded-full flex items-center justify-center shadow-inner`}>
              <BarChart size={iconSize} className="text-ath-clay" />
            </div>
          }
          accent="clay"
          elegant={true}
        />
        
        <AboutSection 
          title="Personalizzazione Limitata"
          subtitle="Sfida #4"
          description={
            <div className="space-y-4">
              <p className="font-medium text-ath-clay">La Sfida:</p>
              <p>Le soluzioni "commerciali" spesso propongono un metodo unico, ignorando le esigenze individuali. Chi non è seguito direttamente dal coach principale dispone di scarse opportunità di personalizzare il proprio percorso.</p>
              <p className="font-medium text-ath-clay">La Soluzione ATH:</p>
              <p>Con un mix di AI e competenze professionali, progettiamo piani di allenamento su misura. Consideriamo età, sviluppo fisico e mentale, biotipo, stile di apprendimento, obiettivi e parametri di salute. In questo modo, il piano si evolve con i progressi dell'atleta, sia fisici sia mentali.</p>
            </div>
          }
          icon={
            <div className={`${iconContainerSize} bg-white rounded-full flex items-center justify-center shadow-inner`}>
              <Target size={iconSize} className="text-ath-clay" />
            </div>
          }
          reversed={true}
          accent="clay"
          elegant={true}
          className="bg-white"
        />
        
        <AboutSection 
          title="Sviluppo Frammentato"
          subtitle="Sfida #5"
          description={
            <div className="space-y-4">
              <p className="font-medium text-ath-clay">La Sfida:</p>
              <p>Tecnica, tattica, forma fisica, preparazione mentale, analisi medica e biochimica sono raramente coordinate in un programma unico.</p>
              <p className="font-medium text-ath-clay">La Soluzione ATH:</p>
              <p>ATH integra questi aspetti in un sistema sinergico. Coach, preparatori atletici, mental coach, specialisti medici e nutrizionisti collaborano su dati concreti, elaborando una strategia condivisa allineata ai tuoi obiettivi.</p>
            </div>
          }
          icon={
            <div className={`${iconContainerSize} bg-white rounded-full flex items-center justify-center shadow-inner`}>
              <Layers size={iconSize} className="text-ath-clay" />
            </div>
          }
          accent="clay"
          elegant={true}
        />
        
        <div className="bg-ath-clay text-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <RevealAnimation>
                <h2 className="text-3xl md:text-4xl font-display mb-8">Il Nostro Approccio</h2>
                <p className="text-white/90 leading-relaxed text-lg mb-10">
                  Immagina un ambiente in cui ogni dettaglio del tuo gioco è monitorato e ottimizzato. ATH non è solo un centro di allenamento, ma un modo nuovo di insegnare e vivere il tennis. Ogni elemento del nostro sistema risponde alle criticità del tennis moderno, offrendo un'esperienza completa in cui ogni aspetto lavora in sinergia.
                </p>
                <div className="flex justify-center">
                  <ButtonLink href="/method" variant="secondary">
                    Scopri il Metodo ATH
                  </ButtonLink>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
        
        <JoinRevolutionSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
