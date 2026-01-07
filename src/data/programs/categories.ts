import { ProgramCategory } from './types';
import { elitePrograms } from './elitePrograms';
import { juniorPrograms } from './juniorPrograms';
import { coachPrograms } from './coachPrograms';
import { adultPrograms } from './adultPrograms';
import { summerCamps } from './summerCamps';
import { professionalPrograms } from './professionalPrograms';

export const programCategories: ProgramCategory[] = [
  {
    id: 'elite-program',
    titleKey: 'programs.category.elite',
    title: 'Elite & Performance Programs',
    programs: elitePrograms,
    applicableUserTypes: ['performance', 'professional'],
    sports: ['tennis']
  },
  {
    id: 'junior-program',
    titleKey: 'programs.category.junior',
    title: 'Junior Program',
    programs: juniorPrograms,
    applicableUserTypes: ['junior'],
    sports: ['tennis', 'padel', 'pickleball']
  },
  {
    id: 'coach-private',
    titleKey: 'programs.category.coach',
    title: 'Coaches, Private Training e Performance Analysis',
    programs: coachPrograms,
    applicableUserTypes: ['coach', 'professional'],
    sports: ['tennis', 'padel', 'pickleball']
  },
  {
    id: 'professional-program',
    titleKey: 'programs.category.professional',
    title: 'Professional Players',
    programs: professionalPrograms,
    applicableUserTypes: ['professional'],
    sports: ['tennis']
  },
  {
    id: 'adult-training',
    titleKey: 'programs.category.adult',
    title: 'Adult Training',
    programs: adultPrograms,
    applicableUserTypes: ['adult'],
    sports: ['tennis', 'padel', 'pickleball']
  },
  {
    id: 'summer-camps',
    titleKey: 'programs.category.camps',
    title: 'Clinics e Summer Camps',
    programs: summerCamps,
    applicableUserTypes: ['junior', 'adult'],
    sports: ['tennis', 'padel', 'pickleball']
  }
];
