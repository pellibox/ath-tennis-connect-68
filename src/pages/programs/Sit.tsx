
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import RevealAnimation from '@/components/RevealAnimation';
import ContactSection from '@/components/ContactSection';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import { ArrowRight, Calendar, Clock, Trophy, Users, Zap, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sit = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="SIT – Selezione e Individuazione Talenti"
          subtitle="Programma specializzato per bambini dai 8 ai 10+ anni"
          imageUrl="https://images.unsplash.com/photo-1596463059283-da257325bab8?q=80&w=2070&auto=format&fit=crop"
          height="medium"
          overlay="dark"
        />
        
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <RevealAnimation>
                  <div className="flex items-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-display">SIT – Selezione e Individuazione Talenti</h1>
                    <VickiPoweredBadge className="ml-4" />
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-600 mb-4">
                      Il programma SIT è progettato per identificare e sviluppare i giovani talenti tennistici in modo scientifico 
                      e divertente. Dedicato ai bambini dai 8 ai 10+ anni, questo percorso utilizza il sistema VICKI™ per 
                      monitorare pattern motori e attitudinali, permettendo un approccio personalizzato allo sviluppo di ogni bambino.
                    </p>
                    
                    <p className="text-lg text-gray-600 mb-4">
                      Combinando sessioni tecniche e atletiche in un ambiente stimolante, il programma SIT pone le basi per un 
                      corretto sviluppo tennistico, mantenendo sempre al centro la passione per lo sport e il divertimento.
                    </p>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Componenti del Programma</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Zap size={20} className="text-ath-clay mr-2" />
                          Sviluppo Tecnico
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            1 sessione tennis da 1 ora a settimana
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Approccio ludico all'apprendimento tecnico
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Insegnamento progressivo dei fondamentali
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Valutazione iniziale con sistema VICKI™
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Adattamento alle caratteristiche individuali
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Trophy size={20} className="text-ath-clay mr-2" />
                          Preparazione Atletica
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            2 sessioni atletica da 1 ora a settimana
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Sviluppo coordinativo e motorio
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Attività multidisciplinari
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Monitoraggio dello sviluppo fisico con parametri oggettivi
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Giochi propedeutici alla coordinazione tennistica
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Target size={20} className="text-ath-clay mr-2" />
                          Individuazione Talenti
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Monitoraggio di pattern motori e attitudinali
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Valutazioni periodiche dell'apprendimento
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Identificazione dei punti di forza naturali
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Feedback personalizzato ai genitori
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Heart size={20} className="text-ath-clay mr-2" />
                          Sviluppo della Passione
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Ambiente divertente e stimolante
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Attività che favoriscono l'amore per il tennis
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Mini-competizioni adattate all'età
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Celebrazione dei progressi individuali
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Vantaggi del Programma SIT</h2>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Identificazione precoce delle attitudini tennistiche</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Sviluppo armonioso delle capacità motorie di base</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Percorsi personalizzati basati sui dati raccolti</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Report dettagliati per i genitori sui progressi e potenziale</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Approccio graduale che rispetta lo sviluppo del bambino</span>
                      </li>
                    </ul>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-medium mb-4">L'Importanza dei Primi Passi</h3>
                      <p>
                        Nel tennis, come in ogni sport, i primi anni di formazione sono fondamentali. Il programma SIT 
                        è stato sviluppato tenendo conto delle più recenti ricerche in ambito psico-motorio e dell'esperienza 
                        pluriennale dei nostri coach. L'obiettivo è creare un ambiente in cui ogni bambino possa esprimere 
                        il proprio potenziale, sviluppando le basi tecniche corrette in un contesto divertente e stimolante.
                      </p>
                    </div>
                    
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center bg-ath-clay text-white py-3 px-6 rounded-md hover:bg-ath-clay/90 transition-colors"
                    >
                      Prenota una Prova <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </RevealAnimation>
              </div>
              
              <div className="md:w-1/3">
                <RevealAnimation delay={200}>
                  <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                    <h2 className="text-2xl font-display mb-6 pb-2 border-b">Dettagli Programma</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Calendar size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Durata</h3>
                          <p className="text-gray-600">40 settimane</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Impegno Settimanale</h3>
                          <p className="text-gray-600">3 ore totali (1 tennis + 2 atletica)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Users size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Età</h3>
                          <p className="text-gray-600">8-10+ anni</p>
                        </div>
                      </div>
                      
                      <div className="pt-4 mt-6 border-t">
                        <div className="text-center mb-3">
                          <span className="text-sm text-gray-500">Prezzo Annuale</span>
                          <div className="text-3xl font-bold text-ath-clay">€950</div>
                        </div>
                        
                        <Link 
                          to="/contact" 
                          className="w-full inline-flex items-center justify-center bg-ath-clay text-white py-3 px-6 rounded-md hover:bg-ath-clay/90 transition-colors"
                        >
                          Contattaci
                        </Link>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </section>
        
        <AboutSection 
          title="Tecnologia al Servizio dei Giovani Talenti"
          description={
            <div className="space-y-4">
              <p>
                Il sistema VICKI™ utilizzato nel programma SIT è stato adattato specificamente per i bambini, permettendo 
                un'analisi non invasiva dei movimenti e delle attitudini naturali.
              </p>
              <p>
                I dati raccolti consentono ai nostri coach di creare percorsi personalizzati che rispettano i tempi di sviluppo 
                di ogni bambino, massimizzando le potenzialità senza forzare i processi naturali di apprendimento.
              </p>
            </div>
          }
          image="https://images.unsplash.com/photo-1516820612845-a13894592463?q=80&w=2574&auto=format&fit=crop"
          buttons={[
            { text: 'SCOPRI LA TECNOLOGIA VICKI™', href: '/technology' }
          ]}
          reversed={true}
        />
        
        <ContactSection 
          title="Inizia il Percorso del Tuo Bambino"
          subtitle="Contattaci per una valutazione iniziale e scopri come il programma SIT può valorizzare il talento del tuo bambino."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Sit;
