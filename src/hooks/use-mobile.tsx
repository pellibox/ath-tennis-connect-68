
import * as React from "react"

// Define multiple breakpoints for more precise control
const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS.md - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < BREAKPOINTS.md)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < BREAKPOINTS.md)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
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
