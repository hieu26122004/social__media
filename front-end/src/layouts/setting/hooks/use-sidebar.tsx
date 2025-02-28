import useBreakpoint from "@/hooks/use-breakpoint";
import React from "react";

const useSidebar = () => {
  const { isSmallScreen, isLargeScreen } = useBreakpoint();
  const [isOpen, setIsOpen] = React.useState(false);

  const openSidebar = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeSidebar = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleSidebar = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  React.useEffect(() => {
    if (isSmallScreen) {
      setIsOpen(false);
    }
    if (isLargeScreen) {
      setIsOpen(true);
    }
  }, [isLargeScreen, isSmallScreen]);

  return {
    isOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };
};

export default useSidebar;
