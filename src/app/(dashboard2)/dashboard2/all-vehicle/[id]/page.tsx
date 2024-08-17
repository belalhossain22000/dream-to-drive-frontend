"use client";
import React, { useEffect, useState } from "react";
import DForm from "@/components/forms/DForm";
import { Accept } from "react-dropzone";
import DInput from "@/components/forms/DInput";
import TextEditor from "@/components/textEditor/TextEditor";
import { Label } from "@radix-ui/react-label";
import DateAndTimePicker from "@/components/dateAndTimePicker/DateAndTimePicker";
import { Button } from "@/components/ui/button";
import { FaCar } from "react-icons/fa";
import { MdOutlineFormatColorFill } from "react-icons/md";
import interiorIcon from "@/assets/icon/icon-interior.svg";
import Image from "next/image";
import { BsSpeedometer2 } from "react-icons/bs";
import transmisionIcon from "@/assets/icon/icon-transmission.svg";
import { TbSteeringWheel } from "react-icons/tb";
import engineIcon from "@/assets/icon/icon-engine.svg";

import { useGetAllBrandsQuery } from "@/redux/api/brandApi";
import LoadingAnimation from "@/components/LoadingAnimation/LoadingAnimation";
import ImageUploader from "../../upload-vehicle/ImageUploader";
import YouTubeVideo from "../../upload-vehicle/YouTubeVideo";
import SelectInput from "../../upload-vehicle/SelectInput";
import IconInputFiled from "../../upload-vehicle/IconInputFiled";
import SearchInputFiled from "../../upload-vehicle/SearchInputFiled";

