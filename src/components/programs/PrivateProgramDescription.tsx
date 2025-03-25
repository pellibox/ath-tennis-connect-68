
import React from 'react';
import RevealAnimation from '@/components/RevealAnimation';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';

const PrivateProgramDescription = () => {
  return (
    <div className="mb-12">
      <RevealAnimation>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <h2 className="text-3xl font-swiss">Private Personal Coaching (13+ anni)</h2>
          <VickiMonitoringBadge level="elite" />
          <VickiPoweredBadge />
        </div>
      </RevealAnimation>
      <RevealAnimation delay={100}>
        <p className="text-lg mb-6 font-swiss">Lezioni private con maestro e sparring per atleti dai 13 anni in su.</p>
      </RevealAnimation>
      <RevealAnimation delay={150}>
        <p className="mb-4 font-swiss">
          Le nostre lezioni di Private Personal Coaching rappresentano l'esperienza più personalizzata e focalizzata che ATH può offrire, 
          combinando l'attenzione individuale di un coach esperto e un partner di allenamento (sparring) con l'analisi precisa della tecnologia VICKI™
          in modalità Elite o Advanced.
        </p>
      </RevealAnimation>
      <RevealAnimation delay={200}>
        <p className="font-swiss">
          Questo formato permette di lavorare in modo mirato su aspetti specifici del gioco, 
          accelerando il processo di apprendimento e ottimizzando ogni minuto trascorso in campo.
        </p>
      </RevealAnimation>
    </div>
  );
};

export default PrivateProgramDescription;
