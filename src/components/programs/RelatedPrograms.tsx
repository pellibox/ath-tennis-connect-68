
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import RevealAnimation from "@/components/RevealAnimation";

interface RelatedProgram {
  title: string;
  description: string;
  link: string;
}

interface RelatedProgramsProps {
  title: string;
  programs: RelatedProgram[];
}

const RelatedPrograms = ({ title, programs }: RelatedProgramsProps) => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-display mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <Link 
            key={index}
            to={program.link} 
            className="block p-6 border border-gray-200 rounded-lg hover:border-ath-clay hover:shadow-sm transition-all bg-white"
          >
            <h4 className="text-lg font-medium mb-2">{program.title}</h4>
            <p className="text-gray-600 mb-3">{program.description}</p>
            <span className="inline-flex items-center text-ath-clay">
              Scopri <ArrowRight size={14} className="ml-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPrograms;
