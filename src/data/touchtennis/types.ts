
import { Program as BaseProgram } from '@/data/programs/types';

export interface Program extends BaseProgram {
  // Any additional TouchTennis-specific properties can be added here
  // Currently, it's the same as the base Program type
}

export interface ProgramCategory {
  id: string;
  title: string;
  programs: Program[];
  applicableUserTypes?: string[];
  sports?: string[];
}
