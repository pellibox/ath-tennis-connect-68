
import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VickiPoweredBadgeProps {
  className?: string;
  onRequest?: boolean;
  bgColor?: string;
  textColor?: string;
  logoOnly?: boolean;
  small?: boolean;
}

const VickiPoweredBadge = ({ 
  className,
  onRequest = false,
  bgColor = 'bg-purple-50',
  textColor = 'text-purple-700',
  logoOnly = false,
  small = false
}: VickiPoweredBadgeProps) => {
  if (logoOnly) {
    return (
      <div className={cn(
        'inline-flex items-center justify-center rounded-full',
        small ? 'w-6 h-6' : 'w-8 h-8',
        'bg-black',
        className
      )}>
        <img 
          src="/lovable-uploads/9fa571de-33d8-4049-95c8-3d7ff8dcf928.png" 
          alt="Vicki" 
          className={cn(
            'rounded-full',
            small ? 'w-5 h-5' : 'w-7 h-7'
          )}
        />
      </div>
    );
  }

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
