import React from "react";
import { Input } from "@/components/common/input";
import { Filter } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLInputElement>;

const FilterInput: React.FC<Props> = (props) => {
  const { className, ...rest } = props;

  return (
    <form className="relative isolate" role="search">
      <label htmlFor="header-search" className="sr-only">
        Search
      </label>
      <Input
        id="filter input"
        type="text"
        placeholder="Search..."
        className={cn("pr-9 text-sm focus-visible:ring-0", className)}
        aria-label="Search input"
        {...rest}
      />
      <Filter className="absolute right-2 top-2 size-5" aria-hidden="true" />
    </form>
  );
};

export default FilterInput;
