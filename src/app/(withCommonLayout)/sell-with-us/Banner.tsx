import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerImage from "@/assets/sell-with-us/blue-car.webp";

const Banner = () => {
  return (
    <>
      <main className="py-20 relative overflow-hidden z-[2]">
        <div className="container mx-auto px-4 relative z-[3]">
          <h1 className="text-4xl uppercase font-bold text-white">
            YOUR CAR IN GOOD COMPANY
          </h1>
          <p className="mt-3 mb-4 lg:text-2xl text-base text-white">
            Get a free valuation today
          </p>
          <Link href="sell-with-us/form">
            <Button
              className="md:px-12 px-8 py-4 md:py-6 text-base text-white font-semibold"
              variant="secondary"
            >
              Submit your vehicle
            </Button>
          </Link>
        </div>
        <div className="h-full w-full absolute inset-0 bg-black/50 z-[1]"></div>
        <Image
          src={bannerImage}
          alt="A luxurious blue car"
          height={800}
          width={1200}
          className="object-cover w-full h-full absolute inset-0 z-[-1]"
        />
      </main>
    </>
  );
};

export default Banner;
