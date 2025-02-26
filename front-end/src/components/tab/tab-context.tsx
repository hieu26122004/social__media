import contextFactory from "@/helpers/context-factory";
import useTab from "./hooks/use-tab";

export type TabsContextValues = {
  currentTab: string;
  onChangeTab: (tab: string) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const [TabsContext, useTabsContext] =
  contextFactory<TabsContextValues>();

type TabsContextProps = { children: React.ReactNode; defaultTab: string };

const TabsContextProvider = (props: TabsContextProps) => {
  const { children, defaultTab } = props;
  const { changeTab, currentTab } = useTab(defaultTab);
  return (
    <TabsContext.Provider
      value={{ currentTab: currentTab, onChangeTab: changeTab }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export default TabsContextProvider;
