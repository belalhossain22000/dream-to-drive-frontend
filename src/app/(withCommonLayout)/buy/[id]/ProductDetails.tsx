import React from "react";
import ProductSidebar from "./ProductSidebar";
import ProductDescription from "./ProductDescription";

const ProductDetails = () => {
  return (
    <section className="pb-10">
      <div className="container">
        <div className="lg:grid lg:grid-cols-3 flex flex-col-reverse gap-8 ">
          <div className="lg:col-span-2">
            <ProductDescription />
          </div>
          <div className="lg:col-span-1">
            <ProductSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
