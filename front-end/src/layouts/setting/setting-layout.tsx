import { cn } from "@/lib/utils";
import { HEADER_HEIGHT } from "@/constants/app.constants";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import useSidebar from "./hooks/use-sidebar";

const SettingLayout = () => {
  const { isOpen, closeSidebar, openSidebar, toggleSidebar } = useSidebar();

  return (
    <div className={cn("flex")}>
      {isOpen && <Sidebar />}
      <div
        className={cn(
          "flex-1 p-[30px]",
          `min-h-[calc(100vh-${HEADER_HEIGHT})]`
        )}
      >
        <Outlet context={{ closeSidebar, openSidebar, toggleSidebar }} />
      </div>
    </div>
  );
};

export default SettingLayout;
