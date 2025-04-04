
import { Program } from '@/data/programs/types';

export interface { Program };

export interface ProgramCategory {
  id: string;
  title: string;
  programs: Program[];
  applicableUserTypes?: string[];
  sports?: string[];
}
