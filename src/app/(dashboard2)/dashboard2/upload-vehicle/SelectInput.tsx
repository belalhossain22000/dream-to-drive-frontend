import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FaCar } from "react-icons/fa";

type OptionsType = {
  name: string;
  id?: number;
};

type SelectInputProps = {
  name: string;
  label: string;
  icon?: ReactNode;
  options: OptionsType[];
};

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  label,
  icon,
  options,
}) => {
  const { control } = useFormContext(); // Get the control from useFormContext

  return (
    <div className="space-y-1">
      <label className="text-base font-semibold">{label}</label>
      <div className="relative text-text_color">
        {icon}
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select value={value} onValueChange={onChange}>
              <SelectTrigger className={`bg-white ${icon ? "pl-10" : ""}`}>
                <SelectValue placeholder={`Select ${label}`} />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  {options.map((option, idx) => (
                    <SelectItem
                      key={idx}
                      className="bg-white"
                      value={
                        option.id?.toString()
                          ? option.id?.toString()
                          : option.name
                      }
                    >
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>
    </div>
  );
};

export default SelectInput;
