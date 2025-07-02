import * as React from "react"

// Define multiple breakpoints for more precise control
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(window.innerWidth < BREAKPOINTS.md)

  React.useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < BREAKPOINTS.md
      console.log('🔍 Mobile Detection:', {
        windowWidth: window.innerWidth,
        breakpoint: BREAKPOINTS.md,
        isMobile: newIsMobile,
        previousState: isMobile
      })
      setIsMobile(newIsMobile)
    }
    
    // Log initial state
    console.log('🔍 Initial Mobile Detection:', {
      windowWidth: window.innerWidth,
      breakpoint: BREAKPOINTS.md,
      isMobile: window.innerWidth < BREAKPOINTS.md
    })
    
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isMobile
}

// Additional hook for more precise breakpoint control
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = React.useState<"xs" | "sm" | "md" | "lg" | "xl">("md")

  React.useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth
      if (width < BREAKPOINTS.sm) {
        setBreakpoint("xs")
      } else if (width < BREAKPOINTS.md) {
        setBreakpoint("sm")
      } else if (width < BREAKPOINTS.lg) {
        setBreakpoint("md")
      } else if (width < BREAKPOINTS.xl) {
        setBreakpoint("lg")
      } else {
        setBreakpoint("xl")
      }
    }
    
    window.addEventListener("resize", checkBreakpoint)
    checkBreakpoint()
    
    return () => window.removeEventListener("resize", checkBreakpoint)
  }, [])

  return breakpoint
}

// Helper to quickly check if screen is smaller than a specific breakpoint
export function useIsSmallerThan(breakpoint: keyof typeof BREAKPOINTS) {
  const [isSmaller, setIsSmaller] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS[breakpoint] - 1}px)`)
    const onChange = () => {
      setIsSmaller(window.innerWidth < BREAKPOINTS[breakpoint])
    }
    mql.addEventListener("change", onChange)
    setIsSmaller(window.innerWidth < BREAKPOINTS[breakpoint])
    return () => mql.removeEventListener("change", onChange)
  }, [breakpoint])

  return !!isSmaller
}
