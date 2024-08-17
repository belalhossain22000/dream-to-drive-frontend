"use client";

import { IoCloseOutline } from "react-icons/io5";
import NavLink from "./NavLink";
import { IoIosArrowForward } from "react-icons/io";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal";
import LoginForm from "@/components/Login/LoginForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buy_mega_menu, sell_mega_menu } from "@/utils/main_navbar_menu_info";
import MobileMegaMenu from "./MobileMegaMenu";

type MobileNavProps = {
  handleMobileNavOpen: () => void;
  open: boolean;
};

const MobileNavbar: React.FC<MobileNavProps> = ({
  handleMobileNavOpen,
  open = false,
}) => {
  const [activeMenu, setActiveMenu] = useState<null | number>(null);
  const handleActiveAccordion = (id: number) => {
    setActiveMenu((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <motion.aside
        initial={{ translateX: "100%" }}
        animate={{ translateX: open ? 0 : "100%" }}
        transition={{ ease: "easeOut", duration: 0.3 }}
        className="w-[240px] lg:hidden block overflow-x-hidden z-[999]  text-white h-screen fixed   top-0 right-0 bg-primary shadow-md"
      >
        <div className="p-4">
          <button
            onClick={handleMobileNavOpen}
            className="rounded-full flex justify-center items-center text-white size-10 hover:bg-white/20 transition-all"
          >
            <IoCloseOutline className="size-6" />
          </button>
          <div className="flex flex-col  mt-20 px-6">
            <div className="w-full flex flex-col gap-3">
              <div className="w-full">
                <button
                  onClick={() => handleActiveAccordion(1)}
                  className="group flex w-full items-center justify-between"
                >
                  <NavLink link="buy">Buy</NavLink>
                  <span
                    className={`group-hover:text-secondary transition-all ${
                      activeMenu === 1 ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    <IoIosArrowForward className="size-5" />
                  </span>
                </button>
                <MobileMegaMenu
                  isBuyOpen={activeMenu === 1}
                  title={["Listing Types", "Popular Brands"]}
                  menus={buy_mega_menu}
                />
              </div>
              <div className="w-full">
                <button
                  onClick={() => handleActiveAccordion(2)}
                  className="group flex w-full items-center justify-between"
                >
                  <NavLink link="sell">Sell With Us</NavLink>
                  {/* <span
                    className={`group-hover:text-secondary transition-all ${
                      activeMenu === 1 ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    <IoIosArrowForward className="size-5" />
                  </span> */}
                </button>
                {/* <MobileMegaMenu
                  title={["Ways to Sell", "Sell My..."]}
                  isBuyOpen={activeMenu === 2}
                  menus={sell_mega_menu}
                
                /> */}
              </div>
              <div className="w-full">
                <button
                  onClick={() => handleActiveAccordion(2)}
                  className="group flex w-full items-center justify-between"
                >
                  <NavLink link="vehicle-sourcing">Vehicle Sourcing</NavLink>
                  {/* <span
                    className={`group-hover:text-secondary transition-all ${
                      activeMenu === 1 ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    <IoIosArrowForward className="size-5" />
                  </span> */}
                </button>
                {/* <MobileMegaMenu
                  title={["Ways to Sell", "Sell My..."]}
                  isBuyOpen={activeMenu === 2}
                  menus={sell_mega_menu}
                
                /> */}
              </div>
              <button
                onClick={handleMobileNavOpen}
                className="group flex w-full"
              >
                <NavLink link="our-journey">About Us</NavLink>
              </button>
              <div className="flex flex-col items-start gap-2 mt-8">
                <Modal buttonText="Sign In" px="12" maxWidth="450px">
                  <LoginForm></LoginForm>
                </Modal>
                <Link href="register">
                  <Button variant="secondary" className="min-w-[140px]">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.aside>
      <div
        onClick={handleMobileNavOpen}
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transitionProperty: "opacity, visibility",
          transitionDuration: "0.6s",
          transitionTimingFunction: "ease-in",
        }}
        className="fixed cursor-pointer w-full h-screen top-0 right-0 z-[990] bg-primary/10 backdrop-blur-sm"
      ></div>
    </>
  );
};
export default MobileNavbar;
