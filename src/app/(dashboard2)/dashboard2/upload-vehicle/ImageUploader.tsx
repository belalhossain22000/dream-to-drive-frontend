import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import Dropzone, { Accept } from "react-dropzone";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";

type ImageUploaderProps = {
  label: string;
  accept: Accept;
  existingImages?: string[]; // URLs of existing images
  images: string[]; // New image URLs created using Object URLs
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  setExistingImages?: React.Dispatch<React.SetStateAction<string[]>>; // To manage existing images
  singleImage?: boolean; // Optional prop, default is false
};

const ImageUploader: React.FC<ImageUploaderProps> = ({
  label,
  accept,
  existingImages = [], // Initialize with empty array if not provided
  images,
  setImages,
  setFiles,
  setExistingImages,
  singleImage = false,
}) => {
  const handleFileChange = (files: File[]) => {
    if (singleImage) {
      if (files.length > 0) {
        const newImage = URL.createObjectURL(files[0]);
        setImages([newImage]); // Overwrite with a single image
        setFiles([files[0]]); // Overwrite with a single file
      }
    } else {
      const newImages = files.map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...newImages]);
      setFiles((prevFiles) => [...prevFiles, ...files]);
    }
  };

  const handleRemoveNewImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, idx) => idx !== index));
    setFiles((prevFiles) => prevFiles.filter((_, idx) => idx !== index));
  };

  const handleRemoveExistingImage = (index: number) => {
    if (setExistingImages) {
      setExistingImages((prevImages) =>
        prevImages.filter((_, idx) => idx !== index)
      );
    }
  };

  const handleRemoveAllImages = () => {
    setImages([]);
    setFiles([]);
    if (setExistingImages) setExistingImages([]);
  };

  return (
    <div className="space-y-3">
      <Label className="text-white font-semibold text-lg block uppercase">
        {label}
      </Label>
      <div className="flex flex-col border">
        <Dropzone
          onDrop={(acceptedFiles) => handleFileChange(acceptedFiles)}
          accept={accept}
        >
          {({ getRootProps, getInputProps }) => (
            <div>
              <div
                {...getRootProps()}
                className="border-2 border-dashed border-gray-400 p-5 text-center"
              >
                <input {...getInputProps()} />
                <p className="text-white">
                  Drag 'n' drop some Image here, or click to select Image
                </p>
              </div>
            </div>
          )}
        </Dropzone>

        <div className="flex justify-end mt-2 p-7">
          <button
            onClick={handleRemoveAllImages}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Remove All
          </button>
        </div>

        <div
          className={cn(
            images.length === 0 && existingImages.length === 0
              ? "md:grid-cols-3 grid-cols-1 "
              : "grid-cols-1",
            `grid  gap-5 mt-5`
          )}
        >
          {existingImages.map((item, idx) => (
            <div
              key={`existing-${idx}`}
              className="relative h-[300px] overflow-hidden"
            >
              <Image
                src={item}
                alt={`existing gallery image number ${idx + 1}`}
                width={200}
                height={200}
                className="object-cover size-full hover:scale-105 duration-300"
              />
              <button
                onClick={() => handleRemoveExistingImage(idx)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
              >
                <FaRegTrashAlt />
              </button>
            </div>
          ))}

          {images.map((item, idx) => (
            <div
              key={`new-${idx}`}
              className="relative h-[300px] overflow-hidden"
            >
              <Image
                src={item}
                alt={`gallery image number ${idx + 1}`}
                width={200}
                height={200}
                className="object-cover size-full hover:scale-105 duration-300"
              />
              <button
                onClick={() => handleRemoveNewImage(idx)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
              >
                <FaRegTrashAlt />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
