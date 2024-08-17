import { Textarea } from "@/components/ui/textarea";
import Modal from "@/shared/Modal/Modal";
import React, { useState, ChangeEvent } from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { IoIosClose } from "react-icons/io";

type YouTubeVideoProps = {
  name: string;
};

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ name }) => {
  const { control } = useFormContext(); // Use this if you are within a form context
  const [youtube, setYoutube] = useState<string>("");

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, onBlur, value } }) => (
        <div className="h-[450px] w-full border bg-primary">
          {youtube ? (
            <div className="relative w-full h-full">
              <div
                className="embeded-video"
                dangerouslySetInnerHTML={{ __html: youtube }}
              ></div>
              <button
                onClick={() => {
                  setYoutube("");
                  onChange(""); // Clear value in form
                }}
                className="bg-slate-200 size-10 flex items-center justify-center rounded-full absolute top-0 right-0"
              >
                <IoIosClose className="size-5" />
              </button>
            </div>
          ) : (
            <div className="cursor-pointer  grid place-items-center w-full h-full">
              <Modal
                px="2rem"
                maxWidth="420px"
                buttonText="Embed Youtube video using Iframe"
              >
                <Textarea
                  value={value}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                    setYoutube(e.target.value);
                    onChange(e.target.value); // Update value in form
                  }}
                  className="mt-7"
                  placeholder="Enter YouTube embed code here"
                />
              </Modal>
            </div>
          )}
        </div>
      )}
    />
  );
};

export default YouTubeVideo;
