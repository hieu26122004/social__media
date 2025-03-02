import React from "react";
import Input from "./input";
import { Check, Globe } from "lucide-react";
import { COUNTRIES, Country } from "@/constants/country";

type Props = {
  value: string;
  onCountryChange: (value: string) => void;
};

const SelectCountry: React.FC<Props> = ({ value, onCountryChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [selectedCountry, setSelectedCountry] = React.useState("");

  const countriesFiltered = selectedCountry
    ? COUNTRIES.filter((country) =>
        country.name.toLowerCase().includes(selectedCountry.toLowerCase())
      )
    : COUNTRIES;

  const handleCountrySelect = (country: Country) => {
    setIsOpen(false);
    onCountryChange(country.code);
    setSelectedCountry(country.name);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative isolate z-10" ref={containerRef}>
      <Input
        type="text"
        label="Country"
        name="country"
        Icon={Globe}
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        onFocus={() => setIsOpen(true)}
      />
      {isOpen && (
        <ul
          id="country-list"
          className="absolute inset-x-0 bg-secondary dark:bg-primary mt-4 p-2 border rounded-lg shadow max-h-[300px] overflow-y-auto"
        >
          {countriesFiltered.map((country) => (
            <li
              key={country.code}
              onClick={() => handleCountrySelect(country)}
              className="flex items-center gap-2 py-2 px-4 rounded-md cursor-pointer transition-colors hover:bg-muted"
            >
              <img
                className="size-6 flex-shrink-0"
                src={country.flag}
                alt={country.name}
              />
              <span className="text-sm flex-shrink-0 transition-colors hover:text-foreground-header">
                {country.name}
              </span>
              {country.code === value && (
                <span className="flex-grow flex items-center justify-end">
                  <Check className="size-4" aria-hidden="true" />
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectCountry;
