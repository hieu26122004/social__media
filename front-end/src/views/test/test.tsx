import React from "react";
import {
  Autocomplete,
  AutocompleteInput,
  AutocompleteValues,
} from "@/components/autocomplete/autocomplete";
import { COUNTRIES } from "@/constants/country";

const Test = () => {
  const [inputValue, setInputValue] = React.useState<string>("");

  return (
    <Autocomplete>
      <AutocompleteInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <AutocompleteValues
        className=""
        suggestions={COUNTRIES}
        compareFn={(suggestion, inputValue) =>
          suggestion.name.toLowerCase().includes(inputValue.toLowerCase())
        }
        inputValue={inputValue}
        renderItem={(suggestion) => {
          return (
            <p>
              {suggestion.name} - {suggestion.code}
            </p>
          );
        }}
      />
    </Autocomplete>
  );
};

export default Test;
