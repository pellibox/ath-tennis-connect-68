
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
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ButtonLink from '@/components/ButtonLink';
import { Badge } from '@/components/ui/badge';

const YoungAthletesProgram = () => {
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
            title="Performance 4"
            subtitle="4 giorni a settimana, 40 settimane all'anno"
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
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <h2 className="text-white text-lg font-display mb-4">PROGRAMMI PERFORMANCE:</h2>
              <p className="text-white text-lg font-swiss max-w-3xl">
                I nostri programmi Performance sono dedicati agli atleti agonisti che cercano un percorso strutturato di allenamento di alto livello. Con opzioni da 3 a 5 giorni settimanali, questi programmi affrontano in maniera integrata tutti gli aspetti del tennis moderno: dalla tecnica alla preparazione atletica, dal supporto mentale alla tattica & strategia, tutti potenziati dalla tecnologia rivoluzionaria VICKI™ per un'analisi dettagliata e personalizzata della performance.
              </p>
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
                <h2 className="text-3xl font-swiss">Performance 4</h2>
                <Badge variant="ath" className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5" />
                  <span>Popular Choice</span>
                </Badge>
                <VickiMonitoringBadge level="advanced" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">4 giorni a settimana, 40 settimane all'anno.</p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il programma Performance 4 è dedicato agli atleti che cercano un impegno consistente e strutturato,
                con 4 giorni settimanali di allenamento intensivo, combinando sessioni di tennis e preparazione atletica
                per un totale di 12 ore settimanali di allenamento professionale.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="font-swiss">
                Con massimo 2 atleti per campo, questo programma garantisce un'attenzione altamente personalizzata,
                permettendo uno sviluppo accelerato delle competenze tennistiche e atletiche.
                Il sistema VICKI™ monitora ogni dettaglio per ottimizzare la crescita dell'atleta.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
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
              <ButtonLink 
                href="/contact" 
                showArrow={true}
              >
                Richiedi informazioni
              </ButtonLink>
            </RevealAnimation>
          </div>
          
          <RevealAnimation delay={350}>
            <div className="bg-ath-clay/5 border border-ath-clay/20 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-display mb-4 text-ath-clay">Perché scegliere Performance 4?</h3>
              <p className="mb-4">Il programma Performance 4 rappresenta l'equilibrio ideale tra intensità di allenamento e impegno settimanale. Consente agli atleti di ottenere risultati significativi pur mantenendo tempo per studio o altre attività.</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Equilibrio perfetto tra intensità e recupero</li>
                <li>Attenzione personalizzata con massimo 2 atleti per campo</li>
                <li>Monitoraggio completo con tecnologia VICKI™</li>
                <li>Rapporto ottimale qualità/prezzo</li>
              </ul>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-ath-clay text-white py-2 px-6 rounded hover:bg-ath-clay/90 transition-colors"
              >
                Prenota una prova gratuita <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={400}>
            <div className="text-center">
              <h3 className="text-2xl font-display mb-6">Programmi Correlati</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/programs/performance-3" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Performance 3</h4>
                  <p className="text-gray-600 mb-3">3 giorni a settimana per un'intensità bilanciata, ideale per chi ha altri impegni ma vuole risultati concreti.</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/elite-performance" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Elite Performance</h4>
                  <p className="text-gray-600 mb-3">5 giorni a settimana di allenamento intensivo per atleti che puntano all'eccellenza e competizioni di alto livello.</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
                <Link to="/programs/elite-full" className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all">
                  <h4 className="text-lg font-medium mb-2">Elite Performance Full</h4>
                  <p className="text-gray-600 mb-3">Programma completo e immersivo per atleti di alto livello con allenamento giornaliero e supporto totale.</p>
                  <span className="inline-flex items-center text-ath-clay">Scopri <ArrowRight size={14} className="ml-1" /></span>
                </Link>
              </div>
            </div>
          </RevealAnimation>
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

export default YoungAthletesProgram;
