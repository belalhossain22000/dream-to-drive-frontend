import React, { useEffect, useState } from "react";
import DForm from "@/components/forms/DForm";
import DInput from "@/components/forms/DInput";
import { Button } from "@/components/ui/button";
import DTextarea from "../forms/DTextArea";
import DSelect from "../forms/DSelect";
import { useSubmitVehicleMutation } from "@/redux/api/submitVehicleApi";
import DFileUploader from "../forms/DfileInput";
import { toast } from "sonner";

const VehicleInfo = ({ handleBack }: any) => {
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
  });
  const { firstName, lastName, email, mobileNumber } = contactInfo;
  console.log(contactInfo);
  useEffect(() => {
    // Retrieve data from localStorage
    const savedData = localStorage.getItem("contactData");
    if (savedData) {
      setContactInfo(JSON.parse(savedData));
    }
  }, []);

  const [submitVehicle, { isLoading }] = useSubmitVehicleMutation();

  const handleContactData = async (data: any) => {
    try {
      const formData = new FormData();

      // Append the car image
      if (data.carImage) {
        formData.append("carImage", data.carImage);
      }

      // Formatting data
      const vehicleData = {
        firstName,
        lastName,
        email,
        mobileNo: mobileNumber,
        carMake: data.carMake,
        carModel: data.carModel,
        carDetails: data.carDetails,
        aboutHear: data.aboutHear,
      };
      // console.log(vehicleData);

      // Append the info as a JSON string under the "text" key
      formData.append("text", JSON.stringify(vehicleData));

      // Submit vehicle data
      const res = await submitVehicle(formData).unwrap();
      if (res.data.id) {
        toast.success(res.message);
      }
      // console.log(res);
    } catch (error: any) {
      toast.error(error.data.message);
      console.error("Error submitting vehicle data:", error);
      // Optionally, you can set an error state here to display a message to the user
    }
  };

  return (
    <div className="py-12 px-5 lg:px-0">
      <div className="mx-auto border border-t-8 border-t-primary p-12 rounded-md pb-16 shadow-md">
        <div className="mb-10">
          <h2 className="text-center text-4xl md:text-5xl text-primary w-full uppercase font-bold">
            What would you like to sell?
          </h2>
          <p className="text-center mt-4 text-md md:text-lg">
            We only require key details about your item for now. A full
            consignment form will be sent if we proceed.
          </p>
        </div>

        <div className="bg-[#F5F5F5] p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold">Your details</h2>
            <Button onClick={handleBack} className="underl" variant="link">
              Edit
            </Button>
          </div>
          {firstName && (
            <p>
              {firstName} {lastName}
            </p>
          )}
          <p>{email}</p>
          <p>{mobileNumber}</p>
        </div>
        <DForm className="space-y-4" onSubmit={handleContactData}>
          <div className="lg:flex justify-center items-center mt-4 gap-4">
            <DInput
              type="text"
              name="carMake"
              label="Car Make"
              className="w-full"
              required
            />
            <DInput
              type="text"
              name="carModel"
              label="Car Model"
              className="w-full"
              required
            />
          </div>
          <DTextarea
            type="textarea"
            name="carDetails"
            label="Car Details"
            className="w-full"
            required
          />
          <DFileUploader name="carImage" label="Upload Your File" />
          <DSelect
            name="aboutHear"
            label="How did you hear about us?"
            options={[
              { value: "word-of-mouth", label: "Word of Mouth" },
              { value: "social-media", label: "Social Media" },
              { value: "you-tube", label: "YouTube" },
              { value: "google/search-engine", label: "Google/Search Engine" },
              { value: "online-add", label: "Online Ad" },
              { value: "magazine/newspaper", label: "Magazine/Newspaper" },
              { value: "others", label: "Others" },
            ]}
            className="w-full"
            required
          />
          <Button disabled={isLoading} type="submit" className="text-white">
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </DForm>
      </div>
    </div>
  );
};

export default VehicleInfo;
