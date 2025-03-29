
import * as React from "react";
import { useIsMobile } from "./use-mobile";

interface TouchPosition {
  x: number;
  y: number;
}

interface SwipeDirection {
  horizontal: "left" | "right" | null;
  vertical: "up" | "down" | null;
}

interface TouchHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
}

export function useTouch(options?: {
  threshold?: number;
  handlers?: TouchHandlers;
}) {
  const isMobile = useIsMobile();
  const threshold = options?.threshold || 50;
  const [touchStart, setTouchStart] = React.useState<TouchPosition | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<TouchPosition | null>(null);
  const [swipeDirection, setSwipeDirection] = React.useState<SwipeDirection>({
    horizontal: null,
    vertical: null,
  });

  // Reset swipe direction when component unmounts
  React.useEffect(() => {
    return () => {
      setSwipeDirection({ horizontal: null, vertical: null });
    };
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchEnd(null);
    setSwipeDirection({ horizontal: null, vertical: null });
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || !isMobile) return;
    
    const horizontalDistance = touchStart.x - touchEnd.x;
    const verticalDistance = touchStart.y - touchEnd.y;
    
    const newDirection: SwipeDirection = {
      horizontal: null,
      vertical: null,
    };

    // Determine horizontal swipe
    if (Math.abs(horizontalDistance) > threshold) {
      newDirection.horizontal = horizontalDistance > 0 ? "left" : "right";
      
      // Execute handlers if provided
      if (options?.handlers) {
        if (horizontalDistance > 0 && options.handlers.onSwipeLeft) {
          options.handlers.onSwipeLeft();
        } else if (horizontalDistance < 0 && options.handlers.onSwipeRight) {
          options.handlers.onSwipeRight();
        }
      }
    }

    // Determine vertical swipe
    if (Math.abs(verticalDistance) > threshold) {
      newDirection.vertical = verticalDistance > 0 ? "up" : "down";
      
      // Execute handlers if provided
      if (options?.handlers) {
        if (verticalDistance > 0 && options.handlers.onSwipeUp) {
          options.handlers.onSwipeUp();
        } else if (verticalDistance < 0 && options.handlers.onSwipeDown) {
          options.handlers.onSwipeDown();
        }
      }
    }

    setSwipeDirection(newDirection);
    setTouchStart(null);
    setTouchEnd(null);
  };

  const touchProps = {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };

  return {
    swipeDirection,
    touchProps,
    isTouchDevice: isMobile,
  };
}

// Higher-order component to apply touch event handling
export function withTouchEvents<P>(
  Component: React.ComponentType<P & { touchProps?: any; swipeDirection?: SwipeDirection }>
) {
  return function TouchEnabledComponent(props: P & TouchHandlers) {
    const { onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, ...rest } = props;
    
    const { touchProps, swipeDirection } = useTouch({
      handlers: {
        onSwipeLeft,
        onSwipeRight,
        onSwipeUp,
        onSwipeDown,
      },
    });

    return <Component touchProps={touchProps} swipeDirection={swipeDirection} {...rest as P} />;
  };
}
