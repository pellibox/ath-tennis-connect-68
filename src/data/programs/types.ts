
// Program data types
export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  vimeoEmbed?: string;
  link: string;
  features?: string[];
  vickiOnRequest?: boolean;
  vickiCustomBadge?: string;
  vickiMonitoringLevel?: 'essentials' | 'core' | 'advanced' | 'performance' | 'pro';
  vickiPowered?: boolean;
  sports?: string[]; // Add this property to filter programs by sport
}

export interface ProgramCategory {
  id: string;
  title: string;
  programs: Program[];
  applicableUserTypes?: string[]; // Add this property to filter categories by user type
  sports?: string[]; // Add this property to filter categories by sport
}
