
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import RevealAnimation from '@/components/RevealAnimation';
import ContactSection from '@/components/ContactSection';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';
import { ArrowRight, Calendar, Clock, Users, Zap, Calendar as CalendarIcon, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const University = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero 
          title="Universitari / Scuole Online"
          subtitle="Programma flessibile per conciliare studio e tennis"
          imageUrl="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2670&auto=format&fit=crop"
          height="medium"
          overlay="dark"
        />
        
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <RevealAnimation>
                  <div className="flex items-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-display">Universitari / Scuole Online</h1>
                    <VickiPoweredBadge onRequest className="ml-4" />
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-600 mb-4">
                      Il programma Universitari/Scuole Online è stato progettato specificamente per studenti che seguono 
                      percorsi di studio flessibili o online e desiderano mantenere un'attività tennistica di qualità. 
                      Con sessioni settimanali da 1,5 ore, il programma si adatta alle esigenze di studio permettendo di 
                      coltivare la passione per il tennis.
                    </p>
                    
                    <p className="text-lg text-gray-600 mb-4">
                      La flessibilità del programma e l'opzione di includere sessioni tennistiche permettono agli studenti 
                      di mantenere un equilibrio ottimale tra impegni accademici e sportivi, con la possibilità di 
                      beneficiare della tecnologia VICKI™ su richiesta.
                    </p>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Caratteristiche del Programma</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <CalendarIcon size={20} className="text-ath-clay mr-2" />
                          Flessibilità Organizzativa
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Orari compatibili con lo studio
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Possibilità di recuperare le sessioni
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Adattamento ai calendari accademici
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Programmi personalizzabili
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Zap size={20} className="text-ath-clay mr-2" />
                          Sessioni di Qualità
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            1,5 ore settimanali di attività
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Tennis opzionale nella sessione
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Focus su benessere e forma fisica
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Preparazione fisica adattata
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <GraduationCap size={20} className="text-ath-clay mr-2" />
                          Supporto Accademico
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Coordinamento con impegni di studio
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Spazi studio disponibili in struttura
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Wi-Fi ad alta velocità
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Ambiente ideale per studio e sport
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="flex items-center text-xl font-medium mb-3">
                          <Briefcase size={20} className="text-ath-clay mr-2" />
                          Servizi Extra
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Analisi VICKI™ su richiesta
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Possibilità di sessioni aggiuntive
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Accesso alle strutture ATH
                          </li>
                          <li className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            Networking con altri studenti-atleti
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-display mt-8 mb-4">Vantaggi del Programma</h2>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Equilibrio ottimale tra studio e attività sportiva</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Orari flessibili adatti agli impegni universitari</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Ambiente stimolante per studio e allenamento</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-ath-clay mr-2">•</span>
                        <span>Possibilità di mantenere un'attività sportiva di qualità</span>
                      </li>
                    </ul>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h3 className="text-xl font-medium mb-4">A Chi è Dedicato</h3>
                      <p>
                        Il programma è ideale per studenti universitari o di scuole online che desiderano mantenere 
                        un'attività sportiva regolare senza compromettere il loro percorso di studi. È particolarmente 
                        adatto a chi cerca flessibilità nell'organizzazione delle proprie attività e vuole combinare 
                        efficacemente studio e sport.
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
                          <p className="text-gray-600">40 settimane</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Sessioni</h3>
                          <p className="text-gray-600">1,5 ore settimanali</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Users size={22} className="text-ath-clay mr-3 mt-1" />
                        <div>
                          <h3 className="font-medium">Target</h3>
                          <p className="text-gray-600">Studenti universitari e scuole online</p>
                        </div>
                      </div>
                      
                      <div className="pt-4 mt-6 border-t">
                        <div className="text-center mb-3">
                          <span className="text-sm text-gray-500">Prezzo Annuale</span>
                          <div className="text-3xl font-bold text-ath-clay">€1.000</div>
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
          title="Studio e Sport in Equilibrio"
          description={
            <div className="space-y-4">
              <p>
                In ATH comprendiamo l'importanza di mantenere un equilibrio tra formazione accademica e attività sportiva. 
                Il nostro programma per universitari e studenti online è stato pensato per offrire la massima flessibilità 
                senza rinunciare alla qualità dell'allenamento.
              </p>
              <p>
                Le nostre strutture offrono l'ambiente ideale per alternare studio e sport, con spazi dedicati e 
                tutti i servizi necessari per ottimizzare entrambe le attività.
              </p>
            </div>
          }
          image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
          buttons={[
            { text: 'SCOPRI LE NOSTRE STRUTTURE', href: '/facilities' }
          ]}
          reversed={true}
        />
        
        <ContactSection 
          title="Concilia Studio e Tennis"
          subtitle="Contattaci per scoprire come il nostro programma può adattarsi al tuo percorso di studi."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default University;
