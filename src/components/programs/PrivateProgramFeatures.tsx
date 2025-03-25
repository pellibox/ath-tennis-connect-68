
import React from 'react';

const PrivateProgramFeatures = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-xl font-swiss font-semibold mb-4">Caratteristiche del Programma</h3>
      <ul className="list-disc list-inside space-y-2 font-swiss">
        <li>Attenzione completa e dedicata del coach</li>
        <li>Sparring professionale incluso (minimo 2.8 FIT o di categoria pari o superiore all'atleta)</li>
        <li>Disponibile esclusivamente per atleti dai 13 anni in su</li>
        <li>Analisi tecnica dettagliata tramite VICKI™ in modalità Elite o Advanced</li>
        <li>Personalizzazione completa degli obiettivi e contenuti</li>
        <li>Feedback immediato e correzioni in tempo reale</li>
        <li>Sessioni di 1,5 ore, una volta alla settimana</li>
        <li>Report dettagliati dopo ogni sessione</li>
      </ul>
      
      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-3">Monitoraggio e Analisi Avanzata</h4>
        <p className="mb-4 font-swiss">
          Durante ogni sessione di Private Personal Coaching, VICKI™ monitora oltre 70 parametri tecnici specifici, 
          generando metriche precise che servono come indicatori concreti del miglioramento durante la lezione
          e come base per pianificare le fasi successive del percorso di sviluppo.
        </p>
        <ul className="list-disc list-inside space-y-2 font-swiss mb-4">
          <li>Monitoraggio in tempo reale di parametri tecnici e fisici</li>
          <li>Analisi dettagliata dei pattern di movimento e della biomeccanica</li>
          <li>Identificazione immediata di aree di miglioramento</li>
          <li>Confronto con sessioni precedenti per valutare i progressi</li>
        </ul>
        <p className="font-swiss">
          Al termine di ogni sessione, viene fornito un report sintetico che riassume i principali dati 
          raccolti, evidenzia i miglioramenti ottenuti e suggerisce specifici focus per le sessioni future.
        </p>
      </div>
      
      <div className="mt-8 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r">
        <h4 className="text-lg font-semibold mb-2">Prenotazione e Disponibilità</h4>
        <p className="text-sm">
          Il Private Personal Coaching può essere organizzato esclusivamente su prenotazione ed è soggetto
          alla disponibilità dei maestri e sparring partner. Si consiglia di prenotare con 
          almeno 48 ore di anticipo per garantire la disponibilità dei professionisti più adatti 
          alle tue esigenze specifiche.
        </p>
      </div>
    </div>
  );
};

export default PrivateProgramFeatures;
