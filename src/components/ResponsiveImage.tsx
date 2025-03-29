
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ResponsiveImageProps {
  src: string;
  mobileSrc?: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  lazyLoad?: boolean;
}

const ResponsiveImage = ({
  src,
  mobileSrc,
  alt,
  fallbackSrc = "/lovable-uploads/6ea13aa7-2578-488b-8ed4-4b17fc2ddc4e.png",
  className,
  width,
  height,
  priority = false,
  onLoad,
  onError,
  lazyLoad = true,
}: ResponsiveImageProps) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // If mobile source is provided and we're on mobile, use it
    if (mobileSrc && isMobile) {
      setImgSrc(mobileSrc);
    } else {
      setImgSrc(src);
    }
    
    // Reset states when src changes
    setIsLoaded(false);
    setHasError(false);
  }, [src, mobileSrc, isMobile]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setHasError(true);
    setImgSrc(fallbackSrc);
    if (onError) onError();
  };

  return (
    <div className={cn(
      "overflow-hidden relative",
      className
    )}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : (lazyLoad ? "lazy" : "eager")}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
};

export default ResponsiveImage;
