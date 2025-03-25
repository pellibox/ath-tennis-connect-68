
import { ProgramCategory } from './types';
import { elitePrograms } from './elitePrograms';
import { juniorPrograms } from './juniorPrograms';
import { coachPrograms } from './coachPrograms';
import { adultPrograms } from './adultPrograms';
import { summerCamps } from './summerCamps';

// Program Categories
export const programCategories: ProgramCategory[] = [
  {
    id: 'elite-program',
    title: 'Elite Program',
    programs: elitePrograms
  },
  {
    id: 'junior-program',
    title: 'Junior Program',
    programs: juniorPrograms
  },
  {
    id: 'coach-private',
    title: 'Coach & Private Training',
    programs: coachPrograms
  },
  {
    id: 'adult-training',
    title: 'Adult Training',
    programs: adultPrograms
  },
  {
    id: 'summer-camps',
    title: 'Summer Camps',
    programs: summerCamps
  }
];
