
import { UserType } from '@/components/UserTypeSelector';
import { programCategories } from '@/data/programs';
import { ProgramCategory } from '@/data/programs/types';

interface ProgramFiltersProps {
  userType: UserType | null;
  showAllPrograms: boolean;
}

const ProgramFilters = ({ userType, showAllPrograms }: ProgramFiltersProps) => {
  // Filter categories based on user type
  const filteredCategories = (): ProgramCategory[] => {
    if (!userType || showAllPrograms) {
      return programCategories;
    }

    let relevantCategories = [...programCategories];

    switch(userType) {
      case 'junior':
        return relevantCategories.filter(cat => 
          ['junior-program', 'summer-camps'].includes(cat.id)
        );
      case 'performance':
        return relevantCategories.filter(cat => 
          ['elite-program', 'junior-program', 'coach-private'].includes(cat.id)
        );
      case 'professional':
        return relevantCategories.filter(cat => 
          ['elite-program', 'professional-program', 'coach-private'].includes(cat.id)
        );
      case 'coach':
        return relevantCategories.filter(cat => 
          ['coach-private', 'professional-program'].includes(cat.id)
        );
      case 'adult':
        return relevantCategories.filter(cat => 
          ['adult-training', 'coach-private', 'summer-camps'].includes(cat.id)
        );
      case 'parent':
        return relevantCategories.filter(cat => 
          ['junior-program', 'summer-camps'].includes(cat.id)
        );
      default:
        return relevantCategories;
    }
  };

  // Dynamic title based on user type
  const getTitle = (): string => {
    if (!userType) {
      return "Programmi ATH";
    }

    switch(userType) {
      case 'junior':
        return "Programmi per Giovani Tennisti";
      case 'performance':
        return "Programmi Performance";
      case 'professional':
        return "Programmi Elite per Professionisti";
      case 'coach':
        return "Programmi per Coach";
      case 'adult':
        return "Programmi per Adulti";
      case 'parent':
        return "Programmi per Giovani Atleti";
      default:
        return "Programmi ATH";
    }
  };

  // Dynamic subtitle based on user type
  const getSubtitle = (): string => {
    if (!userType) {
      return "Esplora la nostra gamma completa di programmi di allenamento basati sul metodo ATH";
    }

    switch(userType) {
      case 'junior':
        return "Programmi specializzati progettati per sviluppare giovani tennisti";
      case 'performance':
        return "Programmi avanzati per tennisti agonisti che cercano di raggiungere il massimo potenziale";
      case 'professional':
        return "Programmi di altissimo livello progettati per tennisti professionisti";
      case 'coach':
        return "Programmi e risorse dedicati agli allenatori per perfezionare le loro competenze e metodologie";
      case 'adult':
        return "Programmi adattati per tennisti adulti di tutti i livelli";
      case 'parent':
        return "Programmi ideali per supportare i giovani atleti nel loro percorso di crescita";
      default:
        return "Esplora la nostra gamma completa di programmi di allenamento basati sul metodo ATH";
    }
  };

  return {
    filteredCategories: filteredCategories(),
    title: getTitle(),
    subtitle: getSubtitle()
  };
};

export default ProgramFilters;
