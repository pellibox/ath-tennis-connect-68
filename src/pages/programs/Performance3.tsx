
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

const Performance3 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Performance 3"
          subtitle="Programma agonistico con 3 giorni di allenamento settimanale"
          imageUrl="https://images.unsplash.com/photo-1544298621-35a989e4e54a?q=80&w=2070&auto=format&fit=crop"
          height="medium"
          overlay="dark"
        />
        
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <RevealAnimation>
                  <div className="flex items-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-display">Performance 3</h1>
                    <VickiPoweredBadge className="ml-4" />
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-600 mb-4">
                      Il programma Performance 3 è progettato per giovani atleti che stanno sviluppando le loro abilità competitive 
                      e dedicano tre giorni a settimana all'allenamento tennistico e atletico. Questo percorso equilibra il carico di 
                      lavoro con adeguato tempo di recupero, perfetto per chi sta costruendo solide basi tecniche e fisiche.
                    </p>
                    
                    <p className="text-lg text-gray-600 mb-4">
                      Grazie al sistema VICKI™, tutti gli allenamenti vengono monitorati e analizzati in tempo reale, permettendo 
                      ai coach di fornire feedback immediati e di creare programmi personalizzati basati sui dati raccolti. Questo 
                      approccio scientifico garantisce un miglioramento costante e una progressione tecnica misurabile.
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
                            3 sessioni da 1,5 ore settimanali (4,5 ore totali)
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Massimo 3 atleti per campo
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Analisi tecnica e tattica con VICKI™
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Feedback immediato in campo
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
                            3 sessioni da 1,5 ore settimanali (4,5 ore totali)
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Sviluppo coordinativo e motorio
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Monitoraggio del carico di lavoro
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Prevenzione infortuni
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Vantaggi del Programma</h2>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Equilibrio ottimale tra volume di allenamento e recupero</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Progressione tecnica costante con feedback basato su dati</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Sviluppo armonioso delle competenze fisiche e tecniche</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Coaching personalizzato con analisi VICKI™</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Report periodici sull'andamento e sui progressi</span>
                      </li>
                    </ul>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-medium mb-4">Un Approccio Scientifico</h3>
                      <p>
                        Il metodo ATH integra scienza e tecnologia all'allenamento tennistico tradizionale. Con VICKI™, 
                        ogni colpo, movimento e decisione vengono analizzati per identificare pattern, punti di forza e 
                        aree di miglioramento. Questo approccio basato sui dati permette di creare percorsi formativi 
                        veramente personalizzati.
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
                          <p className="text-gray-600">48 settimane</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Impegno Settimanale</h3>
                          <p className="text-gray-600">3 giorni, 9 ore totali</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Users size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Rapporto Coach/Atleti</h3>
                          <p className="text-gray-600">1:3 massimo</p>
                        </div>
                      </div>
                      
                      <div className="pt-4 mt-6 border-t">
                        <div className="text-center mb-3">
                          <span className="text-sm text-gray-500">Prezzo Annuale</span>
                          <div className="text-3xl font-bold text-ath-clay">€5.000</div>
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
          title="Esperienza ATH"
          description={
            <div className="space-y-4">
              <p>
                Scegliere ATH significa affidarsi a un metodo che combina tecnologia all'avanguardia con competenze di coaching di livello mondiale.
              </p>
              <p>
                Con il programma Performance 3, avrai accesso a strutture di primo livello, coach esperti e un sistema di monitoraggio che traccia ogni aspetto della tua evoluzione come atleta.
              </p>
            </div>
          }
          image="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?q=80&w=2671&auto=format&fit=crop"
          buttons={[
            { text: 'ESPLORA GLI ALTRI PROGRAMMI', href: '/programs' }
          ]}
          reversed={true}
        />
        
        <ContactSection 
          title="Vuoi Saperne di Più?"
          subtitle="Contattaci per scoprire come il programma Performance 3 può aiutarti a raggiungere i tuoi obiettivi tennistici."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Performance3;
