import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  Icon?: LucideIcon;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
  const { id, label, Icon, className, ...rest } = props;

  return (
    <div className="bg-[#242d3c] dark:bg-primary border rounded group">
      <label htmlFor={id} className="text-[0.7rem] font-normal uppercase ml-2">
        {label}
      </label>
      <div className="flex items-center gap-2 ml-4 mr-2">
        {Icon && (
          <Icon
            className={cn(
              "flex-shrink-0 size-4 stroke-foreground-header transition-colors duration-300",
              "group-focus-within:stroke-accent"
            )}
            aria-hidden="true"
          />
        )}
        <input
          id={id}
          className={cn(
            "bg-transparent flex-1 h-9 text-sm text-foreground-header border-none outline-none",
            className
          )}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
