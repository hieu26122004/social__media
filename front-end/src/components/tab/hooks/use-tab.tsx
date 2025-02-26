import React from "react";

const useTab = (defaultTab: string) => {
  const [currentTab, setCurrentTab] = React.useState(defaultTab);
  const changeTab = React.useCallback((tab: string) => setCurrentTab(tab), []);
  return {
    currentTab,
    changeTab,
  };
};

export default useTab;
