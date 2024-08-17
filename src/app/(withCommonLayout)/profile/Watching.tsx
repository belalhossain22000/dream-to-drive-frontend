import React from "react";
import productImage from "@/assets/managed-services/black.webp";
import Card from "./Card";

const Watching = () => {
  const title = "'Q664' - Queensland Heritage Number Plate";
  const details = [
    { label: "FORMAT", value: "Auction" },
    { label: "YEAR", value: "2024" },
    { label: "CONDITION", value: "New" },
    { label: "LOCATION", value: "Queensland" },
  ];

  return (
    <section className="md:py-16 py-8">
      <div className="container">
        <Card title={title} details={details} cardImage={productImage} />
        <Card title={title} details={details} cardImage={productImage} />
        <Card title={title} details={details} cardImage={productImage} />
        <Card title={title} details={details} cardImage={productImage} />
      </div>
    </section>
  );
};

export default Watching;
