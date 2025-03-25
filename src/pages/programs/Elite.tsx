import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProfile } from '@/contexts/ProfileContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { getVimeoEmbed } from '@/utils/videoUtils';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';

const EliteProgram = () => {
  const { t } = useLanguage();
  const { userGender, userType } = useProfile();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  const shouldShowVideo = userType === 'performance';
  const vimeoEmbed = shouldShowVideo ? getVimeoEmbed(userGender, userType, false) : '';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Elite Performance"
            subtitle="Programma completo per giovani atleti che vogliono competere a livello agonistico."
            vimeoEmbed={vimeoEmbed}
            imageSrc={vimeoEmbed ? undefined : "/lovable-uploads/ef64c04d-055d-4d70-87f4-e67928a3b8e6.png"}
            buttons={[
              { text: 'PRENOTA UNA PROVA', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">ELITE PERFORMANCE:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Programma completo per giovani atleti che vogliono competere a livello agonistico.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiMonitoringBadge level="advanced" className="bg-opacity-20 border-opacity-30 text-white" />
                <VickiPoweredBadge className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-display">Elite Performance</h2>
                <VickiMonitoringBadge level="advanced" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6">Programma completo per giovani atleti che vogliono competere a livello agonistico.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4">
                Il nostro programma Elite Performance rappresenta il massimo livello di supporto per giovani atleti agonisti, 
                offrendo un ambiente di allenamento innovativo che integra tecnologia avanzata e competenza umana di alto livello.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p>
                Grazie alla tecnologia VICKI™, analizziamo ogni aspetto della performance tennistica attraverso oltre 70 parametri specifici, 
                fornendo insights dettagliati che permettono di ottimizzare ogni elemento del gioco e massimizzare il potenziale competitivo.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Analisi in tempo reale di tecnica, tattica, parametri mentali e fisici</li>
                <li>Feedback continuo (durante e dopo la sessione)</li>
                <li>Database personale per pianificare il calendario tornei</li>
                <li>Monitoraggio carico di lavoro e progressi</li>
                <li>Prevenzione infortuni grazie all'identificazione automatica delle aree critiche</li>
                <li>Percorsi personalizzati in base allo sviluppo fisico, biotipo e stile di gioco</li>
                <li>Integrazione tra valutazioni tecniche, fisiche, mediche e mentali</li>
                <li>Coordinamento tra coach, preparatore, mental coach, medico</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefici</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Massimizzazione dell'efficienza in ogni fase dell'allenamento</li>
                <li>Riduzione significativa del rischio di infortuni</li>
                <li>Ottimizzazione del processo decisionale in campo</li>
                <li>Sviluppo accelerato attraverso feedback immediati e precisi</li>
                <li>Approccio olistico che integra tutti gli aspetti della performance</li>
                <li>Continuità metodologica e supporto costante</li>
                <li>Vantaggi competitivi attraverso insights basati sui dati</li>
              </ul>
            </RevealAnimation>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EliteProgram;
