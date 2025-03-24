
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import RevealAnimation from '@/components/RevealAnimation';
import ContactSection from '@/components/ContactSection';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import { ArrowRight, Calendar, Clock, Trophy, Users, Zap, ChefHat, Brain, Medal } from 'lucide-react';
import { Link } from 'react-router-dom';

const ElitePerformanceFull = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Elite Performance Full"
          subtitle="Programma completo di eccellenza per aspiranti tennisti professionisti"
          imageUrl="https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=2688&auto=format&fit=crop"
          height="medium"
          overlay="dark"
        />
        
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <RevealAnimation>
                  <div className="flex items-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-display">Elite Performance Full</h1>
                    <VickiPoweredBadge className="ml-4" />
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-600 mb-4">
                      Elite Performance Full rappresenta il nostro programma di punta, progettato per atleti che aspirano 
                      a raggiungere il massimo livello professionistico. Con 10 sessioni di tennis settimanali e 7 sessioni 
                      di preparazione atletica, offre un'intensità e una completezza senza pari.
                    </p>
                    
                    <p className="text-lg text-gray-600 mb-4">
                      Questo programma garantisce più di 30 ore settimanali di allenamento ad alta intensità, 
                      con un rapporto coach-atleti di 1:2 e un approccio completamente personalizzato basato sulla 
                      tecnologia VICKI™ e sull'esperienza del nostro team di professionisti.
                    </p>
                    
                    <div className="bg-ath-clay/10 p-6 rounded-lg border border-ath-clay/20 mb-8">
                      <h3 className="text-xl font-medium text-ath-clay mb-3">Un Percorso verso il Professionismo</h3>
                      <p className="text-gray-700">
                        Elite Performance Full è il programma più completo offerto da ATH, progettato specificamente 
                        per chi ha l'ambizione e il potenziale di diventare un tennista professionista. Ogni aspetto 
                        dell'allenamento è calibrato al massimo livello, con un'integrazione totale tra preparazione 
                        tecnica, fisica, mentale e tattica.
                      </p>
                    </div>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Componenti del Programma</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Zap size={20} className="text-ath-clay mr-2" />
                          Allenamento Tennis Intensivo
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            5 sessioni mattina + 5 pomeriggio (20 ore settimanali)
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Massimo 2 atleti per campo
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Analisi biomeccanica avanzata continua
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Sviluppo tattico personalizzato
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Simulazioni di match con analisi dettagliata
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Trophy size={20} className="text-ath-clay mr-2" />
                          Preparazione Atletica Avanzata
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            7 sessioni da 1,5 ore (10,5 ore settimanali)
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Sviluppo di potenza, velocità e resistenza
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Monitoraggio biometrico completo
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Programmi di prevenzione infortuni
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Recupero attivo guidato
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Brain size={20} className="text-ath-clay mr-2" />
                          Preparazione Mentale Elite
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Sessioni settimanali con mental coach
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Tecniche di visualizzazione avanzata
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Strategie di gestione della pressione
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Routine pre-partita personalizzate
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Monitoraggio del benessere psicologico
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <ChefHat size={20} className="text-ath-clay mr-2" />
                          Supporto Nutrizionale
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Piano alimentare personalizzato
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Monitoraggio dell'idratazione
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Strategie nutrizionali per competizioni
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Supporto per la composizione corporea ideale
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Consulenza sull'integrazione
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Medal size={20} className="text-ath-clay mr-2" />
                          Gestione Competitiva Completa
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Pianificazione annuale dei tornei
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Coaching durante i tornei principali
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Analisi degli avversari con VICKI™
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Debriefing post-torneo approfondito
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Adattamento continuo della programmazione
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Chi Dovrebbe Scegliere Elite Performance Full</h2>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Atleti con comprovato potenziale per il tennis professionistico</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Giocatori che possono dedicare tutto il loro tempo all'allenamento intensivo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Tennisti che già competono a livello nazionale o internazionale</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Chi cerca un programma totalmente immersivo e comprensivo</span>
                      </li>
                    </ul>
                    
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center bg-ath-clay text-white py-3 px-6 rounded-md hover:bg-ath-clay/90 transition-colors"
                    >
                      Richiedi una Consulenza Personalizzata <ArrowRight size={18} className="ml-2" />
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
                          <p className="text-gray-600">5 giorni, 30+ ore totali di allenamento</p>
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
                          <div className="text-3xl font-bold text-ath-clay">€15.000</div>
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
          title="La Via Verso l'Eccellenza"
          description={
            <div className="space-y-4">
              <p>
                Elite Performance Full rappresenta la massima espressione del metodo ATH, un programma completo che integra 
                tecnologia all'avanguardia e competenze di coaching di livello mondiale per atleti con obiettivi professionistici.
              </p>
              <p>
                La nostra missione è trasformare il potenziale in eccellenza, attraverso un percorso che non lascia nulla al caso 
                e che utilizza la scienza e l'esperienza per ottimizzare ogni aspetto della performance tennistica.
              </p>
            </div>
          }
          image="https://images.unsplash.com/photo-1560012057-4372e14c5085?q=80&w=2574&auto=format&fit=crop"
          buttons={[
            { text: 'ESPLORA I NOSTRI SUCCESSI', href: '/about' }
          ]}
          reversed={true}
        />
        
        <ContactSection 
          title="Pronto a Perseguire l'Eccellenza?"
          subtitle="Contattaci per una valutazione e scopri se Elite Performance Full è il programma giusto per il tuo percorso tennistico."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ElitePerformanceFull;
