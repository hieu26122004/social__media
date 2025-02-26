import React from "react";
import TabsContextProvider, { useTabsContext } from "./tab-context";
import { cn } from "@/lib/utils";

type TabsProps = {
  defaultTab: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ defaultTab, className, ...rest }, ref) => {
    return (
      <TabsContextProvider defaultTab={defaultTab}>
        <div ref={ref} {...rest} className={cn(className)}></div>
      </TabsContextProvider>
    );
  }
);

Tabs.displayName = "Tabs";

type TabsListProps = React.HTMLAttributes<HTMLDivElement>;

export const TabsList: React.FC<TabsListProps> = (props) => {
  const { className, ...rest } = props;
  return <div {...rest} className={cn(className)} />;
};

type TabsItemProps = {
  value: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const TabsItem: React.FC<TabsItemProps> = (props) => {
  const { value, className, children, ...rest } = props;
  const { currentTab, onChangeTab } = useTabsContext();

  return (
    <div {...rest} className={cn(className)} onClick={() => onChangeTab(value)}>
      {children}
    </div>
  );
};

type TabContentProps = {
  value: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const TabContent: React.FC<TabContentProps> = (props) => {
  const { value, children, className, ...rest } = props;
  const { currentTab } = useTabsContext();

  return currentTab === value ? (
    <div {...rest} className={cn(className)}>
      {children}
    </div>
  ) : null;
};

export default Tabs;
