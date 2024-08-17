"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./cardSlider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import cardImage1 from "@/assets/ourJourneyPage/cardImage1.jpg";
// images
import Image from "next/image";
// icons
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

import sliderArticle from "@/utils/our_story_info";

const CardSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true} // Enable navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {sliderArticle.map((item: any) => (
          // Return JSX for each slide
          <SwiperSlide
            key={item.id}
            className="my-12 mb-28 border rounded-md overflow-hidden p-4 pb-6 shadow-md"
          >
            <div className="rounded-md">
              <div className="w-full h-[260px] mb-8">
                <Image
                  src={item.image}
                  width={200}
                  height={300}
                  alt="card image"
                  className="rounded-md"
                />
              </div>
              <div className="w-full">
                <h3 className="text-lg font-bold text-center">{item.title}</h3>
                <p className="text-[15px] mt-4 text-left">{item.description}</p>
                <div className="flex items-cener justify-end">
                  <Link href={item.link}>
                    <button className="flex items-center text-[15px] gap-2 font-bold mt-6">
                      View Post <FaArrowRightLong />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide className="my-12 mb-28 border rounded-md overflow-hidden p-4 pb-6 shadow-md">
          <div className="rounded-md">
            <div className="w-full h-[260px] mb-8">
              <Image
                src={cardImage1}
                width={200}
                height={300}
                alt="card image"
                className="rounded-md"
              />
            </div>
            <div className="w-full">
              <h3 className="text-lg font-bold text-center">
                THE SMOKING TIRE PODCAST
              </h3>
              <p className="text-[15px] mt-4 text-left">
                Chris Harris and Edward Lovett featured on Matt Farah&apos;s
                podcast.
              </p>
              <div className="flex items-cener justify-end">
                <Link href={"#"}>
                  <button className="flex items-center text-[15px] gap-2 font-bold mt-6">
                    View Post <FaArrowRightLong />{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CardSlider;
