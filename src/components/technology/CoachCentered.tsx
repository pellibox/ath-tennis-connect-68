
import { Users } from 'lucide-react';
import RevealAnimation from '../RevealAnimation';

interface CoachCenteredProps {
  className?: string;
}

const CoachCentered = ({ className }: CoachCenteredProps) => {
  return (
    <RevealAnimation delay={120}>
      <div className={`mb-16 bg-white border border-ath-clay p-8 rounded-lg ${className}`}>
        <h3 className="text-2xl font-medium mb-6 text-center text-ath-clay font-swiss">Il Coach al Centro del Sistema</h3>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/3 text-center">
            <Users className="w-20 h-20 mx-auto text-ath-clay mb-4" />
          </div>
          <div className="md:w-2/3">
            <p className="mb-4 font-swiss text-ath-clay">
              Vicki™ è concepito come uno strumento di potenziamento per il coach, non come sostituto. 
              Il sistema posiziona l'allenatore al centro del processo decisionale, fornendogli dati completi e analisi 
              avanzate che amplificano la sua esperienza e intuizione.
            </p>
            <p className="mb-4 font-swiss text-ath-clay">
              I coach utilizzano i dati forniti dal sistema per implementare le proprie metodologie 
              e coordinare le decisioni di tutti i professionisti coinvolti nella crescita dell'atleta - 
              preparatori atletici, fisioterapisti, nutrizionisti e mental coach - creando un approccio veramente integrato.
            </p>
            <p className="font-swiss text-ath-clay">
              Questa collaborazione coordinata, basata su dati oggettivi ma guidata dall'expertise umana, 
              rappresenta una rivoluzione nel tennis moderno, dove la tecnologia amplifica - ma mai sostituisce - 
              l'insostituibile competenza degli allenatori.
            </p>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default CoachCentered;
