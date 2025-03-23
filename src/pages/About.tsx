
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import TechnologySection from '@/components/TechnologySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import ButtonLink from '@/components/ButtonLink';

const stats = [
  {
    id: '1',
    value: 6,
    label: 'Campi'
  },
  {
    id: '2',
    value: 70,
    suffix: '+',
    label: 'Parametri Monitorati'
  },
  {
    id: '3',
    value: 500,
    suffix: '+',
    label: 'Membri Attivi'
  },
  {
    id: '4',
    value: 1,
    label: 'Unico Centro con VICKI™'
  },
];

const testimonials = [
  {
    id: '1',
    quote: "L'analisi oggettiva di ATH ha migliorato significativamente i miei parametri tecnici. I dati raccolti hanno permesso un'ottimizzazione precisa del mio gioco.",
    author: 'Emma Martins',
    role: 'Giocatore Junior, 16'
  },
  {
    id: '2',
    quote: "L'integrazione tra coaching tradizionale e sistema VICKI™ ha migliorato la mia consistenza del 23% in tre mesi, con rilevamenti oggettivi delle performance.",
    author: 'Michael Johnson',
    role: 'Giocatore Professionista'
  },
  {
    id: '3',
    quote: 'Il monitoraggio parametrico ha evidenziato inefficienze tecniche nel mio servizio che nessun coach aveva identificato prima, permettendomi correzioni mirate.',
    author: 'Robert Chen',
    role: 'Membro del Programma per Adulti'
  },
];

const AboutPage = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <Hero 
          title="Chi Siamo"
          subtitle="ATH - Advanced Tennis Hub"
          imageSrc="/lovable-uploads/da809888-483b-4b2c-8e57-6d1ec6aaa51c.png"
          buttons={[
            { text: "Contattaci", href: '/contact' }
          ]}
          overlayOpacity="medium"
        />
        
        <AboutSection 
          title="Il Centro ATH"
          description={
            <div className="space-y-4">
              <p>ATH è un centro di allenamento specializzato che integra tecnologia avanzata e metodologia strutturata per offrire percorsi evolutivi personalizzati basati su dati oggettivi.</p>
              <p>Il nostro approccio metodologico unico e personalizzato si adatta a ogni profilo di giocatore, riconoscendo le caratteristiche individuali e le esigenze specifiche di ciascun atleta.</p>
              <p>Il sistema di monitoraggio parametrico VICKI™ garantisce continuità metodologica e supporto tecnico costante, indipendentemente dal coach presente in campo.</p>
              <p>La struttura costituisce una rete professionale aperta a coach, atleti e specialisti per ottimizzare il processo evolutivo tennistico attraverso un metodo oggettivo e misurabile.</p>
              <div className="mt-6">
                <ButtonLink href="/method" variant="primary">Scopri il Metodo ATH</ButtonLink>
              </div>
            </div>
          }
          image="https://images.unsplash.com/photo-1594381898411-846e7d193883"
          className="bg-white"
        />
        
        <StatsSection 
          stats={stats}
          darkBg={true}
        />
        
        <AboutSection 
          title="La Nostra Missione"
          description={
            <div className="space-y-4">
              <p>La nostra missione è fornire un ambiente di allenamento all'avanguardia che combini tecnologia avanzata, coaching esperto e un approccio personalizzato per aiutare ogni tennista a raggiungere il proprio pieno potenziale.</p>
              <p>Ci impegniamo a democratizzare l'accesso all'eccellenza tennistica attraverso il sistema VICKI™, rendendo le metodologie di allenamento di alto livello accessibili a giocatori di tutte le età e abilità.</p>
              <p>Attraverso l'innovazione continua e la dedizione all'eccellenza, miriamo a ridefinire gli standard dell'allenamento tennistico e a ispirare la prossima generazione di campioni.</p>
            </div>
          }
          image="https://images.unsplash.com/photo-1596731498067-75a7107cac89"
          reversed={true}
        />
        
        <section className="py-20 px-6 lg:px-10 bg-ath-gray">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display mb-6">Il Metodo ATH</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Il nostro approccio innovativo all'allenamento tennistico combina tecnologia avanzata e expertise umana per creare un'esperienza di apprendimento personalizzata e basata sui dati.
            </p>
            <div className="flex justify-center">
              <Link to="/method" className="px-8 py-4 bg-ath-clay text-white font-medium rounded-md hover:bg-opacity-90 transition-all shadow-md">
                Scopri come funziona VICKI™
              </Link>
            </div>
          </div>
        </section>
        
        <JoinRevolutionSection />
        
        <TestimonialsSection 
          title="Testimonianze"
          subtitle="Scopri i risultati ottenuti dai nostri atleti"
          testimonials={testimonials}
        />
        
        <ContactSection 
          title="Contatti"
          subtitle="Richiedi informazioni o prenota una visita"
          address="Via del Tennis 123, 20873 Rodano (MI)"
          phone="+39 02 1234567"
          email="info@ath-tennis.it"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
