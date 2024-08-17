import React from "react";
import Link from "next/link";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import goldCar from "@/assets/managed-services/gold-car.jpg";
import purpleCar from "@/assets/managed-services/purple-car.jpg";
import Faq from "./Faq";
import Promo from "./Promo";

const PrivateSales = () => {
  return (
    <>
      <section className="py-14">
        <div className="container">
          <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-20 gap-8 items-center">
            <div className="lg:max-w-[520px] lg:col-span-5 col-span-1 w-full">
              <div className="flex md:flex-row flex-col md:justify-start justify-center items-center gap-2 mb-5">
                <MdOutlinePrivacyTip className="text-3xl" />
                <h2 className="text-2xl font-semibold">Private Sales</h2>
              </div>
              <div className="flex flex-col gap-3">
                <p>
                  Our white glove service, offering a personalised experience
                  every step of the way.
                  <br />
                  <br /> We take care of everything, from fully managed storage
                  and transportation to providing an inspection report,
                  photography, and videography services.
                </p>
              </div>
              <Link href={"/contact-us"}>
                <Button
                  className="md:px-12 px-8 py-4 md:py-6 text-base text-white font-semibold w-full mt-5"
                  variant="secondary"
                >
                  Enquire Now
                </Button>
              </Link>
            </div>
            <div className="lg:col-span-7 col-span-1">
              <Image
                src={purpleCar}
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
          <h2 className="text-2xl font-semibold md:mb-12 mb-8 md:text-start text-center">
            Why Private Sales?
          </h2>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-16 gap-5">
            <div>
              <h4 className="font-semibold mb-2">Submit your vehicle</h4>
              <div className="flex gap-3 items-center">
                <FaCheck className="text-green-500" />
                <p>6% + VAT (capped at £50k)</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Submit your vehicle</h4>
              <div className="flex gap-3 items-center">
                <FaCheck className="text-green-500" />
                <p>6% + VAT (capped at £50k)</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Submit your vehicle</h4>
              <div className="flex gap-3 items-center">
                <FaCheck className="text-green-500" />
                <p>6% + VAT (capped at £50k)</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Submit your vehicle</h4>
              <div className="flex gap-3 items-center">
                <FaCheck className="text-green-500" />
                <p>6% + VAT (capped at £50k)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-14 gap-5 items-center">
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
            <div>
              <Image
                src={goldCar}
                width={1200}
                height={500}
                alt="A luxurious blue car."
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <Faq />
      <Promo />
    </>
  );
};

export default PrivateSales;
