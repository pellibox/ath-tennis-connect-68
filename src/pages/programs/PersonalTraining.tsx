
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import ContactSection from '@/components/ContactSection';

const PersonalCoachingProgram = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Load user preferences
    const { gender, type } = loadUserPreferences();
    if (gender) setUserGender(gender);
    if (type) setUserType(type);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Personal Coaching (13+ anni)"
            subtitle="Lezioni personalizzate con maestro e sparring per un'attenzione dedicata e un progresso accelerato"
            imageSrc="https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?q=80&w=2035&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Personal Coaching"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: 'PRENOTA UNA SESSIONE', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          {/* Black banner with claim text */}
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">PERSONAL COACHING (13+ ANNI):</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Allenamento personalizzato con maestro e sparring per atleti dai 13 anni in su, con monitoraggio avanzato
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiMonitoringBadge level="elite" className="bg-opacity-20 border-opacity-30 text-white" />
                <VickiPoweredBadge className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-swiss">Personal Coaching (13+ anni)</h2>
                <VickiMonitoringBadge level="elite" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">Esclusivamente per atleti dai 13 anni in su, disponibile tutto l'anno.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il programma di Personal Coaching è specificamente progettato per tennisti
                dai 13 anni in su che desiderano un allenamento mirato e personalizzato.
                Questo programma combina l'attenzione individuale di un coach esperto con uno sparring partner di alto livello
                per massimizzare i risultati.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="font-swiss">
                La tecnologia VICKI™ in modalità Elite o Advanced monitora e analizza ogni dettaglio della performance,
                consentendo di identificare rapidamente aree di miglioramento e misurare i progressi in modo oggettivo.
                Questo approccio scientifico accelera lo sviluppo tecnico e tattico dell'atleta.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>Attenzione completa e dedicata del coach</li>
                <li>Sparring professionale incluso (minimo 2.8 FIT o di categoria pari o superiore all'atleta)</li>
                <li>Disponibile esclusivamente per atleti dai 13 anni in su</li>
                <li>Monitoraggio Elite o Advanced con VICKI™</li>
                <li>Focus su aspetti specifici della tecnica e tattica</li>
                <li>Analisi video dettagliata</li>
                <li>Feedback personalizzati dopo ogni sessione</li>
                <li>Sessioni di 1,5 ore, una volta alla settimana</li>
              </ul>
              
              <div className="mt-8 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r">
                <h4 className="text-lg font-semibold mb-2">Prenotazione e Disponibilità</h4>
                <p className="text-sm">
                  Il Personal Coaching può essere organizzato esclusivamente su prenotazione ed è soggetto
                  alla disponibilità dei maestri e sparring partner. Si consiglia di prenotare con 
                  almeno 48 ore di anticipo per garantire la disponibilità dei professionisti più adatti 
                  alle tue esigenze specifiche.
                </p>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Prezzo</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">€120</p>
                <p className="text-sm text-gray-600">per lezione di 1,5 ore</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Il Personal Coaching include sia il maestro che lo sparring partner, offrendo un'esperienza
                di allenamento completa e personalizzata potenziata dalla tecnologia VICKI™ Elite o Advanced.
              </p>
              <h3 className="text-lg font-swiss font-semibold mb-2">Benefici</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss mb-6">
                <li>Progressi accelerati grazie all'attenzione individuale</li>
                <li>Pratica reale con sparring di alto livello</li>
                <li>Correzione efficace e rapida di problemi tecnici</li>
                <li>Adattamento preciso alle esigenze specifiche del giocatore</li>
                <li>Ambiente ottimale per superare blocchi o difficoltà</li>
                <li>Monitoraggio completo con tecnologia VICKI™ avanzata</li>
              </ul>
              <a 
                href="/contact" 
                className="inline-block bg-ath-clay text-white py-2 px-4 rounded hover:bg-ath-clay/90 transition-colors"
              >
                Richiedi informazioni
              </a>
              
              <div className="mt-6 text-sm text-gray-600">
                <p className="italic">
                  Nota: Le sessioni di Personal Coaching sono disponibili solo su prenotazione
                  e soggette alla disponibilità dei maestri e sparring partner. Ogni sessione dura 1,5 ore
                  e può essere prenotata una volta alla settimana.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title="Vuoi saperne di più?" 
          subtitle="Contattaci per una sessione di Personal Coaching"
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default PersonalCoachingProgram;
