
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import Hero from '@/components/Hero';
import ProgramDetails from '@/components/programs/ProgramDetails';
import RelatedPrograms from '@/components/programs/RelatedPrograms';
import { Badge } from '@/components/ui/badge';
import { UserCircle } from 'lucide-react';
import { createStandardVimeoEmbed } from '@/utils/videoUtils';

const PadelPrivate = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero
          title="Padel Coaching Privato"
          subtitle="Sessioni individuali o in coppia con coach specializzati e analisi completa delle performance."
          vimeoEmbed={createStandardVimeoEmbed('867339842')}
          buttons={[
            { text: 'PRENOTA UNA SESSIONE', href: '/contact' }
          ]}
          fullHeight={false}
        />
        
        <div className="container mx-auto px-4 py-16">
          <div className="mb-6 flex items-center">
            <Badge variant="outline" className="bg-ath-clay/10 text-ath-clay border-ath-clay mr-4 flex items-center gap-1">
              <UserCircle className="w-3.5 h-3.5" />
              <span>Coaching One-to-One</span>
            </Badge>
          </div>
          
          <ProgramDetails
            title="Padel Coaching Privato"
            subtitle="Sessioni individuali o in coppia con coach specializzati e analisi completa delle performance con sistema VICKI™."
            description={[
              "Il programma di Coaching Privato di Padel offre la massima personalizzazione e attenzione esclusiva per chi desidera migliorare rapidamente il proprio gioco o lavorare su aspetti specifici.",
              "Queste sessioni one-to-one o in coppia (massimo 2 giocatori) consentono di concentrarsi esattamente sulle tue esigenze, debolezze e punti di forza, con un coach dedicato che adatta ogni momento dell'allenamento alle tue caratteristiche.",
              "Grazie all'analisi con VICKI™ Elite, riceverai feedback dettagliati e in tempo reale su ogni aspetto del tuo gioco, con report completi che ti permetteranno di visualizzare concretamente i tuoi progressi sessione dopo sessione."
            ]}
          />
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss">
                <li>Programma personalizzato in base agli obiettivi specifici</li>
                <li>Analisi video e feedback in tempo reale</li>
                <li>Report dettagliato delle performance</li>
                <li>Pianificazione del percorso di miglioramento</li>
                <li>Flessibilità di orari e frequenza delle sessioni</li>
                <li>Analisi VICKI™ Elite con parametri avanzati</li>
                <li>Possibilità di sessioni individuali o in coppia</li>
              </ul>
            </RevealAnimation>
            
            <RevealAnimation delay={350} className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-swiss font-semibold mb-4">Prezzo</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-ath-clay">Su richiesta</p>
                <p className="text-sm text-gray-600">Personalizzato in base alle esigenze</p>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                I prezzi variano in base al numero di sessioni, alla frequenza e al tipo di programma (individuale o in coppia).
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Pacchetti di sessioni multiple disponibili con tariffe agevolate.
              </p>
              
              <div className="mb-6">
                <p className="text-sm bg-ath-clay/10 p-3 rounded">
                  Contattaci per ricevere un preventivo personalizzato in base alle tue specifiche esigenze e obiettivi.
                </p>
              </div>
              
              <a 
                href="/contact" 
                className="inline-block bg-ath-clay text-white py-2 px-4 rounded hover:bg-ath-clay/90 transition-colors"
              >
                Richiedi Preventivo
              </a>
            </RevealAnimation>
          </div>
          
          <RevealAnimation>
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-xl font-swiss font-semibold mb-4">Perché Scegliere Questo Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss ml-4">
                <li>Massima personalizzazione dell'allenamento in base alle tue esigenze</li>
                <li>Progressi più rapidi grazie all'attenzione esclusiva del coach</li>
                <li>Analisi dettagliata con tecnologia VICKI™ Elite di ogni aspetto tecnico</li>
                <li>Flessibilità di orari per adattarsi ai tuoi impegni</li>
                <li>Possibilità di lavorare in coppia con un partner o amico</li>
                <li>Ideale per chi desidera migliorare rapidamente o ha obiettivi specifici</li>
              </ul>
            </div>
          </RevealAnimation>
          
          <RelatedPrograms 
            title="Programmi Correlati" 
            programs={[
              {
                title: "Padel Bambini e Teen",
                description: "Programma dedicato ai giovani giocatori di padel, con un approccio divertente e formativo.",
                link: "/programs/padel-kids"
              },
              {
                title: "Padel Adulti",
                description: "Programma per adulti dai 16 anni in su che vogliono imparare o migliorare nel padel.",
                link: "/programs/padel-adult"
              },
              {
                title: "Padel Agonisti",
                description: "Programma intensivo per giocatori competitivi che vogliono portare il loro gioco a livello agonistico.",
                link: "/programs/padel-advanced"
              }
            ]}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PadelPrivate;
