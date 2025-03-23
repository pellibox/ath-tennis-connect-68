
import RevealAnimation from './RevealAnimation';
import { cn } from '@/lib/utils';

interface Coach {
  id: string;
  name: string;
  title: string;
  image: string;
  bio?: string;
}

interface CoachesSectionProps {
  title: string;
  subtitle?: string;
  coaches: Coach[];
  className?: string;
}

const CoachesSection = ({ 
  title, 
  subtitle, 
  coaches,
  className 
}: CoachesSectionProps) => {
  return (
    <section className={cn('py-20 px-6 lg:px-10 bg-ath-gray', className)}>
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <h2 className="text-3xl md:text-4xl font-display text-center mb-4">{title}</h2>
        </RevealAnimation>
        
        {subtitle && (
          <RevealAnimation delay={100}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">{subtitle}</p>
          </RevealAnimation>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <RevealAnimation key={coach.id} delay={index * 100}>
              <div className="group bg-white">
                <div className="relative overflow-hidden">
                  <img 
                    src={coach.image} 
                    alt={coach.name} 
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium">{coach.name}</h3>
                  <p className="text-gray-600 mb-4">{coach.title}</p>
                  {coach.bio && <p className="text-gray-500 text-sm">{coach.bio}</p>}
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
