
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
const DEFAULT_MOBILE_POSITION = { bottom: '20px', right: '20px', top: 'auto', left: 'auto' };
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

  // Dragging state
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const widgetStartPos = useRef({ top: 0, left: 0 });

  // Set default position based on device type
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

  // Save position to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem(WIDGET_POSITION_KEY, JSON.stringify(position));
    } catch (e) {
      console.error("Failed to save widget position to localStorage", e);
    }
  }, [position]);

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

  // Enhanced positioning logic to anchor to hero sections on mobile
  useEffect(() => {
    // Function to detect hero sections and position the widget accordingly
    const positionWidgetRelativeToHero = () => {
      if (!isMobile) return;
      
      // Find hero sections (StandardHeroVideo, Hero, or any container with bg-black class that's large)
      const heroSections = [
        ...Array.from(document.querySelectorAll('.w-full.bg-black')),
        ...Array.from(document.querySelectorAll('[class*="Hero"]')),
        ...Array.from(document.querySelectorAll('[class*="hero"]'))
      ];
      
      if (heroSections.length === 0) return;
      
      // Find the visible hero section (one in the viewport)
      const visibleHero = heroSections.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      });
      
      if (!visibleHero || !widgetRef.current) return;
      
      // Calculate bottom right position relative to the hero
      const heroRect = visibleHero.getBoundingClientRect();
      const bottomRightX = Math.min(window.innerWidth - 80, heroRect.right - 20);
      const bottomRightY = Math.min(window.innerHeight - 100, heroRect.bottom - 20);
      
      // If hero is not fully visible, position at window bottom right with offset
      if (heroRect.bottom > window.innerHeight || heroRect.right > window.innerWidth) {
        widgetRef.current.style.bottom = '80px';
        widgetRef.current.style.right = '20px';
        widgetRef.current.style.top = 'auto';
        widgetRef.current.style.left = 'auto';
        widgetRef.current.classList.add('widget-fixed-bottom-right');
      } else {
        // Position relative to hero's bottom right
        const topPosition = bottomRightY;
        const leftPosition = bottomRightX - widgetRef.current.offsetWidth;
        
        widgetRef.current.style.top = `${topPosition}px`;
        widgetRef.current.style.left = `${leftPosition}px`;
        widgetRef.current.style.bottom = 'auto';
        widgetRef.current.style.right = 'auto';
        widgetRef.current.classList.remove('widget-fixed-bottom-right');
      }
    };
    
    // Apply initial positioning
    positionWidgetRelativeToHero();
    
    // Set up window scroll observer to adjust position when scrolling
    window.addEventListener('scroll', positionWidgetRelativeToHero);
    window.addEventListener('resize', positionWidgetRelativeToHero);
    
    return () => {
      window.removeEventListener('scroll', positionWidgetRelativeToHero);
      window.removeEventListener('resize', positionWidgetRelativeToHero);
    };
  }, [isMobile]);

  // Function to adjust the widget's position in the Convai iframe
  const adjustWidgetPosition = () => {
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
    
    // Apply transform based on screen size
    if (window.innerWidth < 768) {
      // Reset transform and handle positioning through our own logic
      if (widget instanceof HTMLElement) {
        widget.style.transform = '';
        widget.classList.add('mobile-convai-widget');
      }
      
      // Try to find the wrapper in Light DOM
      let wrapper = findWrapper(document);
      
      // If not found, try Shadow DOM
      if (!wrapper && widget.shadowRoot) {
        wrapper = findWrapper(widget.shadowRoot);
      }
      
      if (wrapper) {
        wrapper.style.transform = '';
        
        // Ensure the widget is positioned correctly within the iframe
        wrapper.style.right = '0';
        wrapper.style.bottom = '0';
      }
    } else {
      // Desktop - reset transform
      if (widget instanceof HTMLElement) {
        widget.style.transform = '';
        widget.classList.remove('mobile-convai-widget');
      }
      
      // Reset wrapper transform too
      let wrapper = findWrapper(document);
      if (!wrapper && widget.shadowRoot) {
        wrapper = findWrapper(widget.shadowRoot);
      }
      
      if (wrapper) {
        wrapper.style.transform = '';
      }
    }
  };
  
  // Enhanced MutationObserver setup for widget position
  useEffect(() => {
    // Set up MutationObserver to watch for changes in the widget
    const setupObserver = () => {
      const widget = document.querySelector('elevenlabs-convai');
      if (!widget) {
        // If widget not found, try again after a short delay
        setTimeout(setupObserver, 500);
        return;
      }
      
      // Apply initial adjustment
      adjustWidgetPosition();
      
      // Create observer to watch for changes
      const observer = new MutationObserver(() => {
        adjustWidgetPosition();
      });
      
      // Start observing
      observer.observe(widget, { 
        attributes: true, 
        childList: true, 
        subtree: true 
      });
      
      // Also observe document body for changes that might affect the widget
      const bodyObserver = new MutationObserver(() => {
        adjustWidgetPosition();
      });
      
      bodyObserver.observe(document.body, { 
        childList: true, 
        subtree: true 
      });
      
      // Clean up function
      return () => {
        observer.disconnect();
        bodyObserver.disconnect();
      };
    };
    
    // Initial setup
    const cleanup = setupObserver();
    
    // Add resize listener for responsive adjustments
    window.addEventListener('resize', adjustWidgetPosition);
    
    // Clean up on component unmount
    return () => {
      if (cleanup) cleanup();
      window.removeEventListener('resize', adjustWidgetPosition);
    };
  }, []);
  
  // Handle mouse down event to start dragging
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

  // Handle touch start event for mobile dragging
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

  // Handle mouse move during dragging
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !widgetRef.current) return;
    
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

  // Handle touch move for mobile dragging
  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !widgetRef.current || e.touches.length !== 1) return;
    
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

  // Add event listeners for dragging
  useEffect(() => {
    if (isDragging) {
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
  }, [isDragging]);
  
  return (
    <div 
      ref={widgetRef}
      className={`fixed z-50 widget-container ${isMobile ? 'mobile-widget' : ''}`}
      style={{
        ...position,
        transition: isDragging ? 'none' : 'all 0.2s ease-in-out'
      }}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out max-w-[350px] animate-fade-in relative">
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
              <div className={`elevenlabs-widget-container max-h-[500px] max-w-[350px] ${!isMobile ? 'pt-8' : ''}`}>
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
