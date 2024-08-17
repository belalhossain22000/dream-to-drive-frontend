"use client";
import React, { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Modal from "@/shared/Modal/Modal";
import { BiddingModal } from "@/components/BiddingModal/BiddingModal";

const Bid = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex lg:flex-row flex-col gap-4 justify-between lg:items-center">
          <div className="flex items-center sm:gap-12 gap-3">
            <Link
              href="/buy"
              className="sm:px-3 py-3 px-2 border border-secondary rounded-lg"
            >
              <IoChevronBackOutline className="sm:text-xl text-base" />
            </Link>
            <div className="flex items-center sm:gap-12 gap-7">
              <div>
                <h2 className="font-bold text-xl">A$82,500</h2>
                <p className="sm:text-base text-sm">Current Bid</p>
              </div>
              <div>
                <div>
                  <h2 className="font-bold text-xl">00:47:36</h2>
                  <p className="sm:text-base text-sm">Today 12:35 PM</p>
                </div>
              </div>
              <div>
                <div>
                  <h2 className="font-bold text-xl">39</h2>
                  <p className="sm:text-base text-sm">Bids</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:items-center gap-2">
            <button
              className={`py-2 px-5 border border-secondary rounded-lg flex items-center gap-2 justify-center ${
                active ? "text-secondary" : ""
              }`}
              onClick={handleClick}
            >
              {active ? (
                <IoMdHeart className="text-lg text-secondary" />
              ) : (
                <IoMdHeartEmpty className="text-lg" />
              )}
              Watch
            </button>
            <Button
              variant="secondary"
              className="min-w-[140px] text-white uppercase col-span-2"
            >
              Place Bid
            </Button>
           <BiddingModal/>
    
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bid;
