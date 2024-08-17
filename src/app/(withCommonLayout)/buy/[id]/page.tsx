"use client";
import { useParams } from "next/navigation";
import React from "react";
import Bid from "./Bid";
import ProductGallery from "./ProductGallery";
import ProductDetails from "./ProductDetails";

type paramsType = {
  slug: string;
};

const DynamicPage = () => {
  const slug = useParams<paramsType>();

  return (
    <>
      <Bid />
      <ProductGallery />
      <ProductDetails />
    </>
  );
};

export default DynamicPage;
