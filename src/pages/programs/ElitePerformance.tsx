
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import RevealAnimation from '@/components/RevealAnimation';
import ContactSection from '@/components/ContactSection';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import { ArrowRight, Calendar, Clock, Trophy, Users, Zap, Brain, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const ElitePerformance = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Elite Performance"
          subtitle="Programma di eccellenza per atleti agonisti di alto livello"
          imageUrl="https://images.unsplash.com/photo-1622279457486-67cupgryz7b?q=80&w=2670&auto=format&fit=crop"
          height="medium"
          overlay="dark"
        />
        
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <RevealAnimation>
                  <div className="flex items-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-display">Elite Performance</h1>
                    <VickiPoweredBadge className="ml-4" />
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-600 mb-4">
                      Elite Performance è un programma di eccellenza progettato per atleti con elevate aspirazioni competitive.
                      Con 5 giorni di allenamento tennistico settimanale e un rapporto coach-atleti di 1:2, offre un'intensità e 
                      una personalizzazione di altissimo livello per chi punta a competere ai massimi livelli.
                    </p>
                    
                    <p className="text-lg text-gray-600 mb-4">
                      La tecnologia VICKI™ è pienamente integrata nel programma, fornendo analisi biomeccaniche avanzate, 
                      feedback in tempo reale e monitoraggio costante dei progressi. Ogni aspetto dell'allenamento è scientificamente 
                      pianificato per ottimizzare lo sviluppo dell'atleta.
                    </p>
                    
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
                            5 sessioni da 1,5 ore settimanali (7,5 ore totali)
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Massimo 2 atleti per campo
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Analisi biomeccanica avanzata
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Pianificazione tattica personalizzata
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Simulazioni di match con analisi
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Brain size={20} className="text-ath-clay mr-2" />
                          Supporto Mentale e Strategico
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Sessioni di allenamento mentale regolari
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Strategie di gestione della pressione
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Analisi video delle partite con coach
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Pianificazione tattica per i tornei
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Sviluppo della resilienza agonistica
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Target size={20} className="text-ath-clay mr-2" />
                          Sviluppo Competitivo
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Pianificazione annuale dei tornei
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Supporto durante le competizioni
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Analisi post-torneo con feedback dettagliato
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Statistiche di gioco avanzate
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Trophy size={20} className="text-ath-clay mr-2" />
                          Monitoraggio Continuo
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Test periodici di valutazione
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Dashboard personale con progressi
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Comunicazione continua con il team di coach
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Adattamento in tempo reale del programma
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Vantaggi del Programma Elite</h2>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Volume di allenamento ottimale per il progresso ad alto livello</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Analisi biomeccanica avanzata per ottimizzare ogni colpo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Approccio integrato con coordinamento tra tutti gli specialisti</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Personalizzazione estrema basata sui dati VICKI™</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Supporto per il calendario agonistico nazionale e internazionale</span>
                      </li>
                    </ul>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-medium mb-4">Chi Dovrebbe Scegliere Elite Performance</h3>
                      <p>
                        Questo programma è ideale per atleti con chiare ambizioni competitive che già competono 
                        a livello nazionale e aspirano a livelli più alti. È perfetto per chi cerca un allenamento 
                        intensivo, scientificamente strutturato, con focus sul miglioramento continuo e l'ottimizzazione 
                        della performance.
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
                          <h3 className="font-medium">Durata</h3>
                          <p className="text-gray-600">48 settimane</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Impegno Settimanale</h3>
                          <p className="text-gray-600">5 giorni, 7,5 ore di tennis</p>
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
                          <div className="text-3xl font-bold text-ath-clay">€7.500</div>
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
          title="Tecnologia al Servizio dell'Eccellenza"
          description={
            <div className="space-y-4">
              <p>
                Nel programma Elite Performance, la tecnologia VICKI™ viene utilizzata al massimo del suo potenziale per analizzare 
                ogni aspetto della performance e guidare l'allenamento verso l'eccellenza.
              </p>
              <p>
                I nostri coach sono specializzati nell'interpretare i dati e trasformarli in azioni concrete, creando un ponte 
                tra tecnologia e miglioramento pratico sul campo.
              </p>
            </div>
          }
          image="https://images.unsplash.com/photo-1613922382856-9e1641bd2e22?q=80&w=2670&auto=format&fit=crop"
          buttons={[
            { text: 'SCOPRI LA TECNOLOGIA VICKI™', href: '/technology' }
          ]}
          reversed={true}
        />
        
        <ContactSection 
          title="Porta il Tuo Tennis a Livello Elite"
          subtitle="Contattaci per scoprire come il programma Elite Performance può trasformare il tuo approccio al tennis agonistico."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ElitePerformance;
