
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import RevealAnimation from '@/components/RevealAnimation';
import ContactSection from '@/components/ContactSection';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import { ArrowRight, Users, Zap, BookOpen, ChartBar, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const Coach = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Programma Coach / Allenatori"
          subtitle="Formazione avanzata e strumenti professionali per allenatori"
          imageUrl="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2069&auto=format&fit=crop"
          height="medium"
          overlay="dark"
        />
        
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <RevealAnimation>
                  <div className="flex items-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-display">Coach / Allenatori</h1>
                    <VickiPoweredBadge className="ml-4" />
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-600 mb-4">
                      Il programma Coach è progettato per allenatori di tennis che desiderano elevare il proprio livello 
                      professionale integrando tecnologia avanzata e metodologie innovative nel loro approccio all'insegnamento. 
                      Attraverso l'accesso al sistema VICKI™ e una formazione continua, i coach possono sviluppare un metodo 
                      di allenamento più efficace e basato sui dati.
                    </p>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Componenti del Programma</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Zap size={20} className="text-ath-clay mr-2" />
                          Tecnologia VICKI™
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Accesso completo alla piattaforma
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Strumenti di tracking e analisi video
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Dashboard personalizzata
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Analisi biomeccanica avanzata
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Strumenti di reportistica
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <BookOpen size={20} className="text-ath-clay mr-2" />
                          Formazione Continua
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Workshop metodologici periodici
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Aggiornamenti sulle nuove tecnologie
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Formazione sull'uso di VICKI™
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Mentoring professionale
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <ChartBar size={20} className="text-ath-clay mr-2" />
                          Analisi e Monitoraggio
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Strumenti di analisi delle prestazioni
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Monitoraggio progresso atleti
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Metriche oggettive di miglioramento
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Report automatizzati
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Laptop size={20} className="text-ath-clay mr-2" />
                          Supporto Tecnico
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Assistenza tecnica dedicata
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Supporto per l'implementazione
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Consulenza personalizzata
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Aggiornamenti software continui
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Vantaggi per i Coach</h2>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Accesso a tecnologia all'avanguardia per l'analisi tecnica</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Possibilità di offrire un servizio di coaching di livello superiore</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Formazione continua e aggiornamento professionale</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Strumenti oggettivi per la valutazione e il monitoraggio</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Supporto per lo sviluppo di una metodologia personalizzata</span>
                      </li>
                    </ul>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-medium mb-4">Personalizzazione del Servizio</h3>
                      <p>
                        Il programma Coach può essere personalizzato in base alle esigenze specifiche dell'allenatore 
                        e della sua realtà lavorativa. Offriamo diverse opzioni di accesso alla piattaforma VICKI™ e 
                        alla formazione, con piani che si adattano a diversi livelli di utilizzo e necessità professionali.
                      </p>
                    </div>
                    
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center bg-ath-clay text-white py-3 px-6 rounded-md hover:bg-ath-clay/90 transition-colors"
                    >
                      Richiedi una Consulenza <ArrowRight size={18} className="ml-2" />
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
                        <Users size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Target</h3>
                          <p className="text-gray-600">Coach professionisti</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Zap size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Accesso</h3>
                          <p className="text-gray-600">Piattaforma disponibile tutto l'anno</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <BookOpen size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Formazione</h3>
                          <p className="text-gray-600">Workshop periodici e supporto continuo</p>
                        </div>
                      </div>
                      
                      <div className="pt-4 mt-6 border-t">
                        <div className="text-center mb-3">
                          <span className="text-sm text-gray-500">Prezzo</span>
                          <div className="text-xl font-bold text-ath-clay">Personalizzato in base alle esigenze</div>
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
          title="Innovazione nel Coaching"
          description={
            <div className="space-y-4">
              <p>
                La tecnologia VICKI™ rappresenta un salto di qualità nel modo di insegnare il tennis, offrendo ai coach 
                strumenti avanzati per l'analisi e il monitoraggio delle prestazioni dei loro atleti.
              </p>
              <p>
                Attraverso il nostro programma, i coach possono accedere a questa tecnologia innovativa e ricevere la 
                formazione necessaria per utilizzarla al massimo del suo potenziale.
              </p>
            </div>
          }
          image="https://images.unsplash.com/photo-1434754205268-ad3b5f549b11?q=80&w=2074&auto=format&fit=crop"
          buttons={[
            { text: 'SCOPRI LA TECNOLOGIA VICKI™', href: '/technology' }
          ]}
        />
        
        <ContactSection 
          title="Eleva il Tuo Coaching"
          subtitle="Contattaci per scoprire come il programma Coach può trasformare il tuo approccio all'insegnamento del tennis."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Coach;
