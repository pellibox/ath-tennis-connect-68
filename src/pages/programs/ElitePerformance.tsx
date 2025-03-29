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
import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const ElitePerformanceProgram = () => {
  const { t } = useLanguage();
  const [userGender, setUserGender] = useState<UserGender | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  
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
            title="Elite Performance"
            subtitle="5 giorni a settimana (40 settimane)"
            imageSrc="https://images.unsplash.com/photo-1614743758466-e569f4791116?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068788542?h=698f55b033&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Elite Performance"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
            buttons={[
              { text: 'PRENOTA UNA PROVA', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: 'auto', minHeight: '400px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center py-8">
              <h2 className="text-white text-lg font-display mb-4">PROGRAMMA ELITE PERFORMANCE:</h2>
              <p className="text-white text-lg font-swiss max-w-3xl mb-6">
                Offre la preparazione completa e gli strumenti necessari per competere ai massimi livelli nei circuiti nazionali e internazionali, costruendo le fondamenta su cui il tuo impegno e la tua determinazione potranno edificare il successo.
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
              <p className="text-white mt-6 font-swiss max-w-3xl">
                Tutto potenziato dalla tecnologia VICKI™ per un'analisi dettagliata della performance.
              </p>
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
                <h2 className="text-3xl font-swiss">Elite Performance</h2>
                <Badge variant="ath" className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>Percorso Agonistico Avanzato</span>
                </Badge>
                <VickiMonitoringBadge level="pro" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">5 giorni a settimana, 40 settimane all'anno.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il programma Elite Performance è progettato per atleti agonisti con obiettivi competitivi di alto livello
                che non possono ancora accedere a un percorso full-time. Con 5 giorni settimanali di allenamento intensivo,
                offre la preparazione necessaria per eccellere nei circuiti nazionali e internazionali.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="font-swiss">
                La tecnologia VICKI™ di livello professionale monitora ogni parametro dell'allenamento, fornendo dati precisi 
                per personalizzare il percorso di sviluppo dell'atleta, analizzare ogni aspetto della performance e 
                identificare rapidamente aree di miglioramento, garantendo una progressione costante verso obiettivi 
                agonistici specifici.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <RevealAnimation delay={250} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>5 sessioni tennis da 1,5 ore (7,5 ore settimanali)</li>
                <li>5 sessioni atletica da 1,5 ore (7,5 ore settimanali)</li>
                <li>Massimo 2 atleti per campo</li>
                <li>40 settimane di allenamento</li>
                <li>Monitoraggio professionale con VICKI™</li>
                <li>Analisi video dettagliata e feedback personalizzato</li>
                <li>Programma di sviluppo tecnico-tattico individuale</li>
                <li>Preparazione specifica per tornei e competizioni</li>
                <li>Report periodici dettagliati</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Prezzo</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">€7.500</p>
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
          
          <RevealAnimation delay={350}>
            <div className="bg-ath-clay/5 border border-ath-clay/20 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-display mb-4 text-ath-clay">Perché scegliere Elite Performance?</h3>
              <p className="mb-4">Il programma Elite Performance rappresenta la soluzione ideale per gli atleti agonisti che puntano a una carriera tennistica di alto livello senza poter ancora accedere a un programma full-time. È strutturato per massimizzare lo sviluppo competitivo in un contesto di eccellenza professionale.</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Approccio professionale calibrato su obiettivi agonistici specifici</li>
                <li>Attenzione altamente personalizzata con massimo 2 atleti per campo</li>
                <li>Monitoraggio avanzato con tecnologia VICKI™ di livello professionistico</li>
                <li>Preparazione ottimale per competizioni di alto livello</li>
              </ul>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-ath-clay text-white py-2 px-6 rounded hover:bg-ath-clay/90 transition-colors"
              >
                Prenota una prova gratuita <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </RevealAnimation>
          
          <div className="text-center">
            <h3 className="text-2xl font-display mb-6">Programmi Correlati</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/programs/performance-4" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                <h4 className="text-lg font-medium mb-2">Performance 4</h4>
                <p className="text-gray-600 mb-3">4 giorni a settimana, ideale per chi ha altri impegni ma vuole risultati concreti.</p>
                <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
              </Link>
              <Link to="/programs/performance-3" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                <h4 className="text-lg font-medium mb-2">Performance 3</h4>
                <p className="text-gray-600 mb-3">3 giorni a settimana per un'intensità bilanciata, ideale per chi vuole risultati concreti mantenendo altri impegni.</p>
                <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
              </Link>
              <Link to="/programs/elite-full" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                <h4 className="text-lg font-medium mb-2">Elite Performance Full</h4>
                <p className="text-gray-600 mb-3">Programma completo e immersivo per atleti di alto livello con allenamento giornaliero e supporto totale.</p>
                <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
              </Link>
            </div>
            <div className="mt-6">
              <Link to="/programs/parent" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                <h4 className="text-lg font-medium mb-2">Genitore/Tutor</h4>
                <p className="text-gray-600 mb-3">Programma di supporto per genitori e tutor di atleti tra i 6 e i 18 anni. Incluso nel programma Elite Performance.</p>
                <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
              </Link>
            </div>
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

export default ElitePerformanceProgram;
