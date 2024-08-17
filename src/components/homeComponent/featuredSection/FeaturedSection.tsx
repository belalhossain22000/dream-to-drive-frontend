"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ProductDataTypes } from "@/utils/api_data_types";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import moment from "moment";
import Link from "next/link";
import { useGetFeaturedProductsQuery } from "@/redux/api/productsApi";


const FeaturedSection = () => {

  const { data, isLoading } = useGetFeaturedProductsQuery(undefined)
  const featured = data?.data || {}
  // console.log(data.data)

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = moment();
      const end = moment(featured?.auctionEndDate);
      const duration = moment.duration(end.diff(now));

      const hours = Math.floor(duration.asHours());
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      return { hours, minutes, seconds };
    };

    const timer = setInterval(() => {
      const now = moment();
      if (now.isAfter(featured?.auctionEndDate)) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else if (now.isBefore(featured?.auctionStartDate)) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft(calculateTimeLeft());
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [featured?.auctionStartDate, featured?.auctionEndDate]);
  return (
    <section className="py-[60px] bg-primary text-white">
      <div className="px-5 relative">
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
          }}
          spaceBetween={30}
          slidesPerView={1.5}
        >
          {featured?.galleryImage?.map((item:any, idx:number) => (
            <SwiperSlide key={idx}>
              <Image
                width={1000}
                height={500}
                alt={`Featurd image ${idx}`}
                src={item}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center -mt-5 z-50 relative">
          <div className="w-[240px] flex items-center shadow-lg">
            <div className="flex-1 border font-bold  text-lg text-text_color bg-white rounded-l-full flex p-2 justify-end">
              {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
            </div>
            <div className="flex-1 bg-primary/60 backdrop-blur-sm rounded-r-full p-2 text-lg   ">
              $ {featured?.price}
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-8 flex">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Featured</h3>
            <button className="text-2xl text-secondary">
              <CiHeart />
            </button>
          </div>
          <h2 className="md:text-2xl text-xl font-bold mb-4">
            {featured?.productName}
          </h2>
          <p className="mb-8">
            This Porsche 991 GT2 RS Clubsport is an astonishing track-only
            supercar, remaining as-new with delivery mileage.
          </p>
          <Link href={`/buy`}>
            <Button className="w-[240px]" variant="outline">
              View Listing
            </Button>
          </Link>
        </div>
        <div className="flex-1 md:block hidden"></div>
      </div>
    </section>
  );
};

export default FeaturedSection;
