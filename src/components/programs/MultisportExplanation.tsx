
import React from 'react';
import RevealAnimation from '@/components/RevealAnimation';

const MultisportExplanation = () => {
  return (
    <RevealAnimation>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 font-swiss">L'eccellenza negli sport con racchetta</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3 font-swiss">Perché ATH è multisport?</h3>
        <p className="text-gray-700 mb-4 font-swiss">
          ATH ha evoluto la propria visione da accademia tennistica a centro d'eccellenza multisport per rispondere alle nuove tendenze del mercato e massimizzare il potenziale atletico dei nostri giocatori. La nostra esperienza ventennale nel tennis ci ha permesso di sviluppare metodologie avanzate che oggi applichiamo a tutti gli sport con racchetta.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3 font-swiss">I vantaggi del nostro approccio integrato</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 font-swiss">Per i tennisti:</h4>
            <p className="text-gray-700 font-swiss">
              L'allenamento incrociato potenzia specifiche competenze tecniche - il padel migliora i riflessi a rete, il pickleball affina il gioco corto, il touchtennis perfeziona precisione e controllo.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 font-swiss">Per gli altri atleti:</h4>
            <p className="text-gray-700 font-swiss">
              Ogni disciplina beneficia della nostra expertise:
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-700 font-swiss">
              <li>I giocatori di padel ottengono una superiore biomeccanica dei colpi e lettura tattica</li>
              <li>I giocatori di pickleball acquisiscono eccellenza nel gioco a rete e precisione</li>
              <li>I giocatori di touchtennis sviluppano controllo, effetti e visione strategica avanzata</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mt-6 mb-3 font-swiss">Come manteniamo l'eccellenza</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 font-swiss">Team specializzato</h4>
            <p className="text-sm text-gray-700 font-swiss">Professionisti dedicati e qualificati per ogni sport</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 font-swiss">Metodologia scientifica</h4>
            <p className="text-sm text-gray-700 font-swiss">Principi biomeccanici universali applicati specificamente</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 font-swiss">Analisi avanzata</h4>
            <p className="text-sm text-gray-700 font-swiss">Sistemi di feedback video personalizzati per ogni disciplina</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 font-swiss">Percorsi personalizzati</h4>
            <p className="text-sm text-gray-700 font-swiss">Programmi di specializzazione dedicati con standard elevati</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2 font-swiss">Innovazione continua</h4>
            <p className="text-sm text-gray-700 font-swiss">Trasferimento di conoscenze tra discipline per creare metodi unici</p>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-700 italic font-swiss">
          ATH non diluisce la sua eccellenza, ma la approfondisce, offrendo un'esperienza formativa superiore in ogni sport con racchetta.
        </div>
      </div>
    </RevealAnimation>
  );
};

export default MultisportExplanation;
