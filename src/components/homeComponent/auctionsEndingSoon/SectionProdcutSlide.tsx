"use client";
import ProductCardWrapper from "@/components/productCard/ProductCard";
import { Button } from "@/components/ui/button";
import { ProductDataTypes } from "@/utils/api_data_types";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { cn } from "@/lib/utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, FreeMode } from "swiper/modules";
import { Skeleton } from "@/components/ui/skeleton";
import CardSkeleton from "@/components/CardSkeleton/CardSkeleton";
import Link from "next/link";
import { useGetAllProductsQuery } from "@/redux/api/productsApi";
import LoadingAnimation from "@/components/LoadingAnimation/LoadingAnimation";

type SectionProdcutSlideProps = {
  data: ProductDataTypes[];
  title: string;
  link?: string;
};

const SectionProdcutSlide: React.FC<SectionProdcutSlideProps> = ({
  data,
  title,
  link = "/",
}) => {
  const [slideEnd, setSlideEnd] = useState(false);
  const [slideStart, setSlideStart] = useState(false);
  const [placeholderData, setPlaceholderData] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    // Simulate a delay of 2 seconds before setting isLoading to false
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2000 milliseconds = 2 seconds

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Define breakpoints
  const breakpoints = {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  useEffect(() => {
    // Determine the number of placeholders based on the current window width
    const updatePlaceholderData = () => {
      const width = window.innerWidth;
      let slidesPerView = 1;

      if (width >= 1240) {
        slidesPerView = breakpoints[1240].slidesPerView;
      } else if (width >= 1024) {
        slidesPerView = breakpoints[1024].slidesPerView;
      } else if (width >= 576) {
        slidesPerView = breakpoints[576].slidesPerView;
      }

      setPlaceholderData(Array(slidesPerView).fill(0));
    };

    updatePlaceholderData();
    window.addEventListener("resize", updatePlaceholderData);

    return () => {
      window.removeEventListener("resize", updatePlaceholderData);
    };
  }, []);



  return (
    <section className="section-padding container">
      <div className="flex items-center justify-between">
        <h2 className="md:text-2xl text-lg font-bold text-text_color">
          {title}
          <span className="text-base text-gray-400"> ({data?.length})</span>
        </h2>
        <Button
          variant="link"
          className="text-text_color md:text-lg text-sm hover:text-secondary"
        >
          <Link href={`${link}`}>View All</Link>
        </Button>
      </div>
      <div className="mt-12 relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          navigation={{
            nextEl: ".product-button-next",
            prevEl: ".product-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          modules={[FreeMode, Navigation]}
          onSlideChange={() => {
            setSlideStart(true);
            setSlideEnd(false);
          }}
          onReachEnd={() => setSlideEnd(true)}
          onReachBeginning={() => setSlideStart(false)}
          breakpoints={breakpoints}
        >
          {isLoading
            ? placeholderData?.map((_, index) => (
              <SwiperSlide className="py-2 w-[200px]" key={index}>
                {/* Add a placeholder component or skeleton here */}

                <CardSkeleton />
              </SwiperSlide>
            ))
            : data?.map((item:ProductDataTypes) => (
              <SwiperSlide className="py-2 w-[200px]" key={item.id}>
                <ProductCardWrapper item={item} />
              </SwiperSlide>
            ))}
        </Swiper>

        <button
          className={cn(
            "absolute -left-7 top-1/2 transform -translate-y-1/2 product-button-prev z-[100] h-10 w-10 rounded-full bg-secondary flex justify-center items-center text-lg text-white",
            !slideStart ? "hidden" : "flex"
          )}
        >
          <FaArrowLeft />
        </button>

        <button
          className={cn(
            "absolute -right-7 top-1/2 transform -translate-y-1/2 product-button-next z-[100] h-10 w-10 rounded-full bg-secondary flex justify-center items-center text-lg text-white",
            slideEnd ? "hidden" : "flex"
          )}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default SectionProdcutSlide;
