"use client";
// Import Swiper React components
import { categroyDataTypes } from "@/utils/api_data_types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import React from "react";
import CategoryCard from "@/components/categoryCard/CategoryCard";

type CategroyPropsTypes = {
  categorys: categroyDataTypes[];
};

const CategorySection: React.FC<CategroyPropsTypes> = ({ categorys }) => {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="md:text-2xl text-lg font-bold text-text_colo">
          Explore Categories
        </h2>
        <div className="mt-12">
          <Swiper
            breakpoints={{
              576: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
            }}
            slidesPerView={1.3}
            spaceBetween={30}
            grabCursor={true}
            className="mySwiper"
          >
            {categorys.map((item) => (
              <SwiperSlide key={item.id}>
                <CategoryCard category={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
