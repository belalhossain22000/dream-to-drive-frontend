"use client";

import React, { useState, useEffect } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CommandList } from "cmdk";
import Image from "next/image";

type Country = {
  flags: {
    svg: string;
  };
  name: {
    common: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
};

interface CountryComboboxProps {
  fieldName: string;
  SearchMessage?: string;
  setCode?: any;
  label?: string;
}

export function PhoneCodeSelect({
  fieldName,
  SearchMessage,
  label = "Select Country",
  setCode,
}: CountryComboboxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [inputValue, setInputValue] = useState("");
  setCode(inputValue);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,idd"
        );
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleSelect = (currentValue: string) => {
    const selectedCountry = countries.find(
      (country) => country.name.common === currentValue
    );
    if (selectedCountry) {
      const prefix = selectedCountry.idd.root;
      const suffix =
        selectedCountry.idd.suffixes.length > 0
          ? selectedCountry.idd.suffixes[0]
          : "";
      setInputValue(`${prefix}${suffix}`);
      setValue(currentValue);
      setOpen(false);
    }
  };

  return (
    <div className="overflow-hidden  w-full">
      <label htmlFor="country" className="mb-2 block">
        {label}
      </label>

      <Popover  open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between bg-white focus:border-1 focus:border-green-500"
          >
            <span className="truncate">
              {value
                ? countries.find((country) => country.name.common === value)
                    ?.name.common
                : "Select country..."}
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-max-[320px] p-0 bg-white max-h-[240px] overflow-y-auto">
          <Command>
            <CommandInput placeholder={`Search ${SearchMessage}`} />
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              <CommandList>
                {countries.map((country) => (
                  <CommandItem
                    className="hover:bg-green-100 cursor-pointer flex items-center"
                    key={country.name.common}
                    value={country.name.common}
                    onSelect={(currentValue) => handleSelect(currentValue)}
                  >
                    <div className="flex items-center gap-3 w-full">
                      <Image
                        src={country.flags.svg}
                        alt={country.name.common}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                      <span className="truncate flex-1">
                        {country.name.common}
                      </span>
                      {value === country.name.common && (
                        <Check className="ml-auto h-4 w-4" />
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandList>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default PhoneCodeSelect;
