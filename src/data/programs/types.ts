
// Program data types
export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  vimeoEmbed?: string;
  link: string;
  features?: string[];
  vickiPowered?: boolean;
  vickiOnRequest?: boolean;
  vickiCustomBadge?: string;
  vickiMonitoringLevel?: 'basic' | 'standard' | 'advanced' | 'elite' | 'pro';
}

export interface ProgramCategory {
  id: string;
  title: string;
  programs: Program[];
}
