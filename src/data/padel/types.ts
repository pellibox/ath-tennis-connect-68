
// Program data types
export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  vimeoEmbed?: string;
  link: string;
  features?: string[];
  pricing?: string[];
  vickiPowered?: boolean;
  vickiOnRequest?: boolean;
  vickiCustomBadge?: string;
  vickiMonitoringLevel?: 'basic' | 'standard' | 'advanced' | 'elite' | 'pro';
  sports?: string[]; // Add this property to filter programs by sport
}

export interface ProgramCategory {
  id: string;
  title: string;
  programs: Program[];
  applicableUserTypes?: string[]; // Add this property to filter categories by user type
  sports?: string[]; // Add this property to filter categories by sport
}
