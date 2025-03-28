
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import ButtonLink from '@/components/ButtonLink';
import ContactSection from '@/components/ContactSection';

const PerformanceAnalysisProgram = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Performance Analysis"
            subtitle="Analisi completa del gioco con tecnologia avanzata e feedback personalizzato"
            imageSrc="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068785493?h=fe90d50dae&autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Performance Analysis"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
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
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">PERFORMANCE ANALYSIS:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Analisi completa del gioco con tecnologia avanzata e feedback personalizzato
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
                <h2 className="text-3xl font-swiss">Performance Analysis</h2>
                <VickiMonitoringBadge level="pro" />
                <VickiPoweredBadge />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">
                Analisi completa del gioco con tecnologia avanzata e feedback personalizzato.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il programma di Performance Analysis utilizza tecnologia all'avanguardia e metodologie analitiche 
                avanzate per fornire una valutazione completa e dettagliata delle prestazioni del giocatore.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="mb-4 font-swiss">
                Attraverso la tecnologia VICKI™, siamo in grado di monitorare oltre 70 parametri specifici e 
                trasformarli in insights actionable che guidano il miglioramento tecnico, tattico e atletico.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={250}>
              <p className="mb-4 font-swiss">
                <strong>Analisi Completa:</strong> Il nostro sistema fornisce una valutazione biomeccanica 
                approfondita, analizzando ogni aspetto del tuo gioco per identificare punti di forza e aree 
                di miglioramento con precisione scientifica.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={350} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche dell'Analisi</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>Valutazione biomeccanica completa</li>
                <li>Analisi tattica delle partite</li>
                <li>Monitoraggio dei pattern di movimento</li>
                <li>Analisi della velocità e precisione dei colpi</li>
                <li>Valutazione dell'efficienza energetica</li>
                <li>Report dettagliati con visualizzazioni interattive</li>
                <li>Heatmap e pattern di spostamento</li>
                <li>Statistiche avanzate di gioco</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={400} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Benefici</h3>
              <div className="mb-6">
                <ul className="list-disc list-inside space-y-2 font-swiss">
                  <li>Identificazione precisa delle aree di miglioramento</li>
                  <li>Ottimizzazione basata su dati oggettivi</li>
                  <li>Prevenzione degli infortuni</li>
                  <li>Personalizzazione dei programmi di allenamento</li>
                  <li>Misurazione accurata dei progressi nel tempo</li>
                  <li>Decisioni più informate su strategie di gioco</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <ButtonLink 
                  href="/contact" 
                  variant="athOutline"
                  showArrow={true}
                >
                  Scopri di più
                </ButtonLink>
              </div>
            </RevealAnimation>
          </div>
        </div>
        
        <ContactSection 
          title="Vuoi saperne di più?" 
          subtitle="Contattaci per una analisi personalizzata"
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default PerformanceAnalysisProgram;
