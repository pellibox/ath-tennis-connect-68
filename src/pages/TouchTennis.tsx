
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProgramsSection from '@/components/ProgramsSection';
import AboutSection from '@/components/AboutSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProfile } from '@/contexts/ProfileContext';
import { getVimeoEmbed } from '@/utils/videoUtils';
import ProgramsHeader from '@/components/programs/ProgramsHeader';
import { touchTennisCategories } from '@/data/touchtennis';
import { useIsMobile } from '@/hooks/use-mobile';
import StandardHeroVideo from '@/components/StandardHeroVideo';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import RevealAnimation from '@/components/RevealAnimation';

const TouchTennis = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const { userGender, userType, sport, updateSport } = useProfile();
  const [showAllPrograms, setShowAllPrograms] = useState(true);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update sport to touchtennis if user has a profile
    if (userGender && userType && sport !== 'touchtennis') {
      updateSport('touchtennis');
    }
  }, []);
  
  const vimeoEmbed = getVimeoEmbed(userGender, userType);
  
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      
      <main className="flex-grow pt-0">
        <StandardHeroVideo 
          vimeoEmbed={vimeoEmbed}
          title="TOUCHTENNIS:"
          subtitle="Approccio metodologico unico per il touchtennis a tutti i livelli"
        />
        
        <ProgramsHeader 
          userType={userType}
          showAllPrograms={showAllPrograms}
          setShowAllPrograms={setShowAllPrograms}
        />
        
        <div id="programs-section" className="bg-ath-gray py-12">
          <div className="container mx-auto px-4">
            <ProgramsSection 
              title="Programmi TouchTennis"
              subtitle="Esplora i nostri programmi dedicati al TouchTennis per giocatori di tutti i livelli"
              categories={touchTennisCategories}
              className=""
            />
          </div>
        </div>
        
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <RevealAnimation>
              <h2 className="text-3xl font-display mb-8 text-center">Programmi TouchTennis in Evidenza</h2>
            </RevealAnimation>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <RevealAnimation delay={100}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3">TouchTennis Base</h3>
                  <p className="text-gray-700 mb-4 flex-grow">Programma introduttivo al TouchTennis, ideale per principianti e per chi vuole scoprire questo sport dinamico e divertente.</p>
                  <Link to="/programs/touchtennis-base">
                    <Button className="w-full">Scopri il Programma</Button>
                  </Link>
                </div>
              </RevealAnimation>
              
              <RevealAnimation delay={200}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3">TouchTennis Avanzato</h3>
                  <p className="text-gray-700 mb-4 flex-grow">Programma per giocatori con esperienza nel TouchTennis che vogliono migliorare le proprie abilità tecniche e tattiche.</p>
                  <Link to="/programs/touchtennis-avanzato">
                    <Button className="w-full">Scopri il Programma</Button>
                  </Link>
                </div>
              </RevealAnimation>
              
              <RevealAnimation delay={300}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3">TouchTennis Junior</h3>
                  <p className="text-gray-700 mb-4 flex-grow">Programma specifico per giovani atleti (8-14 anni) che vogliono approcciarsi al TouchTennis in modo divertente e strutturato.</p>
                  <Link to="/programs/touchtennis-junior">
                    <Button className="w-full">Scopri il Programma</Button>
                  </Link>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
        
        <AboutSection 
          title="Cos'è il TouchTennis"
          description={
            <div className="space-y-4">
              <p>
                Il TouchTennis è una versione ridotta del tennis tradizionale, giocata su un campo più piccolo con racchette e palline più morbide. Nato nel Regno Unito, questo sport sta guadagnando popolarità in tutto il mondo grazie alla sua accessibilità e divertimento.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Le caratteristiche del TouchTennis</h3>
              <p>
                Il TouchTennis si gioca su un campo più piccolo (circa 12 x 6 metri), con palline a bassa pressione e racchette più corte. Queste modifiche rallentano il gioco e rendono il TouchTennis più accessibile a tutti, dai bambini agli adulti, dai principianti ai giocatori esperti.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">I benefici del TouchTennis</h3>
              <p>
                Il TouchTennis offre numerosi vantaggi: richiede meno spazio, è più facile da imparare, meno impegnativo fisicamente ma comunque ottimo per il fitness, e permette scambi più lunghi e tattici. È un'ottima introduzione al tennis per i principianti e un modo divertente per i giocatori esperti di affinare le loro abilità tecniche e tattiche.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Il TouchTennis ad ATH</h3>
              <p>
                Ad ATH, offriamo programmi di TouchTennis per tutte le età e livelli. I nostri coach qualificati utilizzano la tecnologia VICKI™ per analizzare e migliorare il tuo gioco, proprio come facciamo con il tennis tradizionale. Che tu sia un principiante che vuole imparare le basi o un giocatore esperto che cerca di migliorare le proprie abilità, abbiamo il programma giusto per te.
              </p>
              <p>
                Unisciti alla comunità del TouchTennis di ATH e scopri quanto può essere divertente e gratificante questo sport!
              </p>
            </div>
          }
          image="https://images.unsplash.com/photo-1531315396756-905d68d21b56"
          buttons={[
            { text: 'PRENOTA UNA PROVA', href: '/contact' }
          ]}
          reversed={true}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default TouchTennis;
