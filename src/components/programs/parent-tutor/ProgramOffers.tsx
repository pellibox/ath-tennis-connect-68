
import RevealAnimation from "@/components/RevealAnimation";

interface ProgramOffersProps {
  offers: Array<{
    title: string;
    description: string;
  }>;
}

const ProgramOffers = ({ offers }: ProgramOffersProps) => {
  return (
    <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-xl font-swiss font-semibold mb-4">Il Programma Offre</h3>
      <ul className="space-y-4 font-swiss">
        {offers.map((offer, index) => (
          <li key={index} className="flex">
            <span className="text-ath-clay mr-2">•</span>
            <div>
              <strong>{offer.title}</strong>
              <p>{offer.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </RevealAnimation>
  );
};

export default ProgramOffers;
