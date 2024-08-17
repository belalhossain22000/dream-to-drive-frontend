import React, { useState } from "react";
import DForm from "@/components/forms/DForm";
import DInput from "@/components/forms/DInput";
import { Button } from "@/components/ui/button";
import PhoneCodeSelect from "@/components/phoneCodeSelect/PhoneCodeSelect";

const ContactInfo = ({ handleNext, setLoading }: any) => {
  const [code, setCode] = useState(null);

  const handleContactData = async (data: any) => {
    setLoading(true);
    try {
      localStorage.setItem("contactData", JSON.stringify(data));
      handleNext();
    } catch (error) {
      console.error("Error saving contact data:", error);
    } finally {
      setLoading(false);
    }
  };

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
        <DForm onSubmit={handleContactData} className="space-y-4">
          <DInput
            type="text"
            name="firstName"
            label="First name"
            placeholder="Your first name"
            required
          />
          <DInput
            type="text"
            name="lastName"
            label="Last name"
            placeholder="Your last name"
          />
          <DInput
            type="email"
            name="email"
            label="Email"
            placeholder="example@gmail.com"
            required
          />
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
          <div className="mt-8">
            <Button type="submit" className="text-white block">
              Next
            </Button>
          </div>
        </DForm>
      </div>
    </div>
  );
};

export default ContactInfo;
