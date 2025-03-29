
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import { programCategories } from '@/data/pickleball/categories';

const Pickleball = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      
      <main className="flex-grow pt-20">
        <div className="w-full bg-black min-h-[calc(100vw*9/16)] relative">
          <div dangerouslySetInnerHTML={{ __html: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1068835737?h=f0a05fef01&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>' }} />
        </div>
        
        <RevealAnimation>
          <div className="container mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-display mb-4">Pickleball</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Scopri i nostri programmi di allenamento esclusivi per Pickleball, progettati con la metodologia innovativa ATH.
            </p>
          </div>
        </RevealAnimation>
        
        <ProgramsSection 
          title="Programmi di Pickleball"
          subtitle="Esplora i nostri programmi specializzati per tutti i livelli"
          categories={programCategories}
          className="bg-ath-gray"
        />
        
        <AboutSection 
          title="Il Metodo ATH per Pickleball"
          description={
            <div className="space-y-4">
              <p>
                ATH ha adattato la sua metodologia innovativa al Pickleball, uno sport emergente che sta conquistando rapidamente giocatori di tutte le età.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Sviluppo Tecnico</h3>
              <p>
                I nostri coach specializzati utilizzano analisi video avanzate e feedback in tempo reale per perfezionare la tua tecnica su tutti i colpi specifici del Pickleball.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Strategia & Tattica</h3>
              <p>
                Sviluppiamo il tuo pensiero tattico per le dinamiche uniche del Pickleball, con particolare attenzione alla "kitchen zone" e alle strategie di gioco in doppio.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Preparazione Fisica</h3>
              <p>
                Programmi di fitness personalizzati specifici per Pickleball, focalizzati su reattività, agilità e movimenti laterali rapidi.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Allenamento Mentale</h3>
              <p>
                Tecniche per sviluppare la concentrazione e la presa di decisione rapida necessarie in uno sport veloce come il Pickleball.
              </p>
              <p className="mt-4">
                Che tu sia un principiante alle prime armi o un giocatore esperto alla ricerca di perfezionamento, i nostri programmi si adattano alle tue esigenze specifiche.
              </p>
            </div>
          }
          image="/lovable-uploads/c4c120e8-c90d-48a3-933c-d4cce08b5129.png"
          buttons={[
            { text: 'PRENOTA UNA PROVA', href: '/contact' }
          ]}
          reversed={false}
        />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <RevealAnimation>
              <h2 className="text-3xl md:text-4xl font-display mb-12 text-center">Prezzi dei Nostri Programmi</h2>
            </RevealAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <RevealAnimation delay={100}>
                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-medium text-center mb-2">Pickleball Base</h3>
                    <p className="text-center text-gray-600">Per principianti</p>
                  </div>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">€30</span>
                    <span className="text-gray-600">/ora</span>
                  </div>
                  <ul className="mb-8 space-y-3 flex-grow">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Lezioni in piccoli gruppi (max 4 persone)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Introduzione alle regole e tecniche</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Allenamento pratico con match</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Attrezzatura inclusa per principianti</span>
                    </li>
                  </ul>
                  <button className="mt-auto w-full bg-ath-clay text-white py-3 rounded-md hover:bg-opacity-90 transition-colors">
                    Prenota Ora
                  </button>
                </div>
              </RevealAnimation>
              
              <RevealAnimation delay={200}>
                <div className="bg-white p-8 rounded-lg border-2 border-ath-clay shadow-md hover:shadow-lg transition-shadow h-full flex flex-col relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-ath-clay text-white px-4 py-1 rounded-full text-sm font-medium">
                    Più Popolare
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-medium text-center mb-2">Pickleball Intermedio</h3>
                    <p className="text-center text-gray-600">Per giocatori con esperienza</p>
                  </div>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">€40</span>
                    <span className="text-gray-600">/ora</span>
                  </div>
                  <ul className="mb-8 space-y-3 flex-grow">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Lezioni in piccoli gruppi (max 4 persone)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Perfezionamento tecnico con video analisi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Strategie di gioco avanzate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Simulazioni di situazioni di gioco reali</span>
                    </li>
                  </ul>
                  <button className="mt-auto w-full bg-ath-clay text-white py-3 rounded-md hover:bg-opacity-90 transition-colors">
                    Prenota Ora
                  </button>
                </div>
              </RevealAnimation>
              
              <RevealAnimation delay={300}>
                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-medium text-center mb-2">Pickleball Privato</h3>
                    <p className="text-center text-gray-600">Sessioni personalizzate</p>
                  </div>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">€50</span>
                    <span className="text-gray-600">/ora</span>
                  </div>
                  <ul className="mb-8 space-y-3 flex-grow">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Lezioni individuali o in coppia</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Analisi video dettagliata</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Programma personalizzato su obiettivi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Feedback continuo e supporto</span>
                    </li>
                  </ul>
                  <button className="mt-auto w-full bg-ath-clay text-white py-3 rounded-md hover:bg-opacity-90 transition-colors">
                    Prenota Ora
                  </button>
                </div>
              </RevealAnimation>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Pacchetti personalizzati disponibili su richiesta</p>
              <a href="/contact" className="inline-flex items-center text-ath-clay font-medium animated-line pb-1">
                Contattaci per maggiori informazioni
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pickleball;
