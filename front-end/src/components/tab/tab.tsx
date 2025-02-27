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
        <div
          ref={ref}
          {...rest}
          className={cn("bg-transparent text-sm", className)}
        ></div>
      </TabsContextProvider>
    );
  }
);

Tabs.displayName = "Tabs";

type TabsListProps = React.HTMLAttributes<HTMLDivElement>;

export const TabsList: React.FC<TabsListProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <div
      id="TabsList"
      {...rest}
      className={cn(
        "h-full inline-flex items-center justify-center rounded-lg text-foreground",
        className
      )}
    />
  );
};

type TabsItemProps = {
  value: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const TabsItem: React.FC<TabsItemProps> = (props) => {
  const { value, className, children, ...rest } = props;
  const { currentTab, onChangeTab } = useTabsContext();

  const isActive = currentTab === value;

  return (
    <div
      {...rest}
      className={cn(
        "flex-1 cursor-pointer h-full inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-normal",
        isActive
          ? "text-foreground-header border-b-[3px] border-accent font-medium"
          : "text-foreground opacity-80",
        className
      )}
      onClick={() => onChangeTab(value)}
    >
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
    <div {...rest} className={cn("mt-2", className)}>
      {children}
    </div>
  ) : null;
};

export default Tabs;
