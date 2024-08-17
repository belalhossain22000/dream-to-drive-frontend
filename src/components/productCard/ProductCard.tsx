"use client";

import { ProductDataTypes } from "@/utils/api_data_types";
import moment from "moment";
import Image, { StaticImageData } from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import { TbSteeringWheel } from "react-icons/tb";
import ProductCardLoader from "./ProductCardLoader";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import WishList from "../wishList/WishList";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ProductCardPropTypes = {
  item: ProductDataTypes;
  className?: string;
};

const ProductCard: React.FC<ProductCardPropTypes> = ({ item, className }) => {
  const {
    productName,
    status,
    auctionEndDate,
    auctionStartDate,
    country,
    singleImage,
    drivingSide,
    price
  } = item;
  // console.log(country)

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [flags, setFlags] = useState<string | StaticImport>("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = moment();
      const end = moment(auctionEndDate);
      const duration = moment.duration(end.diff(now));

      const hours = Math.floor(duration.asHours());
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      return { hours, minutes, seconds };
    };

    const timer = setInterval(() => {
      const now = moment();
      if (now.isAfter(auctionEndDate)) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else if (now.isBefore(auctionStartDate)) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft(calculateTimeLeft());
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [auctionStartDate, auctionEndDate]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${country}`
      );

      const data = await res.json();

      // console.log(data,"for flag")

      setFlags(data[0].flags.svg);
    };

    fetchData();
  }, [country]);

  return (
    <div
      className={cn("shadow-md rounded-lg border", className)}
    // href={`/buy/${item?.id}`}
    >
      <div className="md:h-[300px] h-[200px] lg:h-[180px]">
        <Image
          className="size-full object-cover aspect-square"
          width={1000}
          height={500}
          src={singleImage && singleImage[0]}
          alt={`Image of ${productName}`}
        />
      </div>
      <div className="pt-4 pb-2 px-4 md:px-7">
        <div className="flex items-center justify-center">
          <div className="text-lg font-semibold flex justify-end flex-1 pr-2 border shadow-sm rounded-l-full py-1 bg-white">
            {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
          </div>
          <div className="flex-1 bg-primary text-lg flex justify-start pl-2 shadow-lg border border-secondary font-semibold py-1 rounded-r-full text-white">
            <h3>$ {price}</h3>
          </div>
        </div>
      </div>
      <div className="py-4 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <span className="block capitalize text-sm py-2 px-5 rounded-full font-medium text-text_color bg-slate-200">
            {status}
          </span>
          <WishList />
        </div>

        <h2 className="font-bold text-base my-4">{productName}</h2>

        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <TbSteeringWheel className="mr-2" />
            <p>{drivingSide}</p>
          </div>
          <h4 className="flex text-sm items-center gap-2">
            <Image
              width={30}
              height={30}
              src={flags || ""}
              alt={`flag of ${country}`}
            />
            {country}
          </h4>
        </div>
      </div>
    </div>
  );
};

const ProductCardWrapper: React.FC<ProductCardPropTypes> = (props) => (
  <Suspense fallback={<ProductCardLoader />}>
    <ProductCard {...props} />
  </Suspense>
);

export default ProductCardWrapper;
