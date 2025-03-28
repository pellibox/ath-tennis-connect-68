
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProfile } from '@/contexts/ProfileContext';
import RevealAnimation from '@/components/RevealAnimation';
import Hero from '@/components/Hero';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';
import ContactSection from '@/components/ContactSection';

const SummerCampsProgram = () => {
  const { t } = useLanguage();
  const { userGender, userType } = useProfile();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
          <div dangerouslySetInnerHTML={{ __html: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068835737?h=f0a05fef01&autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>` }} />
        </div>
        
        <div className="w-full bg-black py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white text-xl md:text-2xl font-swiss uppercase mb-2">
              SUMMER CAMPS:
            </h2>
            <p className="text-white text-xl md:text-2xl opacity-90 font-swiss max-w-3xl drop-shadow-md">
              Programmi intensivi estivi per giovani atleti
            </p>
            <div className="mt-6">
              <VickiMonitoringBadge level="basic" className="bg-opacity-20 border-opacity-30 text-white" />
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-display">Summer Camps</h2>
                <VickiMonitoringBadge level="basic" />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6">Programmi intensivi estivi per giovani tennisti di ogni livello.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4">
                I nostri Summer Camps offrono un'esperienza coinvolgente e formativa per giovani tennisti
                di tutte le età e livelli. Attraverso sessioni giornaliere intensive, i partecipanti
                avranno l'opportunità di migliorare le proprie abilità tecniche e tattiche sotto la guida
                di coach qualificati, utilizzando la nostra tecnologia VICKI™ per un'analisi dettagliata
                del loro gioco.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p>
                Ogni settimana di camp è strutturata per massimizzare il divertimento e l'apprendimento,
                con un mix equilibrato di allenamento tecnico, preparazione fisica adeguata all'età, e
                attività ludiche che promuovono lo spirito di squadra e la passione per il tennis.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Settimane intensive da lunedì a venerdì</li>
                <li>Programmi differenziati per età e livello</li>
                <li>3-4 ore di tennis al giorno con tecnologia VICKI™</li>
                <li>Attività fisiche complementari e giochi di squadra</li>
                <li>Pranzi e snack inclusi</li>
                <li>Report di fine settimana con analisi VICKI™</li>
                <li>Maglietta ufficiale del camp ATH</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Prezzi e Periodi</h3>
              <p className="mb-4">
                <span className="block font-bold text-lg">Date disponibili:</span>
                10-14 Giugno / 17-21 Giugno / 24-28 Giugno
                1-5 Luglio / 8-12 Luglio / 15-19 Luglio
                26-30 Agosto / 2-6 Settembre
              </p>
              <p className="mb-2">
                <span className="block font-bold text-lg">Tariffe:</span>
                <span className="block text-2xl font-bold text-ath-clay">€350</span>
                <span className="text-sm">per settimana, tutto incluso</span>
              </p>
              <p className="mt-4 text-sm">
                Sconti disponibili per prenotazioni multiple e fratelli/sorelle. 
                Contattaci per maggiori informazioni.
              </p>
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title="Iscriviti ora" 
          subtitle="I posti sono limitati, prenota subito per garantire la partecipazione"
          address="Via F. Turati, 9, 20090 Rodano MI, Italia"
          phone="+39 02 1234567"
          email="info@ath.tennis"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default SummerCampsProgram;
