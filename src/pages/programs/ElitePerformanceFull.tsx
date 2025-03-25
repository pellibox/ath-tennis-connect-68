
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

const ElitePerformanceFullProgram = () => {
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
            title="Elite Performance Full"
            subtitle="Programma completo (40 settimane)"
            imageSrc="https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?q=80&w=2071&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Elite Performance Full"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: 'PRENOTA UNA VALUTAZIONE', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          {/* Black banner with claim text */}
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">ELITE PERFORMANCE FULL:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Programma completo e immersivo per atleti di alto livello con aspirazioni professionali
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiMonitoringBadge level="pro" className="bg-opacity-20 border-opacity-30 text-white" />
                <VickiPoweredBadge className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-swiss">Elite Performance Full</h2>
                <VickiMonitoringBadge level="pro" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">Programma completo, 40 settimane all'anno.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                L'Elite Performance Full rappresenta il programma più completo e intensivo di ATH,
                destinato ad atleti che mirano all'eccellenza assoluta nel tennis. Con 10 sessioni settimanali di tennis,
                distribuite tra mattina e pomeriggio, e 7 sessioni di preparazione atletica, questo programma
                offre oltre 30 ore settimanali di allenamento professionale.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="mb-4 font-swiss">
                Limitato a massimo 2 atleti per campo, garantisce un livello di attenzione e personalizzazione
                paragonabile a un training individuale. La tecnologia VICKI™ monitora ogni aspetto dell'allenamento,
                permettendo aggiustamenti in tempo reale e un'ottimizzazione costante del percorso di sviluppo.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={250}>
              <p className="font-swiss">
                Questo programma è concepito per giovani atleti con aspirazioni professionistiche e include
                un supporto completo per la partecipazione a tornei nazionali e internazionali.
                L'approccio olistico integra tutti gli aspetti necessari per formare un tennista di alto livello.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>5 sessioni tennis mattina + 5 pomeriggio (totale 20 ore settimanali)</li>
                <li>7 sessioni atletica da 1,5 ore (10,5 ore settimanali)</li>
                <li>Massimo 2 atleti per campo</li>
                <li>40 settimane di allenamento</li>
                <li>Monitoraggio professionale avanzato con VICKI™</li>
                <li>Analisi video dettagliata quotidiana</li>
                <li>Programma di sviluppo completo personalizzato</li>
                <li>Supporto per pianificazione tornei</li>
                <li>Consulenza nutrizionale</li>
                <li>Supporto psicologico sportivo</li>
                <li>Report dettagliati settimanali</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={350} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Prezzo</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">€15.000</p>
                <p className="text-sm text-gray-600">per stagione (40 settimane)</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Possibilità di pagamento rateizzato. Contattaci per maggiori informazioni sui piani di pagamento.
              </p>
              <div className="mb-6">
                <p className="text-sm bg-ath-clay/10 p-3 rounded">
                  Per questo programma è prevista una valutazione preliminare dell'atleta per verificare la compatibilità con il percorso di alto livello.
                </p>
              </div>
              <a 
                href="/contact" 
                className="inline-block bg-ath-clay text-white py-2 px-4 rounded hover:bg-ath-clay/90 transition-colors"
              >
                Richiedi informazioni
              </a>
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title="Vuoi saperne di più?" 
          subtitle="Contattaci per una valutazione"
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ElitePerformanceFullProgram;
