
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
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import RelatedPrograms from '@/components/programs/RelatedPrograms';
import ProgramDetails from '@/components/programs/ProgramDetails';
import ProgramWhyChoose from '@/components/programs/ProgramWhyChoose';

const Performance4Program = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
  const relatedPrograms = [
    {
      title: "Performance 3",
      description: "3 giorni a settimana per un allenamento meno intensivo, ideale per atleti che desiderano bilanciare sport e studio.",
      link: "/programs/performance-3"
    },
    {
      title: "Elite Performance",
      description: "5 giorni a settimana di allenamento intensivo per atleti che puntano all'eccellenza e competizioni di alto livello.",
      link: "/programs/elite-performance"
    },
    {
      title: "Elite Performance Full",
      description: "Programma completo e immersivo per atleti di alto livello con allenamento giornaliero e supporto totale.",
      link: "/programs/elite-full"
    }
  ];
  
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
            title="Performance 4"
            subtitle="4 giorni a settimana (40 settimane)"
            imageSrc="https://images.unsplash.com/photo-1595435934349-5c8a53b567d0?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Performance 4"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: 'PRENOTA UNA PROVA', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          {/* Black banner with claim text */}
          <div className="w-full bg-black py-16 relative" style={{ height: 'auto', minHeight: '400px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center py-8">
              <h2 className="text-white text-lg font-display mb-4">PROGRAMMA PERFORMANCE 4:</h2>
              <p className="text-white text-lg font-swiss max-w-3xl mb-6">
                Percorso intensivo di 4 giorni a settimana che offre un equilibrio ottimale tra allenamento di alto livello e tempo per lo studio e lo sviluppo personale.
              </p>
              <ul className="text-white space-y-3 font-swiss max-w-3xl">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>Eccellenza Tecnica:</strong> Analisi biomeccanica dettagliata di ogni colpo e movimento, con feedback immediato e perfezionamento del controllo delle traiettorie in ogni situazione di gioco.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>Preparazione Atletica:</strong> Programmi personalizzati con monitoraggio costante, ottimizzazione degli spostamenti e dominanza fisica nelle fasi critiche del match.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>Forza Mentale:</strong> Sviluppo delle abilità cognitive, gestione dello stress agonistico e capacità di reazione alle situazioni avverse sotto pressione.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span><strong>Tattica & Strategia:</strong> Analisi del gioco avversario, sviluppo di piani di partita personalizzati e adattamento tattico durante i match.</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <VickiMonitoringBadge level="advanced" className="bg-opacity-20 border-opacity-30 text-white" />
                <VickiPoweredBadge className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <ProgramDetails
            title="Performance 4"
            subtitle="4 giorni a settimana, 40 settimane all'anno."
            description={[
              "Il programma Performance 4 è dedicato agli atleti che cercano un impegno consistente e strutturato, con 4 giorni settimanali di allenamento intensivo, combinando sessioni di tennis e preparazione atletica per un totale di 12 ore settimanali di allenamento professionale.",
              "Con massimo 2 atleti per campo, questo programma garantisce un'attenzione altamente personalizzata, permettendo uno sviluppo accelerato delle competenze tennistiche e atletiche. Il sistema VICKI™ monitora ogni dettaglio per ottimizzare la crescita dell'atleta.",
              "Questo programma offre un equilibrio ideale tra l'intensità necessaria per progredire a livello agonistico e il tempo libero per dedicarsi agli studi o ad altre attività, consentendo agli atleti di costruire un percorso formativo completo."
            ]}
            userGender={userGender}
            userType={userType}
          />
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>4 sessioni tennis da 1,5 ore (6 ore settimanali)</li>
                <li>4 sessioni atletica da 1,5 ore (6 ore settimanali)</li>
                <li>Massimo 2 atleti per campo</li>
                <li>40 settimane di allenamento</li>
                <li>Monitoraggio avanzato con VICKI™</li>
                <li>Analisi video e feedback dettagliati</li>
                <li>Preparazione specifica per tornei</li>
                <li>Piano bilanciato che lascia tempo per studio e vita personale</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Prezzo</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">€6.500</p>
                <p className="text-sm text-gray-600">per stagione (40 settimane)</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Possibilità di pagamento rateizzato. Contattaci per maggiori informazioni.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-ath-clay text-white py-2 px-4 rounded hover:bg-ath-clay/90 transition-colors"
              >
                Richiedi informazioni
              </a>
            </RevealAnimation>
          </div>
          
          <ProgramWhyChoose
            title="Perché scegliere Performance 4"
            description="Il programma Performance 4 offre numerosi vantaggi per atleti che vogliono conciliare tennis di alto livello e percorso formativo:"
            benefits={[
              "Equilibrio ottimale tra intensità di allenamento e tempo per lo studio",
              "Attenzione personalizzata con massimo 2 atleti per campo",
              "Analisi dettagliata di ogni aspetto del gioco con tecnologia VICKI™",
              "Sviluppo completo: tecnico, atletico, mentale e tattico",
              "Preparazione mirata per competizioni agonistiche",
              "Supporto costante da un team di professionisti"
            ]}
            ctaText="Scopri di più"
            ctaLink="/contact"
          />
        </div>
        
        {/* Related Programs Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <RelatedPrograms 
              title="Programmi Correlati" 
              programs={relatedPrograms} 
            />
            
            {/* Detailed Related Programs Section similar to Performance3 */}
            <RevealAnimation delay={100} className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Link to="/programs/performance-3" className="block p-6 border border-gray-200 bg-white rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Performance 3</h4>
                  <p className="text-gray-600 mb-3">3 giorni a settimana, ideale per atleti che desiderano un approccio più graduale all'agonismo e più tempo per altre attività.</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/elite-performance" className="block p-6 border border-gray-200 bg-white rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Elite Performance</h4>
                  <p className="text-gray-600 mb-3">5 giorni a settimana di allenamento intensivo per atleti che puntano all'eccellenza e competizioni di alto livello.</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/elite-full" className="block p-6 border border-gray-200 bg-white rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Elite Performance Full</h4>
                  <p className="text-gray-600 mb-3">Programma completo e immersivo per atleti di alto livello con allenamento giornaliero e supporto totale.</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
              </div>
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title="Vuoi saperne di più?" 
          subtitle="Contattaci per una prova gratuita"
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Performance4Program;
