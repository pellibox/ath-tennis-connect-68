
import React from 'react';
import { Monitor, Shield, ShieldCheck, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

export type MonitoringLevel = 'essentials' | 'core' | 'advanced' | 'performance' | 'pro';
export type BadgeSize = 'sm' | 'md' | 'lg';

interface VickiMonitoringBadgeProps {
  level: MonitoringLevel;
  className?: string;
  showLabel?: boolean;
  size?: BadgeSize;
}

const VickiMonitoringBadge = ({ 
  level, 
  className,
  showLabel = true,
  size = 'md'
}: VickiMonitoringBadgeProps) => {
  // Define colors and icons based on level
  const getLevelDetails = () => {
    switch (level) {
      case 'essentials':
        return {
          color: 'bg-red-50 text-ath-clay border-red-200',
          icon: <Monitor className={`${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} mr-2`} />,
          label: 'Monitoraggio Vicki™ Essentials'
        };
      case 'core':
        return {
          color: 'bg-red-100 text-ath-clay border-red-200',
          icon: <Monitor className={`${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} mr-2`} />,
          label: 'Monitoraggio Vicki™ Core'
        };
      case 'advanced':
        return {
          color: 'bg-red-100 text-ath-clay border-red-200',
          icon: <ShieldCheck className={`${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} mr-2`} />,
          label: 'Monitoraggio Vicki™ Advanced'
        };
      case 'performance':
        return {
          color: 'bg-red-100 text-ath-clay border-red-200',
          icon: <Shield className={`${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} mr-2`} />,
          label: 'Monitoraggio Vicki™ Performance'
        };
      case 'pro':
        return {
          color: 'bg-red-200 text-ath-clay border-red-300',
          icon: <Award className={`${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} mr-2`} />,
          label: 'Monitoraggio Vicki™ Pro'
        };
    }
  };

  const details = getLevelDetails();

  // Adjust the font size based on the badge size
  const textSizeClass = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm';

  return (
    <div className={cn(
      'inline-flex items-center px-3 py-1 rounded-full border font-medium',
      textSizeClass,
      details.color,
      className
    )}>
      {details.icon}
      {showLabel && <span>{details.label}</span>}
    </div>
  );
};

export default VickiMonitoringBadge;
