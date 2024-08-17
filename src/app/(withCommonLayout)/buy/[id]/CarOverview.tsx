import React from "react";
import { BiSolidColorFill } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  IoExtensionPuzzleOutline,
  IoSpeedometerOutline,
} from "react-icons/io5";
import { LuUserCircle } from "react-icons/lu";
import { PiEngine } from "react-icons/pi";
import { RiAuctionLine, RiSteering2Line } from "react-icons/ri";
import { TbManualGearbox } from "react-icons/tb";

const CarOverview = () => {
  return (
    <>
      <div className="p-7 bg-slate-50 rounded-xl">
        <div>
          <h4 className="uppercase font-bold">Car overview</h4>
          <div className="flex flex-col gap-3 mt-5 border-b border-b-slate-200 pb-5 mb-5">
            <div className="flex items-center gap-2">
              <IoSpeedometerOutline className="text-xl" />
              <p className="font-semibold">90 km</p>
            </div>
            <div className="flex items-center gap-2">
              <TbManualGearbox className="text-xl" />
              <p className="font-semibold">manual
              </p>
            </div>
            <div className="flex items-center gap-2">
              <RiSteering2Line className="text-xl" />
              <p className="font-semibold">LHD</p>
            </div>
            <div className="flex items-center gap-2">
              <BiSolidColorFill className="text-xl" />
              <p className="font-semibold">Obsidian Black (197U)</p>
            </div>
            <div className="flex items-center gap-2">
              <IoExtensionPuzzleOutline className="text-xl" />
              <p className="font-semibold">Black</p>
            </div>
            <div className="flex items-center gap-2">
              <PiEngine className="text-xl" />
              <p className="font-semibold">4.0L V8</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[12px] font-bold">VIN</p>
              <p className="font-semibold">WDD2173881A036777</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="uppercase font-bold">Lot Overview</h4>
          <div className="flex flex-col gap-3 mt-5 pb-5">
            <div className="flex items-center gap-2">
              <RiAuctionLine className="text-xl" />
              <p className="font-semibold">Lot #30773</p>
            </div>
            <div className="flex items-center gap-2">
              <LuUserCircle className="text-xl" />
              <p className="font-semibold">trade Sale</p>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-xl" />
              <p className="font-semibold">Znojmo, Czechia</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarOverview;
