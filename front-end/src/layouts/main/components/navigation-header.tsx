import React from "react";
import { NAV_ITEMS } from "../constants";
import { Search } from "lucide-react";
import { Button } from "@/components/common/button";

type Props = {
  onSearchClick: () => void;
  onToggleExplorer: () => void;
};

const NavigationHeader: React.FC<Props> = (props) => {
  const { onSearchClick, onToggleExplorer } = props;

  return (
    <nav aria-label="Main navigation" className="flex-grow">
      <ul className="flex items-center gap-2 p-0 list-none">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <Button
              variant={item.active ? "accent" : "ghost-accent"}
              size="icon"
              aria-label={item.label}
              className="hover:text-accent-foreground"
              onClick={item.label === "Explorer" ? onToggleExplorer : () => {}}
            >
              <item.icon aria-hidden="true" />
            </Button>
          </li>
        ))}
        <li className="lg:hidden">
          <Button
            variant="ghost-accent"
            size="icon"
            aria-label="Search"
            onClick={onSearchClick}
          >
            <Search aria-hidden="true" />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationHeader;
