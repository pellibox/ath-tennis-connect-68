
// Program data types
export interface Program {
  id: string;
  title: string;  // Can be a translation key like "programs.elite.title"
  titleKey?: string;  // Optional: explicit translation key
  description: string;  // Can be a translation key
  descriptionKey?: string;  // Optional: explicit translation key
  image: string;
  vimeoEmbed?: string;
  link: string;
  features?: string[];  // Can be translation keys
  featureKeys?: string[];  // Optional: explicit translation keys for features
  vickiOnRequest?: boolean;
  vickiCustomBadge?: string;
  vickiMonitoringLevel?: 'essentials' | 'core' | 'advanced' | 'performance' | 'pro';
  vickiPowered?: boolean;
  sports?: string[]; // Add this property to filter programs by sport
}

export interface ProgramCategory {
  id: string;
  title: string;  // Can be a translation key
  titleKey?: string;  // Optional: explicit translation key
  programs: Program[];
  applicableUserTypes?: string[]; // Add this property to filter categories by user type
  sports?: string[]; // Add this property to filter categories by sport
}
