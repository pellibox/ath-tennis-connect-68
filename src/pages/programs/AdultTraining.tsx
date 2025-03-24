
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import RevealAnimation from '@/components/RevealAnimation';
import ContactSection from '@/components/ContactSection';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import { ArrowRight, Calendar, Clock, Users, Zap, Target, Play, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdultTraining = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Adult Training"
          subtitle="Tennis di qualità per adulti in un ambiente stimolante e sociale"
          imageUrl="https://images.unsplash.com/photo-1618073193718-23a66109f4e6?q=80&w=2670&auto=format&fit=crop"
          height="medium"
          overlay="dark"
        />
        
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <RevealAnimation>
                  <div className="flex items-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-display">Adult Training</h1>
                    <VickiPoweredBadge className="ml-4" />
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-600 mb-4">
                      Il programma Adult Training è progettato per gli adulti che desiderano imparare, migliorare o 
                      semplicemente godersi il tennis in un ambiente professionale ma accogliente. Con sessioni settimanali 
                      in piccoli gruppi, offre il perfetto equilibrio tra apprendimento tecnico e divertimento sociale.
                    </p>
                    
                    <p className="text-lg text-gray-600 mb-4">
                      Grazie al supporto della tecnologia VICKI™, anche i giocatori adulti possono beneficiare di analisi 
                      tecniche avanzate, ricevendo feedback precisi e visualizzando i propri progressi in modo oggettivo. 
                      Questo approccio scientifico rende l'apprendimento più efficace ed entusiasmante.
                    </p>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Caratteristiche del Programma</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Zap size={20} className="text-ath-clay mr-2" />
                          Allenamento in Piccoli Gruppi
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            1 sessione da 1 ora a settimana
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Gruppi di massimo 4 persone per campo
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Suddivisione per livello tecnico
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Equilibrio tra esercizi e situazioni di gioco
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Feedback personalizzato durante la sessione
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Target size={20} className="text-ath-clay mr-2" />
                          Approccio Personalizzato
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Valutazione iniziale del livello tecnico
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Definizione di obiettivi personali
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Adattamento agli obiettivi di ciascun giocatore
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Focus su aree tecniche da migliorare
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Consigli specifici per il proprio stile di gioco
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Play size={20} className="text-ath-clay mr-2" />
                          Analisi VICKI™
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Analisi tecnica tramite sistema VICKI™
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Feedback visivo immediato
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Monitoraggio dei progressi nel tempo
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Suggerimenti tecnici basati sui dati
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Heart size={20} className="text-ath-clay mr-2" />
                          Dimensione Sociale
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Ambiente amichevole e stimolante
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Opportunità di conoscere altri appassionati
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Eventi sociali occasionali
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Possibilità di organizzare partite amichevoli
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Vantaggi del Programma Adult Training</h2>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Miglioramento tecnico con approccio professionale</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Attività fisica regolare in un contesto piacevole</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Tecnologia avanzata a supporto dell'apprendimento</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Dimensione sociale dell'attività sportiva</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Flessibilità e rispetto dei propri obiettivi personali</span>
                      </li>
                    </ul>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-medium mb-4">Per Chi è Ideale</h3>
                      <p>
                        Il programma Adult Training è perfetto per adulti di tutti i livelli di esperienza, dai principianti che 
                        si avvicinano per la prima volta al tennis, a giocatori intermedi che desiderano migliorare la propria 
                        tecnica. È ideale per chi cerca un'attività sportiva regolare che combini miglioramento tecnico, attività 
                        fisica e dimensione sociale in un contesto di qualità.
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
                          <h3 className="font-medium">Impegno</h3>
                          <p className="text-gray-600">1 ora settimanale</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Users size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Formato</h3>
                          <p className="text-gray-600">Massimo 4 persone per campo</p>
                        </div>
                      </div>
                      
                      <div className="pt-4 mt-6 border-t">
                        <div className="text-center mb-3">
                          <span className="text-sm text-gray-500">Prezzo Annuale</span>
                          <div className="text-3xl font-bold text-ath-clay">€700</div>
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
          title="Tennis di Qualità per Tutti"
          description={
            <div className="space-y-4">
              <p>
                In ATH crediamo che il tennis di qualità debba essere accessibile a tutti, indipendentemente dall'età o dal livello. 
                Il nostro programma Adult Training porta la stessa professionalità e tecnologia dei programmi agonistici 
                in un formato adatto agli adulti che giocano per passione.
              </p>
              <p>
                I nostri coach sono formati per adattare la metodologia ATH alle esigenze specifiche dei giocatori adulti, 
                creando un ambiente stimolante dove migliorare tecnicamente divertendosi.
              </p>
            </div>
          }
          image="https://images.unsplash.com/photo-1625561416470-4c0a9a512c4d?q=80&w=2070&auto=format&fit=crop"
          buttons={[
            { text: 'SCOPRI LE NOSTRE STRUTTURE', href: '/facilities' }
          ]}
        />
        
        <ContactSection 
          title="Tennis, Tecnologia e Divertimento"
          subtitle="Contattaci per scoprire come il programma Adult Training può arricchire la tua esperienza tennistica."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default AdultTraining;
