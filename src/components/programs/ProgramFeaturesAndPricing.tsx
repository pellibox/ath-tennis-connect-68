
import RevealAnimation from "@/components/RevealAnimation";
import { Link } from "react-router-dom";

interface ProgramFeature {
  title: string;
  features: string[];
}

interface ProgramPricing {
  price: string;
  period: string;
  notes: string[];
  ctaText: string;
  ctaLink: string;
}

interface ProgramFeaturesAndPricingProps {
  features: ProgramFeature;
  pricing: ProgramPricing;
}

const ProgramFeaturesAndPricing = ({
  features,
  pricing,
}: ProgramFeaturesAndPricingProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-10 mb-12">
      <RevealAnimation delay={300} className="bg-gray-50 p-8 rounded-lg">
        <h3 className="text-xl font-swiss font-semibold mb-4">{features.title}</h3>
        <ul className="list-disc list-inside space-y-2 font-swiss">
          {features.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </RevealAnimation>
      
      <RevealAnimation delay={350} className="bg-gray-50 p-8 rounded-lg">
        <h3 className="text-xl font-swiss font-semibold mb-4">Prezzo</h3>
        <div className="mb-4">
          <p className="text-3xl font-bold text-ath-clay">{pricing.price}</p>
          <p className="text-sm text-gray-600">{pricing.period}</p>
        </div>
        
        {pricing.notes.map((note, index) => (
          <p key={index} className="text-sm text-gray-600 mb-4">{note}</p>
        ))}
        
        <div className="mb-6">
          <p className="text-sm bg-ath-clay/10 p-3 rounded">
            Per questo programma è prevista una valutazione preliminare dell'atleta per verificare la compatibilità con il percorso di alto livello.
          </p>
        </div>
        
        <Link 
          to={pricing.ctaLink} 
          className="inline-block bg-ath-clay text-white py-2 px-4 rounded hover:bg-ath-clay/90 transition-colors"
        >
          {pricing.ctaText}
        </Link>
      </RevealAnimation>
    </div>
  );
};

export default ProgramFeaturesAndPricing;
