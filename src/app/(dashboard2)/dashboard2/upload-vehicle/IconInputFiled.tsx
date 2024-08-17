import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React, { ReactNode } from "react";

import { Controller, useFormContext } from "react-hook-form";

type IconInputFiledProps = {
  name: string;
  label: string;
  icon: ReactNode;
};

const IconInputFiled: React.FC<IconInputFiledProps> = ({
  name,
  label,
  icon,
}) => {
  const { control } = useFormContext();
  return (
    <div className="space-y-1">
      <Label className="text-base font-semibold">{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="flex items-center relative text-text_color">
            {icon}
            <Input
              {...field}
              name="color"
              className="z-20 pl-10 text-base relative"
              type="text"
              placeholder={`Add ${label}`}
            />
          </div>
        )}
      />
    </div>
  );
};

export default IconInputFiled;
