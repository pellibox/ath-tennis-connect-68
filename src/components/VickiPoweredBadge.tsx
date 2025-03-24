
import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VickiPoweredBadgeProps {
  className?: string;
  onRequest?: boolean;
  bgColor?: string;
  textColor?: string;
}

const VickiPoweredBadge = ({ 
  className,
  onRequest = false,
  bgColor = 'bg-purple-50',
  textColor = 'text-purple-700'
}: VickiPoweredBadgeProps) => {
  return (
    <div className={cn(
      'inline-flex items-center px-3 py-1 rounded-full border text-sm font-medium border-purple-200',
      bgColor,
      textColor,
      className
    )}>
      <BadgeCheck className="w-4 h-4 mr-2" />
      <span>{onRequest ? 'Vicki™ su richiesta' : 'Vicki™ powered'}</span>
    </div>
  );
};

export default VickiPoweredBadge;
