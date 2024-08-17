"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { MdDriveFolderUpload } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { RiAuctionLine } from "react-icons/ri";
import { LiaCarSolid } from "react-icons/lia";

const SidebarLinks = () => {
  const [manageUserIsOpen, setManageUserIsOpen] = useState(false);
  const [manageAuctionIsOpen, setManageAuctionIsOpen] = useState(false);
  const [manageProductIsOpen, setManageProductIsOpen] = useState(false);
  return (
    <div className="p-2">
      {/* navlink 1 ---------------------------------------------------------*/}
      <Link
        href={"/dashboard2"}
        className="flex items-center w-full justify-between p-4 rounded-xl hover:bg-secondary duration-300 gap-8"
      >
        <div className="flex items-center text-white gap-5">
          <span>
            <MdDriveFolderUpload size={25} />
          </span>
          <span className="font-bold text-sm">Dashboard</span>
        </div>
        {/* right arrow  */}
        {/* <span className="text-white">
            <FaAngleRight size={12} />
          </span> */}
      </Link>
      {/* navlink 3 manage cars-----------------------------------------------------*/}
      <div>
        <div
          onClick={() => setManageProductIsOpen(!manageProductIsOpen)}
          className="flex items-center w-full justify-between p-4 rounded-xl hover:bg-secondary duration-300 gap-8"
        >
          <div className="flex items-center text-white gap-5">
            <span>
              <LiaCarSolid size={21} />
            </span>
            <span className="font-bold text-sm">Manage Cars</span>
          </div>
          {/* right arrow  */}
          <span className="text-white">
            <FaAngleRight
              size={12}
              className={`${manageProductIsOpen ? "rotate-90" : ""
                } duration-300`}
            />
          </span>
        </div>
        <div
          className={`flex flex-col items-start overflow-hidden duration-300 ${manageProductIsOpen ? "h-full opacity-100" : "h-[0px] opacity-0"
            } `}
        >
          <Link
            className="p-2 px-4 rounded-xl hover:bg-secondary duration-300 w-full text-white"
            href={"/dashboard2/comming-soon"}
          >
            Comming soon
          </Link>
          <Link
            className="p-2 px-4 rounded-xl hover:bg-secondary duration-300 w-full text-white"
            href={"/dashboard2/auction-ending-soon"}
          >
            Auction ending soon
          </Link>
          <Link
            className="p-2 px-4 rounded-xl hover:bg-secondary duration-300 w-full font-midium text-white"
            href={"/dashboard2/recently-sold"}
          >
            Recently sold
          </Link>

          <Link
            className="p-2 px-4 rounded-xl hover:bg-secondary duration-300 w-full font-midium text-white"
            href={"/dashboard2/upload-vehicle"}
          >
            Upload Vehicle
          </Link>
        </div>
      </div>
      {/* navlink 2 manage auctions ------------------------------------------------------- */}
      <div>
        <div
          onClick={() => setManageAuctionIsOpen(!manageAuctionIsOpen)}
          className="flex items-center w-full justify-between p-4 rounded-xl hover:bg-secondary duration-300 gap-8"
        >
          <div className="flex items-center text-white gap-5">
            <span>
              <RiAuctionLine size={21} />
            </span>
            <span className="font-bold text-sm">Manage Auctions</span>
          </div>
          {/* right arrow  */}
          <span className="text-white">
            <FaAngleRight
              size={12}
              className={`${manageAuctionIsOpen ? "rotate-90" : ""
                } duration-300`}
            />
          </span>
        </div>
        <div
          className={`flex flex-col items-start overflow-hidden duration-300 ${manageAuctionIsOpen ? "h-full opacity-100" : "h-[0px] opacity-0"
            } `}
        >
          <Link
            className="p-2 px-4 rounded-xl hover:bg-secondary duration-300 w-full text-white"
            href={"/dashboard2/auctions"}
          >
            Auctions
          </Link>
          <Link
            className="p-2 px-4 rounded-xl hover:bg-secondary duration-300 w-full font-midium text-white"
            href={"/dashboard2/auction-ended"}
          >
            Auction Ended
          </Link>
          <Link
            className="p-2 px-4 rounded-xl hover:bg-secondary duration-300 w-full font-midium text-white"
            href={"/dashboard2/upload-vehicle"}
          >
            Upload Vehicle
          </Link>
          <Link
            className="p-2 px-4 rounded-xl hover:bg-secondary duration-300 w-full font-midium text-white"
            href={"/dashboard2/all-vehicle"}
          >
            All Vehicle
          </Link>
        </div>
      </div>

      {/* manage users ----------------------------------------------------------------------  */}
      <div>
        <div
          onClick={() => setManageUserIsOpen(!manageUserIsOpen)}
          className="flex items-center w-full justify-between p-4 rounded-xl hover:bg-secondary duration-300 gap-8"
        >
          <div className="flex items-center text-white gap-5">
            <span>
              <FiUsers size={21} />
            </span>
            <span className="font-bold text-sm">Manage Users</span>
          </div>
          {/* right arrow  */}
          <span className="text-white">
            <FaAngleRight
              size={12}
              className={`${manageUserIsOpen ? "rotate-90" : ""} duration-300`}
            />
          </span>
        </div>
        <div
          className={`flex flex-col items-start h-full overflow-hidden duration-300 ${manageUserIsOpen ? "h-full opacity-100" : "h-0 opacity-0"
            } `}
        >
          <Link
            className="p-2 px-4 rounded-xl hover:bg-secondary duration-300 w-full text-white"
            href={"/dashboard2/users"}
          >
            Users
          </Link>
          <Link
            className="p-2 px-4 rounded-xl hover:bg-secondary duration-300 w-full font-midium text-white"
            href={"/dashboard2/admins"}
          >
            Admins
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarLinks;
