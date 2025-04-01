import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import RevealAnimation from '@/components/RevealAnimation';
import VickiUnifiedBadge from '@/components/VickiUnifiedBadge';
import ButtonLink from '@/components/ButtonLink';
import ContactSection from '@/components/ContactSection';

const ProfessionalsProgram = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="relative">
          <Hero 
            title="Professionisti"
            subtitle="Supporto completo per atleti professionisti con analisi avanzata e ottimizzazione della performance"
            imageSrc="/lovable-uploads/53047a4d-087d-4e68-942b-d441b33bf6ab.png"
            vimeoEmbed='<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1071002692/a2668fa56d?autoplay=1&loop=1&background=1&autopause=0&player_id=0&app_id=58479&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Male Professional"></iframe></div>'
            buttons={[
              { text: 'PRENOTA UNA PROVA', href: '/contact' },
              { text: 'CONTATTACI', href: '/contact', variant: 'outline' }
            ]}
            contentPosition="left"
            overlayOpacity="medium"
          />
          
          <div className="w-full bg-black py-16 relative" style={{ height: '300px' }}>
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <h2 className="text-white text-lg font-display mr-3">PROFESSIONISTI:</h2>
                <p className="text-white text-lg font-swiss max-w-3xl">
                  Supporto completo per atleti professionisti con analisi avanzata e ottimizzazione della performance
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <VickiUnifiedBadge level="elite" className="bg-opacity-20 border-opacity-30 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-12">
            <RevealAnimation>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <h2 className="text-3xl font-swiss">Programma per Professionisti</h2>
                <VickiUnifiedBadge level="elite" />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={100}>
              <p className="text-lg mb-6 font-swiss">
                Supporto completo per atleti che competono ai massimi livelli.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={150}>
              <p className="mb-4 font-swiss">
                Il programma per Professionisti offre un supporto completo per atleti che competono ai massimi livelli, 
                combinando tecnologia all'avanguardia, coaching personalizzato e analisi avanzata delle prestazioni.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={200}>
              <p className="mb-4 font-swiss">
                Ogni aspetto del programma è adattato alle esigenze specifiche del giocatore professionista, 
                con l'obiettivo di ottimizzare le prestazioni e massimizzare il potenziale competitivo.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={250}>
              <p className="mb-4 font-swiss">
                <strong>Collaborazione multidisciplinare:</strong> Il nostro team di esperti, composto da coach, 
                preparatori atletici, mental coach e medici, lavora in sinergia per garantire un approccio 
                completamente integrato allo sviluppo del giocatore professionista.
              </p>
            </RevealAnimation>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <RevealAnimation delay={350} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>Allenamento completamente personalizzato su tutti i fronti</li>
                <li>Collaborazione tra coach, preparatore, mental coach e medico</li>
                <li>Analisi biomeccanica e mentale avanzata in tempo reale</li>
                <li>Analisi predittiva e adattamento continuo via AI</li>
                <li>Supporto tecnico sia in sede che da remoto</li>
                <li>Gestione ottimale dei cicli di carico, recupero e picco forma</li>
                <li>Integrazione di parametri medici e biochimici</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={400} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Vantaggi</h3>
              <div className="mb-6">
                <ul className="list-disc list-inside space-y-2 font-swiss">
                  <li>Ottimizzazione delle prestazioni basata sui dati</li>
                  <li>Miglioramento dell'efficienza tecnica</li>
                  <li>Prevenzione degli infortuni e recupero ottimale</li>
                  <li>Preparazione tattica specifica per avversari</li>
                  <li>Affinamento del gioco sotto pressione</li>
                  <li>Accesso a strutture e attrezzature all'avanguardia</li>
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
          subtitle="Contattaci per una consulenza personalizzata"
          address="Via Carlo D'Adda 6/8, 20143 Milano (MI)"
          email="info@advancedtennishub.com"
          phone="+39 02 123 4567"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfessionalsProgram;
