
import { useEffect, useRef, useState } from 'react';
import RevealAnimation from './RevealAnimation';
import { cn } from '@/lib/utils';

interface Stat {
  id: string;
  value: number;
  suffix?: string;
  label: string;
}

interface StatsSectionProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
  className?: string;
  darkBg?: boolean;
}

const StatsSection = ({ 
  title, 
  subtitle, 
  stats,
  className,
  darkBg = false
}: StatsSectionProps) => {
  return (
    <section className={cn(
      'py-20 px-6 lg:px-10', 
      darkBg ? 'bg-black text-white' : '',
      className
    )}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <RevealAnimation>
            <h2 className={cn(
              "text-3xl md:text-4xl font-display text-center mb-4",
              darkBg ? 'text-white' : ''
            )}>
              {title}
            </h2>
          </RevealAnimation>
        )}
        
        {subtitle && (
          <RevealAnimation delay={100}>
            <p className={cn(
              "text-lg max-w-3xl mx-auto text-center mb-12",
              darkBg ? 'text-gray-300' : 'text-gray-600'
            )}>
              {subtitle}
            </p>
          </RevealAnimation>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <RevealAnimation key={stat.id} delay={index * 100}>
              <div className="text-center">
                <CountUpStat 
                  value={stat.value} 
                  suffix={stat.suffix}
                  className={cn(
                    "text-4xl md:text-5xl font-bold mb-2",
                    darkBg ? 'text-white' : ''
                  )}
                />
                <p className={darkBg ? 'text-gray-300' : 'text-gray-600'}>
                  {stat.label}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CountUpStatProps {
  value: number;
  suffix?: string;
  className?: string;
}

const CountUpStat = ({ value, suffix = '', className }: CountUpStatProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<{ hasAnimated: boolean }>({ hasAnimated: false });
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };
    
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      
      if (entry.isIntersecting && !animationRef.current.hasAnimated) {
        animationRef.current.hasAnimated = true;
        
        const startTime = performance.now();
        const duration = 2000; // 2 seconds
        
        const updateValue = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutQuart(progress);
          
          setDisplayValue(Math.floor(easedProgress * value));
          
          if (progress < 1) {
            requestAnimationFrame(updateValue);
          } else {
            setDisplayValue(value);
          }
        };
        
        requestAnimationFrame(updateValue);
      }
    }, observerOptions);
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [value]);
  
  // Easing function for a more natural count-up
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  };
  
  return (
    <div ref={elementRef} className={className}>
      {displayValue}{suffix}
    </div>
  );
};

export default StatsSection;
