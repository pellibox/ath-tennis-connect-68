
import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VickiPoweredBadgeProps {
  className?: string;
  onRequest?: boolean;
}

const VickiPoweredBadge = ({ 
  className,
  onRequest = false
}: VickiPoweredBadgeProps) => {
  return (
    <div className={cn(
      'inline-flex items-center px-3 py-1 rounded-full border text-sm font-medium bg-purple-50 text-purple-700 border-purple-200',
      className
    )}>
      <BadgeCheck className="w-4 h-4 mr-2" />
      <span>{onRequest ? 'Vicki™ su richiesta' : 'Vicki™ powered'}</span>
    </div>
  );
};

export default VickiPoweredBadge;
