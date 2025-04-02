
import RevealAnimation from "@/components/RevealAnimation";

interface Benefit {
  title: string;
  description: string;
}

interface ProgramWhyChooseProps {
  title: string;
  benefits: Benefit[];
}

const ProgramWhyChoose = ({ title, benefits }: ProgramWhyChooseProps) => {
  return (
    <div className="mb-12">
      <RevealAnimation>
        <h3 className="text-2xl font-swiss font-semibold mb-6">{title}</h3>
      </RevealAnimation>
      
      <div className="grid md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <RevealAnimation key={index} delay={100 + (index * 50)}>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-swiss font-semibold mb-2">{benefit.title}</h4>
              <p className="text-gray-700 font-swiss">{benefit.description}</p>
            </div>
          </RevealAnimation>
        ))}
      </div>
    </div>
  );
};

export default ProgramWhyChoose;
