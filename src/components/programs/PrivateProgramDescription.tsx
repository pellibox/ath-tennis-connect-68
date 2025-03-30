
import React from 'react';
import RevealAnimation from '@/components/RevealAnimation';
import VickiMonitoringBadge from '@/components/VickiMonitoringBadge';
import VickiPoweredBadge from '@/components/VickiPoweredBadge';

const PrivateProgramDescription = () => {
  return (
    <div className="mb-12">
      <RevealAnimation>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <h2 className="text-3xl font-swiss">Lezioni Private</h2>
          <VickiMonitoringBadge level="standard" />
          <VickiPoweredBadge onRequest />
        </div>
      </RevealAnimation>
      <RevealAnimation delay={100}>
        <p className="text-lg mb-6 font-swiss">Lezioni individuali o in piccoli gruppi (max 2 allievi), disponibili tutto l'anno.</p>
      </RevealAnimation>
      <RevealAnimation delay={150}>
        <p className="mb-4 font-swiss">
          Le Lezioni Private offrono un'esperienza di apprendimento personalizzata con un maestro certificato
          che si concentra sulle tue esigenze specifiche. Questo formato è ideale per lavorare
          su aspetti particolari del tuo gioco e accelerare il tuo progresso tennistico.
        </p>
      </RevealAnimation>
      <RevealAnimation delay={200}>
        <p className="font-swiss">
          Con la possibilità di avere lezioni individuali o in coppia (massimo 2 allievi),
          puoi scegliere il formato che meglio si adatta alle tue preferenze. L'analisi con tecnologia
          VICKI™ è disponibile su richiesta per un'esperienza di allenamento ancora più approfondita.
        </p>
      </RevealAnimation>
    </div>
  );
};

export default PrivateProgramDescription;
