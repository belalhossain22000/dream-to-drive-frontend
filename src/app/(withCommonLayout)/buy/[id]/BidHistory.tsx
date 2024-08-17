import React from "react";
import { FiArrowUpCircle } from "react-icons/fi";

const BidHistory = () => {
  return (
    <>
      <div className="p-7 bg-slate-50 rounded-xl mt-5 mb-5">
        <div>
          <h4 className="uppercase font-bold">Bid History</h4>
          <div className="flex flex-col gap-3 mt-5 max-h-[280px] overflow-auto">
            <div className="flex items-center gap-4">
              <FiArrowUpCircle className="text-2xl" />
              <div className="flex flex-col">
                <h4 className="font-bold">A$440,000</h4>
                <p className="text-sm">ahmadkamandi</p>
                <p className="text-[12px]">19 Hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FiArrowUpCircle className="text-2xl" />
              <div className="flex flex-col">
                <h4 className="font-bold">A$440,000</h4>
                <p className="text-sm">ahmadkamandi</p>
                <p className="text-[12px]">19 Hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FiArrowUpCircle className="text-2xl" />
              <div className="flex flex-col">
                <h4 className="font-bold">A$440,000</h4>
                <p className="text-sm">ahmadkamandi</p>
                <p className="text-[12px]">19 Hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FiArrowUpCircle className="text-2xl" />
              <div className="flex flex-col">
                <h4 className="font-bold">A$440,000</h4>
                <p className="text-sm">ahmadkamandi</p>
                <p className="text-[12px]">19 Hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FiArrowUpCircle className="text-2xl" />
              <div className="flex flex-col">
                <h4 className="font-bold">A$440,000</h4>
                <p className="text-sm">ahmadkamandi</p>
                <p className="text-[12px]">19 Hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BidHistory;
