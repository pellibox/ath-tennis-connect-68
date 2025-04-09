
import React from 'react';
import { cn } from '@/lib/utils';

interface EmptyFooterProps {
  className?: string;
}

const EmptyFooter: React.FC<EmptyFooterProps> = ({ className }) => {
  return (
    <footer className={cn("flex justify-center items-center py-0", className)}>
      {/* Empty footer with no content */}
    </footer>
  );
};

export default EmptyFooter;
