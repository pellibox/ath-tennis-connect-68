
import { programCategories } from '@/data/programs';
import { programCategories as padelCategories } from '@/data/padel';
import { programCategories as pickleballCategories } from '@/data/pickleball';
import { touchTennisCategories } from '@/data/touchtennis';
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
  console.log("ProgramFilters called with sport:", sport, "userType:", userType, "showAllPrograms:", showAllPrograms);
  
  // First select the correct categories based on sport
  let allCategories: ProgramCategory[];
  
  switch (sport) {
    case 'padel':
      allCategories = padelCategories;
      break;
    case 'pickleball':
      allCategories = pickleballCategories;
      break;
    case 'touchtennis':
      allCategories = touchTennisCategories;
      break;
    case 'tennis':
    default:
      allCategories = programCategories;
      break;
  }
  
  let filteredCategories = allCategories;
  let title = `Programmi ${sport.charAt(0).toUpperCase() + sport.slice(1)}`;
  let subtitle = "Esplora l'intera gamma di programmi ATH per tutte le fasce d'età e livelli di abilità";

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

  console.log("ProgramFilters returning:", {
    filteredCategoriesCount: filteredCategories.length,
    title,
    subtitle
  });

  return {
    filteredCategories,
    title,
    subtitle
  };
};

export default ProgramFilters;
