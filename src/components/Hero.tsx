
import { useEffect, useRef } from 'react';
import ButtonLink from './ButtonLink';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  buttons?: Array<{
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  }>;
  className?: string;
  contentPosition?: 'center' | 'left' | 'right';
  overlayOpacity?: 'light' | 'medium' | 'dark';
  fullHeight?: boolean;
}

const Hero = ({
  title,
  subtitle,
  imageSrc,
  buttons = [],
  className,
  contentPosition = 'center',
  overlayOpacity = 'medium',
  fullHeight = true,
}: HeroProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (titleRef.current) {
      const text = titleRef.current.textContent || '';
      const wrappedText = text.split('').map((char, index) => 
        `<span style="--index:${index}" ${char === ' ' ? 'class="inline-block"' : ''}>${char}</span>`
      ).join('');
      
      titleRef.current.innerHTML = wrappedText;
      
      setTimeout(() => {
        titleRef.current?.classList.add('visible');
      }, 100);
    }
  }, []);
  
  const positionClasses = {
    center: 'items-center text-center',
    left: 'items-start text-left',
    right: 'items-end text-right',
  };
  
  const overlayClasses = {
    light: 'bg-black/20',
    medium: 'bg-black/40',
    dark: 'bg-black/60',
  };
  
  return (
    <div 
      className={cn(
        'relative w-full flex items-center justify-center overflow-hidden',
        fullHeight ? 'min-h-screen' : 'min-h-[50vh]',
        className
      )}
    >
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={imageSrc} 
          alt="Background" 
          className="object-cover w-full h-full"
        />
        <div className={cn('absolute inset-0', overlayClasses[overlayOpacity])}></div>
      </div>
      
      <div className={cn(
        'relative z-10 max-w-3xl px-6 py-24 flex flex-col',
        positionClasses[contentPosition]
      )}>
        <h1 
          ref={titleRef}
          className="text-animate text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6"
        >
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-white text-lg md:text-xl opacity-90 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {subtitle}
          </p>
        )}
        
        {buttons.length > 0 && (
          <div className={cn(
            'flex flex-wrap gap-4',
            contentPosition === 'center' ? 'justify-center' : contentPosition === 'right' ? 'justify-end' : 'justify-start'
          )}>
            {buttons.map((button, index) => (
              <ButtonLink
                key={index}
                href={button.href}
                variant={button.variant || (index === 0 ? 'primary' : 'outline')}
                className={index === 0 ? 'animate-fade-in' : 'animate-fade-in'}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {button.text}
              </ButtonLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
