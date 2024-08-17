"use client";
import React, { useEffect, useState } from "react";
import DForm from "@/components/forms/DForm";
import DInput from "@/components/forms/DInput";
import { Button } from "@/components/ui/button";
import PhoneCodeSelect from "@/components/phoneCodeSelect/PhoneCodeSelect";
import DSelect from "../forms/DSelect";
import { useCountryContext } from "@/Context/CountryProvider";
import { CloudCog } from "lucide-react";

const PaymentInfo = () => {
  const { countries } = useCountryContext();
  const [code, setCode] = useState(null);

  const handleContactData = async (data: any) => {
  console.log(data);
  };
  const countryOptions = countries.map((cntry) => ({
    value: cntry?.name?.common,
    label: cntry?.name?.common,
  }));
  return (
    <div className="py-12 px-5 lg:px-0">
      <div className="mx-auto border border-t-8 border-t-primary p-12 rounded-md pb-16 shadow-md">
        <div className="mb-10">
          <h2 className="text-center text-4xl md:text-5xl text-primary w-full uppercase font-bold">
            Enter your details
          </h2>
          <p className="text-center mt-4 text-md md:text-lg">
            We only require key details about your item for now. A full
            consignment form will be sent if we proceed.
          </p>
        </div>
        <DForm onSubmit={handleContactData}>
          <div className="flex justify-center items-center gap-4">
            <DInput
              type="text"
              name="firstName"
              label="First name"
              placeholder="Your first name"
              className="w-full"
              required
            />
            <DInput
              type="text"
              name="lastName"
              label="Last name"
              className="w-full"
              placeholder="Your last name"
            />
          </div>

          <div className="lg:flex justify-center items-center gap-4">
            <PhoneCodeSelect
              fieldName="phoneCode"
              SearchMessage="Country"
              setCode={setCode}
            />
            <DInput
              type="text"
              name="mobileNumber"
              label="Mobile Number"
              placeholder="Enter Number"
              className={`w-full`}
              defaultValue={code}
              disabled={!code}
              required
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            <DInput
              type="text"
              name="billingAdress1"
              label="Billing Adress 1"
              className="w-full"
              required
            />
            <DInput
              type="text"
              name="billingAdress2"
              label="Billing Adress 2"
              className="w-full"
              required
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            <DInput
              type="text"
              name="town/city"
              label="Town /City"
              className="w-full"
              required
            />
            <DInput
              type="text"
              name="country/state"
              label="Country/State"
              className="w-full"
              required
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            <DInput
              type="text"
              name="postcode/zipcode"
              label="Postcode/Zipcode"
              className="w-full"
              required
            />
            <DSelect
              name="country"
              label="Select Your Country"
              options={countryOptions}
              className="w-full"
              required={true}
            />
          </div>
          <Button type="submit" className="text-white">
            Next
          </Button>
        </DForm>
      </div>
    </div>
  );
};

export default PaymentInfo;
