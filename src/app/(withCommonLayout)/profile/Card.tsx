// Card.tsx

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductDetail = {
  label: string;
  value: string;
};

type CardProps = {
  cardImage: any;
  title: string;
  details: ProductDetail[];
};

const Card: React.FC<CardProps> = ({ cardImage, title, details }) => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 md:gap-8 gap-8 border-b border-slate-300 py-10">
      <div>
        <Image
          src={cardImage}
          width={500}
          height={500}
          className="w-full sm:h-[240px] h-[180px] object-cover"
          alt="Product image"
        />
      </div>
      <div className="lg:col-span-2 col-span-1">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-secondary duration-500"
        >
          {title}
        </Link>
        <Button variant="outline" className="mt-4 lg:block hidden">
          Remove
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        {details.map((detail, index) => (
          <div key={index} className="flex items-center justify-between">
            <p className="font-bold sm:text-base text-[12px]">{detail.label}</p>
            <p className="sm:text-base text-[12px]">{detail.value}</p>
          </div>
        ))}
        <Button variant="outline" className="mt-4 block lg:hidden">
          Remove
        </Button>
      </div>
    </div>
  );
};

export default Card;
