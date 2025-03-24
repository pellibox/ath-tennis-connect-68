
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import RevealAnimation from '@/components/RevealAnimation';
import ContactSection from '@/components/ContactSection';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import { ArrowRight, Calendar, Clock, Users, Zap, Target, Film, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const PersonalTraining = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Personal Training"
          subtitle="Allenamento personalizzato per giovani tennisti under 13-18"
          imageUrl="https://images.unsplash.com/photo-1530915409450-e48b4c7f7ef7?q=80&w=2835&auto=format&fit=crop"
          height="medium"
          overlay="dark"
        />
        
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <RevealAnimation>
                  <div className="flex items-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-display">Personal Training</h1>
                    <VickiPoweredBadge className="ml-4" />
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-600 mb-4">
                      Il programma Personal Training è progettato per giovani tennisti tra i 13 e i 18 anni che desiderano 
                      un percorso di allenamento personalizzato, focalizzato sui loro specifici obiettivi tecnici e agonistici. 
                      Con sessioni one-to-one settimanali, ogni atleta riceve attenzione dedicata e feedback immediato.
                    </p>
                    
                    <p className="text-lg text-gray-600 mb-4">
                      Grazie all'integrazione con il sistema VICKI™, ogni sessione permette di analizzare nel dettaglio 
                      i movimenti, la tecnica e le performance, offrendo un'esperienza di allenamento altamente scientifica 
                      e mirata al miglioramento continuo.
                    </p>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Componenti del Programma</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Zap size={20} className="text-ath-clay mr-2" />
                          Allenamento Tecnico Personalizzato
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            1 sessione da 1 ora a settimana
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Format one-to-one con coach dedicato
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Focus su aspetti tecnici specifici
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Analisi biomeccanica con VICKI™
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Feedback immediato e personalizzato
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Target size={20} className="text-ath-clay mr-2" />
                          Analisi e Pianificazione
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Valutazione iniziale completa
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Definizione di obiettivi personalizzati
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Piano di sviluppo individuale
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Monitoraggio continuo dei progressi
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Aggiornamento periodico del programma
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Film size={20} className="text-ath-clay mr-2" />
                          Supporto Video-Analitico
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Registrazione video delle sessioni
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Analisi tecnica dettagliata
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Confronto con modelli di riferimento
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Accesso ai video delle sessioni
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <BarChart size={20} className="text-ath-clay mr-2" />
                          Report e Progressi
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Dashboard personale con VICKI™
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Report periodici sui progressi
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Metriche oggettive di miglioramento
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Condivisione dati con i genitori
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Vantaggi del Personal Training</h2>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Attenzione completamente dedicata da parte del coach</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Programma modellato sulle esigenze specifiche dell'atleta</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Accelerazione del processo di apprendimento</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Feedback immediato e correzioni tecniche precise</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Supporto per il percorso agonistico individuale</span>
                      </li>
                    </ul>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-medium mb-4">A Chi è Dedicato</h3>
                      <p>
                        Il Personal Training è ideale per giovani tennisti che desiderano integrare il loro allenamento di gruppo 
                        con un lavoro mirato sugli aspetti tecnici individuali, o per chi preferisce un percorso completamente personalizzato. 
                        È particolarmente indicato per chi ha obiettivi competitivi specifici o necessità tecniche che richiedono 
                        un'attenzione dedicata.
                      </p>
                    </div>
                    
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center bg-ath-clay text-white py-3 px-6 rounded-md hover:bg-ath-clay/90 transition-colors"
                    >
                      Richiedi Informazioni <ArrowRight size={18} className="ml-2" />
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
                          <h3 className="font-medium">Disponibilità</h3>
                          <p className="text-gray-600">Tutto l'anno</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Sessioni</h3>
                          <p className="text-gray-600">1 ora settimanale</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Users size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Format</h3>
                          <p className="text-gray-600">One-to-one con coach dedicato</p>
                        </div>
                      </div>
                      
                      <div className="pt-4 mt-6 border-t">
                        <div className="text-center mb-3">
                          <span className="text-sm text-gray-500">Prezzo Annuale</span>
                          <div className="text-3xl font-bold text-ath-clay">€2.000</div>
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
          title="Tecnologia e Coaching Personalizzato"
          description={
            <div className="space-y-4">
              <p>
                Nel Personal Training, la tecnologia VICKI™ si combina con l'esperienza dei nostri coach per offrire 
                un'esperienza di allenamento unica, dove ogni dettaglio tecnico viene analizzato e ottimizzato.
              </p>
              <p>
                Il nostro approccio basato sui dati trasforma l'allenamento one-to-one in un percorso scientifico verso 
                l'eccellenza tecnica, permettendo progressi rapidi e mirati.
              </p>
            </div>
          }
          image="https://images.unsplash.com/photo-1583224964978-2e6656b3c681?q=80&w=2070&auto=format&fit=crop"
          buttons={[
            { text: 'SCOPRI GLI ALTRI PROGRAMMI', href: '/programs' }
          ]}
          reversed={true}
        />
        
        <ContactSection 
          title="Personalizza il Tuo Percorso di Crescita"
          subtitle="Contattaci per scoprire come il Personal Training può accelerare il tuo sviluppo tennistico."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default PersonalTraining;
