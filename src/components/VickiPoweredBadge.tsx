
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
        small ? 'w-10 h-10' : 'w-12 h-12',
        'bg-black',
        className
      )}>
        <img 
          src="/lovable-uploads/9fa571de-33d8-4049-95c8-3d7ff8dcf928.png" 
          alt="Vicki" 
          className={cn(
            'rounded-full',
            small ? 'w-8 h-8' : 'w-10 h-10'
          )}
        />
      </div>
    );
  }

  return (
    <div className={cn(
      'inline-flex items-center px-4 py-2 rounded-full border text-base font-medium border-purple-200',
      bgColor,
      textColor,
      className
    )}>
      <BadgeCheck className="w-5 h-5 mr-2" />
      <span>{onRequest ? 'Vicki™ su richiesta' : 'Vicki™ powered'}</span>
    </div>
  );
};

export default VickiPoweredBadge;
