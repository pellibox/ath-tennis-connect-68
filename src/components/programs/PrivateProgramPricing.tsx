
import ButtonLink from '@/components/ButtonLink';
import React from 'react';

const PrivateProgramPricing = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-xl font-swiss font-semibold mb-4">Prezzi e Prenotazione</h3>
      <div className="mb-4">
        <p className="text-3xl font-bold text-ath-clay">€120</p>
        <p className="text-sm text-gray-600">per lezione di 1,5 ore</p>
      </div>
      <p className="text-sm text-gray-600 mb-6">
        Il Private Personal Coaching include sia il maestro che lo sparring partner, offrendo un'esperienza
        di allenamento completa e personalizzata potenziata dalla tecnologia VICKI™ in modalità Elite o Advanced.
      </p>
      
      <div className="bg-ath-clay/10 p-4 rounded-lg mb-6">
        <h4 className="text-lg font-swiss font-semibold mb-2">Report e Analisi Post-Sessione</h4>
        <p className="text-sm mb-4">
          Ogni sessione di Private Personal Coaching include:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 font-swiss mb-4">
          <li>Report sintetico della sessione con metriche chiave</li>
          <li>Analisi comparativa con le sessioni precedenti</li>
          <li>Raccomandazioni personalizzate per il miglioramento</li>
          <li>Accesso digitale alle registrazioni video della sessione</li>
          <li>Dashboard personale per monitorare i progressi nel tempo</li>
        </ul>
        <p className="text-sm italic">
          Le metriche prodotte durante la sessione servono da indicazione precisa del miglioramento 
          specifico durante la lezione e come guida per le fasi successive del percorso di sviluppo.
        </p>
      </div>
      
      <h3 className="text-lg font-swiss font-semibold mb-2">Benefici</h3>
      <ul className="list-disc list-inside space-y-2 font-swiss mb-6">
        <li>Progressi accelerati grazie all'attenzione individuale</li>
        <li>Pratica reale con sparring di alto livello</li>
        <li>Correzione efficace e rapida di problemi tecnici</li>
        <li>Adattamento preciso alle esigenze specifiche del giocatore</li>
        <li>Monitoraggio avanzato dei parametri tecnici e fisici</li>
        <li>Analisi dettagliata della prestazione tramite VICKI™</li>
        <li>Tracciamento oggettivo dei progressi nel tempo</li>
      </ul>
      <ButtonLink 
        href="/contact" 
        variant="primary"
      >
        Richiedi informazioni
      </ButtonLink>
      
      <div className="mt-6 text-sm text-gray-600">
        <p className="italic">
          Nota: Le sessioni di Private Personal Coaching sono disponibili solo su prenotazione
          e soggette alla disponibilità dei maestri e sparring partner. Ogni sessione dura 1,5 ore
          e può essere prenotata una volta alla settimana.
        </p>
      </div>
    </div>
  );
};

export default PrivateProgramPricing;
