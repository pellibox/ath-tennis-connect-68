import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProfile } from '@/contexts/ProfileContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { getVimeoEmbed } from '@/utils/videoUtils';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';

const EliteProgram = () => {
  const { t } = useLanguage();
  const { userGender, userType } = useProfile();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  // Determine if we should show video (only for professional users)
  const shouldShowVideo = userType === 'professional';
  const vimeoEmbed = shouldShowVideo ? getVimeoEmbed(userGender, userType, false) : '';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title={t('footer.elite')}
            subtitle={t('programs.elite.desc')}
            vimeoEmbed={vimeoEmbed}
            imageSrc={vimeoEmbed ? undefined : "/lovable-uploads/53047a4d-087d-4e68-942b-d441b33bf6ab.png"}
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
                <h2 className="text-white text-lg font-display mr-3">ELITE:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  {t('programs.elite.desc')}
                </p>
              </div>
              <div className="mt-4">
                <VickiMonitoringBadge level="elite" className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-display">{t('programs.elite')}</h2>
                <VickiMonitoringBadge level="elite" />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6">{t('programs.elite.desc')}</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4">
                Il nostro programma Elite rappresenta il massimo livello di supporto per atleti professionisti o con ambizioni professionali, 
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
                <li>Analisi biomeccanica avanzata di ogni colpo</li>
                <li>Ottimizzazione tattica basata su dati oggettivi</li>
                <li>Periodizzazione scientifica dell'allenamento fisico</li>
                <li>Supporto mentale personalizzato per le competizioni</li>
                <li>Monitoraggio continuo di tutti i parametri performance</li>
                <li>Team multidisciplinare coordinato attraverso la piattaforma VICKI™</li>
                <li>Accesso alla rete globale di esperti ATH</li>
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

