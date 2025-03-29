
import RevealAnimation from "@/components/RevealAnimation";
import VickiHeader from "@/components/technology/VickiHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBreakpoint, useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

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
  const breakpoint = useBreakpoint();
  const isExtraSmall = breakpoint === "xs";
  
  return (
    <RevealAnimation>
      <div className="bg-gray-50 py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <VickiHeader 
            title={title} 
            subtitle={subtitle}
          />
          
          <div className={cn(
            "grid gap-3 md:gap-8", 
            isExtraSmall ? 'grid-cols-1' : 'sm:grid-cols-2 md:grid-cols-3'
          )}>
            {features.map((feature, index) => (
              <Card key={index} className={isMobile ? "shadow-sm" : ""}>
                <CardHeader className={isMobile ? "p-3 pb-1" : ""}>
                  <CardTitle className={isMobile ? "text-base" : ""}>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className={cn(isMobile ? "p-3 pt-0" : "", "text-sm md:text-base")}>
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
