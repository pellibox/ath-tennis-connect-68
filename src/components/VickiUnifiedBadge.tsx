
import React from 'react';
import { Award, BadgeCheck, Monitor, Shield, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export type MonitoringLevel = 'essentials' | 'core' | 'advanced' | 'performance' | 'pro';
export type BadgeSize = 'sm' | 'md' | 'lg';

interface VickiUnifiedBadgeProps {
  level: MonitoringLevel;
  className?: string;
  size?: BadgeSize;
  bgColor?: string;
  textColor?: string;
  customText?: string;
}

const VickiUnifiedBadge = ({ 
  level, 
  className,
  size = 'md',
  bgColor,
  textColor,
  customText
}: VickiUnifiedBadgeProps) => {
  // Define colors, icons, and labels based on level
  const getLevelDetails = () => {
    switch (level) {
      case 'essentials':
        return {
          defaultColor: 'bg-red-50 text-ath-clay border-red-200',
          icon: <Monitor className={`${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} mr-2`} />,
          label: 'Vicki™ Essentials'
        };
      case 'core':
        return {
          defaultColor: 'bg-red-100 text-ath-clay border-red-200',
          icon: <Monitor className={`${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} mr-2`} />,
          label: 'Vicki™ Core'
        };
      case 'advanced':
        return {
          defaultColor: 'bg-red-100 text-ath-clay border-red-200',
          icon: <ShieldCheck className={`${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} mr-2`} />,
          label: 'Vicki™ Advanced'
        };
      case 'performance':
        return {
          defaultColor: 'bg-red-100 text-ath-clay border-red-200',
          icon: <Shield className={`${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} mr-2`} />,
          label: 'Vicki™ Performance'
        };
      case 'pro':
        return {
          defaultColor: 'bg-red-200 text-ath-clay border-red-300',
          icon: <Award className={`${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} mr-2`} />,
          label: 'Vicki™ Pro'
        };
    }
  };

  const details = getLevelDetails();
  const finalColor = bgColor ? bgColor : details.defaultColor;
  const finalTextColor = textColor ? textColor : '';

  // Adjust the font size based on the badge size
  const textSizeClass = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm';

  return (
    <div className={cn(
      'inline-flex items-center px-3 py-1 rounded-full border font-medium',
      textSizeClass,
      finalColor,
      finalTextColor,
      className
    )}>
      <BadgeCheck className={`${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} mr-2`} />
      <span>{customText || `${details.label} powered`}</span>
    </div>
  );
};

export default VickiUnifiedBadge;
