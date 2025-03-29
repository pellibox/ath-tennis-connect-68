
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import RevealAnimation from "@/components/RevealAnimation";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface ProgramBenefitsProps {
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
}

const ProgramBenefits = ({
  title,
  description,
  benefits,
  ctaText,
  ctaLink
}: ProgramBenefitsProps) => {
  const isMobile = useIsMobile();
  
  return (
    <RevealAnimation delay={400}>
      <div className="bg-ath-clay/5 border border-ath-clay/20 p-4 md:p-8 rounded-lg mb-6 md:mb-12">
        <h3 className={cn(
          "font-display mb-2 md:mb-4 text-ath-clay",
          isMobile ? 'text-lg' : 'text-xl md:text-2xl'
        )}>
          {title}
        </h3>
        <p className="mb-3 md:mb-4 text-sm md:text-base">{description}</p>
        <ul className="list-disc list-inside space-y-1.5 md:space-y-2 mb-4 md:mb-6 text-sm md:text-base">
          {benefits.map((benefit, index) => (
            <li key={index} className="pl-1">{benefit}</li>
          ))}
        </ul>
        <Link 
          to={ctaLink} 
          className={cn(
            "inline-flex items-center bg-ath-clay text-white py-2 px-4 md:px-6 rounded hover:bg-ath-clay/90 transition-colors",
            "text-sm md:text-base",
            isMobile ? 'w-full justify-center' : ''
          )}
        >
          {ctaText} <ArrowRight size={isMobile ? 14 : 16} className="ml-2" />
        </Link>
      </div>
    </RevealAnimation>
  );
};

export default ProgramBenefits;
