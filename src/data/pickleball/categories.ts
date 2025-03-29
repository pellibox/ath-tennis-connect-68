
import { ProgramCategory } from './types';
import { pickleballPrograms } from './pickleballPrograms';
import { clinicsPrograms } from './clinicsPrograms';

// Program Categories
export const programCategories: ProgramCategory[] = [
  {
    id: 'pickleball-programs',
    title: 'Programmi di Pickleball',
    programs: pickleballPrograms
  },
  {
    id: 'clinics-programs',
    title: 'Clinics e Workshop',
    programs: clinicsPrograms
  }
];
