
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import { UserGender, UserType, loadUserPreferences } from '@/components/UserTypeSelector';
import VickiUnifiedBadge from '@/components/VickiUnifiedBadge';
import ContactSection from '@/components/ContactSection';
import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';
import RelatedPrograms from '@/components/programs/RelatedPrograms';
import ProgramDetails from '@/components/programs/ProgramDetails';
import ProgramWhyChoose from '@/components/programs/ProgramWhyChoose';

const Performance4Program = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
  const relatedPrograms = [
    {
      title: "Performance 2",
      description: "2 giorni a settimana per un percorso verso l'eccellenza tennistica, ideale per chi ha molti altri impegni.",
      link: "/programs/performance-2"
    },
    {
      title: "Performance 3",
      description: "3 giorni a settimana per un allenamento bilanciato, ideale per atleti che desiderano equilibrare sport e studio.",
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
    },
    {
      title: "Genitore/Tutor",
      description: "Programma di supporto per genitori e tutor di atleti tra i 6 e i 18 anni. Incluso nel programma Performance 4.",
      link: "/programs/parent"
    }
  ];
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
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
                <VickiUnifiedBadge level="advanced" className="bg-opacity-20 border-opacity-30 text-white" />
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
            vickiLevel="advanced"
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
            benefits={[
              {
                title: "Equilibrio ottimale",
                description: "Tra intensità di allenamento e tempo per lo studio"
              },
              {
                title: "Attenzione personalizzata",
                description: "Con massimo 2 atleti per campo"
              },
              {
                title: "Analisi dettagliata",
                description: "Di ogni aspetto del gioco con tecnologia VICKI™"
              },
              {
                title: "Sviluppo completo",
                description: "Tecnico, atletico, mentale e tattico"
              },
              {
                title: "Preparazione mirata",
                description: "Per competizioni agonistiche"
              },
              {
                title: "Supporto costante",
                description: "Da un team di professionisti"
              }
            ]}
          />
        </div>
        
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <RevealAnimation delay={100}>
              <RelatedPrograms 
                title="Programmi Correlati" 
                programs={relatedPrograms} 
              />
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
