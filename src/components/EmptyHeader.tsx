
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const EmptyHeader = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <header 
        className="fixed top-0 left-0 w-full z-50 bg-black"
      >
        <div className="container mx-auto px-4"></div>
      </header>
      
      {/* Add consistent spacing at the top */}
      <div className={cn(isMobile ? "h-14" : "h-16")}></div>
    </>
  );
};

export default EmptyHeader;
