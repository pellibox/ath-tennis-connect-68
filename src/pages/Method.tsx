
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import RevealAnimation from '@/components/RevealAnimation';
import ContactSection from '@/components/ContactSection';
import JoinRevolutionSection from '@/components/JoinRevolutionSection';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Method = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-20">
        <Hero 
          title="Il Metodo ATH"
          subtitle="Innovazione Tecnologica al Servizio dell'Eccellenza Tennistica"
          imageSrc="https://images.unsplash.com/photo-1595435934819-5704d86e29a1?q=80&w=2070&auto=format&fit=crop"
          buttons={[
            { text: "Scopri i Programmi", href: '/programs' }
          ]}
          overlayOpacity="medium"
        />
        
        <section className="py-20 px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <RevealAnimation>
              <h2 className="text-3xl md:text-4xl font-display mb-6">Metodologia ATH</h2>
            </RevealAnimation>
            
            <RevealAnimation delay={100}>
              <div className="text-lg text-gray-600 max-w-4xl mb-12 space-y-4">
                <p>
                  In ATH integriamo tecnologia avanzata con coaching esperto. Il rivoluzionario sistema VICKI™ monitora oltre 70 parametri della performance tennistica per fornire analisi dettagliate e programmi di allenamento personalizzati.
                </p>
                
                <div className="mt-10">
                  <h3 className="text-2xl font-medium mb-6">Come funziona VICKI™</h3>
                  <p className="mb-6">
                    VICKI™ è un sistema avanzato di analisi per il tennis che combina visione artificiale, intelligenza artificiale e conoscenze tecniche. Monitora oltre 70 parametri in tempo reale e li trasforma in analisi utili per allenatori e atleti.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div className="bg-white p-8 shadow-sm rounded-sm">
                      <h4 className="font-medium text-xl mb-4">1. Visual – Visione Artificiale</h4>
                      <p className="mb-4">Usa una tecnologia di tracking ad alta frequenza per registrare ogni dettaglio del gioco.</p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>Traiettoria 3D della palla (x, y, z), velocità, spin, punti di rimbalzo</li>
                        <li>Posizione 2D del corpo del giocatore per ogni frame</li>
                        <li>Postura, orientamento, bilanciamento, movimento di arti e articolazioni</li>
                        <li>Angoli articolari (spalla, gomito, polso, anca, ginocchio, caviglia)</li>
                        <li>Swing e impatto della racchetta: velocità, angolo faccia, punto d'impatto</li>
                        <li>Tipo di colpo con riconoscimento automatico</li>
                        <li>Precisione al millisecondo del momento impatto palla-racchetta</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-8 shadow-sm rounded-sm">
                      <h4 className="font-medium text-xl mb-4">2. Intelligent – Algoritmi Predittivi</h4>
                      <p className="mb-4">Analizza i dati raccolti con modelli di machine learning per prevedere e migliorare le prestazioni.</p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>Previsioni su sviluppo tecnico e fisico</li>
                        <li>Identificazione automatica di criticità</li>
                        <li>Personalizzazione continua delle analisi</li>
                        <li>Adattamento a ogni singolo atleta</li>
                        <li>Confronti storici e con benchmark professionali</li>
                        <li>Evoluzione della performance nel tempo</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-8 shadow-sm rounded-sm">
                      <h4 className="font-medium text-xl mb-4">3. Coaching Knowledge – Expertise Aumentata</h4>
                      <p className="mb-4">Integra l'esperienza dei coach in una libreria digitale che alimenta suggerimenti personalizzati.</p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>Monitoraggio della qualità tecnica sotto pressione</li>
                        <li>Analisi della tattica e delle risposte dell'avversario</li>
                        <li>Confronti biomeccanici per valutare l'efficienza dei colpi</li>
                        <li>Studio della catena cinetica e dei rischi di infortunio</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-8 shadow-sm rounded-sm">
                      <h4 className="font-medium text-xl mb-4">4. Insight – Personalizzazione</h4>
                      <p className="mb-4">Converte i dati in strategie di allenamento su misura.</p>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>Programmi di allenamento personalizzati</li>
                        <li>Prevenzione infortuni con analisi biomeccaniche</li>
                        <li>Dashboard interattive e grafici per analizzare parametri</li>
                        <li>Heat map dei colpi, AR per feedback immediati</li>
                        <li>Strumenti per accelerare l'apprendimento</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="mt-8 font-medium text-gray-700 text-lg">
                    In sintesi: VICKI™ è uno strumento di supporto per allenatori, che trasforma dati complessi in azioni pratiche e mirate, adattate al profilo dell'atleta. L'allenatore controlla quali dati condividere con gli altri soggetti coinvolti.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </section>
        
        <AboutSection 
          title="I Vantaggi del Metodo ATH"
          description={
            <div className="space-y-4">
              <p>
                La metodologia ATH si distingue per la sua capacità di integrare perfettamente dati oggettivi con l'esperienza umana. Questo approccio ibrido garantisce che ogni allenamento sia basato su informazioni precise, ma interpretate con la sensibilità e l'intelligenza emotiva che solo un coach esperto può offrire.
              </p>
              <p>
                Tutti i nostri programmi, indipendentemente dal livello o dall'età dell'atleta, si basano sul metodo ATH, adattandolo specificamente alle esigenze individuali di ciascun giocatore. Questo garantisce un percorso di sviluppo ottimale e personalizzato per tutti.
              </p>
              <p>
                La continuità metodologica è un altro punto di forza distintivo: anche in caso di assenza del coach abituale, il sistema assicura che l'allenamento prosegua con la stessa impostazione e gli stessi obiettivi, evitando interruzioni nel percorso di crescita dell'atleta.
              </p>
            </div>
          }
          image="/lovable-uploads/da809888-483b-4b2c-8e57-6d1ec6aaa51c.png"
          buttons={[
            { text: 'SCOPRI I NOSTRI PROGRAMMI', href: '/programs' }
          ]}
          reversed={true}
        />
        
        <section className="py-20 px-6 lg:px-10 bg-ath-gray">
          <div className="max-w-7xl mx-auto">
            <RevealAnimation>
              <h2 className="text-3xl md:text-4xl font-display mb-6">Innovazione Continua</h2>
            </RevealAnimation>
            
            <RevealAnimation delay={100}>
              <div className="text-lg text-gray-600 max-w-4xl mb-12 space-y-4">
                <p>
                  Il metodo ATH non è statico: evolve costantemente grazie alla ricerca continua e all'integrazione di nuove tecnologie. Il nostro team di sviluppo lavora incessantemente per migliorare algoritmi, sensori e interfacce, garantendo che il sistema VICKI™ rimanga all'avanguardia nel settore dell'analisi sportiva.
                </p>
                <p>
                  Collaboriamo con università, centri di ricerca e professionisti del tennis di alto livello per validare scientificamente i nostri approcci e integrare le più recenti scoperte in ambito biomeccanico, fisiologico e psicologico.
                </p>
              </div>
            </RevealAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <RevealAnimation delay={150} className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Sviluppo Tecnico</h3>
                <p className="text-gray-600">Perfezionamento personalizzato di ogni aspetto tecnico del gioco, basato su analisi parametriche avanzate.</p>
              </RevealAnimation>
              
              <RevealAnimation delay={200} className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Preparazione Fisica</h3>
                <p className="text-gray-600">Programmi di fitness specifici basati sui dati biomeccanici e fisiologici individuali dell'atleta.</p>
              </RevealAnimation>
              
              <RevealAnimation delay={250} className="bg-white p-8 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Allenamento Mentale</h3>
                <p className="text-gray-600">Strategie personalizzate per ottimizzare la gestione emotiva, la concentrazione e la resilienza mentale durante il gioco.</p>
              </RevealAnimation>
            </div>
          </div>
        </section>
        
        <JoinRevolutionSection />
        
        <ContactSection 
          title="Scopri il Metodo ATH"
          subtitle="Contattaci per saperne di più sulla nostra metodologia o per pianificare una visita"
          address="Via del Tennis 123, 20873 Rodano (MI)"
          phone="+39 02 1234567"
          email="info@ath-tennis.it"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Method;
