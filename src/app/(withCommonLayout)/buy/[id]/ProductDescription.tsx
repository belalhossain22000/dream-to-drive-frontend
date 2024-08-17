import GalleryOfDetails from "@/components/ProductDetails/GalleryOfDetails/GalleryOfDetails";
import React from "react";
import Comments from "./Comments";

const ProductDetailsData = [
  {
    detailsTitle: "KEY FACTS",
    detailsDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicingconsectetur adipisicingconsectetur adipisicingconsectetur adipisicing elit. Quo minima lorem10",
  },
  {
    detailsTitle: "EQUIPMENT AND FEATURES",
    detailsDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima lorem10",
  },
  {
    detailsTitle: "CONDITION",
    detailsDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima lorem10",
  },
  {
    detailsTitle: "SERVICE HISTORY",
    detailsDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima lorem10",
  },
  {
    detailsTitle: "SUMMARY",
    detailsDescription:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo minima lorem10",
  },
];
const ProductDescription = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">
        2024 Lamborghini Huracán Tecnica - 90 km
      </h2>
      <div>
        {ProductDetailsData.map((detailsData, index) => (
          <div key={index}>
            <h2 className="text-xl font-bold">{detailsData?.detailsTitle}</h2>
            <p>{detailsData?.detailsDescription}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
          voluptatum dolore! Et ad voluptatibus repellendus iure est sunt vel
          consequuntur odit perferendis. Velit accusantium porro quas
          necessitatibus ullam! Dignissimos culpa vel accusamus soluta minus
          dolorem obcaecati iste! Quibusdam, culpa necessitatibus!
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-3">Interior Image</h2>
          <GalleryOfDetails/>
        </div>
        <div  className="mt-10">
          <h2 className="text-2xl font-bold mb-3">Exterior Image</h2>
          <GalleryOfDetails/>
        </div>
        <div  className="mt-10">
          <h2 className="text-2xl font-bold mb-3">Others Image</h2>
          <GalleryOfDetails/>
        </div>

        <div>
          <Comments/>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
