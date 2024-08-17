"use client";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { GiSettingsKnobs } from "react-icons/gi";
import { useEffect, useState, Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IoCloseOutline } from "react-icons/io5";
import Accordion from "@/components/accordion/Accordion";
import { Button } from "@/components/ui/button";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {  ProductDataTypes } from "@/utils/api_data_types";
import "./buy.css";
import ProductCardWrapper from "@/components/productCard/ProductCard";
import { handleFilterClick } from "@/utils/buyPageFilterFunctionality";
import { useGetAllProductsQuery } from '@/redux/api/productsApi';
import LoadingAnimation from "@/components/LoadingAnimation/LoadingAnimation";

const Buy = () => {
  const [filterCategory, setFilterCategory] = useState<string[]>([]);
  const [filterProduct, setFilterProduct] = useState<ProductDataTypes | []>([]);
  const [isOpenFilter, setOpenFilter] = useState<boolean>(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);
  const [countryShow, setCountryShow] = useState<boolean>(false);
  const [brandShow, setBrandShow] = useState<boolean>(false);
  const [product, setProduct] = useState([]);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const regionsLength = searchParams.get("regions")?.split(",") || [];
  const countriesLength = searchParams.get("countries")?.split(",") || [];
  const manufacturerLength = searchParams.get("manufacturer")?.split(",") || [];
  const driversSideLength = searchParams.get("driversSide")?.split(",") || [];
  const sellerTypeLength = searchParams.get("sellerType")?.split(",") || [];
  const saleFormatLength = searchParams.get("saleFormat")?.split(",") || [];
  // const category = searchParams.get("category")?.split(",") || [];
 // Collecting filter parameters
 const queryParams = {
  // regions: searchParams.get("regions") || '',
  // country: searchParams.get("countries") || '',
  // manufacturer: searchParams.get("manufacturer") || '',
  // drivingSide: searchParams.get("driversSide") || '',
  // sellerType: searchParams.get("sellerType") || '',
  // saleFormat: searchParams.get("saleFormat") || '',
  status: searchParams.get("status") || 'live', // Default status if not in the query
};
// console.log(queryParams,)

  const { data, isLoading } = useGetAllProductsQuery(queryParams)
  
  const products = data?.data?.data
  const filterNumber = [
    ...regionsLength,
    ...countriesLength,
    ...manufacturerLength,
    ...driversSideLength,
    ...sellerTypeLength,
    ...saleFormatLength,
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/filterCategroy.json");
        const res2 = await fetch("https://raw.githubusercontent.com/Shahed007/Collecting-car/main/products.json");
        const data = await res.json();
        const data2 = await res2.json();
        setFilterCategory(data || []);
        setProduct(data2 || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleActiveAccordion = (id: number) => {
    setActiveAccordion((prevId) => (prevId === id ? null : id));
  };

  const handleFilterOpen = () => {
    setOpenFilter(!isOpenFilter);
    setActiveAccordion(1);
  };

  const clearFilterAll = () => {
    router.push(`${pathname}`, undefined);
  };

  const handleAddCategoryQuery = (value: string = "live") => {
    const currentQuery = new URLSearchParams(searchParams);
    currentQuery.delete("status");
    currentQuery.set("status", value);
   
    const newQueryString = currentQuery.toString();
    const newUrl = `${pathname}?${newQueryString}`;
    router.push(newUrl);
  };

  useEffect(() => {
    handleAddCategoryQuery();
  }, []);

  if(isLoading){
    return <LoadingAnimation/>
  }
  return (
    <section className="min-h-screen flex relative">
      <motion.aside
        initial={{ width: "0px" }}
        animate={{ width: isOpenFilter ? "280px" : "0%" }}
        transition={{ ease: "easeIn", duration: 0.7 }}
        className="bg-slate-50 border-r overflow-y-scroll h-auto top-0 left-0 absolute z-[200] xl:sticky"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpenFilter ? 1 : 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: isOpenFilter ? 0.7 : 0,
          }}
          className="px-3 py-6"
        >
          <div className="flex items-center justify-between">
            <h4 className="text-xl">Filter</h4>
            <button
              className="h-10 w-10 text-lg hover:bg-slate-300 transition-all rounded-full flex items-center justify-center"
              onClick={() => setOpenFilter(false)}
            >
              <IoCloseOutline className="text-secondary" />
            </button>
          </div>
          <div className="mt-7 flex flex-col gap-6">
            <Accordion
              title="Region"
              handleActiveAccordion={handleActiveAccordion}
              id={1}
              activeAccordion={activeAccordion}
            >
              <div className="flex flex-wrap gap-2">
                {regionsArray.map((item, idx) => (
                  <div key={idx}>
                    <label htmlFor={item.region.toLowerCase()}>
                      <Badge
                        className={cn(
                          "text-base text-text_color font-normal",
                          searchParams
                            .get("regions")
                            ?.split(",")
                            .includes(item.region) && "border-secondary"
                        )}
                        variant="outline"
                      >
                        {item.region} ({item.value})
                      </Badge>
                    </label>
                    <input
                      className="hidden"
                      type="checkbox"
                      value={item.region.toLowerCase()}
                      name={item.region.toLowerCase()}
                      id={item.region.toLowerCase()}
                      onChange={() =>
                        handleFilterClick(
                          "regions",
                          item.region,
                          searchParams,
                          router,
                          pathname
                        )
                      }
                    />
                  </div>
                ))}
              </div>
            </Accordion>
            <Accordion
              title="Country"
              handleActiveAccordion={handleActiveAccordion}
              id={2}
              activeAccordion={activeAccordion}
            >
              <div className="flex flex-wrap gap-2">
                {!countryShow &&
                  countries.slice(0, 5).map((item, idx) => (
                    <div key={idx}>
                      <label htmlFor={item.country.toLowerCase()}>
                        <Badge
                          className={cn(
                            "text-base text-text_color font-normal",
                            searchParams
                              .get("countries")
                              ?.split(",")
                              .includes(item.country) && "border-secondary"
                          )}
                          variant="outline"
                        >
                          {item.country} ({item.value})
                        </Badge>
                      </label>
                      <input
                        className="hidden"
                        type="checkbox"
                        value={item.country.toLowerCase()}
                        name={item.country.toLowerCase()}
                        id={item.country.toLowerCase()}
                        onChange={() =>
                          handleFilterClick(
                            "countries",
                            item.country,
                            searchParams,
                            router,
                            pathname
                          )
                        }
                      />
                    </div>
                  ))}
                {countryShow &&
                  countries.map((item, idx) => (
                    <div key={idx}>
                      <label htmlFor={item.country.toLowerCase()}>
                        <Badge
                          className={cn(
                            "text-base text-text_color font-normal",
                            searchParams
                              .get("countries")
                              ?.split(",")
                              .includes(item.country) && "border-secondary"
                          )}
                          variant="outline"
                        >
                          {item.country} ({item.value})
                        </Badge>
                      </label>
                      <input
                        className="hidden"
                        type="checkbox"
                        value={item.country.toLowerCase()}
                        name={item.country.toLowerCase()}
                        id={item.country.toLowerCase()}
                        onChange={() =>
                          handleFilterClick(
                            "countries",
                            item.country,
                            searchParams,
                            router,
                            pathname
                          )
                        }
                      />
                    </div>
                  ))}
                <div className="mt-3">
                  <Button
                    onClick={() => setCountryShow(!countryShow)}
                    variant="link"
                    className="flex items-center gap-2"
                  >
                    {!countryShow ? <FaPlus /> : <FaMinus />}
                    {!countryShow ? ` Show More` : `Show Less`}
                  </Button>
                </div>
              </div>
            </Accordion>
            <Accordion
              title="Manufacturer"
              handleActiveAccordion={handleActiveAccordion}
              id={3}
              activeAccordion={activeAccordion}
            >
              <div className="flex flex-wrap gap-2">
                {!brandShow &&
                  carBrands.slice(0, 5).map((item, idx) => (
                    <div key={idx}>
                      <label htmlFor={item.brand.toLowerCase()}>
                        <Badge
                          className={cn(
                            "text-base text-text_color font-normal",
                            searchParams
                              .get("manufacturer")
                              ?.split(",")
                              .includes(item.brand) && "border-secondary"
                          )}
                          variant="outline"
                        >
                          {item.brand} ({item.value})
                        </Badge>
                      </label>
                      <input
                        className="hidden"
                        type="checkbox"
                        value={item.brand.toLowerCase()}
                        name={item.brand.toLowerCase()}
                        id={item.brand.toLowerCase()}
                        onChange={() =>
                          handleFilterClick(
                            "manufacturer",
                            item.brand,
                            searchParams,
                            router,
                            pathname
                          )
                        }
                      />
                    </div>
                  ))}
                {brandShow &&
                  carBrands.map((item, idx) => (
                    <div key={idx}>
                      <label htmlFor={item.brand.toLowerCase()}>
                        <Badge
                          className={cn(
                            "text-base text-text_color font-normal",
                            searchParams
                              .get("manufacturer")
                              ?.split(",")
                              .includes(item.brand) && "border-secondary"
                          )}
                          variant="outline"
                        >
                          {item.brand} ({item.value})
                        </Badge>
                      </label>
                      <input
                        className="hidden"
                        type="checkbox"
                        value={item.brand.toLowerCase()}
                        name={item.brand.toLowerCase()}
                        id={item.brand.toLowerCase()}
                        onChange={() =>
                          handleFilterClick(
                            "manufacturer",
                            item.brand,
                            searchParams,
                            router,
                            pathname
                          )
                        }
                      />
                    </div>
                  ))}
                <div className="mt-3">
                  <Button
                    onClick={() => setBrandShow(!brandShow)}
                    variant="link"
                    className="flex items-center gap-2"
                  >
                    {!brandShow ? <FaPlus /> : <FaMinus />}
                    {!brandShow ? ` Show More` : `Show Less`}
                  </Button>
                </div>
              </div>
            </Accordion>
            <Accordion
              title="Drivers Side"
              handleActiveAccordion={handleActiveAccordion}
              id={4}
              activeAccordion={activeAccordion}
            >
              <div className="flex flex-wrap gap-2">
                {steering.map((item, idx) => (
                  <div key={idx}>
                    <label htmlFor={item.type.toLowerCase()}>
                      <Badge
                        className={cn(
                          "text-base text-text_color font-normal",
                          searchParams
                            .get("driversSide")
                            ?.split(",")
                            .includes(item.type) && "border-secondary"
                        )}
                        variant="outline"
                      >
                        {item.type} ({item.value})
                      </Badge>
                    </label>
                    <input
                      className="hidden"
                      type="checkbox"
                      value={item.type.toLowerCase()}
                      name={item.type.toLowerCase()}
                      id={item.type.toLowerCase()}
                      onChange={() =>
                        handleFilterClick(
                          "driversSide",
                          item.type,
                          searchParams,
                          router,
                          pathname
                        )
                      }
                    />
                  </div>
                ))}
              </div>
            </Accordion>
          
          </div>
        </motion.div>
      </motion.aside>
      <div className="flex-1">
        <nav className="border-b px-5 xl:px-14">
          <div className="flex items-center justify-between py-3 md:flex-row flex-col gap-3">
            <div className="flex-1 flex items-center w-full">
              <div className="relative flex w-full">
                <CiSearch className="absolute left-4 text-xl text-gray-700 top-[22%]" />
                <Input
                  className="pl-10 rounded-full w-full block"
                  type="text"
                />
              </div>
            </div>
            <div className="flex-1 flex justify-end gap-6 items-center">
              <div>
                <Select defaultValue="ending-soonest">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectGroup>
                      <SelectItem value="ending-soonest">
                        Ending soonest
                      </SelectItem>
                      <SelectItem value="newest">Age (newest)</SelectItem>
                      <SelectItem value="old">Age (oldest)</SelectItem>
                      <SelectItem value="a-z">Manufacturer (A - Z)</SelectItem>
                      <SelectItem value="z-a">Manufacturer (Z - A)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Badge
                  onClick={handleFilterOpen}
                  variant="outline"
                  className={cn(
                    "cursor-pointer flex items-center gap-2 relative text-lg font-normal",
                    isOpenFilter ? "border-primary" : ""
                  )}
                >
                  Filter
                  <GiSettingsKnobs />
                  {filterNumber.length ? (
                    <div className="absolute -right-2 top-0 size-[20px] rounded-full bg-secondary text-white flex justify-center items-center text-[12px]">
                      {filterNumber.length}
                    </div>
                  ) : (
                    ""
                  )}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 py-3">
            {filterCategory.map((item, idx) => (
              <Badge
                onClick={() => handleAddCategoryQuery(item)}
                className={cn(
                  "p-1 px-3 md:p-2 cursor-pointer text-sm font-lato font-medium",
                  searchParams.get("category") === item
                    ? "border-secondary"
                    : ""
                )}
                variant="outline"
                key={idx}
              >
                {item}
              </Badge>
            ))}
          </div>
        </nav>
        <div className="py-3 px-5 xl:px-14">
          <div className="py-5 flex gap-4 md:flex-row flex-col">
            <h4 className="lg:w-[140px] md:w-[200px]">
              ({data?.data?.meta?.total}) Results
            </h4>
            <div className="flex gap-3 flex-wrap">
              {regionsLength?.map((item, idx) => (
                <button
                  onClick={() =>
                    handleFilterClick(
                      "regions",
                      item,
                      searchParams,
                      router,
                      pathname
                    )
                  }
                  key={idx}
                  className="bg-slate-100 text-sm px-3 py-1 flex items-center gap-2 rounded-full"
                >
                  {item} <IoCloseOutline />
                </button>
              ))}
              {countriesLength?.map((item, idx) => (
                <button
                  onClick={() =>
                    handleFilterClick(
                      "countries",
                      item,
                      searchParams,
                      router,
                      pathname
                    )
                  }
                  key={idx}
                  className="bg-slate-100 text-sm px-3 py-1 flex items-center gap-2 rounded-full"
                >
                  {item} <IoCloseOutline />
                </button>
              ))}
              {manufacturerLength?.map((item, idx) => (
                <button
                  onClick={() =>
                    handleFilterClick(
                      "manufacturer",
                      item,
                      searchParams,
                      router,
                      pathname
                    )
                  }
                  key={idx}
                  className="bg-slate-100 text-sm px-3 py-1 flex items-center gap-2 rounded-full"
                >
                  {item} <IoCloseOutline />
                </button>
              ))}
              {driversSideLength?.map((item, idx) => (
                <button
                  onClick={() =>
                    handleFilterClick(
                      "driversSide",
                      item,
                      searchParams,
                      router,
                      pathname
                    )
                  }
                  key={idx}
                  className="bg-slate-100 text-sm px-3 py-1 flex items-center gap-2 rounded-full"
                >
                  {item} <IoCloseOutline />
                </button>
              ))}
              {sellerTypeLength?.map((item, idx) => (
                <button
                  onClick={() =>
                    handleFilterClick(
                      "sellerType",
                      item,
                      searchParams,
                      router,
                      pathname
                    )
                  }
                  key={idx}
                  className="bg-slate-100 text-sm px-3 py-1 flex items-center gap-2 rounded-full"
                >
                  {item} <IoCloseOutline />
                </button>
              ))}
              {saleFormatLength?.map((item, idx) => (
                <button
                  onClick={() =>
                    handleFilterClick(
                      "saleFormat",
                      item,
                      searchParams,
                      router,
                      pathname
                    )
                  }
                  key={idx}
                  className="bg-slate-100 text-sm px-3 py-1 flex items-center gap-2 rounded-full"
                >
                  {item} <IoCloseOutline />
                </button>
              ))}
              {filterNumber.length ? (
                <button
                  onClick={clearFilterAll}
                  className="bg-secondary font text-sm font-semibold px-3 py-1 rounded-full"
                >
                  Clear
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="grid grid-cols-5 gap-6 pb-12">
            {products?.map((item:ProductDataTypes) => (
              <ProductCardWrapper key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SuspenseWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Buy />
  </Suspense>
);

export default SuspenseWrapper;

const regionsArray: { region: string; value: number }[] = [
  { region: "UK", value: 94 },
  { region: "Europe", value: 53 },
  { region: "APAC", value: 33 },
];

const countries: { country: string; value: number }[] = [
  { country: "United Kingdom", value: 94 },
  { country: "Australia", value: 33 },
  { country: "Sweden", value: 14 },
  { country: "Netherlands", value: 10 },
  { country: "France", value: 3 },
  { country: "New Zealand", value: 2 },
  { country: "Italy", value: 10 },
  { country: "Germany", value: 7 },
  { country: "Estonia", value: 2 },
  { country: "Poland", value: 2 },
  { country: "Austria", value: 1 },
  { country: "Spain", value: 1 },
  { country: "Japan", value: 1 },
  { country: "Norway", value: 1 },
  { country: "Denmark", value: 1 },
  { country: "Hong Kong", value: 1 },
  { country: "Lithuania", value: 1 },
];

const carBrands: { brand: string; value: number }[] = [
  { brand: "Porsche", value: 35 },
  { brand: "BMW", value: 11 },
  { brand: "Ferrari", value: 8 },
  { brand: "Ford", value: 6 },
  { brand: "Alfa Romeo", value: 5 },
  { brand: "Audi", value: 4 },
  { brand: "Mercedes-Benz", value: 16 },
  { brand: "Land Rover", value: 10 },
  { brand: "Aston Martin", value: 7 },
  { brand: "Jaguar", value: 6 },
  { brand: "Subaru", value: 5 },
  { brand: "Bentley", value: 4 },
  { brand: "Lamborghini", value: 4 },
  { brand: "Range Rover", value: 4 },
  { brand: "Chevrolet", value: 2 },
  { brand: "Mitsubishi", value: 2 },
  { brand: "Toyota", value: 2 },
  { brand: "Alpina", value: 1 },
  { brand: "Caterham", value: 1 },
  { brand: "Citroén", value: 1 },
  { brand: "Dodge", value: 1 },
  { brand: "Mini", value: 4 },
  { brand: "Volkswagen", value: 3 },
  { brand: "Maserati", value: 2 },
  { brand: "TVR", value: 2 },
  { brand: "ABARTH", value: 1 },
  { brand: "Austin", value: 1 },
  { brand: "Chrysler", value: 1 },
  { brand: "Datsun", value: 1 },
  { brand: "Fiat", value: 1 },
  { brand: "Ginetta", value: 1 },
  { brand: "Harley-Davidson", value: 1 },
  { brand: "Honda", value: 1 },
  { brand: "Hummer", value: 1 },
  { brand: "MV Agusta", value: 1 },
  { brand: "Nissan", value: 1 },
  { brand: "Renault", value: 1 },
  { brand: "Vauxhall", value: 1 },
  { brand: "Lotus", value: 1 },
  { brand: "Morgan", value: 1 },
  { brand: "Opel", value: 1 },
  { brand: "Tesla", value: 1 },
  { brand: "Pontiac", value: 1 },
];

const steering: { type: string; value: number }[] = [
  { type: "RHD", value: 99 },
  { type: "LHD", value: 60 },
];

const sellers: { type: string; value: number }[] = [
  { type: "Private", value: 148 },
  { type: "Managed", value: 3 },
  { type: "Trade", value: 40 },
];

const salesMethods: { type: string; value: number }[] = [
  { type: "Auction", value: 189 },
  { type: "Best Offer", value: 2 },
];
