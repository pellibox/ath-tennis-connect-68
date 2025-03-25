
import { ProgramCategory } from './types';
import { padelPrograms } from './padelPrograms';
import { pickleballPrograms } from './pickleballPrograms';
import { clinicsPrograms } from './clinicsPrograms';

// Program Categories
export const programCategories: ProgramCategory[] = [
  {
    id: 'padel-programs',
    title: 'Programmi di Padel',
    programs: padelPrograms
  },
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
