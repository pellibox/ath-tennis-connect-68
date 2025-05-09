
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RevealAnimation from '@/components/RevealAnimation';
import { useIsMobile, useBreakpoint } from '@/hooks/use-mobile';
import { UserType } from '@/components/UserTypeSelector';

interface ProgramsHeaderProps {
  userType: UserType | null;
  showAllPrograms: boolean;
  setShowAllPrograms: (show: boolean) => void;
}

const ProgramsHeader = ({ 
  userType, 
  showAllPrograms, 
  setShowAllPrograms 
}: ProgramsHeaderProps) => {
  const isMobile = useIsMobile();
  const breakpoint = useBreakpoint();
  const isExtraSmall = breakpoint === "xs";
  
  return (
    <section className="py-8 md:py-16 px-4 md:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <h2 className={`text-2xl md:text-4xl font-display ${isMobile ? "mb-4" : ""}`}>Programmi basati sul Metodo ATH</h2>
            
            {userType && (
              <button 
                onClick={() => setShowAllPrograms(!showAllPrograms)}
                className="hidden md:block px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                {showAllPrograms ? 'Mostra solo programmi rilevanti' : 'Vedi tutti i programmi'}
              </button>
            )}
          </div>
        </RevealAnimation>
        
        <RevealAnimation delay={100}>
          <div className="text-base md:text-lg text-gray-600 max-w-3xl mb-6 space-y-4">
            <p>
              Tutti i nostri programmi si basano sul metodo ATH, un sistema innovativo che integra tecnologia avanzata con coaching esperto. 
              Il nostro approccio garantisce che ogni atleta, indipendentemente dal livello o dall'età, riceva un allenamento personalizzato 
              basato su dati oggettivi e supportato da professionisti altamente qualificati.
            </p>
            
            {userType && (
              <button 
                onClick={() => setShowAllPrograms(!showAllPrograms)}
                className="md:hidden w-full mt-4 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                {showAllPrograms ? 'Mostra solo programmi rilevanti' : 'Vedi tutti i programmi'}
              </button>
            )}
            
            <div className="mt-4 md:mt-6">
              <Link to="/method" className="inline-flex items-center text-ath-clay font-medium hover:underline text-sm md:text-base">
                Scopri di più sul Metodo ATH e il sistema VICKI™ →
              </Link>
            </div>
          </div>
        </RevealAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
          <RevealAnimation delay={150} className="bg-white p-4 md:p-8 shadow-sm">
            <h3 className={`${isMobile ? "text-lg" : "text-xl"} font-medium mb-2 md:mb-4`}>Sviluppo Tecnico</h3>
            <p className={`text-gray-600 ${isMobile ? "text-sm" : ""}`}>I nostri coach utilizzano analisi video avanzate e feedback in tempo reale per perfezionare la tua tecnica su tutti i colpi.</p>
          </RevealAnimation>
          
          <RevealAnimation delay={200} className="bg-white p-4 md:p-8 shadow-sm">
            <h3 className={`${isMobile ? "text-lg" : "text-xl"} font-medium mb-2 md:mb-4`}>Tattica & Strategia</h3>
            <p className={`text-gray-600 ${isMobile ? "text-sm" : ""}`}>Sviluppiamo il tuo pensiero tattico, la capacità di leggere il gioco dell'avversario e di adattare la tua strategia in tempo reale durante la partita.</p>
          </RevealAnimation>
          
          <RevealAnimation delay={250} className="bg-white p-4 md:p-8 shadow-sm">
            <h3 className={`${isMobile ? "text-lg" : "text-xl"} font-medium mb-2 md:mb-4`}>Preparazione Fisica</h3>
            <p className={`text-gray-600 ${isMobile ? "text-sm" : ""}`}>Programmi di fitness personalizzati specifici per il tennis, focalizzati su velocità, agilità, forza e resistenza.</p>
          </RevealAnimation>
          
          <RevealAnimation delay={300} className="bg-white p-4 md:p-8 shadow-sm">
            <h3 className={`${isMobile ? "text-lg" : "text-xl"} font-medium mb-2 md:mb-4`}>Allenamento Mentale</h3>
            <p className={`text-gray-600 ${isMobile ? "text-sm" : ""}`}>Sviluppa resistenza mentale, concentrazione e pensiero strategico con i nostri metodi di allenamento psicologico specializzati.</p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProgramsHeader;
