import React from "react";
import NavigationHeader from "./navigation-header";
import LogoHeader from "./logo-header";
import UserActionsHeader from "./user-actions-header";
import SearchBarHeader from "./search-bar-header";

type Props = {
  onOpenExplorer: () => void;
};

const Header: React.FC<Props> = (props) => {
  const { onOpenExplorer } = props;

  const [isSearching, setIsSearching] = React.useState(false);

  const handleSearchChange = () => setIsSearching((prev) => !prev);

  return (
    <header className="w-full bg-primary-600 px-3 py-2">
      {!isSearching ? (
        <div className="mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <LogoHeader />
            {/* Navigation */}
            <NavigationHeader
              onToggleExplorer={onOpenExplorer}
              onSearchClick={handleSearchChange}
            />
            {/* User Actions */}
            <UserActionsHeader />
          </div>
        </div>
      ) : (
        <SearchBarHeader onClose={handleSearchChange} />
      )}
    </header>
  );
};

export default Header;
