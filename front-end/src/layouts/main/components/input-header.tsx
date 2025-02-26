import React from "react";
import { Input } from "@/components/common/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLInputElement>;

const InputHeader: React.FC<Props> = (props) => {
  const { className, ...rest } = props;

  return (
    <form className="relative isolate w-full" role="search">
      <label htmlFor="header-search" className="sr-only">
        Search
      </label>
      <Input
        id="header-search"
        type="text"
        placeholder="Search..."
        className={cn("pl-9 text-sm focus-visible:ring-0", className)}
        aria-label="Search input"
        {...rest}
      />
      <Search className="absolute left-2 top-2 size-5" aria-hidden="true" />
    </form>
  );
};

export default InputHeader;
