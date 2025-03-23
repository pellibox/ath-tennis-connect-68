
import RevealAnimation from './RevealAnimation';
import { cn } from '@/lib/utils';

interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface FacilitiesSectionProps {
  title: string;
  subtitle?: string;
  facilities: Facility[];
  className?: string;
}

const FacilitiesSection = ({ 
  title, 
  subtitle, 
  facilities,
  className 
}: FacilitiesSectionProps) => {
  return (
    <section className={cn('py-20 px-6 lg:px-10', className)}>
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <h2 className="text-3xl md:text-4xl font-display text-center mb-4">{title}</h2>
        </RevealAnimation>
        
        {subtitle && (
          <RevealAnimation delay={100}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">{subtitle}</p>
          </RevealAnimation>
        )}
        
        <div className="grid grid-cols-1 gap-12">
          {facilities.map((facility, index) => (
            <RevealAnimation 
              key={facility.id} 
              delay={index * 100}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className={cn(
                "grid md:grid-cols-2 gap-8 items-center",
                index % 2 === 0 ? 'md:grid-flow-dense' : ''
              )}>
                <div className={index % 2 === 0 ? 'md:order-2' : ''}>
                  <h3 className="text-2xl font-medium mb-4">{facility.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
                
                <div className={index % 2 === 0 ? 'md:order-1' : ''}>
                  <div className="overflow-hidden">
                    <img 
                      src={facility.image} 
                      alt={facility.title} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
