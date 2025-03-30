
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import Hero from '@/components/Hero';
import ProgramDetails from '@/components/programs/ProgramDetails';
import ProgramFeaturesAndPricing from '@/components/programs/ProgramFeaturesAndPricing';
import RelatedPrograms from '@/components/programs/RelatedPrograms';
import { Badge } from '@/components/ui/badge';
import { Trophy } from 'lucide-react';

const PadelAdvanced = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero
          title="Padel Agonisti"
          subtitle="Programma intensivo per giocatori competitivi che vogliono portare il loro gioco a livello agonistico."
          vimeoEmbed='<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1070763412?h=0e8d74bff5&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
          buttons={[
            { text: 'PRENOTA UNA VALUTAZIONE', href: '/contact' }
          ]}
          fullHeight={false}
        />
        
        <div className="container mx-auto px-4 py-16">
          <div className="mb-6 flex items-center">
            <Badge variant="outline" className="bg-ath-clay/10 text-ath-clay border-ath-clay mr-4 flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5" />
              <span>Programma Competitivo</span>
            </Badge>
          </div>
          
          <ProgramDetails
            title="Padel Agonisti"
            subtitle="Programma intensivo per giocatori competitivi che vogliono portare il loro gioco a livello agonistico con analisi avanzata delle performance."
            description={[
              "Il programma Padel Agonisti è progettato per giocatori ambiziosi che desiderano competere a livelli elevati e massimizzare il proprio potenziale tecnico e tattico.",
              "Attraverso un approccio scientifico e metodico, analizziamo e ottimizziamo ogni aspetto del gioco: dalla biomeccanica dei colpi alle strategie di gioco avanzate, fino alla preparazione fisica e mentale specifica per il padel competitivo.",
              "La tecnologia VICKI™ di livello avanzato permette un'analisi dettagliata delle performance, consentendo interventi mirati e personalizzati per ogni atleta in base alle sue caratteristiche e obiettivi competitivi."
            ]}
          />
          
          <ProgramFeaturesAndPricing
            features={{
              title: "Caratteristiche del Programma",
              features: [
                "Analisi biomeccanica dei colpi con tecnologia VICKI™",
                "Perfezionamento delle tecniche avanzate",
                "Preparazione fisica specifica per il padel",
                "Strategie di gioco per competizioni",
                "Analisi video dettagliata delle performance",
                "Piani tattici personalizzati per i vari avversari",
                "Supporto per la gestione delle competizioni",
                "Sessioni di allenamento mentale"
              ]
            }}
            pricing={{
              price: "€1400 / €2480",
              period: "Monosettimanale / Bisettimanale annuale",
              notes: [
                "Il programma prevede lezioni intensive con frequenza mono o bisettimanale",
                "L'iscrizione include accesso completo al sistema di analisi VICKI™ Advanced",
                "Possibilità di sessioni supplementari di preparazione fisica e mentale"
              ],
              ctaText: "Richiedi Informazioni",
              ctaLink: "/contact"
            }}
          />
          
          <RevealAnimation>
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-xl font-swiss font-semibold mb-4">Perché Scegliere Questo Programma</h3>
              <ul className="list-disc list-inside space-y-2 font-swiss ml-4">
                <li>Approccio scientifico e parametrico all'analisi della performance nel padel</li>
                <li>Preparazione completa: tecnica, tattica, fisica e mentale integrate</li>
                <li>Coach con esperienza competitiva e formazione specifica avanzata</li>
                <li>Utilizzo di tecnologia all'avanguardia per ottimizzare i risultati</li>
                <li>Ambiente stimolante con altri giocatori di livello competitivo</li>
                <li>Supporto personalizzato per il calendario di tornei e competizioni</li>
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
                title: "Padel Coaching Privato",
                description: "Sessioni individuali o in coppia con coach specializzati e analisi completa delle performance.",
                link: "/programs/padel-private"
              }
            ]}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PadelAdvanced;
