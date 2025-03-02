import { cn } from "@/lib/utils";
import React from "react";
import {
  AutocompleteContextProvider,
  useAutocompleteContext,
} from "./autocomplete-context";
import { Input } from "../common/input";

type AutocompleteProps = React.HTMLAttributes<HTMLDivElement>;

export const Autocomplete = React.forwardRef<HTMLDivElement, AutocompleteProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    return (
      <AutocompleteContextProvider>
        <div
          ref={ref}
          className={cn(className, "relative isolate")}
          {...rest}
        ></div>
      </AutocompleteContextProvider>
    );
  }
);

Autocomplete.displayName = "Autocomplete";

type AutocompleteInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const AutocompleteInput = React.forwardRef<
  HTMLInputElement,
  AutocompleteInputProps
>((props, ref) => {
  const { className, ...rest } = props;

  const { setIsOpen } = useAutocompleteContext();

  return (
    <Input
      ref={ref}
      className={cn(className)}
      onFocus={() => setIsOpen(true)}
      {...rest}
    />
  );
});

AutocompleteInput.displayName = "AutocompleteInput";

type AutocompleteValuesProps<T> = {
  suggestions: T[];
  renderItem: (
    suggestion: T,
    highlightedIndex: number,
    setHighlightedIndex: () => void
  ) => React.ReactNode;
  compareFn: (suggestion: T, inputValue: string) => boolean;
  inputValue: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const AutocompleteValues = <T,>(props: AutocompleteValuesProps<T>) => {
  const { className, compareFn, renderItem, suggestions, inputValue, ...rest } =
    props;

  const { highlightedIndex, setHighlightedIndex, setIsOpen, isOpen } =
    useAutocompleteContext();
  const filteredSuggestions =
    inputValue === ""
      ? suggestions
      : suggestions.filter((suggestion) => compareFn(suggestion, inputValue));

  console.log("filteredSuggestions", filteredSuggestions);

  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      className={cn(
        className,
        "absolute inset-x-0 w-72 rounded-md border p-4 mt-4 shadow-md max-h-[300px] overflow-y-auto"
      )}
      {...rest}
    >
      {filteredSuggestions.map((suggestion, index) =>
        renderItem(suggestion, highlightedIndex, () =>
          setHighlightedIndex(index)
        )
      )}
    </div>
  );
};

AutocompleteValues.displayName = "AutocompleteValues";
