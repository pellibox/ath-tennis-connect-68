
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { GripVertical } from 'lucide-react';

// Create a custom event name for communication between widgets
const WIDGET_TOGGLE_EVENT = 'ath-widget-toggle';
const AGENT_ID = "jJMZr28UE8hDLsO00dmt";

// Storage key for widget position
const WIDGET_POSITION_KEY = 'ath-elevenlabs-widget-position';

// Default positions for mobile and desktop
const DEFAULT_MOBILE_POSITION = { top: 'auto', left: '20px', bottom: '70px', right: 'auto' };
const DEFAULT_DESKTOP_POSITION = { top: '20px', left: '20px', bottom: 'auto', right: 'auto' };

const ElevenLabsConvaiWidget = () => {
  const { language, t } = useLanguage();
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetInitialized = useRef(false);
  const isMobile = useIsMobile();
  const positionInitialized = useRef(false);
  
  // Position state
  const [position, setPosition] = useState(() => {
    // Try to load saved position from localStorage
    try {
      const savedPosition = localStorage.getItem(WIDGET_POSITION_KEY);
      return savedPosition ? JSON.parse(savedPosition) : 
        isMobile ? DEFAULT_MOBILE_POSITION : DEFAULT_DESKTOP_POSITION;
    } catch (e) {
      return isMobile ? DEFAULT_MOBILE_POSITION : DEFAULT_DESKTOP_POSITION;
    }
  });

  // Dragging state - only enabled on desktop
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const widgetStartPos = useRef({ top: 0, left: 0 });

  // Only set the default position the first time, not every time mobile state changes
  useEffect(() => {
    if (!positionInitialized.current && !isDragging) {
      setPosition(isMobile ? DEFAULT_MOBILE_POSITION : DEFAULT_DESKTOP_POSITION);
      positionInitialized.current = true;
      
      // Save the default position to localStorage
      try {
        localStorage.setItem(WIDGET_POSITION_KEY, JSON.stringify(
          isMobile ? DEFAULT_MOBILE_POSITION : DEFAULT_DESKTOP_POSITION
        ));
      } catch (e) {
        console.error("Failed to save widget position to localStorage", e);
      }
    }
  }, [isMobile, isDragging]);

  // Save position to localStorage when it changes - only for desktop
  useEffect(() => {
    if (!isMobile) {
      try {
        localStorage.setItem(WIDGET_POSITION_KEY, JSON.stringify(position));
      } catch (e) {
        console.error("Failed to save widget position to localStorage", e);
      }
    }
  }, [position, isMobile]);

  // Initialize the widget when the component mounts
  useEffect(() => {
    if (window.ElevenLabsConvai && !widgetInitialized.current) {
      window.ElevenLabsConvai.init({
        language: language || 'it',
        // Default to Italian if no language is set
        usePublicAgents: true // Use public agents mode
      });
      widgetInitialized.current = true;
      console.log("ElevenLabs Convai widget initialized with language:", language);

      // Dispatch an event to close other widgets
      const event = new CustomEvent(WIDGET_TOGGLE_EVENT, {
        detail: {
          widget: 'elevenlabs'
        }
      });
      window.dispatchEvent(event);
    }
  }, [language]);

  // Update the language attribute when language changes
  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.setAttribute('language', language || 'it');
    }
  }, [language]);

  // Find the hero component and position widget below it on mobile
  useEffect(() => {
    if (!isMobile) return;

    const positionWidgetBelowHero = () => {
      // Look for hero elements - either StandardHeroVideo or Hero component
      const heroVideo = document.querySelector('.w-full.bg-black.min-h-\\[calc\\(100vw\\*9\\/16\\)\\]');
      const heroSection = document.querySelector('[class*="relative w-full flex items-center justify-center overflow-hidden"]');
      
      if (heroVideo || heroSection) {
        const heroElement = heroVideo || heroSection;
        if (!heroElement) return;
        
        const heroRect = heroElement.getBoundingClientRect();
        const heroBottom = heroRect.bottom;
        const windowHeight = window.innerHeight;
        
        // Position the widget 10px below the hero
        // But make sure it doesn't overlap with the bottom navigation
        const bottomNavHeight = 56; // Height of bottom navigation
        const offset = 10; // 10px below hero
        
        if (widgetRef.current) {
          // Calculate available space
          const availableHeight = windowHeight - heroBottom - offset - bottomNavHeight - 20; // 20px extra padding
          const widgetHeight = Math.min(availableHeight, 400); // Limit max height
          
          widgetRef.current.style.position = 'fixed';
          widgetRef.current.style.top = `${heroBottom + offset}px`;
          widgetRef.current.style.left = '16px';
          widgetRef.current.style.right = '16px';
          widgetRef.current.style.maxHeight = `${widgetHeight}px`;
          widgetRef.current.style.width = 'auto';
          widgetRef.current.style.zIndex = '50';
          
          // When scrolling past the hero, keep the widget visible at the top
          if (heroBottom < 0) {
            widgetRef.current.style.top = `${offset}px`;
          }
        }
      }
    };
    
    // Initial positioning
    positionWidgetBelowHero();
    
    // Set up on scroll listener
    window.addEventListener('scroll', positionWidgetBelowHero);
    window.addEventListener('resize', positionWidgetBelowHero);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', positionWidgetBelowHero);
      window.removeEventListener('resize', positionWidgetBelowHero);
    };
  }, [isMobile]);

  // Modified MutationObserver to fix scrolling issues
  useEffect(() => {
    if (!isMobile) return;
    
    // Function to apply position adjustment specifically for mobile without breaking scrolling
    const adjustWidgetPositionMobile = () => {
      // Find the widget and its shadow DOM elements
      const widget = document.querySelector('elevenlabs-convai');
      if (!widget) return;
      
      // Try both direct DOM access and Shadow DOM
      const findWrapper = (root: Document | ShadowRoot): HTMLElement | null => {
        // Try multiple possible selectors based on common widget patterns
        const element = 
          root.querySelector('div[class*="_wrapper_"]') || 
          root.querySelector('div.widget-container') ||
          root.querySelector('div.convai-container') ||
          root.querySelector('div');
          
        // Cast to HTMLElement to get access to style property
        return element as HTMLElement | null;
      };
      
      // Look for hero elements to position below
      const heroVideo = document.querySelector('.w-full.bg-black.min-h-\\[calc\\(100vw\\*9\\/16\\)\\]');
      const heroSection = document.querySelector('[class*="relative w-full flex items-center justify-center overflow-hidden"]');
      
      if (heroVideo || heroSection) {
        const heroElement = heroVideo || heroSection;
        if (!heroElement) return;
        
        const heroRect = heroElement.getBoundingClientRect();
        const heroBottom = heroRect.bottom;
        const windowHeight = window.innerHeight;
        const offset = 10; // 10px below hero
        
        // Apply transform based on screen size
        if (window.innerWidth < 768) {
          // Mobile adjustments
          if (widget instanceof HTMLElement) {
            widget.style.position = 'fixed';
            widget.style.transform = '';
            widget.style.zIndex = '50';
            // Ensure widget doesn't interfere with body scrolling
            widget.style.pointerEvents = 'auto';
          }
          
          // Try to find the wrapper in Light DOM
          let wrapper = findWrapper(document);
          
          // If not found, try Shadow DOM
          if (!wrapper && widget.shadowRoot) {
            wrapper = findWrapper(widget.shadowRoot);
          }
          
          if (wrapper) {
            // Position 10px below hero or at top if scrolled past hero
            const topPosition = heroBottom < 0 ? offset : (heroBottom + offset);
            
            wrapper.style.position = 'fixed';
            wrapper.style.top = `${topPosition}px`;
            wrapper.style.left = '16px';
            wrapper.style.right = '16px';
            wrapper.style.transform = '';
            wrapper.style.zIndex = '50';
            
            // Avoid overlapping with bottom navigation
            const bottomNavHeight = 56; 
            const bottomPadding = 14; 
            wrapper.style.bottom = `${bottomNavHeight + bottomPadding}px`;
            
            // Limit height based on available space
            const availableHeight = windowHeight - topPosition - bottomNavHeight - bottomPadding;
            wrapper.style.maxHeight = `${Math.min(availableHeight, 400)}px`;
            wrapper.style.height = 'auto';
            wrapper.style.overflow = 'auto';
            
            // Make sure scroll events don't propagate to body
            if (!wrapper.getAttribute('data-scroll-handler-set')) {
              wrapper.addEventListener('wheel', (e) => {
                e.stopPropagation();
              });
              wrapper.setAttribute('data-scroll-handler-set', 'true');
            }
          }
        } else {
          // Desktop - reset transform
          if (widget instanceof HTMLElement) {
            widget.style.position = '';
            widget.style.transform = '';
          }
          
          // Reset wrapper transform too
          let wrapper = findWrapper(document);
          if (!wrapper && widget.shadowRoot) {
            wrapper = findWrapper(widget.shadowRoot);
          }
          
          if (wrapper) {
            wrapper.style.position = '';
            wrapper.style.top = '';
            wrapper.style.left = '';
            wrapper.style.right = '';
            wrapper.style.transform = '';
            wrapper.style.bottom = '0px';
            wrapper.style.maxHeight = '';
            wrapper.style.height = '';
          }
        }
      }
    };
    
    // Reset document body overflow to ensure scrolling works
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    
    // Set up MutationObserver to watch for changes in the widget
    const setupObserver = () => {
      const widget = document.querySelector('elevenlabs-convai');
      if (!widget) {
        // If widget not found, try again after a short delay
        setTimeout(setupObserver, 500);
        return;
      }
      
      // Apply initial adjustment
      adjustWidgetPositionMobile();
      
      // Create less invasive observer to watch only for attribute changes
      const observer = new MutationObserver((mutations) => {
        // Only adjust if changes are relevant to positioning
        const shouldAdjust = mutations.some(mutation => 
          mutation.type === 'attributes' || 
          (mutation.type === 'childList' && mutation.addedNodes.length > 0)
        );
        
        if (shouldAdjust) {
          adjustWidgetPositionMobile();
        }
      });
      
      // Start observing with more targeted options
      observer.observe(widget, { 
        attributes: true, 
        attributeFilter: ['style', 'class'],
        childList: true,
        subtree: false // Reduce DOM traversal
      });
      
      // Clean up function
      return () => {
        observer.disconnect();
      };
    };
    
    // Initial setup
    const cleanup = setupObserver();
    
    // Add resize listener for responsive adjustments
    window.addEventListener('resize', adjustWidgetPositionMobile);
    
    // Clean up on component unmount
    return () => {
      if (cleanup) cleanup();
      window.removeEventListener('resize', adjustWidgetPositionMobile);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobile]);
  
  // Handle mouse down event to start dragging - desktop only
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!widgetRef.current || isMobile) return;
    
    e.preventDefault();
    setIsDragging(true);
    
    // Store starting positions
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    
    const rect = widgetRef.current.getBoundingClientRect();
    widgetStartPos.current = {
      top: rect.top,
      left: rect.left
    };
  };

  // Handle touch start event for mobile dragging - disabled on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!widgetRef.current || e.touches.length !== 1 || isMobile) return;
    
    e.preventDefault();
    setIsDragging(true);
    
    // Store starting positions
    const touch = e.touches[0];
    dragStartPos.current = { x: touch.clientX, y: touch.clientY };
    
    const rect = widgetRef.current.getBoundingClientRect();
    widgetStartPos.current = {
      top: rect.top,
      left: rect.left
    };
  };

  // Handle mouse move during dragging - desktop only
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !widgetRef.current || isMobile) return;
    
    // Calculate new position
    const deltaX = e.clientX - dragStartPos.current.x;
    const deltaY = e.clientY - dragStartPos.current.y;
    
    const newLeft = widgetStartPos.current.left + deltaX;
    const newTop = widgetStartPos.current.top + deltaY;
    
    // Apply boundary constraints
    const maxX = window.innerWidth - widgetRef.current.offsetWidth;
    const maxY = window.innerHeight - widgetRef.current.offsetHeight;
    
    const boundedLeft = Math.max(0, Math.min(newLeft, maxX));
    const boundedTop = Math.max(0, Math.min(newTop, maxY));
    
    // Update position
    setPosition({
      top: `${boundedTop}px`,
      left: `${boundedLeft}px`,
      bottom: 'auto',
      right: 'auto'
    });
  };

  // Handle touch move for mobile dragging - disabled on mobile
  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !widgetRef.current || e.touches.length !== 1 || isMobile) return;
    
    // Calculate new position
    const touch = e.touches[0];
    const deltaX = touch.clientX - dragStartPos.current.x;
    const deltaY = touch.clientY - dragStartPos.current.y;
    
    const newLeft = widgetStartPos.current.left + deltaX;
    const newTop = widgetStartPos.current.top + deltaY;
    
    // Apply boundary constraints
    const maxX = window.innerWidth - widgetRef.current.offsetWidth;
    const maxY = window.innerHeight - widgetRef.current.offsetHeight;
    
    const boundedLeft = Math.max(0, Math.min(newLeft, maxX));
    const boundedTop = Math.max(0, Math.min(newTop, maxY));
    
    // Update position
    setPosition({
      top: `${boundedTop}px`,
      left: `${boundedLeft}px`,
      bottom: 'auto',
      right: 'auto'
    });
  };

  // End dragging on mouse up or touch end
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Add event listeners for dragging - only on desktop
  useEffect(() => {
    if (isDragging && !isMobile) {
      // Mouse events
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleDragEnd);
      
      // Touch events
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleDragEnd);
      document.addEventListener('touchcancel', handleDragEnd);
    }
    
    return () => {
      // Clean up event listeners
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleDragEnd);
      document.removeEventListener('touchcancel', handleDragEnd);
    };
  }, [isDragging, isMobile]);
  
  return (
    <div 
      ref={widgetRef}
      className={`fixed z-50 ${isMobile ? 'transition-none' : ''}`} 
      style={isMobile ? {} : {
        ...position,
        transition: isDragging ? 'none' : 'all 0.2s ease-in-out'
      }}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out max-w-[350px] animate-fade-in relative">
        {/* Drag handle - only show on desktop */}
        {!isMobile && (
          <div 
            className="absolute top-0 left-0 w-full h-8 bg-ath-clay flex items-center justify-center cursor-move z-[999]"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <GripVertical size={18} className="text-white" />
            <span className="text-white text-xs ml-1">Trascina</span>
          </div>
        )}
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className={`elevenlabs-widget-container max-w-[350px] ${!isMobile ? 'pt-8' : ''}`}>
                <elevenlabs-convai 
                  agent-id={AGENT_ID} 
                  language={language || 'it'}
                ></elevenlabs-convai>
              </div>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>{t('chatbot.askCoach')}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default ElevenLabsConvaiWidget;
