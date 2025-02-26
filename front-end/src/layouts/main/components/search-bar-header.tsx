import React from "react";
import { Button } from "@/components/common/button";
import { X } from "lucide-react";
import InputHeader from "./input-header";

type Props = {
  onClose: () => void;
};

const SearchBarHeader: React.FC<Props> = (props) => {
  const { onClose } = props;

  return (
    <div className="w-full flex items-center gap-4 p-3">
      <InputHeader className="flex-1" />
      <Button
        variant="ghost-muted"
        size="icon"
        aria-label="Close search"
        onClick={onClose}
      >
        <span className="sr-only">Close</span>
        <X aria-hidden="true" />
      </Button>
    </div>
  );
};

export default SearchBarHeader;
