"use client";

import { useEffect, useState } from "react";
import Tabs from "@/components/tabs/Tabs";
import PrivateSales from "./PrivateSales";
import Auctions from "./Auctions";
import Banner from "./Banner";

const SellWithUs = () => {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState(null);
  const [activeTabs, setActiveTabs] = useState("auctions");
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/products.json");
        const res2 = await fetch("/category.json");
        const data = await res.json();
        const category = await res2.json();
        setData(data);
        setCategory(category);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const tabs = [
    { key: "auctions", label: "Auctions" },
    // { key: "private-sales", label: "Private Sales" },
  ];

  return (
    <>
      <Banner />
      <Tabs
        tabs={tabs}
        activeTabs={activeTabs}
        setActiveTabs={setActiveTabs}
        setActiveAccordion={setActiveAccordion}
        centerClass={true}
      >
        {activeTabs === "auctions" && <Auctions />}
        {/* {activeTabs === "private-sales" && <PrivateSales />} */}
      </Tabs>
    </>
  );
};

export default SellWithUs;
