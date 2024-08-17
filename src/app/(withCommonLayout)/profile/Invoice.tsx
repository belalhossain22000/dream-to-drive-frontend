import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CountrySelect from "@/components/countrySelect/CountrySelect";
import PhoneCodeSelect from "@/components/phoneCodeSelect/PhoneCodeSelect";

const Invoice = () => {
  return (
    <form className="grid grid-cols-1 lg:grid-cols-12 gap-x-3 gap-y-5">
      <div className="lg:col-span-12 col-span-1">
        <Label htmlFor="companyName" className="mb-2 inline-block">
          Company Name
        </Label>
        <Input
          type="text"
          className="border border-slate-200 focus-visible:border-green-500 focus-visible:ring-0 block w-full px-4 py-2"
          name="companyName"
          id="companyName"
          required
        />
      </div>
      <div className="lg:col-span-6 col-span-1">
        <Label htmlFor="addressLine1" className="mb-2 inline-block">
          Address Line 1
        </Label>
        <Input
          type="text"
          className="border border-slate-200 focus-visible:border-green-500 focus-visible:ring-0 block w-full px-4 py-2"
          name="addressLine1"
          id="addressLine1"
          required
        />
      </div>
      <div className="lg:col-span-6 col-span-1">
        <Label htmlFor="addressLine2" className="mb-2 inline-block">
          Address Line 2
        </Label>
        <Input
          type="text"
          className="border border-slate-200 focus-visible:border-green-500 focus-visible:ring-0 block w-full px-4 py-2"
          name="addressLine2"
          id="addressLine2"
          required
        />
      </div>
      <div className="lg:col-span-2 col-span-1">
        <Label htmlFor="phoneCode" className="mb-2 inline-block">
          Country Code
        </Label>
        <PhoneCodeSelect fieldName="phoneCode" SearchMessage="Country" />
      </div>
      <div className="lg:col-span-4 col-span-1">
        <Label htmlFor="phone" className="mb-2 inline-block">
          Mobile Number
        </Label>
        <Input
          type="text"
          className="border border-slate-200 focus-visible:border-green-500 focus-visible:ring-0 block w-full px-4 py-2"
          name="phone"
          id="phone"
          required
        />
      </div>
      <div className="lg:col-span-6 col-span-1">
        <Label htmlFor="country" className="mb-2 inline-block">
          Country
        </Label>
        <CountrySelect fieldName="country" />
      </div>
      <div className="lg:col-span-4 col-span-1">
        <Label htmlFor="city" className="mb-2 inline-block">
          Town / City
        </Label>
        <Input
          type="text"
          className="border border-slate-200 focus-visible:border-green-500 focus-visible:ring-0 block w-full px-4 py-2"
          name="city"
          id="city"
          required
        />
      </div>
      <div className="lg:col-span-4 col-span-1">
        <Label htmlFor="state" className="mb-2 inline-block">
          State
        </Label>
        <Input
          type="text"
          className="border border-slate-200 focus-visible:border-green-500 focus-visible:ring-0 block w-full px-4 py-2"
          name="state"
          id="state"
          required
        />
      </div>
      <div className="lg:col-span-4 col-span-1">
        <Label htmlFor="postCode" className="mb-2 inline-block">
          Post Code / Zip Code
        </Label>
        <Input
          type="text"
          className="border border-slate-200 focus-visible:border-green-500 focus-visible:ring-0 block w-full px-4 py-2"
          name="postCode"
          id="postCode"
          required
        />
      </div>
      <Button
        className="text-white lg:col-span-4 col-span-1 py-6"
        type="submit"
      >
        Add Card
      </Button>
    </form>
  );
};

export default Invoice;
