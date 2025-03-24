
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RevealAnimation from '@/components/RevealAnimation';
import Logo from '@/components/Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import { UserType } from '@/components/UserTypeSelector';

interface ProgramsHeaderProps {
  userType: UserType | null;
  showAllPrograms: boolean;
  setShowAllPrograms: (show: boolean) => void;
  logoYOffset: number;
  logoOpacity: number;
}

const ProgramsHeader = ({ 
  userType, 
  showAllPrograms, 
  setShowAllPrograms, 
  logoYOffset, 
  logoOpacity 
}: ProgramsHeaderProps) => {
  const isMobile = useIsMobile();

  const getPersonalizedSubtitle = () => {
    if (!userType) {
      return "Approccio metodologico unico e personalizzato per ogni profilo di giocatore";
    }

    switch (userType) {
      case 'junior':
        return "Programmi specializzati per giovani tennisti in fase di sviluppo";
      case 'performance':
        return "Programmi avanzati per tennisti agonisti performance";
      case 'professional':
        return "Programmi elite per professionisti che cercano il massimo delle prestazioni";
      case 'coach':
        return "Programmi e strumenti avanzati per allenatori";
      case 'parent':
        return "Supporto e coinvolgimento per genitori di giovani atleti";
      default:
        return "Approccio metodologico unico e personalizzato per ogni profilo di giocatore";
    }
  };
  
  return (
    <>
      <div 
        className="fixed z-50 pointer-events-none transition-opacity duration-300 left-0 right-0 flex justify-center"
        style={{
          top: isMobile ? '140px' : '180px',
          opacity: logoOpacity
        }}
      >
        <div 
          style={{
            width: isMobile ? '120px' : '160px',
            transform: `translateY(-${logoYOffset}px)`
          }}
          className="flex justify-center"
        >
          <Logo 
            onDarkBackground={true} 
            className="w-full h-auto"
            isCentered={true}
          />
        </div>
      </div>
      
      <div className="w-full bg-black py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-xl md:text-2xl font-swiss uppercase mb-2">
            PROGRAMMI:
          </h2>
          <p className="text-white text-xl md:text-2xl opacity-90 font-swiss drop-shadow-md">
            {getPersonalizedSubtitle()}
          </p>
        </div>
      </div>
      
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <RevealAnimation>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl md:text-4xl font-display">Programmi basati sul Metodo ATH</h2>
              
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
            <div className="text-lg text-gray-600 max-w-3xl mb-6 space-y-4">
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
              
              <div className="mt-6">
                <Link to="/method" className="inline-flex items-center text-ath-clay font-medium hover:underline">
                  Scopri di più sul Metodo ATH e il sistema VICKI™ →
                </Link>
              </div>
            </div>
          </RevealAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <RevealAnimation delay={150} className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-medium mb-4">Sviluppo Tecnico</h3>
              <p className="text-gray-600">I nostri coach utilizzano analisi video avanzate e feedback in tempo reale per perfezionare la tua tecnica su tutti i colpi.</p>
            </RevealAnimation>
            
            <RevealAnimation delay={200} className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-medium mb-4">Preparazione Fisica</h3>
              <p className="text-gray-600">Programmi di fitness personalizzati specifici per il tennis, focalizzati su velocità, agilità, forza e resistenza.</p>
            </RevealAnimation>
            
            <RevealAnimation delay={250} className="bg-white p-8 shadow-sm">
              <h3 className="text-xl font-medium mb-4">Allenamento Mentale</h3>
              <p className="text-gray-600">Sviluppa resistenza mentale, concentrazione e pensiero strategico con i nostri metodi di allenamento psicologico specializzati.</p>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramsHeader;
