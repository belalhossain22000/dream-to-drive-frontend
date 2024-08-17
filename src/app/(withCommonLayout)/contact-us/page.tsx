"use client";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaMapLocationDot, FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";
import { SlEnvolope } from "react-icons/sl";

import Link from "next/link";
import PaymentInfo from "@/components/paymentInfo/paymentInfo";
import DForm from "@/components/forms/DForm";
import DInput from "@/components/forms/DInput";
import DTextarea from "@/components/forms/DTextArea";
import SelectInput from "@/app/(dashboard2)/dashboard2/upload-vehicle/SelectInput";

const handleSubmitContactForm = (data: any) => {};

const ContactUs = () => {
  return (
    <section className="py-20 max-w-3xl w-full mx-auto px-5 sm:px-10">
      <h2 className="font-ralway text-3xl sm:text-5xl font-bold uppercase">
        Contact Us
      </h2>
      <div className="flex flex-col justify-center text-center pb-5 pt-8">
        <h3 className="text-2xl font-bold mb-3">
          Still unsure about something?
        </h3>
        <p className=" w-full sm:w-3/4 mx-auto">
          Reach out and get assistance from one of our experts. We are here to
          assist you with any queries you may have.
        </p>
      </div>
      <div className="  grid grid-cols-1   text-text_color gap-10">
        <div className=" ">
          <DForm onSubmit={handleSubmitContactForm} className="space-y-5">
            <DInput label="First Name" name="firstName" />
            <DInput label="Last Name" name="lastName" />
            <DInput label="Email" name="email" type="email" />
            <DInput label="Phone Number" name="phoneNumber" type="tel" />
            <SelectInput
              name="subject"
              label="Subject"
              options={[
                { name: "General Query" },
                {
                  name: "Registration Process",
                },
                { name: "Bidding" },
                { name: "Payment" },
                { name: "Auctions" },
              ]}
            />
            <DTextarea name="message" label="Your Message" />
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="text-white"
            >
              Send Message
            </Button>
          </DForm>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-text_color mb-8">
            Also Contact US
          </h3>
          <ul className="flex flex-wrap gap-6">
            <li className="flex items-start sm:items-center gap-3">
              <span className="lg:size-[60px] size-[40px] flex-shrink-0 flex justify-center text-lg shadow-sm rounded-md items-center text-white bg-primary">
                <FaMapLocationDot />
              </span>
              <p className="text-lg">
                1234 Elm Street, Springfield, IL 62701, USA
              </p>
            </li>
            <li className="flex items-center gap-3">
              <span className="lg:size-[60px] size-[40px] flex-shrink-0 flex justify-center text-lg shadow-sm rounded-md items-center text-white bg-primary">
                <FaPhoneVolume />
              </span>
              <Link
                className="hover:text-secondary text-lg transition-all"
                href={"tel:+1555123-4567"}
              >
                +1 (555) 123-4567
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <span className="lg:size-[60px] size-[40px] flex-shrink-0 flex justify-center text-lg shadow-sm rounded-md items-center text-white bg-primary">
                <SlEnvolope />
              </span>
              <Link
                className="hover:text-secondary flex-1 text-lg transition-all"
                href={"mailto:contact@dummyemail.com"}
              >
                contact@dummyemail.com
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <span className="lg:size-[60px] size-[40px] flex-shrink-0 flex justify-center text-lg shadow-sm rounded-md items-center text-white bg-primary">
                <FaWhatsapp />
              </span>
              <Link
                className="hover:text-secondary flex-1 text-lg transition-all"
                href={"mailto:contact@dummyemail.com"}
              >
                Whatsup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const ContactUsInputFiled = ({
  label,
  type = "text",
  name,
  placeholder,
}: {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}) => {
  return (
    <div>
      <div className="grid w-full gap-1.5">
        <Label className="text-base" htmlFor="message">
          {label}
        </Label>
        <Input
          className="py-6 w-full"
          type={type}
          id={name}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default ContactUs;
