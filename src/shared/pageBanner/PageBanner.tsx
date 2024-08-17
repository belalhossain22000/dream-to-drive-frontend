import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface PageBannerProps {
  image: any;
  imageUnderline?: StaticImageData | string;
  title: string;
  overlayColor: string;
  button: boolean;
  children?: React.ReactNode; // Optional children prop
  description?: string;
}

const PageBanner: FC<PageBannerProps> = ({
  image,
  title,
  overlayColor,
  imageUnderline,
  children,
  description,
  button,
}) => {
  // pass overlay color as const overlayColor = "bg-primary/70" from parent
  return (
    <header className="relative min-h-[400px]">
      <Image
        className="size-full absolute object-cover top-0 left-0 right-0 bottom-0"
        src={image}
        width={1200}
        height={1200}
        alt="backgroundImage"
      />
      <div
        className={`w-full ${overlayColor} flex items-center justify-center absolute z-10 h-full section-paddingY`}
      >
        <div
          className={`w-full ${overlayColor} flex items-center justify-center absolute z-10 h-full`}
        >
          <div className="flex items-center justify-center flex-col gap-2 max-w-[700px] text-center px-8">
            <h2 className="text-[40px] leading-normal lg:text-[46px] font-extrabold text-white font-ralway">
              {title}
              <p className="text-white text-base font-lato mt-3">
                {description}
              </p>
            </h2>
            {imageUnderline && (
              <Image
                src={imageUnderline}
                width={800}
                height={100}
                alt="line image"
                draggable="false"
              />
            )}
            {button && (
              <Link href={"#"}>
                <Button className="px-12 md:px-20 py-5 md:py-7 text-md md:text-lg text-white mt-5">
                  Apply now
                </Button>
              </Link>
            )}
            <p className="text-white text-base">{children}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageBanner;
