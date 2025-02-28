import { Menu } from "lucide-react";
import { useOutletContext } from "react-router-dom";

const General = () => {
  const { closeSidebar, openSidebar, toggleSidebar } = useOutletContext<{
    closeSidebar: () => void;
    openSidebar: () => void;
    toggleSidebar: () => void;
  }>();

  return (
    <article className="p-[30px] bg-primary rounded">
      <header className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="size-8 inline-flex items-center justify-center"
          aria-label="Open sidebar"
        >
          <Menu />
        </button>
        <h2 className="font-montserrat text-foreground-header text-xl">
          General Settings
        </h2>
      </header>
    </article>
  );
};

export default General;
