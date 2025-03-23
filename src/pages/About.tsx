
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';

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
          subtitle="Tecnologia e innovazione al servizio del tennis"
          imageSrc="/lovable-uploads/6ea13aa7-2578-488b-8ed4-4b17fc2ddc4e.png"
          height="medium"
          overlayOpacity="medium"
          vimeoEmbed="<div style='padding:56.25% 0 0 0;position:relative;'><iframe src='https://player.vimeo.com/video/868596952?h=b7fa539b1c&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479' frameborder='0' allow='autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media' style='position:absolute;top:0;left:0;width:100%;height:100%;' title='Junior male 2'></iframe></div><script src='https://player.vimeo.com/api/player.js'></script>"
        />
        
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
