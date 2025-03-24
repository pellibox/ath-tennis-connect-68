
import React from 'react';
import { Monitor, Shield, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export type MonitoringLevel = 'basic' | 'standard' | 'advanced' | 'elite';

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
          color: 'bg-blue-100 text-blue-700 border-blue-200',
          icon: <Monitor className="w-4 h-4 mr-2" />,
          label: 'Monitoraggio Vicki™ Base'
        };
      case 'standard':
        return {
          color: 'bg-green-100 text-green-700 border-green-200',
          icon: <Monitor className="w-4 h-4 mr-2" />,
          label: 'Monitoraggio Vicki™ Standard'
        };
      case 'advanced':
        return {
          color: 'bg-purple-100 text-purple-700 border-purple-200',
          icon: <ShieldCheck className="w-4 h-4 mr-2" />,
          label: 'Monitoraggio Vicki™ Avanzato'
        };
      case 'elite':
        return {
          color: 'bg-amber-100 text-amber-700 border-amber-200',
          icon: <Shield className="w-4 h-4 mr-2" />,
          label: 'Monitoraggio Vicki™ Elite'
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
