
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import ContactSection from '@/components/ContactSection';
import StandardHeroVideo from '@/components/StandardHeroVideo';
import PrivateProgramDescription from '@/components/programs/PrivateProgramDescription';

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
      
      <main className="flex-grow pt-0">
        <StandardHeroVideo 
          vimeoEmbed='<iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Private Lessons"></iframe><script src="https://player.vimeo.com/api/player.js"></script>'
          title="LEZIONI PRIVATE:"
          subtitle="Lezioni individuali o in piccoli gruppi (max 2 allievi) con un maestro certificato"
        />
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <PrivateProgramDescription />
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>Attenzione personalizzata del maestro</li>
                <li>Lezioni individuali o in coppia (massimo 2 allievi)</li>
                <li>Flessibilità nella scelta di giorni e orari</li>
                <li>Focus su aspetti specifici della tecnica</li>
                <li>Personalizzazione completa del contenuto della lezione</li>
                <li>Analisi VICKI™ disponibile su richiesta</li>
                <li>Durata e frequenza delle lezioni personalizzabile</li>
                <li>Adatto a tutti i livelli di gioco</li>
              </ul>
              
              <div className="mt-8 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r">
                <h4 className="text-lg font-semibold mb-2">Prenotazione e Disponibilità</h4>
                <p className="text-sm">
                  Le Lezioni Private possono essere organizzate su prenotazione ed sono soggette
                  alla disponibilità dei maestri. Si consiglia di prenotare con 
                  almeno 24 ore di anticipo per garantire la disponibilità.
                </p>
              </div>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Prezzo</h3>
              <div className="mb-4">
                <p className="text-2xl font-bold text-ath-clay">Prezzo personalizzato</p>
                <p className="text-sm text-gray-600">in base alla frequenza e al formato scelto</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Il prezzo delle Lezioni Private è personalizzato in base a diversi fattori:
                la frequenza delle lezioni, il formato scelto (individuale o in coppia),
                la durata della lezione e l'eventuale aggiunta dell'analisi VICKI™.
              </p>
              <h3 className="text-lg font-swiss font-semibold mb-2">Benefici</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss mb-6">
                <li>Attenzione dedicata alle tue esigenze specifiche</li>
                <li>Progressi più rapidi rispetto all'allenamento di gruppo</li>
                <li>Possibilità di concentrarsi sui colpi o aspetti che richiedono più attenzione</li>
                <li>Flessibilità nella pianificazione</li>
                <li>Insegnamento personalizzato in base al tuo stile di gioco</li>
                <li>Ambiente confortevole per apprendere senza pressioni</li>
              </ul>
              <a 
                href="/contact" 
                className="inline-block bg-ath-clay text-white py-2 px-4 rounded hover:bg-ath-clay/90 transition-colors"
              >
                Richiedi informazioni
              </a>
              
              <div className="mt-6 text-sm text-gray-600">
                <p className="italic">
                  Nota: Il prezzo delle Lezioni Private sarà comunicato in base alle tue
                  specifiche esigenze. Contattaci per una quotazione personalizzata.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title="Vuoi saperne di più?" 
          subtitle="Contattaci per prenotare una Lezione Privata"
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
