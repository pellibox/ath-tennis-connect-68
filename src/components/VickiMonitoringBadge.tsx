
import React from 'react';
import { Monitor, Shield, ShieldCheck, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

export type MonitoringLevel = 'basic' | 'standard' | 'advanced' | 'elite' | 'pro';

interface VickiMonitoringBadgeProps {
  level: MonitoringLevel;
  className?: string;
  showLabel?: boolean;
}

const VickiMonitoringBadge = ({ 
  level, 
  className,
  showLabel = true 
}: VickiMonitoringBadgeProps) => {
  // Define colors and icons based on level
  const getLevelDetails = () => {
    switch (level) {
      case 'basic':
        return {
          color: 'bg-red-50 text-ath-clay border-red-200',
          icon: <Monitor className="w-4 h-4 mr-2" />,
          label: 'Monitoraggio Vicki™ Base'
        };
      case 'standard':
        return {
          color: 'bg-red-100 text-ath-clay border-red-200',
          icon: <Monitor className="w-4 h-4 mr-2" />,
          label: 'Monitoraggio Vicki™ Standard'
        };
      case 'advanced':
        return {
          color: 'bg-red-100 text-ath-clay border-red-200',
          icon: <ShieldCheck className="w-4 h-4 mr-2" />,
          label: 'Monitoraggio Vicki™ Avanzato'
        };
      case 'elite':
        return {
          color: 'bg-red-100 text-ath-clay border-red-200',
          icon: <Shield className="w-4 h-4 mr-2" />,
          label: 'Monitoraggio Vicki™ Elite'
        };
      case 'pro':
        return {
          color: 'bg-red-200 text-ath-clay border-red-300',
          icon: <Award className="w-4 h-4 mr-2" />,
          label: 'Monitoraggio Vicki™ Pro'
        };
    }
  };

  const details = getLevelDetails();

  return (
    <div className={cn(
      'inline-flex items-center px-3 py-1 rounded-full border text-sm font-medium',
      details.color,
      className
    )}>
      {details.icon}
      {showLabel && <span>{details.label}</span>}
    </div>
  );
};

export default VickiMonitoringBadge;
