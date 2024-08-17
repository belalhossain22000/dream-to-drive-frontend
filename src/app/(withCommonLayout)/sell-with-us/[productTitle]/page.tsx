"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import bannerImage from "@/assets/sell-with-us/blue-car.webp";
import Tabs from "@/components/tabs/Tabs";
import { RxTimer } from "react-icons/rx";
import { LiaUserTagSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa6";
import { MdOutlinePrivacyTip } from "react-icons/md";
import SectionProdcutSlide from "@/components/homeComponent/auctionsEndingSoon/SectionProdcutSlide";
import { useGetAllProductsQuery } from "@/redux/api/productsApi";
import { ProductDataTypes } from "@/utils/api_data_types";

const SellDeatilsCar = () => {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);
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

    console.log(data,"category",category)
    const tabs = [
        { key: "auctions", label: "Auctions" },
        { key: "private-sales", label: "Private Sales" },
    ];

    return (
        <>
            <main className="py-20 relative overflow-hidden z-[2]">
                <div className="container mx-auto px-4 relative z-[3]">
                    <h1 className="text-4xl uppercase font-bold text-white">
                        YOUR CAR IN GOOD COMPANY
                    </h1>
                    <p className="mt-3 mb-4 lg:text-2xl text-base text-white">
                        Get a free valuation today
                    </p>
                    <Button
                        className="md:px-12 px-8 py-4 md:py-6 text-base text-white font-semibold"
                        variant="secondary"
                    >
                        Submit your vehicle
                    </Button>
                </div>
                <div className="h-full w-full absolute inset-0 bg-black/50 z-[1]"></div>
                <Image
                    src={bannerImage}
                    alt="A luxurious blue car"
                    height={800}
                    width={1200}
                    className="object-cover w-full h-full absolute inset-0 z-[-1]"
                />
            </main>
            <Tabs
                tabs={tabs}
                activeTabs={activeTabs}
                setActiveTabs={setActiveTabs}
                setActiveAccordion={setActiveAccordion}
                centerClass={true}
            >
                {activeTabs === "auctions" && (
                    <>
                        <section className="py-14">
                            <div className="container">
                                <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-20 gap-8 items-center">
                                    <div className="lg:max-w-[520px] lg:col-span-5 col-span-1 w-full">
                                        <div className="flex md:flex-row flex-col md:justify-start justify-center items-center gap-2 mb-5">
                                            <RxTimer className="text-3xl" />
                                            <h2 className="text-2xl font-semibold">Auctions</h2>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex gap-6 items-center border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                                                <LiaUserTagSolid className="text-3xl shrink-0" />
                                                <div>
                                                    <h4 className="mb-1 font-bold">No seller fees</h4>
                                                    <p>
                                                        Free to list and receive 100% of the winning bid
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-6 items-center border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                                                <LiaUserTagSolid className="text-3xl shrink-0" />
                                                <div>
                                                    <h4 className="mb-1 font-bold">
                                                        Sell with confidence
                                                    </h4>
                                                    <p>
                                                        Set a reserve price and sell with peace of mind,
                                                        ensuring your needs are met
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-6 items-center border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                                                <LiaUserTagSolid className="text-3xl shrink-0" />
                                                <div>
                                                    <h4 className="mb-1 font-bold">Maximise your sale</h4>
                                                    <p>
                                                        80% of cars achieve higher prices through 7 day
                                                        auctions
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Button
                                            className="md:px-12 px-8 py-4 md:py-6 text-base text-white font-semibold w-full mt-5"
                                            variant="secondary"
                                        >
                                            Submit your vehicle
                                        </Button>
                                    </div>
                                    <div className="lg:col-span-7 col-span-1">
                                        <Image
                                            src={bannerImage}
                                            width={1200}
                                            height={700}
                                            alt="A blue luxury car"
                                            className="w-full rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="lg:py-14 pt-0 pb-14">
                            <div className="container">
                                <h2 className="text-2xl font-semibold md:mb-12 mb-8">
                                    How it works
                                </h2>
                                <div className=" grid md:grid-cols-3 grid-cols-1 lg:gap-16 gap-10">
                                    <div>
                                        <h3 className="text-5xl mb-4 font-semibold">01</h3>
                                        <h4 className="font-bold mb-2">Submit your vehicle</h4>
                                        <p>
                                            A dedicated consignment specialist will usually call
                                            within 2 hours to discuss your enquiry.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-5xl mb-4 font-semibold">02</h3>
                                        <h4 className="font-bold mb-2">Submit your vehicle</h4>
                                        <p>
                                            A dedicated consignment specialist will usually call
                                            within 2 hours to discuss your enquiry.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-5xl mb-4 font-semibold">03</h3>
                                        <h4 className="font-bold mb-2">Submit your vehicle</h4>
                                        <p>
                                            A dedicated consignment specialist will usually call
                                            within 2 hours to discuss your enquiry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="py-14 bg-slate-50">
                            <div className="container">
                                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-14 gap-5 items-center">
                                    <div>
                                        <Image
                                            src={bannerImage}
                                            width={1200}
                                            height={500}
                                            alt="A luxurious blue car."
                                            className="w-full rounded-xl"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-8">
                                        <div>
                                            <h2 className="font-bold mb-2 md:text-3xl text-xl">
                                                Short on time? Use our Managed Service
                                            </h2>
                                            <p>
                                                The ideal solution for when you want your car
                                                professionally presented, but do not have time to
                                                organise it yourself.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold mb-3">
                                                Why choose a Managed Service?
                                            </h3>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex gap-3 items-center">
                                                    <FaCheck className="text-green-500" />
                                                    <p>Our specialist partner will handle everything</p>
                                                </div>
                                                <div className="flex gap-3 items-center">
                                                    <FaCheck className="text-green-500" />
                                                    <p>Your car is collected, prepared & photographed</p>
                                                </div>
                                                <div className="flex gap-3 items-center">
                                                    <FaCheck className="text-green-500" />
                                                    <p>A proven formula to achieve the best result</p>
                                                </div>
                                                <div className="flex gap-3 items-center">
                                                    <FaCheck className="text-green-500" />
                                                    <p>
                                                        Short on time? This is the ideal ‘hands-off’ route
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold mb-2">What next?</h3>
                                            <p>
                                                Let us know if you’re interested during your initial
                                                enquiry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {data && (
                            <SectionProdcutSlide title="Auctions Ending Soon" data={data} />
                        )}
                        <section className="py-14 bg-slate-50">
                            <div className="container">
                                <h2 className="text-2xl font-semibold md:mb-8 mb-8">
                                    Any questions?
                                </h2>
                                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-4">
                                    <div className="p-6 bg-white rounded-xl">
                                        <h3 className="mb-4 font-bold">
                                            Can I discuss a consignment with you without signing up?
                                        </h3>
                                        <p>
                                            Yes, contact us now or select ‘Sell with us’ - there’s no
                                            need to create an account or sign in.
                                        </p>
                                    </div>
                                    <div className="p-6 bg-white rounded-xl">
                                        <h3 className="mb-4 font-bold">
                                            How do I know if you’re interested in my listing?
                                        </h3>
                                        <p>
                                            Talk to us! Our passion and experience encompass cars and
                                            automobilia of all types and eras, from vintage icons
                                            through to popular modern classics.
                                        </p>
                                    </div>
                                    <div className="p-6 bg-white rounded-xl">
                                        <h3 className="mb-2 font-bold">
                                            Will you consign everything that you’re offered?
                                        </h3>
                                        <p>
                                            No, we curate our listings carefully and not every
                                            offering will be consigned. We will give every offering
                                            equal consideration.
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    className="border-green-500 text-green-500 mt-8"
                                >
                                    View All Faqs
                                </Button>
                            </div>
                        </section>
                        <section className="py-14 relative overflow-hidden z-[2]">
                            <div className="container mx-auto px-4 relative z-[3]">
                                <div className="flex lg:flex-row flex-col gap-6 justify-between items-center">
                                    <div>
                                        <h1 className="text-4xl uppercase font-bold text-white lg:text-start text-center">
                                            YOUR CAR IN GOOD COMPANY
                                        </h1>
                                        <p className="mt-3 text-base text-white lg:text-start text-center">
                                            Sell for free, in 7 days
                                        </p>
                                    </div>
                                    <div>
                                        <Button
                                            className="md:px-12 px-8 py-4 md:py-6 text-base text-white font-semibold"
                                            variant="secondary"
                                        >
                                            Submit your vehicle
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full w-full absolute inset-0 bg-black/50 z-[1]"></div>
                            <Image
                                src={bannerImage}
                                alt="A luxurious blue car"
                                height={800}
                                width={1200}
                                className="object-cover w-full h-full absolute inset-0 z-[-1]"
                            />
                        </section>
                    </>
                )}
                {activeTabs === "private-sales" && (
                    <>
                        <section className="py-14">
                            <div className="container">
                                <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-20 gap-8 items-center">
                                    <div className="lg:max-w-[520px] lg:col-span-5 col-span-1 w-full">
                                        <div className="flex md:flex-row flex-col md:justify-start justify-center items-center gap-2 mb-5">
                                            <MdOutlinePrivacyTip className="text-3xl" />
                                            <h2 className="text-2xl font-semibold">Private Sales</h2>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <p>
                                                Our white glove service, offering a personalised
                                                experience every step of the way.
                                                <br />
                                                <br /> We take care of everything, from fully managed
                                                storage and transportation to providing an inspection
                                                report, photography, and videography services.
                                            </p>
                                        </div>
                                        <Button
                                            className="md:px-12 px-8 py-4 md:py-6 text-base text-white font-semibold w-full mt-5"
                                            variant="secondary"
                                        >
                                            Enquire Now
                                        </Button>
                                    </div>
                                    <div className="lg:col-span-7 col-span-1">
                                        <Image
                                            src={bannerImage}
                                            width={1200}
                                            height={700}
                                            alt="A blue luxury car"
                                            className="w-full rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="lg:py-14 pt-0 pb-14">
                            <div className="container">
                                <h2 className="text-2xl font-semibold md:mb-12 mb-8 md:text-start text-center">
                                    Why Private Sales?
                                </h2>
                                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-16 gap-5">
                                    <div>
                                        <h4 className="font-semibold mb-2">Submit your vehicle</h4>
                                        <div className="flex gap-3 items-center">
                                            <FaCheck className="text-green-500" />
                                            <p>6% + VAT (capped at £50k)</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Submit your vehicle</h4>
                                        <div className="flex gap-3 items-center">
                                            <FaCheck className="text-green-500" />
                                            <p>6% + VAT (capped at £50k)</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Submit your vehicle</h4>
                                        <div className="flex gap-3 items-center">
                                            <FaCheck className="text-green-500" />
                                            <p>6% + VAT (capped at £50k)</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Submit your vehicle</h4>
                                        <div className="flex gap-3 items-center">
                                            <FaCheck className="text-green-500" />
                                            <p>6% + VAT (capped at £50k)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="py-14 bg-slate-50">
                            <div className="container">
                                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-14 gap-5 items-center">
                                    <div className="flex flex-col gap-8">
                                        <div>
                                            <h2 className="font-bold mb-2 md:text-3xl text-xl">
                                                Short on time? Use our Managed Service
                                            </h2>
                                            <p>
                                                The ideal solution for when you want your car
                                                professionally presented, but do not have time to
                                                organise it yourself.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold mb-3">
                                                Why choose a Managed Service?
                                            </h3>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex gap-3 items-center">
                                                    <FaCheck className="text-green-500" />
                                                    <p>Our specialist partner will handle everything</p>
                                                </div>
                                                <div className="flex gap-3 items-center">
                                                    <FaCheck className="text-green-500" />
                                                    <p>Your car is collected, prepared & photographed</p>
                                                </div>
                                                <div className="flex gap-3 items-center">
                                                    <FaCheck className="text-green-500" />
                                                    <p>A proven formula to achieve the best result</p>
                                                </div>
                                                <div className="flex gap-3 items-center">
                                                    <FaCheck className="text-green-500" />
                                                    <p>
                                                        Short on time? This is the ideal ‘hands-off’ route
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold mb-2">What next?</h3>
                                            <p>
                                                Let us know if you’re interested during your initial
                                                enquiry.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <Image
                                            src={bannerImage}
                                            width={1200}
                                            height={500}
                                            alt="A luxurious blue car."
                                            className="w-full rounded-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="py-14 bg-slate-50">
                            <div className="container">
                                <h2 className="text-2xl font-semibold md:mb-8 mb-8">
                                    Any questions?
                                </h2>
                                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-4">
                                    <div className="p-6 bg-white rounded-xl">
                                        <h3 className="mb-4 font-bold">
                                            Can I discuss a consignment with you without signing up?
                                        </h3>
                                        <p>
                                            Yes, contact us now or select ‘Sell with us’ - there’s no
                                            need to create an account or sign in.
                                        </p>
                                    </div>
                                    <div className="p-6 bg-white rounded-xl">
                                        <h3 className="mb-4 font-bold">
                                            How do I know if you’re interested in my listing?
                                        </h3>
                                        <p>
                                            Talk to us! Our passion and experience encompass cars and
                                            automobilia of all types and eras, from vintage icons
                                            through to popular modern classics.
                                        </p>
                                    </div>
                                    <div className="p-6 bg-white rounded-xl">
                                        <h3 className="mb-2 font-bold">
                                            Will you consign everything that you’re offered?
                                        </h3>
                                        <p>
                                            No, we curate our listings carefully and not every
                                            offering will be consigned. We will give every offering
                                            equal consideration.
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    className="border-green-500 text-green-500 mt-8"
                                >
                                    View All Faqs
                                </Button>
                            </div>
                        </section>
                        <section className="py-14 relative overflow-hidden z-[2]">
                            <div className="container mx-auto px-4 relative z-[3]">
                                <div className="flex lg:flex-row flex-col gap-6 justify-between items-center">
                                    <div>
                                        <h1 className="text-4xl uppercase font-bold text-white lg:text-start text-center">
                                            YOUR CAR IN GOOD COMPANY
                                        </h1>
                                        <p className="mt-3 text-base text-white lg:text-start text-center">
                                            Sell for free, in 7 days
                                        </p>
                                    </div>
                                    <div>
                                        <Button
                                            className="md:px-12 px-8 py-4 md:py-6 text-base text-white font-semibold"
                                            variant="secondary"
                                        >
                                            Submit your vehicle
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full w-full absolute inset-0 bg-black/50 z-[1]"></div>
                            <Image
                                src={bannerImage}
                                alt="A luxurious blue car"
                                height={800}
                                width={1200}
                                className="object-cover w-full h-full absolute inset-0 z-[-1]"
                            />
                        </section>
                    </>
                )}
            </Tabs>
        </>
    );
};

export default SellDeatilsCar;
