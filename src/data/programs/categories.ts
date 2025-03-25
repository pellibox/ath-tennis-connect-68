
import { ProgramCategory } from './types';
import { elitePrograms } from './elitePrograms';
import { juniorPrograms } from './juniorPrograms';
import { coachPrograms } from './coachPrograms';
import { adultPrograms } from './adultPrograms';
import { summerCamps } from './summerCamps';
import { professionalPrograms } from './professionalPrograms';

// Program Categories
export const programCategories: ProgramCategory[] = [
  {
    id: 'elite-program',
    title: 'Elite Program',
    programs: elitePrograms
  },
  {
    id: 'professional-program',
    title: 'Professional Players',
    programs: professionalPrograms
  },
  {
    id: 'junior-program',
    title: 'Junior Program',
    programs: juniorPrograms
  },
  {
    id: 'coach-private',
    title: 'Coaches, Private Training e Performance Analysis',
    programs: coachPrograms
  },
  {
    id: 'adult-training',
    title: 'Adult Training',
    programs: adultPrograms
  },
  {
    id: 'summer-camps',
    title: 'Clinics & Summer Camps',
    programs: summerCamps
  }
];
