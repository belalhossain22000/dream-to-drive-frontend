import React from "react";
import CarOverview from "./CarOverview";
import BidHistory from "./BidHistory";
import SellerContact from "./SellerContact";

const ProductSidebar = () => {
  return (
    <>
      <BidHistory />
      <CarOverview />
      <SellerContact />
    </>
  );
};

export default ProductSidebar;
