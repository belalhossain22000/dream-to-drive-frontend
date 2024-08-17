"use client";
import { useState, useEffect } from "react";
import SectionProdcutSlide from "@/components/homeComponent/auctionsEndingSoon/SectionProdcutSlide";
import FeaturedSection from "@/components/homeComponent/featuredSection/FeaturedSection";
import FindMyDreamCar from "@/components/homeComponent/findMyDreamCar/FindMyDreamCar";
import HomeHeroSection from "@/components/homeComponent/homeSection/HomeHeroSection";
import Search from "@/components/search/Search";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import LoadingAnimation from "@/components/LoadingAnimation/LoadingAnimation";
import { useGetAllProductsQuery } from "@/redux/api/productsApi";
import { ProductDataTypes } from "@/utils/api_data_types";
import { useGetAllBrandsQuery } from "@/redux/api/brandApi";


interface IBrands {
  id: string;
  brandName: string;
}


const Page = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [manufacturer, setManufacturer] = useState([]);
  const [loading, setLoading] = useState(true);


  const { data: products, isLoading } = useGetAllProductsQuery(undefined)

  const { data: brandData, isLoading: brandLoading } = useGetAllBrandsQuery(undefined)
  const brands = brandData?.data
  const productsData = products?.data?.data
  // console.log(brands)
  // Filter products by category
  const allLiveProducts = productsData?.filter((product: ProductDataTypes) => product.status === 'live');
  const commingSoonProducts = productsData?.filter((product: ProductDataTypes) => product.status === 'commingSoon');
  const soldProducts = productsData?.filter((product: ProductDataTypes) => product.status === 'sold');

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dataRes, categoryRes, featuredRes, manufacturerRes] =
          await Promise.all([
            fetch("/products.json"),
            fetch("/category.json"),
            fetch("/featured.json"),
            fetch("/manufacturer.json"),
          ]);

        if (
          !dataRes.ok ||
          !categoryRes.ok ||
          !featuredRes.ok ||
          !manufacturerRes.ok
        ) {
          throw new Error("Network response was not ok");
        }

        const dataJson = await dataRes.json();
        const categoryJson = await categoryRes.json();
        const featuredJson = await featuredRes.json();
        const manufacturerJson = await manufacturerRes.json();

        setData(dataJson || []);
        setCategory(categoryJson || []);
        setFeatured(featuredJson || []);
        setManufacturer(manufacturerJson || []);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <>
      <HomeHeroSection />
      <main>
        <section className="container px-5 mx-auto w-full pt-10">
          <Search />
        </section>
        <SectionProdcutSlide
          title="Auctions Ending Soon"
          data={allLiveProducts}
          link="/buy?category=Coming+Soon"
        />
        <FindMyDreamCar />
        <FeaturedSection  />
        <SectionProdcutSlide
          data={commingSoonProducts}
          title="Coming Soon"
          link="/buy?category=Coming+Soon"
        />
        <SectionProdcutSlide
          data={soldProducts}
          title="Recently Sold"
          link="/buy?category=Sold"
        />
        <section className="py-[60px] bg-slate-200 mt-[80px]">
          <div className="container">
            <h2 className="text-2xl font-bold text-text_color">
              Search by Manufacturer
            </h2>
            <div className="mt-7 flex flex-wrap gap-4">
              {brands?.map((item: IBrands) => (
                <Link href={`/buy?brand=${item?.brandName}`} key={item?.id}>
                  <Badge
                    variant="outline"
                    className="text-base font-semibold border-secondary"
                  >
                    {item?.brandName}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
