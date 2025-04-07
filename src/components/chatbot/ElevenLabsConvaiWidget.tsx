
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { MessageCircle } from 'lucide-react';

// Create a custom event name for communication between widgets
const WIDGET_TOGGLE_EVENT = 'ath-widget-toggle';
const AGENT_ID = "jJMZr28UE8hDLsO00dmt";

const ElevenLabsConvaiWidget = () => {
  const { language, t } = useLanguage();
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetInitialized = useRef(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [repositioned, setRepositioned] = useState(false);

  // Initialize the widget when the component mounts
  useEffect(() => {
    if (window.ElevenLabsConvai && !widgetInitialized.current) {
      window.ElevenLabsConvai.init({
        language: language || 'it',
        usePublicAgents: true // Use public agents mode
      });
      widgetInitialized.current = true;
      console.log("ElevenLabs Convai widget initialized with language:", language);
    }
  }, [language]);

  // Update the language attribute when language changes
  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.setAttribute('language', language || 'it');
    }
  }, [language]);

  // Reset expanded state and position the widget properly when the route changes
  useEffect(() => {
    setExpanded(false);
    
    // Small delay to ensure DOM is fully loaded
    setTimeout(() => {
      positionWidgetInHeroSection();
      setRepositioned(true);
      
      // Reset repositioned state after animation completes
      setTimeout(() => {
        setRepositioned(false);
      }, 500);
    }, 300);
    
    // When route changes, dispatch an event to close other widgets
    const event = new CustomEvent(WIDGET_TOGGLE_EVENT, {
      detail: {
        widget: 'elevenlabs'
      }
    });
    window.dispatchEvent(event);
  }, [location.pathname]);

  // Position the widget in the bottom right corner of the hero section
  const positionWidgetInHeroSection = () => {
    if (!widgetRef.current) return;
    
    // Find the hero section on the current page
    const heroSection = document.querySelector(
      '.hero-image, [class*="Hero"], div[class*="hero"], .vimeo-container, ' + 
      'iframe[src*="vimeo"], iframe[src*="youtube"], video, ' +
      '[class*="StandardHeroVideo"], [class*="HeroVideo"]'
    );
    
    if (heroSection && widgetRef.current) {
      // Get hero section position and dimensions
      const heroRect = heroSection.getBoundingClientRect();
      
      // Position the widget at the bottom right of the hero
      const bottom = window.innerHeight - heroRect.bottom;
      const right = 20; // 20px from the right edge
      
      console.log('Hero section found:', { 
        bottom: bottom, 
        right: right,
        heroBottom: heroRect.bottom,
        windowHeight: window.innerHeight 
      });
      
      // Apply the positioning
      widgetRef.current.style.top = 'auto';
      widgetRef.current.style.left = 'auto';
      widgetRef.current.style.bottom = `${Math.max(bottom + 20, 80)}px`; // Ensure it's not too close to bottom navigation
      widgetRef.current.style.right = `${right}px`;
    } else {
      // Default positioning if hero not found
      console.log('No hero section found, using default positioning');
      if (widgetRef.current) {
        widgetRef.current.style.top = 'auto';
        widgetRef.current.style.left = 'auto';
        widgetRef.current.style.bottom = isMobile ? '80px' : '20px';
        widgetRef.current.style.right = '20px';
      }
    }
  };

  // Use MutationObserver to adjust widget position when DOM changes
  useEffect(() => {
    // Function to apply the position adjustment
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
        // Mobile adjustments
        if (widget instanceof HTMLElement) {
          widget.style.transform = 'translateY(-40px)';
        }
        
        // Try to find the wrapper in Light DOM
        let wrapper = findWrapper(document);
        
        // If not found, try Shadow DOM
        if (!wrapper && widget.shadowRoot) {
          wrapper = findWrapper(widget.shadowRoot);
        }
        
        if (wrapper) {
          wrapper.style.transform = 'translateY(-40px)';
          
          // Also set the bottom space to avoid overlapping with navigation
          const bottomNavHeight = 56; // Height of the bottom navigation
          const additionalPadding = 14; // Extra padding for better appearance
          wrapper.style.bottom = `${bottomNavHeight + additionalPadding}px`;
        }
      } else {
        // Desktop - reset transform
        if (widget instanceof HTMLElement) {
          widget.style.transform = '';
        }
        
        // Reset wrapper transform too
        let wrapper = findWrapper(document);
        if (!wrapper && widget.shadowRoot) {
          wrapper = findWrapper(widget.shadowRoot);
        }
        
        if (wrapper) {
          wrapper.style.transform = '';
          wrapper.style.bottom = '0px';
        }
      }
    };
    
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
    positionWidgetInHeroSection();
    
    // Clean up on component unmount
    return () => {
      if (cleanup) cleanup();
      window.removeEventListener('resize', adjustWidgetPosition);
    };
  }, [isMobile]);

  // Toggle expanded state
  const toggleExpanded = () => {
    setExpanded(!expanded);
    
    // When expanding this widget, dispatch an event to close other widgets
    if (!expanded) {
      const event = new CustomEvent(WIDGET_TOGGLE_EVENT, {
        detail: { widget: 'elevenlabs' }
      });
      window.dispatchEvent(event);
    }
  };
  
  return (
    <div 
      ref={widgetRef}
      className={`fixed z-50 transition-all duration-300 elevenlabs-widget ${repositioned ? 'repositioned' : ''}`}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out max-w-[350px]">
        {!expanded ? (
          <div 
            onClick={toggleExpanded}
            className="bg-ath-clay text-white rounded-full p-3 cursor-pointer shadow-lg hover:bg-opacity-90 transition-all duration-200"
          >
            <MessageCircle size={24} />
          </div>
        ) : (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="elevenlabs-widget-container max-h-[500px] max-w-[350px]">
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
        )}
      </div>
    </div>
  );
};

export default ElevenLabsConvaiWidget;
