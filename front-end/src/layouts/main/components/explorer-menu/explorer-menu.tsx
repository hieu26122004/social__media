import React from "react";
import { cn } from "@/lib/utils";
import { EXPLORER_ITEMS } from "../../constants";
import { Link } from "react-router-dom";
import { Button } from "@/components/common/button";
import { X } from "lucide-react";

type Props = {
  openExplorer: boolean;
  onCloseExplorer: () => void;
};

const ExplorerMenu: React.FC<Props> = ({ openExplorer, onCloseExplorer }) => {
  return (
    <nav
      className={cn(
        "bg-primary fixed inset-0 z-10 w-full transition-all duration-500 ease-in-out",
        openExplorer
          ? "translate-y-0 opacity-100" // Trạng thái hiển thị
          : "translate-y-full opacity-0" // Trạng thái ẩn
      )}
      aria-label="Explore menu"
      aria-hidden={!openExplorer}
    >
      <div className="max-w-[840px] mx-auto px-10">
        <header className="flex items-center justify-between gap-4 py-5">
          <h2 className="text-foreground-header text-xl font-bold">Explore</h2>
          <Button
            variant="ghost-muted"
            aria-label="Close explorer"
            onClick={onCloseExplorer}
          >
            <X aria-hidden="true" />
          </Button>
        </header>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 h-full overflow-y-auto">
          {EXPLORER_ITEMS.map((item) => (
            <ExplorerItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </nav>
  );
};

type ExplorerItemProps = {
  id: number;
  path: string;
  label: string;
  image: string;
};

const ExplorerItem: React.FC<ExplorerItemProps> = ({ path, label, image }) => {
  return (
    <div className="bg-transparent flex items-center justify-center rounded-md transition-colors hover:bg-muted md:p-5 p-1">
      <Link to={path} aria-label={`Navigate to ${label}`}>
        <img src={image} alt={label} className="size-[50px] object-contain" />
        <h4 className="mt-2 font-semibold text-sm capitalize text-center text-foreground">
          {label}
        </h4>
      </Link>
    </div>
  );
};

export default ExplorerMenu;
