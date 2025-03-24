
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import RevealAnimation from '@/components/RevealAnimation';
import ContactSection from '@/components/ContactSection';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import { ArrowRight, Calendar, Clock, Target, Users, Heart, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sat = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="SAT – Propedeutico"
          subtitle="Avviamento al tennis per bambini dai 4 ai 6 anni"
          imageUrl="https://images.unsplash.com/photo-1605118183754-b28cbe6959f8?q=80&w=2670&auto=format&fit=crop"
          height="medium"
          overlay="dark"
        />
        
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <RevealAnimation>
                  <div className="flex items-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-display">SAT – Propedeutico</h1>
                    <VickiPoweredBadge onRequest className="ml-4" />
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-600 mb-4">
                      Il programma SAT rappresenta il primo passo nel mondo del tennis per i bambini dai 4 ai 6 anni. 
                      Questo percorso propedeutico, esclusivo della sede di Rodano, è progettato per introdurre i più 
                      piccoli al tennis attraverso il gioco, sviluppando le fondamentali capacità motorie di base in un 
                      ambiente divertente e stimolante.
                    </p>
                    
                    <p className="text-lg text-gray-600 mb-4">
                      Attraverso attività ludiche mirate e l'uso di attrezzature adattate alle loro dimensioni, i bambini 
                      acquisiscono familiarità con la racchetta e la palla, sviluppando naturalmente coordinazione, equilibrio 
                      e le prime nozioni di tennis.
                    </p>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Componenti del Programma</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <PlayCircle size={20} className="text-ath-clay mr-2" />
                          Mini-Tennis
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            1 sessione tennis da 1 ora a settimana
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Utilizzo di racchette e palle adatte ai bambini
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Campi ridotti e adattati alle loro dimensioni
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Giochi pre-tennis divertenti
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Familiarizzazione con i movimenti base
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Heart size={20} className="text-ath-clay mr-2" />
                          Sviluppo Motorio
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            1 sessione atletica da 30 minuti
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Attività ludiche per sviluppare coordinazione
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Esercizi di equilibrio e percezione spaziale
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Giochi di gruppo per sviluppare socialità
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Percorsi motori divertenti
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Vantaggi del Programma SAT</h2>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Primo approccio positivo al tennis attraverso il gioco</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Sviluppo delle capacità motorie fondamentali</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Ambiente stimolante che favorisce la socializzazione</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Attività adatte all'età e allo sviluppo del bambino</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Base ideale per il futuro percorso tennistico</span>
                      </li>
                    </ul>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-medium mb-4">Il Ruolo del Gioco</h3>
                      <p>
                        Nel programma SAT, il gioco è il veicolo principale dell'apprendimento. A questa età, i bambini 
                        imparano facendo e divertendosi. I nostri istruttori specializzati utilizzano giochi ed esercizi 
                        specificamente progettati per insegnare naturalmente i movimenti e le abilità fondamentali, creando 
                        un'esperienza positiva che sviluppa l'amore per lo sport.
                      </p>
                    </div>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Monitoraggio VICKI™ su Richiesta</h2>
                    <p className="mb-6">
                      Per i bambini del programma SAT, il sistema VICKI™ può essere utilizzato su richiesta per valutazioni 
                      periodiche delle attitudini motorie, offrendo ai genitori interessati un monitoraggio scientifico del 
                      percorso di sviluppo del bambino. Questa opzione permette di avere dati oggettivi sul progresso e 
                      identificare precocemente potenzialità specifiche.
                    </p>
                    
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
                          <p className="text-gray-600">1.5 ore totali (1 tennis + 0.5 atletica)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Users size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Età</h3>
                          <p className="text-gray-600">4-6 anni</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Target size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Sede</h3>
                          <p className="text-gray-600">Esclusivo sede di Rodano</p>
                        </div>
                      </div>
                      
                      <div className="pt-4 mt-6 border-t">
                        <div className="text-center mb-3">
                          <span className="text-sm text-gray-500">Prezzo Annuale</span>
                          <div className="text-3xl font-bold text-ath-clay">€500</div>
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
          title="I Primi Passi nel Tennis"
          description={
            <div className="space-y-4">
              <p>
                Il programma SAT è progettato da esperti nell'educazione motoria infantile, combinando le più recenti 
                conoscenze sullo sviluppo psico-motorio dei bambini con le tecniche specifiche di avviamento al tennis.
              </p>
              <p>
                I nostri istruttori specializzati per l'età prescolare creano un ambiente accogliente e stimolante, dove 
                ogni bambino può esplorare il movimento, sviluppare nuove abilità e, soprattutto, divertirsi con il tennis.
              </p>
            </div>
          }
          image="https://images.unsplash.com/photo-1623127899673-39e70f5db296?q=80&w=2529&auto=format&fit=crop"
          buttons={[
            { text: 'ESPLORA TUTTI I PROGRAMMI JUNIOR', href: '/programs' }
          ]}
        />
        
        <ContactSection 
          title="Il Tennis è un Gioco Meraviglioso"
          subtitle="Contattaci per far scoprire al tuo bambino il tennis in modo divertente e educativo."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Sat;
