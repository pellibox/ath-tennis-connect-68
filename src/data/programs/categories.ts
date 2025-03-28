
import { ProgramCategory } from './types';
import { elitePrograms } from './elitePrograms';
import { juniorPrograms } from './juniorPrograms';
import { coachPrograms } from './coachPrograms';
import { adultPrograms } from './adultPrograms';
import { summerCamps } from './summerCamps';
import { professionalPrograms } from './professionalPrograms';

// Program Categories with additional metadata
export const programCategories: ProgramCategory[] = [
  {
    id: 'elite-program',
    title: 'Elite Program',
    programs: elitePrograms,
    applicableUserTypes: ['performance', 'professional'],
    sports: ['tennis']
  },
  {
    id: 'junior-program',
    title: 'Junior Program',
    programs: juniorPrograms,
    applicableUserTypes: ['junior'],
    sports: ['tennis', 'padel', 'pickleball']
  },
  {
    id: 'coach-private',
    title: 'Coaches, Private Training e Performance Analysis',
    programs: coachPrograms,
    applicableUserTypes: ['coach', 'professional'],
    sports: ['tennis', 'padel', 'pickleball']
  },
  {
    id: 'professional-program',
    title: 'Professional Players',
    programs: professionalPrograms,
    applicableUserTypes: ['professional'],
    sports: ['tennis']
  },
  {
    id: 'adult-training',
    title: 'Adult Training',
    programs: adultPrograms,
    applicableUserTypes: ['adult'],
    sports: ['tennis', 'padel', 'pickleball']
  },
  {
    id: 'summer-camps',
    title: 'Clinics e Summer Camps',
    programs: summerCamps,
    applicableUserTypes: ['junior', 'adult'],
    sports: ['tennis', 'padel', 'pickleball']
  }
];
