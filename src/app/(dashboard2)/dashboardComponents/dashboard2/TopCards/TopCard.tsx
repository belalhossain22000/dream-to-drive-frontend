import React from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { RiAuctionLine } from 'react-icons/ri';

const TopCard = ({ totalCount, text }: { totalCount: number, text: string }) => {
  return (
    <div className="bg-primary rounded-xl overflow-hidden border border-gray-500 hover:opacity-90 cursor-pointer duration-300">
      <div className="flex items-start justify-between p-5">
        <div className="flex items-center gap-5">
          <span className="bg-slate-50 bg-opacity-30 inline-block p-4 rounded-full text-2xl">
            <RiAuctionLine />
          </span>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              {totalCount?totalCount:0}
            </h2>
            <p className="text-lg">{text?text:"coming"}</p>
          </div>
        </div>
        <div>
          <span className="inline-block p-2 hover:bg-slate-100 hover:bg-opacity-30 rounded-full duration-300 cursor-pointer">
            <HiOutlineDotsVertical />
          </span>
        </div>
      </div>
      <div className="bg-teal-200 border-t border-gray-500 p-5 mt-5"></div>
    </div>

  );
};

export default TopCard;