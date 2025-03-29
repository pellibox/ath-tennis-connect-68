
import RevealAnimation from "@/components/RevealAnimation";
import VickiHeader from "@/components/technology/VickiHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SupportFeature {
  title: string;
  description: string;
}

interface TechnologySupportProps {
  title: string;
  subtitle: string;
  features: SupportFeature[];
}

const TechnologySupport = ({ title, subtitle, features }: TechnologySupportProps) => {
  return (
    <RevealAnimation>
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <VickiHeader 
            title={title} 
            subtitle={subtitle}
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default TechnologySupport;
