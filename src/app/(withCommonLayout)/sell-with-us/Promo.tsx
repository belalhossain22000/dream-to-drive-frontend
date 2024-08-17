import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerImage from "@/assets/managed-services/black.webp";

const Promo = () => {
  return (
    <>
      <section className="py-14 relative overflow-hidden z-[2]">
        <div className="container mx-auto px-4 relative z-[3]">
          <div className="flex lg:flex-row flex-col gap-6 justify-between items-center">
            <div>
              <h1 className="text-4xl uppercase font-bold text-white lg:text-start text-center">
                YOUR CAR IN GOOD COMPANY
              </h1>
              <p className="mt-3 text-base text-white lg:text-start text-center">
                Sell for free, in 7 days
              </p>
            </div>
            <div>
              <Link href={"/sell-with-us/form"}>
                <Button
                  className="md:px-12 px-8 py-4 md:py-6 text-base text-white font-semibold"
                  variant="secondary"
                >
                  Submit your vehicle
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-full w-full absolute inset-0 bg-black/50 z-[1]"></div>
        <Image
          src={bannerImage}
          alt="A luxurious blue car"
          height={800}
          width={1200}
          className="object-cover w-full h-full absolute inset-0 z-[-1]"
        />
      </section>
    </>
  );
};

export default Promo;
