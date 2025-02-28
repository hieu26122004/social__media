import { cn } from "@/lib/utils";
import { HEADER_HEIGHT } from "@/constants/app.constants";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import useSidebar from "./hooks/use-sidebar";

const SettingLayout = () => {
  const { isOpen, closeSidebar, openSidebar, toggleSidebar } = useSidebar();

  return (
    <div className={cn("flex bg-background")}>
      <Sidebar onClose={closeSidebar} sidebarOpen={isOpen} />
      <div
        className={cn(
          "bg-background flex-1 p-[30px] lg:ml-72 md:ml-64 ml-0",
          `min-h-[calc(100vh-${HEADER_HEIGHT})]`
        )}
      >
        <Outlet context={{ closeSidebar, openSidebar, toggleSidebar }} />
      </div>
    </div>
  );
};

export default SettingLayout;
