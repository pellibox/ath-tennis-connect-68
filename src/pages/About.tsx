
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="h-40 bg-gradient-to-b from-ath-clay to-ath-secondary flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-display text-white">Chi Siamo</h1>
        </div>
        
        <AboutSection 
          title="Advanced Tennis Hub"
          subtitle="ATH - Innovazione Tennis"
          description={
            <div className="space-y-4">
              <p>ATH è un centro di allenamento specializzato che integra tecnologia avanzata e metodologia strutturata per offrire percorsi evolutivi personalizzati basati su dati oggettivi.</p>
              <p>Il sistema di monitoraggio parametrico garantisce continuità metodologica e supporto tecnico costante, indipendentemente dal coach presente in campo.</p>
              <p>La struttura costituisce una rete professionale aperta a coach, atleti e specialisti per ottimizzare il processo evolutivo tennistico attraverso un metodo oggettivo e misurabile.</p>
            </div>
          }
          image="https://images.unsplash.com/photo-1617711773026-ea7252c02cd3"
        />
        
        <AboutSection 
          title="La Nostra Missione"
          description={
            <div className="space-y-4">
              <p>La nostra missione è democratizzare l'accesso all'eccellenza tennistica attraverso un approccio scientifico, personalizzato e basato su dati oggettivi.</p>
              <p>Ci impegniamo a supportare lo sviluppo di ogni atleta con una metodologia integrata che valorizza il contributo umano del coach e lo amplifica attraverso tecnologia all'avanguardia.</p>
              <p>ATH rappresenta un nuovo modo di concepire il tennis coaching, dove innovazione tecnologica e competenza umana si fondono per creare percorsi evolutivi senza precedenti.</p>
            </div>
          }
          image="https://images.unsplash.com/photo-1519713958759-acd02cf23737"
          reversed={true}
        />
        
        <JoinRevolutionSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
