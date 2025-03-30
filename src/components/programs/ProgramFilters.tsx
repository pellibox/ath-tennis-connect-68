
import { programCategories } from '@/data/programs';
import { ProgramCategory } from '@/data/programs/types';

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
  let filteredCategories = programCategories;
  let title = "Tutti i Programmi";
  let subtitle = "Esplora l'intera gamma di programmi ATH per tutte le fasce d'età e livelli di abilità";

  // First filter by sport
  if (sport) {
    filteredCategories = filteredCategories.filter(category => 
      !category.sports || category.sports.includes(sport)
    );
  }

  // Then filter by user type if not showing all programs
  if (!showAllPrograms && userType) {
    // Filter categories based on applicableUserTypes
    filteredCategories = filteredCategories.filter(category => 
      !category.applicableUserTypes || category.applicableUserTypes.includes(userType)
    );
    
    // Set title and subtitle based on user type
    switch (userType) {
      case 'junior':
        title = "Programmi Junior";
        subtitle = "Programmi per giovani atleti che vogliono sviluppare le loro abilità tennistiche";
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
        subtitle = "Risorse e formazione per allenatori di tennis";
        break;
      case 'performance':
        title = "Programmi Performance";
        subtitle = "Programmi avanzati per atleti agonisti con obiettivi competitivi";
        break;
      default:
        break;
    }
  }

  return {
    filteredCategories,
    title,
    subtitle
  };
};

export default ProgramFilters;
