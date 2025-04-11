import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { GripVertical } from 'lucide-react';

const WIDGET_TOGGLE_EVENT = 'ath-widget-toggle';
const AGENT_ID = "jJMZr28UE8hDLsO00dmt";

const WIDGET_POSITION_KEY = 'ath-elevenlabs-widget-position';
const WIDGET_EXPANDED_KEY = 'ath-elevenlabs-widget-expanded';

const DEFAULT_MOBILE_POSITION = {
  top: '20px',
  left: '20px',
  bottom: 'auto',
  right: 'auto'
};
const DEFAULT_DESKTOP_POSITION = {
  top: '20px',
  left: '20px',
  bottom: 'auto',
  right: 'auto'
};

const ElevenLabsConvaiWidget = () => {
  const {
    language,
    t
  } = useLanguage();
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetInitialized = useRef(false);
  const isMobile = useIsMobile();
  const positionInitialized = useRef(false);
  const [isExpanded, setIsExpanded] = useState(() => {
    try {
      const savedState = localStorage.getItem(WIDGET_EXPANDED_KEY);
      return savedState ? JSON.parse(savedState) : false;
    } catch (e) {
      return false;
    }
  });

  const [position, setPosition] = useState(() => {
    try {
      const savedPosition = localStorage.getItem(WIDGET_POSITION_KEY);
      return savedPosition ? JSON.parse(savedPosition) : isMobile ? DEFAULT_MOBILE_POSITION : DEFAULT_DESKTOP_POSITION;
    } catch (e) {
      return isMobile ? DEFAULT_MOBILE_POSITION : DEFAULT_DESKTOP_POSITION;
    }
  });

  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({
    x: 0,
    y: 0
  });
  const widgetStartPos = useRef({
    top: 0,
    left: 0
  });

  useEffect(() => {
    try {
      localStorage.setItem(WIDGET_EXPANDED_KEY, JSON.stringify(isExpanded));
    } catch (e) {
      console.error("Failed to save widget expanded state to localStorage", e);
    }
  }, [isExpanded]);

  useEffect(() => {
    if (!positionInitialized.current && !isDragging) {
      setPosition(isMobile ? DEFAULT_MOBILE_POSITION : DEFAULT_DESKTOP_POSITION);
      positionInitialized.current = true;

      try {
        localStorage.setItem(WIDGET_POSITION_KEY, JSON.stringify(isMobile ? DEFAULT_MOBILE_POSITION : DEFAULT_DESKTOP_POSITION));
      } catch (e) {
        console.error("Failed to save widget position to localStorage", e);
      }
    }
  }, [isMobile, isDragging]);

  useEffect(() => {
    try {
      localStorage.setItem(WIDGET_POSITION_KEY, JSON.stringify(position));
    } catch (e) {
      console.error("Failed to save widget position to localStorage", e);
    }
  }, [position]);

  useEffect(() => {
    if (window.ElevenLabsConvai && !widgetInitialized.current) {
      window.ElevenLabsConvai.init({
        language: language || 'it',
        usePublicAgents: true
      });
      widgetInitialized.current = true;
      console.log("ElevenLabs Convai widget initialized with language:", language);

      const event = new CustomEvent(WIDGET_TOGGLE_EVENT, {
        detail: {
          widget: 'elevenlabs'
        }
      });
      window.dispatchEvent(event);
    }
  }, [language]);

  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.setAttribute('language', language || 'it');
    }
  }, [language]);

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  };

  useEffect(() => {
    const adjustWidgetPosition = () => {
      const widget = document.querySelector('elevenlabs-convai');
      if (!widget) return;

      const findWrapper = (root: Document | ShadowRoot): HTMLElement | null => {
        const element = root.querySelector('div[class*="_wrapper_"]') || root.querySelector('div.widget-container') || root.querySelector('div.convai-container') || root.querySelector('div');

        return element as HTMLElement | null;
      };

      if (window.innerWidth < 768) {
        if (widget instanceof HTMLElement) {
          widget.style.transform = 'translateY(-70px)';
        }

        let wrapper = findWrapper(document);
        if (!wrapper && widget.shadowRoot) {
          wrapper = findWrapper(widget.shadowRoot);
        }
        if (wrapper) {
          wrapper.style.transform = 'translateY(-70px)';
          const bottomNavHeight = 56;
          const additionalPadding = 14;
          wrapper.style.bottom = `${bottomNavHeight + additionalPadding}px`;
        }
      } else {
        if (widget instanceof HTMLElement) {
          widget.style.transform = '';
        }

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

    const setupObserver = () => {
      const widget = document.querySelector('elevenlabs-convai');
      if (!widget) {
        setTimeout(setupObserver, 500);
        return;
      }

      adjustWidgetPosition();

      const observer = new MutationObserver(() => {
        adjustWidgetPosition();
      });

      observer.observe(widget, {
        attributes: true,
        childList: true,
        subtree: true
      });

      const bodyObserver = new MutationObserver(() => {
        adjustWidgetPosition();
      });
      bodyObserver.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => {
        observer.disconnect();
        bodyObserver.disconnect();
      };
    };

    const cleanup = setupObserver();

    window.addEventListener('resize', adjustWidgetPosition);

    return () => {
      if (cleanup) cleanup();
      window.removeEventListener('resize', adjustWidgetPosition);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!widgetRef.current) return;
    e.preventDefault();
    setIsDragging(true);

    dragStartPos.current = {
      x: e.clientX,
      y: e.clientY
    };
    const rect = widgetRef.current.getBoundingClientRect();
    widgetStartPos.current = {
      top: rect.top,
      left: rect.left
    };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!widgetRef.current || e.touches.length !== 1) return;
    e.preventDefault();
    setIsDragging(true);

    const touch = e.touches[0];
    dragStartPos.current = {
      x: touch.clientX,
      y: touch.clientY
    };
    const rect = widgetRef.current.getBoundingClientRect();
    widgetStartPos.current = {
      top: rect.top,
      left: rect.left
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !widgetRef.current) return;

    const deltaX = e.clientX - dragStartPos.current.x;
    const deltaY = e.clientY - dragStartPos.current.y;
    const newLeft = widgetStartPos.current.left + deltaX;
    const newTop = widgetStartPos.current.top + deltaY;

    const maxX = window.innerWidth - widgetRef.current.offsetWidth;
    const maxY = window.innerHeight - widgetRef.current.offsetHeight;
    const boundedLeft = Math.max(0, Math.min(newLeft, maxX));
    const boundedTop = Math.max(0, Math.min(newTop, maxY));

    setPosition({
      top: `${boundedTop}px`,
      left: `${boundedLeft}px`,
      bottom: 'auto',
      right: 'auto'
    });
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !widgetRef.current || e.touches.length !== 1) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - dragStartPos.current.x;
    const deltaY = touch.clientY - dragStartPos.current.y;
    const newLeft = widgetStartPos.current.left + deltaX;
    const newTop = widgetStartPos.current.top + deltaY;

    const maxX = window.innerWidth - widgetRef.current.offsetWidth;
    const maxY = window.innerHeight - widgetRef.current.offsetHeight;
    const boundedLeft = Math.max(0, Math.min(newLeft, maxX));
    const boundedTop = Math.max(0, Math.min(newTop, maxY));

    setPosition({
      top: `${boundedTop}px`,
      left: `${boundedLeft}px`,
      bottom: 'auto',
      right: 'auto'
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleDragEnd);

      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleDragEnd);
      document.addEventListener('touchcancel', handleDragEnd);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleDragEnd);
      document.removeEventListener('touchcancel', handleDragEnd);
    };
  }, [isDragging]);

  return <div ref={widgetRef} className="fixed z-50" style={{
    ...position,
    transition: isDragging ? 'none' : 'all 0.2s ease-in-out'
  }}>
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out max-w-[350px] animate-fade-in relative">
      <div 
        className="absolute top-0 left-0 w-full h-8 bg-ath-clay flex items-center justify-center cursor-move z-[999]" 
        onMouseDown={handleMouseDown} 
        onTouchStart={handleTouchStart}
        onClick={toggleExpanded}
      >
        <GripVertical size={18} className="text-white" />
        <span className="text-white text-xs ml-1">{isExpanded ? 'Chiudi' : 'Trascina'}</span>
      </div>
      
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className={`elevenlabs-widget-container max-w-[350px] pt-8 ${isExpanded ? 'max-h-[500px]' : 'max-h-[80px] overflow-hidden'}`}>
              <elevenlabs-convai agent-id={AGENT_ID} language={language || 'it'} className="py-0 my-[240px]"></elevenlabs-convai>
            </div>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>{t('chatbot.askCoach')}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>;
};

export default ElevenLabsConvaiWidget;
