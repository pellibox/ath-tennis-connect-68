
import { useState } from 'react';
import { cn } from '@/lib/utils';
import RevealAnimation from './RevealAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import VickiPoweredBadge from './VickiPoweredBadge';

interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
  features?: string[];
  vimeoEmbed?: string;
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
  className,
}: FacilitiesSectionProps) => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="facilities" className={cn("py-12 px-4 md:px-8 bg-white", className)}>
      <div className="max-w-7xl mx-auto">
        <RevealAnimation>
          <h2 className="text-3xl md:text-4xl font-swiss text-center mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-center max-w-3xl mx-auto mb-10 text-gray-600 font-swiss">
              {subtitle}
            </p>
          )}
        </RevealAnimation>

        <div className="mt-8">
          {facilities.map((facility, index) => (
            <div
              key={facility.id}
              id={facility.id}
              className={cn(
                "mb-16 last:mb-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                index % 2 === 1 ? 'md:flex-row-reverse' : '',
                index % 2 === 1 ? 'md:[grid-template-areas:_"content_media"]' : 'md:[grid-template-areas:_"media_content"]'
              )}
            >
              <RevealAnimation
                delay={0.2}
                className={cn(
                  "md:[grid-area:media] relative h-full"
                )}
              >
                {facility.vimeoEmbed ? (
                  <div className="relative rounded-xl overflow-hidden shadow-lg w-full h-full" style={{ minHeight: "300px" }}
                    dangerouslySetInnerHTML={{ __html: facility.vimeoEmbed }}
                  />
                ) : (
                  <div className="relative rounded-xl overflow-hidden shadow-lg h-full">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover object-center max-h-[500px]"
                    />
                    {/* Only show VickiPoweredBadge for the first three facilities (Clay courts, Central court and Synthetic courts) */}
                    {index < 3 && (
                      <div className="absolute bottom-3 right-3">
                        <VickiPoweredBadge />
                      </div>
                    )}
                  </div>
                )}
              </RevealAnimation>

              <RevealAnimation
                delay={0.4}
                className={cn(
                  "md:[grid-area:content]"
                )}
              >
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 font-swiss">
                    {facility.title}
                  </h3>
                  <p className="text-gray-700 mb-6 font-swiss">{facility.description}</p>
                  
                  {facility.features && facility.features.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold mb-2 font-swiss">Caratteristiche:</h4>
                      <ul className="space-y-2">
                        {facility.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-ath-clay/10 text-ath-clay mr-3 mt-0.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span className="font-swiss">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </RevealAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
