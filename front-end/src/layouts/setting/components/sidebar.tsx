import { HEADER_HEIGHT } from "@/constants/app.constants";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/store/hook";
import { NAV_ITEMS } from "../constants";
import UserProfile from "./user-profile";
import { Divider, NavSection } from "./nav";

const Sidebar = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className={cn("w-64 lg:w-72 bg-primary")}>
      <aside
        className={cn(
          "fixed flex flex-col w-64 lg:w-72 bg-primary z-10",
          `inset-y-0 top-[${HEADER_HEIGHT}]`
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
      </aside>
    </div>
  );
};

export default Sidebar;
