
import { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface RevealAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  style?: CSSProperties;
  immediate?: boolean;
}

const RevealAnimation = ({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  direction = 'up',
  style,
  immediate = false
}: RevealAnimationProps) => {
  const [isVisible, setIsVisible] = useState(immediate);
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Reduce animations on mobile for better performance
  const mobileFriendlyDelay = isMobile ? Math.min(delay, 150) : delay;
  const mobileThreshold = isMobile ? 0.05 : threshold;

  useEffect(() => {
    // If immediate is true, show content right away
    if (immediate) {
      setIsVisible(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: mobileThreshold,
        rootMargin: isMobile ? '0px' : '0px 0px -100px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Force visibility after a timeout on mobile to ensure content is shown
    let forceTimer: number;
    if (isMobile) {
      forceTimer = window.setTimeout(() => {
        setIsVisible(true);
      }, 1000 + mobileFriendlyDelay); // Force show after 1 second + delay
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (forceTimer) {
        clearTimeout(forceTimer);
      }
    };
  }, [threshold, immediate, isMobile, mobileThreshold, mobileFriendlyDelay]);

  // Less pronounced animation on mobile
  const getDirectionStyle = () => {
    if (isMobile) {
      switch (direction) {
        case 'up': return 'translate-y-4';
        case 'down': return '-translate-y-4';
        case 'left': return 'translate-x-4';
        case 'right': return '-translate-x-4';
        default: return 'translate-y-4';
      }
    } else {
      switch (direction) {
        case 'up': return 'translate-y-10';
        case 'down': return '-translate-y-10';
        case 'left': return 'translate-x-10';
        case 'right': return '-translate-x-10';
        default: return 'translate-y-10';
      }
    }
  };

  const directionStyle = getDirectionStyle();

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isMobile ? 'duration-500' : 'duration-700',
        !isVisible && 'opacity-0',
        !isVisible && directionStyle,
        className
      )}
      style={{
        transitionDelay: `${mobileFriendlyDelay}ms`,
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default RevealAnimation;
