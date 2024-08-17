"use client";

import { ChangeEvent, useEffect, useState, useRef } from "react";
import { Input } from "../ui/input";
import { IoIosSearch } from "react-icons/io";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useFilterProductQuery } from "@/redux/api/productsApi";
import { ProductDataTypes } from "@/utils/api_data_types";
import Image from "next/image";
import ProductCardWrapper from "../productCard/ProductCard";
import CardSkeleton from "../CardSkeleton/CardSkeleton";

const Search = () => {
  const [isActiveSearch, setIsActiveSearch] = useState("");
  const [searchData, setSearchData] = useState<ProductDataTypes[] | []>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading } = useFilterProductQuery(searchTerm);

  const handleSearch = (e: ChangeEvent<HTMLInputElement> | undefined) => {
    const value = e?.target.value || "";
    setIsActiveSearch(value);

    // Clear previous timeout
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set new timeout
    const newTimeout = setTimeout(() => {
      setSearchTerm(value);
    }, 500);

    setDebounceTimeout(newTimeout);
  };

  useEffect(() => {
    const handleBodyClick = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsActiveSearch("");
      }
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [debounceTimeout]);

  useEffect(() => {
    // Update searchData when data changes
    if (data?.data?.data) {
      setSearchData(data.data.data);
    } else {
      setSearchData([]);
    }
  }, [data]);

  return (
    <div className="relative" ref={searchContainerRef}>
      <div className="flex items-center max-w-3xl mx-auto">
        <IoIosSearch className="-mr-[32px] text-2xl relative z-50 text-gray-500" />
        <Input
          value={isActiveSearch}
          onChange={handleSearch}
          className="bg-slate-50 pl-10 z-40 rounded-full"
          type="text"
          placeholder="Search for name, model, category, etc."
        />
      </div>
      <motion.div
        initial={{ opacity: 0, visibility: "hidden" }}
        animate={{
          opacity: isActiveSearch ? 1 : 0,
          visibility: isActiveSearch ? "visible" : "hidden",
        }}
        className="shadow-md absolute top-[43px] left-0 z-50 border rounded-md w-full bg-white"
      >
        {searchData.length === 0 && !isLoading ? (
          <div className="p-4 flex min-h-[200px] justify-center items-center">
            No car found for this Search
          </div>
        ) : (
          <div className="min-h-[200px] grid grid-cols-3 gap-6">
            {isLoading ? <CardSkeleton /> : searchData.map((item) => (
              <ProductCardWrapper key={item.id} item={item} />
            ))}
          </div>
        )}
        <div className="p-4 flex justify-end">
          <Button
            variant="link"
            className="text-text_color hover:text-secondary"
          >
            View All
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Search;
