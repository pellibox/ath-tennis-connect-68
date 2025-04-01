
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface EmptyHeaderProps {
  headerText?: string;
}

const EmptyHeader = ({ headerText }: EmptyHeaderProps) => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <header 
        className="fixed top-0 left-0 w-full z-50 bg-black"
      >
        <div className="container mx-auto px-4">
          {headerText && (
            <div className="py-4 text-center">
              <h2 className="text-white text-xl md:text-3xl font-swiss uppercase">
                {headerText}
              </h2>
            </div>
          )}
        </div>
      </header>
      
      {/* Add consistent spacing at the top */}
      <div className={cn(isMobile ? "h-14" : "h-16")}></div>
    </>
  );
};

export default EmptyHeader;
