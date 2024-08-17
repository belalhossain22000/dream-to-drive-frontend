"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MengaMenuPropsTypes } from "@/utils/main_navbar_menu_info";



const variants = {
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.4 }
    },
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.4 }
    },
  };

  type MobileMegaMenuPropTypes = {
    isBuyOpen: boolean;
    menus: MengaMenuPropsTypes;
    title: string[];
  }
const MobileMegaMenu: React.FC<MobileMegaMenuPropTypes> = ({
  isBuyOpen,
  menus,
  title,
}) => {
//   // Determine which menu to display
//   const activeMenu = isBuyOpen || isSellOpen ? menus : { column1: [], column2: [] };
// //   const activeTitle = isBuyOpen ? title[0] : isSellOpen ? title[1] : "";

  return (
    <motion.div
      className="mt-2 flex flex-col items-start gap-5"
      variants={variants}
      initial="hidden"
      animate={isBuyOpen  ? "visible" : "hidden"}
    >

      {/* Display Column 1 items */}
      <div>
        <h3 className="text-lg font-semibold mb-2  opacity-60">{title[0]}</h3>
        {menus.column1.map((item, idx) => (
          <Link
            key={idx}
            className="transition-colors block mb-1 hover:text-white hover:underline"
            href={`${item.link}`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Display Column 2 items */}
      <div>
        <h3 className="text-lg font-semibold mb-2  opacity-60">{title[1]}</h3>
        {menus.column2.map((item, idx) => (
          <Link
            key={idx}
            className="transition-colors block mb-1 hover:text-white hover:underline"
            href={`${item.link}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileMegaMenu;
