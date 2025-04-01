import { useEffect, useState } from 'react';
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
import StandardHeroVideo from '@/components/StandardHeroVideo';

const AboutPage = () => {
  const { t } = useLanguage();
  const { userGender, userType } = useProfile();
  const isMobile = useIsMobile();
  const [heroLogoOpacity, setHeroLogoOpacity] = useState<number>(1);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Icon sizes based on device type
  const iconSize = isMobile ? 40 : 64;
  const iconContainerSize = isMobile ? "w-20 h-20" : "w-36 h-36";
  
  // Get personalized video based on user profile
  const vimeoEmbed = getVimeoEmbed(userGender, userType);
  
  // Handle logo opacity changes from the StandardHeroVideo component
  const handleLogoOpacityChange = (opacity: number) => {
    setHeroLogoOpacity(opacity);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header headerLogoOpacity={heroLogoOpacity} />
      
      <main className="flex-grow">
        {/* Using StandardHeroVideo with callback for opacity changes */}
        <StandardHeroVideo 
          vimeoEmbed={vimeoEmbed}
          title="PERCHÉ ATH:"
          subtitle="La rivoluzione nell'allenamento del tennis moderno"
          onLogoOpacityChange={handleLogoOpacityChange}
        />
        
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
