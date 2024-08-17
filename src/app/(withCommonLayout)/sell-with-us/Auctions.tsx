import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LiaUserTagSolid } from "react-icons/lia";
import { RxTimer } from "react-icons/rx";
import auctionsImage from "@/assets/managed-services/managed-services-banner.jpg";
import shortOnTimeImage from "@/assets/managed-services/white-car.webp";
import { FaCheck } from "react-icons/fa";
import SectionProdcutSlide from "@/components/homeComponent/auctionsEndingSoon/SectionProdcutSlide";
import Faq from "./Faq";
import Promo from "./Promo";
import { useGetAllProductsQuery } from "@/redux/api/productsApi";
import LoadingAnimation from "@/components/LoadingAnimation/LoadingAnimation";

const Auctions = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined)
  const products = data?.data?.data || []
  console.log(products)

  if (isLoading) {
    return <LoadingAnimation />
  }
  return (
    <>
      <section className="py-14">
        <div className="container">
          <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-20 gap-8 items-center">
            <div className="lg:max-w-[520px] lg:col-span-5 col-span-1 w-full">
              <div className="flex md:flex-row flex-col md:justify-start justify-center items-center gap-2 mb-5">
                <RxTimer className="text-3xl" />
                <h2 className="text-2xl font-semibold">Auctions</h2>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-6 items-center border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                  <LiaUserTagSolid className="text-3xl shrink-0" />
                  <div>
                    <h4 className="mb-1 font-bold">No seller fees</h4>
                    <p>Free to list and receive 100% of the winning bid</p>
                  </div>
                </div>
                <div className="flex gap-6 items-center border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                  <LiaUserTagSolid className="text-3xl shrink-0" />
                  <div>
                    <h4 className="mb-1 font-bold">Sell with confidence</h4>
                    <p>
                      Set a reserve price and sell with peace of mind, ensuring
                      your needs are met
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-center border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                  <LiaUserTagSolid className="text-3xl shrink-0" />
                  <div>
                    <h4 className="mb-1 font-bold">Maximise your sale</h4>
                    <p>
                      80% of cars achieve higher prices through 7 day auctions
                    </p>
                  </div>
                </div>
              </div>
              <Link href="sell-with-us/form">
                <Button
                  className="md:px-12 px-8 py-4 md:py-6 text-base text-white font-semibold w-full mt-5"
                  variant="secondary"
                >
                  Submit your vehicle
                </Button>
              </Link>
            </div>
            <div className="lg:col-span-7 col-span-1">
              <Image
                src={auctionsImage}
                width={1200}
                height={700}
                alt="A blue luxury car"
                className="w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-14 pt-0 pb-14">
        <div className="container">
          <h2 className="text-2xl font-semibold md:mb-12 mb-8">How it works</h2>
          <div className=" grid md:grid-cols-3 grid-cols-1 lg:gap-16 gap-10">
            <div>
              <h3 className="text-5xl mb-4 font-semibold">01</h3>
              <h4 className="font-bold mb-2">Submit your vehicle</h4>
              <p>
                A dedicated consignment specialist will usually call within 2
                hours to discuss your enquiry.
              </p>
            </div>
            <div>
              <h3 className="text-5xl mb-4 font-semibold">02</h3>
              <h4 className="font-bold mb-2">Submit your vehicle</h4>
              <p>
                A dedicated consignment specialist will usually call within 2
                hours to discuss your enquiry.
              </p>
            </div>
            <div>
              <h3 className="text-5xl mb-4 font-semibold">03</h3>
              <h4 className="font-bold mb-2">Submit your vehicle</h4>
              <p>
                A dedicated consignment specialist will usually call within 2
                hours to discuss your enquiry.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-14 gap-5 items-center">
            <div>
              <Image
                src={shortOnTimeImage}
                width={1200}
                height={500}
                alt="A luxurious blue car."
                className="w-full rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-bold mb-2 md:text-3xl text-xl">
                  Short on time? Use our Managed Service
                </h2>
                <p>
                  The ideal solution for when you want your car professionally
                  presented, but do not have time to organise it yourself.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-3">
                  Why choose a Managed Service?
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3 items-center">
                    <FaCheck className="text-green-500" />
                    <p>Our specialist partner will handle everything</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <FaCheck className="text-green-500" />
                    <p>Your car is collected, prepared & photographed</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <FaCheck className="text-green-500" />
                    <p>A proven formula to achieve the best result</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <FaCheck className="text-green-500" />
                    <p>Short on time? This is the ideal ‘hands-off’ route</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2">What next?</h3>
                <p>
                  Let us know if you’re interested during your initial enquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {products && (
        <SectionProdcutSlide
          title="Auctions Ending Soon"
          data={products}
          link="/buy?category=All+Live"
        />
      )}
      <Faq />
      <Promo />
    </>
  );
};

export default Auctions;
