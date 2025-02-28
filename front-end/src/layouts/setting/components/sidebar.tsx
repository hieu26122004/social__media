import React from "react";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/store/hook";
import { NAV_ITEMS } from "../constants";
import UserProfile from "./user-profile";
import { Divider, NavSection } from "./nav";
import { Button } from "@/components/common/button";
import { X } from "lucide-react";

type Props = {
  sidebarOpen: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<Props> = (props) => {
  const { onClose, sidebarOpen } = props;
  const { user } = useAppSelector((state) => state.user);

  return (
    <aside
      className={cn(
        "fixed flex flex-col w-64 lg:w-72 bg-primary z-10 border-t transition-all duration-300",
        `top-[56px] bottom-0 left-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`
      )}
    >
      <UserProfile user={user!} />
      <nav className="flex-1 overflow-y-auto">
        <NavSection items={NAV_ITEMS.slice(0, 3)} />
        <Divider />
        <NavSection items={NAV_ITEMS.slice(3, 5)} />
        <Divider />
        <NavSection items={NAV_ITEMS.slice(5)} />
      </nav>
      <Button
        variant="ghost-muted"
        aria-label="Close sidebar"
        className="md:hidden absolute top-2 right-2"
        onClick={onClose}
      >
        <X aria-hidden="true" />
      </Button>
    </aside>
  );
};

export default Sidebar;
