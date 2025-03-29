
import RevealAnimation from "@/components/RevealAnimation";

interface ProgramOffersProps {
  offers: Array<{
    title: string;
    description: string;
  }>;
}

const ProgramOffers = ({ offers }: ProgramOffersProps) => {
  return (
    <RevealAnimation delay={300} className="bg-gray-50 p-6 md:p-8 rounded-lg mb-6 md:mb-0">
      <h3 className="text-xl font-swiss font-semibold mb-4">Il Programma Offre</h3>
      <ul className="space-y-3 md:space-y-4 font-swiss">
        {offers.map((offer, index) => (
          <li key={index} className="flex">
            <span className="text-ath-clay mr-2 flex-shrink-0">•</span>
            <div>
              <strong className="block mb-1">{offer.title}</strong>
              <p className="text-sm md:text-base">{offer.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </RevealAnimation>
  );
};

export default ProgramOffers;
