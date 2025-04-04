
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
  vickiMonitoringLevel?: 'essentials' | 'core' | 'advanced' | 'performance' | 'pro';
}

export interface ProgramCategory {
  id: string;
  title: string;
  programs: Program[];
}
