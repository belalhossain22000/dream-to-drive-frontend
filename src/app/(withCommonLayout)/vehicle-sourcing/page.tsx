"use client";

import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsInfoCircle } from "react-icons/bs";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import DForm from "@/components/forms/DForm";
import DInput from "@/components/forms/DInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { vehicleSourcingSchema } from "./vehicleSourcingSchema";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { currencies } from "@/utils/currencies";
import DTextarea from "@/components/forms/DTextArea";
import PhoneCodeSelect from "@/components/phoneCodeSelect/PhoneCodeSelect";
import { useSendEmailMutation } from "@/redux/api/vehicleSourceApi";
import { toast } from "sonner";

const VehicleSourcing = () => {
  const [error, setError] = useState('')
  const [code, setCode] = useState<string | null>(null);
  const [currency, setCurrency] = useState(currencies[0].prefix);
  const [sendEmail, { isLoading }] = useSendEmailMutation();
  const handleSubmit = async (data: any) => {
    setError('');
    try {
      const formData = { ...data, currency };
      const res = await sendEmail(formData);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      console.log(res);
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <section className="py-14">
      <div className="container">
        <div className="max-w-[672px] mx-auto">
          <div>
            <h1 className="lg:text-[44px] text-3xl uppercase font-bold">
              What can we help you find?
            </h1>
            <p className="my-4">
              We are here to help you find a vehicle to your specifications that
              we may not currently have listed on the platform.
            </p>
          </div>
          <div className="mt-14">
            <div className="bg-neutral-100 p-6 flex justify-between">
              <p className="font-semibold">Your details</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <BsInfoCircle className="text-green-500 text-xl" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-white max-w-[200px]">
                    <p>
                      If you would like to correct or update your name or email
                      address please do so in your Account.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="my-6">* Required information</p>
            <DForm
              resolver={zodResolver(vehicleSourcingSchema)}
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-3">
                <div className="lg:col-span-6 col-span-1">
                  <div>
                    <div className="lg:flex justify-center items-start gap-4">
                      <PhoneCodeSelect
                        fieldName="phoneCode"
                        SearchMessage="Country"
                        setCode={setCode}
                      />
                      <DInput
                        type="text"
                        name="phone"
                        label="Mobile Number"
                        placeholder="Enter Number"
                        className="lg:w-[205px] w-full lg:mt-0 mt-4"
                        defaultValue={code ?? ""}
                        disabled={!code}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 col-span-1">
                  <Label
                    htmlFor="model"
                    className="mt-[0.6rem] mb-2 inline-block"
                  >
                    Model *
                  </Label>
                  <DInput
                    type="text"
                    name="model"
                    placeholder="Enter the vehicle model"
                  />
                </div>
                <div className="lg:col-span-6 col-span-1">
                  <Label htmlFor="email" className="mb-2 inline-block">
                    Email
                  </Label>
                  <DInput type="email" name="email" placeholder="Your Email" />
                </div>
                <div className="lg:col-span-6 col-span-1">
                  <Label htmlFor="manufacturer" className="mb-2 inline-block">
                    Manufacturer *
                  </Label>
                  <DInput
                    type="text"
                    name="manufacturer"
                    placeholder="Manufacturer Name"
                  />
                </div>
                <div className="lg:col-span-12 col-span-1">
                  <Label htmlFor="preferredYear" className="mb-2 inline-block">
                    Preferred year (optional)
                  </Label>
                  <DInput
                    type="text"
                    name="preferredYear"
                    placeholder="Enter preferred year"
                  />
                </div>
                <div className="lg:col-span-12 col-span-1">
                  <Label htmlFor="maximumBudget" className="mb-2 inline-block">
                    Maximum Budget
                  </Label>
                  <div className="flex items-center gap-3 ">
                    <div className="w-[30%]">
                      <Select value={currency} onValueChange={setCurrency}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder={currency} />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {currencies.map((currency) => (
                            <SelectItem
                              key={currency.id}
                              value={currency.prefix}
                              className="cursor-pointer hover:bg-green-100"
                            >
                              {currency.prefix} ({currency.suffix})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1">
                      <DInput
                        type="text"
                        name="maximumBudget"
                        placeholder="Maximum budget"


                      />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-12 col-span-1">
                  <Label htmlFor="message" className="mb-3 inline-block">
                    Any further information
                  </Label>
                  <DTextarea
                    name="message"
                    placeholder="Enter any additional information"
                    className="block w-full"
                  />
                </div>
                <Button
                  disabled={isLoading}
                  className="text-white lg:col-span-4 col-span-1 py-6"
                  type="submit"
                >
                  {isLoading ? "Loading..." : "Submit"}
                </Button>
              </div>
            </DForm>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleSourcing;
