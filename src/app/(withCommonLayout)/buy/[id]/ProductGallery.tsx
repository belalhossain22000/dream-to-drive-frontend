import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import carImage from "@/assets/managed-services/blue-car.webp";
import Image from "next/image";
import "./ProductGallery.css";

const ProductGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="md:pb-12 pb-0">
      <div className="container">
        <div className="flex lg:flex-row flex-col gap-3">
          <div className="relative">
            <Swiper
              spaceBetween={12}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper max-w-[1024px] !m-0 h-[340px] lg:h-[500px]"
              navigation={{
                nextEl: ".gallery-product-next",
                prevEl: ".gallery-product-prev",
              }}
            >
              {/* Swiper slides */}
              <SwiperSlide>
                <Image
                  width={1200}
                  height={500}
                  alt="A blue car"
                  src={carImage}
                  className="w-full object-cover h-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1200}
                  height={500}
                  alt="A blue car"
                  src={carImage}
                  className="w-full object-cover h-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1200}
                  height={500}
                  alt="A blue car"
                  src={carImage}
                  className="w-full object-cover h-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1200}
                  height={500}
                  alt="A blue car"
                  src={carImage}
                  className="w-full object-cover h-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={1200}
                  height={500}
                  alt="A blue car"
                  src={carImage}
                  className="w-full object-cover h-full"
                />
              </SwiperSlide>
              {/* other SwiperSlide components */}
            </Swiper>
            <div className="absolute top-1/2 -translate-y-1/2 z-10 gallery-product-prev cursor-pointer left-5 bg-white p-2 rounded-full">
              <GrLinkPrevious />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 z-10 gallery-product-next cursor-pointer right-5 bg-white p-2 rounded-full">
              <GrLinkNext />
            </div>
          </div>

          <Swiper
            onSwiper={setThumbsSwiper}
            direction="horizontal"
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1024: {
                direction: "vertical",
                slidesPerView: 3,
              },
            }}
            spaceBetween={12}
            slidesPerView={2}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper w-full lg:h-[500px] h-[80px] product-thumbs-gallery"
          >
            {/* Swiper slides for thumbnails */}
            <SwiperSlide>
              <Image
                width={1200}
                height={500}
                alt="A blue car"
                src={carImage}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={1200}
                height={500}
                alt="A blue car"
                src={carImage}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={1200}
                height={500}
                alt="A blue car"
                src={carImage}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={1200}
                height={500}
                alt="A blue car"
                src={carImage}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={1200}
                height={500}
                alt="A blue car"
                src={carImage}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
            {/* other SwiperSlide components */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
