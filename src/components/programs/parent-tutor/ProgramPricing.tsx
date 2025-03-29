
import RevealAnimation from "@/components/RevealAnimation";
import ButtonLink from "@/components/ButtonLink";
import { FileDown } from "lucide-react";

interface ProgramInclusionItem {
  text: string;
}

interface ProgramPricingProps {
  includedPrograms: string;
  regularPrice: string;
  regularPriceDescription: string;
  inclusions: ProgramInclusionItem[];
  documentUrl: string;
}

const ProgramPricing = ({
  includedPrograms,
  regularPrice,
  regularPriceDescription,
  inclusions,
  documentUrl
}: ProgramPricingProps) => {
  return (
    <RevealAnimation delay={350} className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-xl font-swiss font-semibold mb-4">Prezzo</h3>
      <div className="bg-ath-clay/10 p-4 rounded-lg mb-6">
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-ath-clay font-bold mr-2">•</span>
            <div>
              <p className="font-bold">Incluso</p>
              <p className="text-sm">{includedPrograms}</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-ath-clay font-bold mr-2">•</span>
            <div>
              <p className="font-bold">{regularPrice}</p>
              <p className="text-sm">{regularPriceDescription}</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="p-4 bg-gray-100 rounded-lg mb-5">
        <h4 className="text-sm font-semibold mb-2">Il programma include:</h4>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          {inclusions.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div>
      
      <div className="space-y-4">
        <ButtonLink 
          href="/contact" 
          showArrow={true}
        >
          Richiedi informazioni
        </ButtonLink>
        
        <a 
          href={documentUrl} 
          className="inline-flex items-center gap-2 bg-white text-ath-clay border border-ath-clay py-2 px-6 rounded hover:bg-ath-clay/5 transition-colors"
          download
        >
          <FileDown size={16} />
          Scarica il programma
        </a>
      </div>
    </RevealAnimation>
  );
};

export default ProgramPricing;
