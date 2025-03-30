
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import { programCategories } from '@/data/padel/categories';
import { Link } from 'react-router-dom';
import ButtonLink from '@/components/ButtonLink';

const Padel = () => {
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
            <h1 className="text-4xl md:text-5xl font-display mb-4">Padel</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Scopri i nostri programmi di allenamento esclusivi per Padel, progettati con la metodologia innovativa ATH.
            </p>
          </div>
        </RevealAnimation>
        
        <ProgramsSection 
          title="Programmi di Padel"
          subtitle="Esplora i nostri programmi specializzati per tutti i livelli"
          categories={programCategories}
          className="bg-ath-gray"
        />
        
        <AboutSection 
          title="Il Metodo ATH per Padel"
          description={
            <div className="space-y-4">
              <p>
                ATH ha esteso la sua metodologia innovativa al Padel, uno sport in rapida crescita che combina elementi del tennis con dinamiche di gioco uniche.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Sviluppo Tecnico</h3>
              <p>
                I nostri coach specializzati utilizzano analisi video avanzate e feedback in tempo reale per perfezionare la tua tecnica su tutti i colpi specifici del Padel.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Strategia & Tattica</h3>
              <p>
                Sviluppiamo il tuo pensiero tattico per il gioco in coppia e la capacità di sfruttare le pareti nel Padel.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Preparazione Fisica</h3>
              <p>
                Programmi di fitness personalizzati specifici per Padel, focalizzati su agilità, riflessi, equilibrio e coordinazione.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">Allenamento Mentale</h3>
              <p>
                Tecniche per sviluppare la concentrazione e la resilienza mentale necessarie in uno sport rapido e dinamico come il Padel.
              </p>
              <p className="mt-4">
                Che tu sia un principiante curioso o un giocatore esperto alla ricerca di miglioramento, i nostri programmi si adattano alle tue esigenze specifiche e ai tuoi obiettivi.
              </p>
            </div>
          }
          image="https://images.unsplash.com/photo-1624006930039-a08c8499a4a8?q=80&w=2070&auto=format&fit=crop"
          buttons={[
            { text: 'PRENOTA UNA PROVA', href: '/contact' }
          ]}
          reversed={true}
        />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <RevealAnimation>
              <h2 className="text-3xl md:text-4xl font-display mb-12 text-center">Prezzi dei Nostri Programmi</h2>
            </RevealAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <RevealAnimation delay={100}>
                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-medium text-center mb-2">Bambini e Teen</h3>
                    <p className="text-center text-gray-600">Per giovani appassionati di padel</p>
                  </div>
                  <div className="text-center mb-4">
                    <div className="flex flex-col space-y-2">
                      <span className="inline-flex justify-between">
                        <span>Monosettimanale:</span>
                        <span className="font-bold">€1040</span>
                      </span>
                      <span className="inline-flex justify-between">
                        <span>Bisettimanale:</span>
                        <span className="font-bold">€2080</span>
                      </span>
                      <span className="text-xs text-gray-500">all'anno</span>
                    </div>
                  </div>
                  <ul className="mb-8 space-y-3 flex-grow">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Approccio ludico e inclusivo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Tecnica di base del padel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Sessioni in piccoli gruppi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Sviluppo coordinazione</span>
                    </li>
                  </ul>
                  <Link to="/programs/padel-kids" className="mt-auto w-full bg-ath-clay text-white py-3 rounded-md hover:bg-opacity-90 transition-colors text-center">
                    Scopri di Più
                  </Link>
                </div>
              </RevealAnimation>
              
              <RevealAnimation delay={200}>
                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-medium text-center mb-2">Adulti</h3>
                    <p className="text-center text-gray-600">Dai 16 anni - 1h di attività</p>
                  </div>
                  <div className="text-center mb-4">
                    <div className="flex flex-col space-y-2">
                      <span className="inline-flex justify-between">
                        <span>Monosettimanale:</span>
                        <span className="font-bold">€1040</span>
                      </span>
                      <span className="inline-flex justify-between">
                        <span>Bisettimanale:</span>
                        <span className="font-bold">€2080</span>
                      </span>
                      <span className="text-xs text-gray-500">all'anno</span>
                    </div>
                  </div>
                  <ul className="mb-8 space-y-3 flex-grow">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Lezioni in piccoli gruppi (max 4)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Analisi tecnica personalizzata</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Focus sul gioco in coppia</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Per principianti e intermedi</span>
                    </li>
                  </ul>
                  <Link to="/programs/padel-adult" className="mt-auto w-full bg-ath-clay text-white py-3 rounded-md hover:bg-opacity-90 transition-colors text-center">
                    Scopri di Più
                  </Link>
                </div>
              </RevealAnimation>
              
              <RevealAnimation delay={300}>
                <div className="bg-white p-8 rounded-lg border-2 border-ath-clay shadow-md hover:shadow-lg transition-shadow h-full flex flex-col relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-ath-clay text-white px-4 py-1 rounded-full text-sm font-medium">
                    Più Popolare
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-medium text-center mb-2">Agonisti</h3>
                    <p className="text-center text-gray-600">Programma competitivo avanzato</p>
                  </div>
                  <div className="text-center mb-4">
                    <div className="flex flex-col space-y-2">
                      <span className="inline-flex justify-between">
                        <span>Monosettimanale:</span>
                        <span className="font-bold">€1400</span>
                      </span>
                      <span className="inline-flex justify-between">
                        <span>Bisettimanale:</span>
                        <span className="font-bold">€2480</span>
                      </span>
                      <span className="text-xs text-gray-500">all'anno</span>
                    </div>
                  </div>
                  <ul className="mb-8 space-y-3 flex-grow">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Analisi biomeccanica avanzata</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Tecniche di gioco avanzate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Preparazione fisica specifica</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Strategie per competizioni</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Analisi VICKI™ Advanced</span>
                    </li>
                  </ul>
                  <Link to="/programs/padel-advanced" className="mt-auto w-full bg-ath-clay text-white py-3 rounded-md hover:bg-opacity-90 transition-colors text-center">
                    Scopri di Più
                  </Link>
                </div>
              </RevealAnimation>
              
              <RevealAnimation delay={400}>
                <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-medium text-center mb-2">Coaching Privato</h3>
                    <p className="text-center text-gray-600">Sessioni personalizzate</p>
                  </div>
                  <div className="text-center mb-4">
                    <div className="flex flex-col space-y-2">
                      <span className="inline-flex justify-between">
                        <span>Prezzo:</span>
                        <span className="font-bold">Su richiesta</span>
                      </span>
                      <span className="text-xs text-gray-500">Personalizzato in base alle esigenze</span>
                    </div>
                  </div>
                  <ul className="mb-8 space-y-3 flex-grow">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Lezioni one-to-one o in coppia</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Analisi completa con VICKI™ Elite</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Piano personalizzato di miglioramento</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Report dettagliato delle performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Accesso esclusivo alle strutture</span>
                    </li>
                  </ul>
                  <Link to="/programs/padel-private" className="mt-auto w-full bg-ath-clay text-white py-3 rounded-md hover:bg-opacity-90 transition-colors text-center">
                    Scopri di Più
                  </Link>
                </div>
              </RevealAnimation>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Pacchetti personalizzati disponibili su richiesta</p>
              <ButtonLink href="/contact" className="inline-flex items-center text-ath-clay font-medium">
                Contattaci per maggiori informazioni
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Padel;
