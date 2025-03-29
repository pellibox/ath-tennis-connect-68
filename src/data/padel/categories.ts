
import { ProgramCategory } from './types';
import { padelPrograms } from './padelPrograms';
import { clinicsPrograms } from './clinicsPrograms';

// Program Categories
export const programCategories: ProgramCategory[] = [
  {
    id: 'padel-programs',
    title: 'Programmi di Padel',
    programs: padelPrograms
  },
  {
    id: 'clinics-programs',
    title: 'Clinics e Workshop',
    programs: clinicsPrograms
  }
];
