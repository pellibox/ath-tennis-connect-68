
import { programCategories } from '@/data/programsData';
import { ProgramCategory } from '@/data/programs/types';
import { programCategories as padelCategories } from '@/data/padel/categories';
import { programCategories as pickleballCategories } from '@/data/pickleball/categories';
import { touchTennisCategories } from '@/data/touchTennisData';

interface ProgramFiltersProps {
  userType: string | null;
  showAllPrograms: boolean;
  sport?: string;
}

interface ProgramFiltersResult {
  filteredCategories: ProgramCategory[];
  title: string;
  subtitle: string;
}

const ProgramFilters = ({ userType, showAllPrograms, sport = 'tennis' }: ProgramFiltersProps): ProgramFiltersResult => {
  console.log(`ProgramFilters called with sport: ${sport}, userType: ${userType}, showAll: ${showAllPrograms}`);
  
  let allCategories: ProgramCategory[] = [];
  let title = "Tutti i Programmi";
  let subtitle = "Esplora l'intera gamma di programmi ATH per tutte le fasce d'età e livelli di abilità";

  // Select appropriate categories based on sport
  switch (sport) {
    case 'padel':
      allCategories = padelCategories;
      title = "Programmi Padel";
      subtitle = "Esplora i nostri programmi di padel per tutte le età e livelli";
      break;
    case 'pickleball':
      allCategories = pickleballCategories;
      title = "Programmi Pickleball";
      subtitle = "Esplora i nostri programmi di pickleball per tutte le età e livelli";
      break;
    case 'touchtennis':
      allCategories = touchTennisCategories;
      title = "Programmi TouchTennis";
      subtitle = "Esplora i nostri programmi di touchtennis per tutte le età e livelli";
      break;
    default:
      allCategories = programCategories;
      break;
  }

  console.log(`Selected ${allCategories.length} categories for sport: ${sport}`);
  
  let filteredCategories = allCategories;
  
  // Then filter by user type if not showing all programs
  if (!showAllPrograms && userType) {
    // Filter categories based on applicableUserTypes
    filteredCategories = filteredCategories.filter(category => 
      !category.applicableUserTypes || category.applicableUserTypes.includes(userType)
    );
    
    console.log(`After userType (${userType}) filtering: ${filteredCategories.length} categories remaining`);
    
    // Set title and subtitle based on user type
    if (filteredCategories.length > 0) {
      switch (userType) {
        case 'junior':
          title = "Programmi Junior";
          subtitle = "Programmi per giovani atleti che vogliono sviluppare le loro abilità";
          break;
        case 'adult':
          title = "Programmi Adulti";
          subtitle = "Programmi per giocatori adulti di tutti i livelli";
          break;
        case 'professional':
          title = "Programmi Elite & Professionisti";
          subtitle = "Programmi intensivi per atleti di livello professionale";
          break;
        case 'coach':
          title = "Programmi per Coach";
          subtitle = "Risorse e formazione per allenatori";
          break;
        case 'performance':
          title = "Programmi Performance";
          subtitle = "Programmi avanzati per atleti agonisti con obiettivi competitivi";
          break;
        default:
          break;
      }
    }
  }

  return {
    filteredCategories,
    title,
    subtitle
  };
};

export default ProgramFilters;
