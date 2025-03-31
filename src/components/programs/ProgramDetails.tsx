
import RevealAnimation from "@/components/RevealAnimation";
import { UserGender, UserType } from "@/components/UserTypeSelector";
import VickiUnifiedBadge from "@/components/VickiUnifiedBadge";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

interface ProgramDetailsProps {
  title: string;
  subtitle: string;
  description: string[];
  userGender?: UserGender | null;
  userType?: UserType | null;
  vickiLevel?: "basic" | "standard" | "advanced" | "elite" | "pro";
}

const ProgramDetails = ({ 
  title, 
  subtitle, 
  description,
  userGender,
  userType,
  vickiLevel = "pro"
}: ProgramDetailsProps) => {
  return (
    <div className="mb-12">
      <RevealAnimation>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <h2 className="text-3xl font-swiss">{title}</h2>
          <Badge variant="ath" className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            <span>Team Suggestion</span>
          </Badge>
          <VickiUnifiedBadge level={vickiLevel} />
        </div>
      </RevealAnimation>
      <RevealAnimation delay={100}>
        <p className="text-lg mb-6 font-swiss">{subtitle}</p>
      </RevealAnimation>
      
      {description.map((paragraph, index) => (
        <RevealAnimation key={index} delay={150 + (index * 50)}>
          <p className={`${index < description.length - 1 ? 'mb-4' : ''} font-swiss`}>
            {paragraph}
          </p>
        </RevealAnimation>
      ))}
    </div>
  );
};

export default ProgramDetails;
