
import RevealAnimation from './RevealAnimation';
import ButtonLink from './ButtonLink';
import { cn } from '@/lib/utils';

interface AboutSectionProps {
  title: string;
  subtitle?: string;
  description: string | React.ReactNode;
  image: string;
  buttons?: Array<{
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  }>;
  reversed?: boolean;
  className?: string;
}

const AboutSection = ({ 
  title, 
  subtitle,
  description, 
  image, 
  buttons = [],
  reversed = false,
  className 
}: AboutSectionProps) => {
  return (
    <section className={cn('py-20 px-6 lg:px-10', className)}>
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
              <h2 className="text-3xl md:text-4xl font-display mb-6">{title}</h2>
              
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
            <div className="relative overflow-hidden">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
