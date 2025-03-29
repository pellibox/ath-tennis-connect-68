
import RevealAnimation from "@/components/RevealAnimation";
import VickiHeader from "@/components/technology/VickiHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  
  return (
    <RevealAnimation>
      <div className="bg-gray-50 py-10 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <VickiHeader 
            title={title} 
            subtitle={subtitle}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={isMobile ? "p-4" : ""}>
                <CardHeader className={isMobile ? "p-2 pb-0" : ""}>
                  <CardTitle className={isMobile ? "text-lg" : ""}>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className={isMobile ? "p-2 pt-3 text-sm" : ""}>
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
