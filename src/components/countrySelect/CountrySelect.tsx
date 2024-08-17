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
import { Input } from "../ui/input";
import { createContext } from "vm";

type Country = {
  flags: {
    svg: string;
  };
  name: {
    common: string;
  };
};

interface ComboboxProps {
  fieldName: string;
  SearchMessage?: string;
}
export function CountrySelect({ fieldName, SearchMessage }: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);

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

  return (
    <div className="overflow-hidden">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between bg-white focus:border-1 focus:border-green-500"
          >
            {value
              ? countries.find((country) => country.name.common === value)?.name
                  .common
              : "Select country..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-max-[320px] p-0 bg-white max-h-[240px] overflow-y-auto">
          <Command>
            <CommandInput
              placeholder={`Search ${SearchMessage ? SearchMessage : "item"}`}
            />
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              <CommandList>
                {countries.map((country) => (
                  <CommandItem
                    className="hover:bg-green-100 cursor-pointer flex items-center"
                    key={country.name.common}
                    value={country.name.common}
                    onSelect={(currentValue: any) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={country.flags.svg}
                        alt={country.name.common}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                      <span>{country.name.common}</span>
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
      {/* Hidden input field to store the selected country value */}
      <Input name={`${fieldName}`} type="hidden" value={value} />
    </div>
  );
}

export default CountrySelect;
