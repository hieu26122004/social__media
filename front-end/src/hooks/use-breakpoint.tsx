import React from "react";

export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

export const mapWindowSizeToBreakpoint = (windowSize: number): Breakpoint => {
  if (windowSize < 640) return "sm";
  if (windowSize >= 640 && windowSize < 768) return "md";
  if (windowSize >= 768 && windowSize < 1024) return "lg";
  if (windowSize >= 1024 && windowSize < 1280) return "xl";
  return "2xl";
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = React.useState<Breakpoint>(
    mapWindowSizeToBreakpoint(window.innerWidth)
  );

  const isLargeScreen = React.useMemo(
    () => ["lg", "xl", "2xl"].includes(breakpoint),
    [breakpoint]
  );

  const isSmallScreen = React.useMemo(
    () => ["sm", "md"].includes(breakpoint),
    [breakpoint]
  );

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setBreakpoint(mapWindowSizeToBreakpoint(width));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    breakpoint,
    isLargeScreen,
    isSmallScreen,
    setBreakpoint,
  };
};

export default useBreakpoint;