const UploadVehicle = () => {
  const [countryData, setCountryData] = useState([]);
  const [manufacturerData, setManufacturerData] = useState([]);
  const [regionData, setRegionData] = useState<string[]>([]);
  const [singleDisplayImage, setSingleDisplayImage] = useState<string[]>([]);
  const [galleryDisplayImages, setGalleryDisplayImages] = useState<string[]>(
    []
  );
  const [displayExteriorImage, setDisplayExteriorImage] = useState<string[]>(
    []
  );
  const [displayInteriorImage, setDisplayInteriorImage] = useState<string[]>(
    []
  );
  const [displayOthersImage, setOthersDisplayImage] = useState<string[]>([]);
  const [displayMechanicalImage, setDisplayMechanicalImage] = useState<
    string[]
  >([]);

  const [endDateTime, setEndDateTime] = useState<Date | null>(null);
  const [startDateTime, setStartDateTime] = useState<Date | null>(null);

  const [singleImage, setSingleImage] = useState<File[]>([]);
  const [galleryImage, setGalleryImage] = useState<File[]>([]);
  const [exteriorImage, setExteriorImage] = useState<File[]>([]);
  const [interiorImage, setInteriorImage] = useState<File[]>([]);
  const [othersImage, setOthersImage] = useState<File[]>([]);
  const [mechanicalImage, setMechanicalImage] = useState<File[]>([]);
  const { data, isLoading } = useGetAllBrandsQuery(undefined);

  useEffect(() => {
    const fecthData = async () => {
      const res = await fetch("/manufacturer.json");
      const res2 = await fetch(
        "https://restcountries.com/v3.1/all?fields=name"
      );
      const res3 = await fetch(
        "https://restcountries.com/v3.1/all?fields=region"
      );
      const data = await res.json();
      const data2 = await res2.json();
      const data3 = await res3.json();
      const filterCountry = data2?.map((item: any) => item.name.common);
      const filterRegion = data3?.map((item: any) => item.region);
      setCountryData(filterCountry || []);
      setManufacturerData(data || []);
      setRegionData(filterRegion || []);
    };
    fecthData();
  }, []);

  const handlePublishVehicle = (data: any) => {
    const vehicle = {
      ...data,
      singleImage: singleImage[0],
      galleryImage,
      exteriorImage,
      interiorImage,
      othersImage,
      mechanicalImage,
      auctionStartDate: startDateTime,
      auctionEndDate: endDateTime,
    };
  };

  const accept: Accept = {
    "image/*": [".jpeg", ".jpg", ".png", ".gif", ".bmp", ".webp"],
  };

  const handleEndDateTimeChange = (dateTime: Date) => {
    setEndDateTime(dateTime);
  };

  if (isLoading)
    <div className="size-full">
      <LoadingAnimation />
    </div>;

  return (
    <DForm
      onSubmit={handlePublishVehicle}
      className="flex 2xl:flex-row flex-col  max-w-7xl mx-auto my-14 px-10  gap-6"
    >
      <div className="2xl:flex-1 w-full space-y-6">
        <ImageUploader
          setFiles={setSingleImage}
          setImages={setSingleDisplayImage}
          singleImage={true}
          accept={accept}
          label="Product Image"
          images={singleDisplayImage}
        />
        <DInput
          labelTextColor="text-white"
          label="Product Name"
          name="productName"
          className="bg-primary text-white "
        />
        <div className="space-y-16">
          <div className="space-y-3">
            <Label className="text-white font-semibold text-lg block uppercase">
              Key Facts
            </Label>
            <TextEditor name="keyFacts" />
          </div>
          <div className="space-y-3">
            <Label className="text-white font-semibold text-lg block uppercase">
              Equipment And Features
            </Label>
            <TextEditor name="equepmentAndFeature" />
          </div>
          <div className="space-y-3">
            <Label className="text-white font-semibold text-lg block uppercase">
              Condition
            </Label>
            <TextEditor name="condition" />
          </div>
          <div className="space-y-3">
            <Label className="text-white font-semibold text-lg block uppercase">
              Service History
            </Label>
            <TextEditor name="serviceHistory" />
          </div>
          <div className="space-y-3">
            <Label className="text-white font-semibold text-lg block uppercase">
              Summary
            </Label>
            <TextEditor name="summary" />
          </div>
        </div>
        <div className="pt-16">
          <YouTubeVideo name="youtubeVideo" />
        </div>
        <ImageUploader
          label="Gallery Image"
          setFiles={setGalleryImage}
          images={galleryDisplayImages}
          setImages={setGalleryDisplayImages}
          accept={accept}
        />
        <ImageUploader
          label="exterior Image"
          setFiles={setExteriorImage}
          images={displayExteriorImage}
          setImages={setDisplayExteriorImage}
          accept={accept}
        />
        <ImageUploader
          label="interior Image"
          setFiles={setInteriorImage}
          images={displayInteriorImage}
          setImages={setDisplayInteriorImage}
          accept={accept}
        />
        <ImageUploader
          label="Others Images"
          setFiles={setOthersImage}
          images={displayOthersImage}
          setImages={setOthersDisplayImage}
          accept={accept}
        />
        <ImageUploader
          label="Mechanical Images"
          setFiles={setMechanicalImage}
          images={displayMechanicalImage}
          setImages={setDisplayMechanicalImage}
          accept={accept}
        />

        <div className="space-y-3">
          <Label className="text-white font-semibold text-lg block uppercase">
            Select Action Start And End Data
          </Label>
          <DateAndTimePicker
            setStartDateTime={setStartDateTime}
            onEndDateTimeChange={handleEndDateTimeChange}
          />
        </div>
        {/* <div className="border bg-primary grid grid-cols-1 lg:grid-cols-2 gap-6 p-10">
          <DInput
            name="sellerName"
            label="Seller Name"
            type="text"
            labelTextColor="text-white"
          />
          <DInput
            name="sellerEmail"
            label="Seller Email"
            type="email"
            labelTextColor="text-white"
          />
          <DInput
            name="sellerPhoneNumber"
            label="Seller Phone Number"
            type="text"
            labelTextColor="text-white"
          />
        </div> */}
      </div>
      <aside className="2xl:w-[20%] w-full py-10">
        <div className="bg-primary p-3 text-white">
          <div className="mb-5 flex">
            <Button type="submit" variant="secondary" className="w-full">
              Publish Now
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            <SelectInput
              name="brandId"
              options={manufacturerData}
              icon={
                <FaCar className="absolute top-[28%] left-3 text-lg z-30" />
              }
              label="Brand"
            />
            <IconInputFiled
              name="color"
              label="Color"
              icon={
                <MdOutlineFormatColorFill className="absolute top-[28%] left-3 text-lg z-30" />
              }
            />
            <IconInputFiled
              name="interior"
              label="Interior"
              icon={
                <Image
                  src={interiorIcon}
                  height={16}
                  width={16}
                  alt="Interior Icon"
                  className="absolute top-[28%] left-3 text-lg z-30"
                />
              }
            />
            <IconInputFiled
              name="speed"
              label="Speed"
              icon={
                <BsSpeedometer2 className="absolute top-[28%] left-3 text-lg z-30" />
              }
            />
            <SelectInput
              name="gear"
              icon={
                <Image
                  src={transmisionIcon}
                  height={16}
                  width={16}
                  alt="transmision icon"
                  className="absolute top-[28%] left-3 text-lg z-30"
                />
              }
              label="Gear"
              options={[
                { name: "Manual", id: 1 },
                { name: "Auto", id: 2 },
              ]}
            />
            <SelectInput
              name="drivingSide"
              label="Driving Side"
              icon={
                <TbSteeringWheel className="absolute top-[28%] left-3 text-lg z-30" />
              }
              options={[
                { name: "LHD", id: 1 },
                { name: "RHD", id: 2 },
              ]}
            />
            <IconInputFiled
              name="engine"
              label="Engine"
              icon={
                <Image
                  src={engineIcon}
                  height={16}
                  width={16}
                  alt="Engine Icon"
                  className="absolute top-[28%] left-3 text-lg z-30"
                />
              }
            />
            <IconInputFiled
              name="vin"
              label="VIN"
              icon={
                <p className="absolute top-[28%] left-3 text-sm z-30 font-semibold">
                  VIN
                </p>
              }
            />
            <SelectInput
              name="status"
              label="Status"
              options={[
                { name: "Live", id: 1 },
                { name: "Coming Soon", id: 2 },
              ]}
            />
            <SearchInputFiled
              name="country"
              label="Country"
              options={countryData}
            />
            <SearchInputFiled
              name="region"
              label="Region"
              options={regionData}
            />
          </div>
        </div>
      </aside>
    </DForm>
  );
};

export default UploadVehicle;
