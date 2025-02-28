import React from "react";
import { cn } from "@/lib/utils";
import { HEADER_HEIGHT } from "@/constants/app.constants";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import ExplorerMenu from "./components/explorer-menu/explorer-menu";

const MainLayout = () => {
  const [openExplorer, setOpenExplorer] = React.useState(false);

  return (
    <div className="bg-background w-screen min-h-screen">
      <Header onOpenExplorer={() => setOpenExplorer(true)} />
      <main
        className={cn(
          "w-full",
          `mt-[56px] min-h-[calc(100vh-${HEADER_HEIGHT})]`
        )}
      >
        <Outlet />

        <ExplorerMenu
          openExplorer={openExplorer}
          onCloseExplorer={() => setOpenExplorer(false)}
        />
      </main>
    </div>
  );
};

export default MainLayout;
