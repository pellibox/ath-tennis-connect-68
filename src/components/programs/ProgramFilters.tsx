
import { UserType } from '@/components/UserTypeSelector';
import { ProgramCategory, programCategories, juniorPrograms } from '@/data/programsData';

interface ProgramFiltersProps {
  userType: UserType | null;
  showAllPrograms: boolean;
}

const ProgramFilters = ({ userType, showAllPrograms }: ProgramFiltersProps) => {
  
  const getFilteredProgramCategories = (): ProgramCategory[] => {
    if (!userType || showAllPrograms) {
      return programCategories;
    }

    const filteredCategories: ProgramCategory[] = [];

    switch (userType) {
      case 'junior':
        filteredCategories.push({
          id: 'junior-program',
          title: 'Junior Program',
          programs: juniorPrograms
        });
        break;
      case 'performance':
        const performancePrograms = programCategories
          .find(c => c.id === 'elite-program')?.programs
          .filter(p => p.id === '2') || [];
          
        filteredCategories.push({
          id: 'performance-program',
          title: 'Performance Program',
          programs: performancePrograms
        });
        break;
      case 'professional':
        const professionalPrograms = programCategories
          .find(c => c.id === 'elite-program')?.programs
          .filter(p => p.id === '3') || [];
          
        filteredCategories.push({
          id: 'professional-program',
          title: 'Professional Program',
          programs: professionalPrograms
        });
        break;
      case 'coach':
        const coachPrograms = programCategories
          .find(c => c.id === 'coach-private')?.programs
          .filter(p => p.id === '4') || [];
          
        filteredCategories.push({
          id: 'coach-program',
          title: 'Coach Program',
          programs: coachPrograms
        });
        break;
      case 'parent':
        const parentPrograms = programCategories
          .find(c => c.id === 'junior-program')?.programs
          .filter(p => p.id === '5') || [];
          
        filteredCategories.push({
          id: 'parent-program',
          title: 'Genitore/Tutor Program',
          programs: parentPrograms
        });
        break;
    }

    return filteredCategories;
  };

  const getProgramTitle = () => {
    if (!userType || showAllPrograms) {
      return "Programmi ATH";
    }
    
    return `Programmi per ${
      userType === 'coach' ? 'Coach' : 
      userType === 'parent' ? 'Genitori/Tutor' : 
      userType === 'professional' ? 'Professionisti' : 
      userType === 'performance' ? 'Agonisti Performance' : 
      'Junior'
    }`;
  };

  const getProgramSubtitle = () => {
    if (!userType || showAllPrograms) {
      return "Percorsi metodologici personalizzati in base alle tue esigenze specifiche";
    }
    
    return `Soluzioni specifiche per ${
      userType === 'coach' ? 'allenatori' : 
      userType === 'parent' ? 'genitori e tutor' : 
      userType === 'professional' ? 'tennisti professionisti' : 
      userType === 'performance' ? 'agonisti di alto livello' : 
      'giovani tennisti'
    }`;
  };

  return {
    filteredCategories: getFilteredProgramCategories(),
    title: getProgramTitle(),
    subtitle: getProgramSubtitle()
  };
};

export default ProgramFilters;
