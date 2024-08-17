import { categroyDataTypes } from "@/utils/api_data_types";
import Image from "next/image";
import React from "react";

type CategoryCardProps = {
  category: categroyDataTypes;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div
      style={{ backgroundImage: `url("${category.image}")` }}
      className="rounded-md overflow-hidden h-[200px] md:h-[300px] bg-no-repeat bg-cover bg-center lg:h-[400px] relative"
    >
      {/* <Image
        className="size-full object-cover absolute top-0 left-0 z-10"
        width={2000}
        height={1000}
        src={category.image}
        alt={`image of ${category.name}`}
      /> */}
      <div className="absolute top-0 left-0 size-full z-20 flex items-center pl-5 md:pl-20">
        <Image
          className="lg:size-[35%] size-[60%]"
          width={320}
          height={200}
          src={category.icon}
          alt={`Icon of category ${category.name}`}
        />
      </div>
    </div>
  );
};

export default CategoryCard;
