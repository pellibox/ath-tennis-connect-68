
import RevealAnimation from './RevealAnimation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
  features?: string[];
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
  // State to track failed images
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  // State to store fallback images for each facility
  const [fallbackImages, setFallbackImages] = useState<Record<string, string>>({});

  // Generate random fallback images when component mounts
  useEffect(() => {
    const fallbacks: Record<string, string> = {};
    facilities.forEach((facility, index) => {
      // Generate a unique random image for each facility
      fallbacks[facility.id] = `https://source.unsplash.com/random/800x600/?tennis,facility,${index}`;
    });
    setFallbackImages(fallbacks);
  }, [facilities]);

  const handleImageError = (id: string) => {
    console.log(`Failed to load facility image for ID: ${id}`);
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="facilities" className={cn('py-20 px-6 lg:px-10 bg-white', className)}>
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <h2 className="text-3xl md:text-4xl font-swiss text-center mb-4">{title}</h2>
        </RevealAnimation>
        
        {subtitle && (
          <RevealAnimation delay={100}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12 font-swiss">{subtitle}</p>
          </RevealAnimation>
        )}
        
        <div className="grid grid-cols-1 gap-16">
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
                  <h3 className="text-2xl font-medium mb-4 text-ath-clay font-swiss">{facility.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 font-swiss">{facility.description}</p>
                  
                  {facility.features && facility.features.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-lg font-medium mb-2 text-ath-secondary font-swiss">Caratteristiche</h4>
                      <ul className="space-y-2">
                        {facility.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-ath-clay mr-2">•</span>
                            <span className="text-gray-700 font-swiss">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className={index % 2 === 0 ? 'md:order-1' : ''}>
                  <div className="overflow-hidden rounded-lg shadow-lg relative aspect-video">
                    {!failedImages[facility.id] ? (
                      <img 
                        src={facility.image} 
                        alt={facility.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        onError={() => handleImageError(facility.id)}
                      />
                    ) : (
                      <img
                        src={fallbackImages[facility.id]}
                        alt={facility.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    )}
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
