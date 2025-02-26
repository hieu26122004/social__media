import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import ExplorerMenu from "./components/explorer-menu/explorer-menu";

const MainLayout = () => {
  const [openExplorer, setOpenExplorer] = React.useState(false);

  return (
    <div className="w-screen min-h-screen">
      <Header onOpenExplorer={() => setOpenExplorer(true)} />
      <main className="w-full min-h-[calc(100vh-56px)]">
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
