
import RevealAnimation from "@/components/RevealAnimation";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProgramWhyChooseProps {
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
}

const ProgramWhyChoose = ({
  title,
  description,
  benefits,
  ctaText,
  ctaLink
}: ProgramWhyChooseProps) => {
  return (
    <RevealAnimation delay={400}>
      <div className="bg-ath-clay/5 border border-ath-clay/20 p-8 rounded-lg mb-12">
        <h3 className="text-2xl font-display mb-4 text-ath-clay">{title}</h3>
        <p className="mb-4">{description}</p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <Link 
          to={ctaLink} 
          className="inline-flex items-center bg-ath-clay text-white py-2 px-6 rounded hover:bg-ath-clay/90 transition-colors"
        >
          {ctaText} <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </RevealAnimation>
  );
};

export default ProgramWhyChoose;
