
import RevealAnimation from './RevealAnimation';
import ButtonLink from './ButtonLink';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface AboutSectionProps {
  title: string;
  subtitle?: string;
  description: string | React.ReactNode;
  image?: string;
  icon?: ReactNode;
  buttons?: Array<{
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  }>;
  reversed?: boolean;
  className?: string;
  accent?: 'clay' | 'blue' | 'green' | 'orange' | 'purple';
  elegant?: boolean;
}

const AboutSection = ({ 
  title, 
  subtitle,
  description, 
  image, 
  icon,
  buttons = [],
  reversed = false,
  className,
  accent = 'clay',
  elegant = false
}: AboutSectionProps) => {
  // Map accent to color classes
  const accentClasses = {
    clay: {
      bg: 'bg-ath-clay/5 border-ath-clay/20',
      icon: 'text-ath-clay',
      title: 'text-ath-clay'
    },
    blue: {
      bg: 'bg-blue-500/5 border-blue-500/20',
      icon: 'text-blue-500',
      title: 'text-blue-500'
    },
    green: {
      bg: 'bg-green-500/5 border-green-500/20',
      icon: 'text-green-500',
      title: 'text-green-500'
    },
    orange: {
      bg: 'bg-orange-500/5 border-orange-500/20',
      icon: 'text-orange-500',
      title: 'text-orange-500'
    },
    purple: {
      bg: 'bg-purple-500/5 border-purple-500/20',
      icon: 'text-purple-500',
      title: 'text-purple-500'
    },
  };

  return (
    <section className={cn(
      'py-16 px-6 lg:px-10', 
      elegant ? 'bg-gray-50/50 backdrop-blur-sm' : '',
      className
    )}>
      <div className="max-w-7xl mx-auto">
        <div className={cn(
          'grid md:grid-cols-2 gap-12 items-center',
          reversed ? 'md:grid-flow-dense' : ''
        )}>
          <RevealAnimation 
            className="order-2 md:order-1" 
            direction={reversed ? 'right' : 'left'}
          >
            <div className={reversed ? 'md:ml-auto md:mr-0' : ''}>
              {subtitle && (
                <span className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-3 block">
                  {subtitle}
                </span>
              )}
              <h2 className={cn("text-3xl md:text-4xl font-display mb-6", 
                elegant ? accentClasses[accent].title : '')}>
                {title}
              </h2>
              
              {typeof description === 'string' ? (
                <p className="text-gray-600 leading-relaxed mb-8">{description}</p>
              ) : (
                <div className="text-gray-600 leading-relaxed mb-8">{description}</div>
              )}
              
              {buttons.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {buttons.map((button, index) => (
                    <ButtonLink
                      key={index}
                      href={button.href}
                      variant={button.variant || (index === 0 ? 'primary' : 'outline')}
                    >
                      {button.text}
                    </ButtonLink>
                  ))}
                </div>
              )}
            </div>
          </RevealAnimation>
          
          <RevealAnimation 
            className={cn(
              "order-1 md:order-2",
              reversed ? 'md:order-1' : 'md:order-2'
            )}
            direction={reversed ? 'left' : 'right'}
          >
            {image ? (
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : icon ? (
              <div className={cn(
                "p-8 rounded-lg border flex items-center justify-center",
                elegant ? 'bg-white shadow-md' : accentClasses[accent].bg
              )}>
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {icon}
                  </div>
                </div>
              </div>
            ) : null}
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
