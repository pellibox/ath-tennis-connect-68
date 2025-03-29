
import RevealAnimation from "@/components/RevealAnimation";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProgramOffersProps {
  offers: Array<{
    title: string;
    description: string;
  }>;
}

const ProgramOffers = ({ offers }: ProgramOffersProps) => {
  const isMobile = useIsMobile();
  
  return (
    <RevealAnimation delay={300} className="bg-gray-50 p-5 md:p-8 rounded-lg mb-6 md:mb-0">
      <h3 className="text-lg md:text-xl font-swiss font-semibold mb-3 md:mb-4">Il Programma Offre</h3>
      <ul className="space-y-2 md:space-y-4 font-swiss">
        {offers.map((offer, index) => (
          <li key={index} className="flex">
            <span className="text-ath-clay mr-2 flex-shrink-0 mt-0.5">•</span>
            <div>
              <strong className={`block ${isMobile ? 'text-sm mb-0.5' : 'mb-1'}`}>{offer.title}</strong>
              <p className={`${isMobile ? 'text-xs leading-tight' : 'text-sm md:text-base'}`}>{offer.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </RevealAnimation>
  );
};

export default ProgramOffers;
