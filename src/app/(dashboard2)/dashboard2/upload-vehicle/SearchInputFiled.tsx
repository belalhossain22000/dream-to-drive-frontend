import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { IoIosArrowDown, IoMdCheckmark } from "react-icons/io";
import { Controller, useFormContext } from "react-hook-form";
import { ReactNode, useState } from "react";

type CountrySelectProps = {
  name: string;
  label: string;
  options: string[]; // Assuming options is an array of objects with a name property
};

const SearchInputFiled: React.FC<CountrySelectProps> = ({
  name,
  label,
  options,
}) => {
  const { control } = useFormContext(); // Get the control from useFormContext
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-1">
      <Label className="text-lg font-bold">{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="bg-white w-full justify-between text-text_color"
              >
                {value ? value : `Select ${label}`}
                <IoIosArrowDown className="ml-2 h-4 w-4 shrink-0 opacity-50 text-text_color" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full bg-white p-0 shadow-md border text-text_color">
              <Command>
                <CommandInput
                  placeholder={`Search ${label}...`}
                  className="text-text_color font-light"
                />
                <CommandList>
                  <CommandEmpty>No {label} found.</CommandEmpty>
                  <CommandGroup>
                    {options.map((option, idx) => (
                      <CommandItem
                        className="text-text_color"
                        key={idx}
                        value={option}
                        onSelect={() => {
                          onChange(option);
                          setOpen(false);
                        }}
                      >
                        <IoMdCheckmark
                          className={`mr-2 h-4 w-4 ${
                            value === option ? "opacity-100" : "opacity-0"
                          }`}
                        />
                        {option}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        )}
      />
    </div>
  );
};

export default SearchInputFiled;
