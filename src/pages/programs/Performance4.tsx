
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import RevealAnimation from '@/components/RevealAnimation';
import ContactSection from '@/components/ContactSection';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import { ArrowRight, Calendar, Clock, Trophy, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Performance4 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Performance 4"
          subtitle="Programma agonistico intensivo con 4 giorni di allenamento settimanale"
          imageUrl="https://images.unsplash.com/photo-1540040920895-4ed22be1b0c0?q=80&w=2670&auto=format&fit=crop"
          height="medium"
          overlay="dark"
        />
        
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <RevealAnimation>
                  <div className="flex items-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-display">Performance 4</h1>
                    <VickiPoweredBadge className="ml-4" />
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-600 mb-4">
                      Performance 4 è un programma agonistico avanzato, studiato per atleti con serie ambizioni competitive
                      che possono dedicare quattro giorni alla settimana all'allenamento intensivo. Il programma prevede un 
                      rapporto coach-atleti di 1:2, garantendo un'attenzione altamente personalizzata su ogni aspetto del gioco.
                    </p>
                    
                    <p className="text-lg text-gray-600 mb-4">
                      Questo percorso rappresenta un importante step verso programmi di livello Elite, con un impegno settimanale 
                      significativo di 12 ore complessive tra tennis e preparazione fisica. La tecnologia VICKI™ supporta ogni fase 
                      dell'allenamento, offrendo analisi dettagliate e feedback immediati.
                    </p>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Componenti del Programma</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Zap size={20} className="text-ath-clay mr-2" />
                          Allenamento Tennis
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            4 sessioni da 1,5 ore settimanali (6 ore totali)
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Massimo 2 atleti per campo
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Analisi biomeccanica approfondita
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Feedback tecnico in tempo reale con VICKI™
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Sviluppo tattico avanzato
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
                            4 sessioni da 1,5 ore settimanali (6 ore totali)
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Sviluppo di forza, velocità e resistenza
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Monitoraggio scientifico dei parametri fisici
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Prevenzione infortuni avanzata
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Preparazione specifica per i movimenti tennistici
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Vantaggi del Programma</h2>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Rapporto coach-atleti 1:2 per un'attenzione altamente personalizzata</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Volume di allenamento importante per progressi tecnici significativi</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Analisi approfondita di ogni colpo attraverso il sistema VICKI™</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Sviluppo integrato di tecnica, tattica, fisico e mentale</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Pianificazione e supporto per il calendario agonistico</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Report dettagliati su progressi e aree di miglioramento</span>
                      </li>
                    </ul>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-medium mb-4">Per Chi è Ideale</h3>
                      <p>
                        Performance 4 è ideale per giocatori agonisti con ambizioni di competere ad alto livello, che possono 
                        dedicare un impegno significativo all'allenamento. Il programma è perfetto per chi cerca un ponte verso 
                        il tennis di alta performance, con un coaching avanzato e un utilizzo intensivo dell'analisi dati per 
                        accelerare i progressi.
                      </p>
                    </div>
                    
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center bg-ath-clay text-white py-3 px-6 rounded-md hover:bg-ath-clay/90 transition-colors"
                    >
                      Prenota una Consulenza <ArrowRight size={18} className="ml-2" />
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
                          <p className="text-gray-600">48 settimane</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Impegno Settimanale</h3>
                          <p className="text-gray-600">4 giorni, 12 ore totali</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Users size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Rapporto Coach/Atleti</h3>
                          <p className="text-gray-600">1:2 massimo</p>
                        </div>
                      </div>
                      
                      <div className="pt-4 mt-6 border-t">
                        <div className="text-center mb-3">
                          <span className="text-sm text-gray-500">Prezzo Annuale</span>
                          <div className="text-3xl font-bold text-ath-clay">€6.500</div>
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
          title="L'Eccellenza del Metodo ATH"
          description={
            <div className="space-y-4">
              <p>
                Il programma Performance 4 rappresenta un'applicazione avanzata del metodo ATH, dove tecnologia e competenza umana si fondono 
                per portare ogni atleta al massimo del suo potenziale.
              </p>
              <p>
                Il nostro approccio basato sui dati garantisce che ogni minuto di allenamento sia ottimizzato, con feedback immediati 
                e una personalizzazione che tiene conto di tutte le caratteristiche individuali del giocatore.
              </p>
            </div>
          }
          image="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2674&auto=format&fit=crop"
          buttons={[
            { text: 'SCOPRI IL METODO ATH', href: '/method' }
          ]}
        />
        
        <ContactSection 
          title="Pronto a Fare il Salto di Qualità?"
          subtitle="Contattaci per scoprire come il programma Performance 4 può accelerare il tuo percorso verso l'eccellenza tennistica."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Performance4;
