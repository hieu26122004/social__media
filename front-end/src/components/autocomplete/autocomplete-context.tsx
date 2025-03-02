import React from "react";
import contextFactory from "@/helpers/context-factory";

export type AutocompleteContextValues = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  setHighlightedIndex: (index: number) => void;
  highlightedIndex: number;
};

export type AutocompleteProps = {
  children: React.ReactNode;
};

// eslint-disable-next-line react-refresh/only-export-components
export const [AutocompleteContext, useAutocompleteContext] =
  contextFactory<AutocompleteContextValues>();

export const AutocompleteContextProvider = ({
  children,
}: AutocompleteProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);

  return (
    <AutocompleteContext.Provider
      value={{
        highlightedIndex,
        isOpen,
        setIsOpen,
        setHighlightedIndex,
      }}
    >
      {children}
    </AutocompleteContext.Provider>
  );
};
