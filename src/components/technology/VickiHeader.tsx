
import RevealAnimation from '../RevealAnimation';

interface VickiHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const VickiHeader = ({ title, subtitle, className }: VickiHeaderProps) => {
  return (
    <RevealAnimation>
      <div className={`text-center mb-16 relative ${className}`}>
        {/* Vicki logo centered at the top */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Black Vicki logo */}
            <img 
              src="/lovable-uploads/8f2b30a1-cb65-453e-ba82-d9721a192426.png" 
              alt="Vicki™ Logo" 
              className="h-28 w-auto" 
            />
            {/* Grey Vicki logo overlay */}
            <img 
              src="/lovable-uploads/dc679c8d-60cd-4841-a42c-0907926b7ef5.png" 
              alt="" 
              className="h-28 w-auto absolute top-0 left-0 opacity-30" 
            />
          </div>
        </div>
        
        {/* Vicki subtitle */}
        <h3 className="text-2xl md:text-3xl font-swiss text-ath-clay mb-4">
          Vicki™: Visual Intelligent Coaching for Knowledge Insights
        </h3>
        
        {/* ATH Technological Advantage */}
        <h2 className="text-3xl md:text-4xl font-display text-center text-ath-clay">
          {title}
        </h2>
      </div>
    </RevealAnimation>
  );
};

export default VickiHeader;
