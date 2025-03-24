
import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VickiPoweredBadgeProps {
  className?: string;
  onRequest?: boolean;
  transparent?: boolean;
}

const VickiPoweredBadge = ({ 
  className,
  onRequest = false,
  transparent = false
}: VickiPoweredBadgeProps) => {
  // Use ath-clay color (red) for styling
  return (
    <div className={cn(
      'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
      transparent ? 'bg-transparent border border-ath-clay text-ath-clay' : 'bg-ath-clay text-white',
      className
    )}>
      <BadgeCheck className="w-4 h-4 mr-2" />
      <span>{onRequest ? 'Vicki™ su richiesta' : 'Vicki™ powered'}</span>
    </div>
  );
};

export default VickiPoweredBadge;
