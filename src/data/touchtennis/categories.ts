
import { ProgramCategory } from './types';
import { touchTennisPrograms } from './touchTennisPrograms';

export const touchTennisCategories: ProgramCategory[] = [
  {
    id: 'touchtennis-programs',
    title: 'TouchTennis Programs',
    programs: touchTennisPrograms,
    applicableUserTypes: ['junior', 'adult', 'performance'],
    sports: ['touchtennis']
  }
];
