"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ukFlag from "@/assets/icon/gb.svg";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import DesktopMegaMenu from "./DesktopMegaMenu";
import { buy_mega_menu, sell_mega_menu } from "@/utils/main_navbar_menu_info";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNavbar from "./MobileNavbar";
import NavLink from "./NavLink";
import { cn } from "@/lib/utils";
import LoginForm from "@/components/Login/LoginForm";
import Modal from "../Modal/Modal";
import { getUserInfo } from "@/service/actions/auth.service";
import { logoutUser } from "@/service/actions/logoutUser";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const user = getUserInfo()
  console.log(user)
  const router = useRouter()
  // Function to handle sticky menu activation
  const handleStickyMenu = () => {
    const scrollPosition = window.scrollY;
    setIsSticky(scrollPosition > 100); // Adjust scroll position threshold as needed
  };

  // Effect to add scroll listener on mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  const handleLogout = () => {
    logoutUser(router)
    toast.success("Logged out success")
  }

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isSticky ? 0 : 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className={` top-0 left-0 w-full z-[300] bg-primary text-white grid grid-cols-12 divide-y divide-white/20 ${isSticky ? "shadow-md fixed" : ""
          }`}
      >
        {/* Top Navbar */}
        <div
          className={cn(
            "md:py-5 py-3 col-span-12 px-5 lg:px-[64px]  justify-end items-center  transition-all duration-500",
            isSticky ? "hidden" : "lg:flex"
          )}
        >
          <div className="flex items-center gap-3">
            <Link
              href={"/help-&-faqs"}
              className="text-sm hover:underline transition-all"
            >
              Help & FAQs
            </Link>

            <div className="flex gap-3 items-center"></div>
          </div>
        </div>
        {/* Main Navbar */}
        <div
          className={`lg:px-[64px] px-5 h-[91px] col-span-12 flex justify-between items-center`}
        >
          <Link href={"/"}>
            <Image
              src={logo}
              className="aspect-square w-[90px]"
              alt="Dream 2 Drive Logo"
            />
          </Link>
          <ul className="hidden items-center gap-6 text-base font-medium lg:flex">
            <li className="group flex items-center gap-1">
              <NavLink link="buy">Buy</NavLink>
              <span className="group-hover:text-secondary relative group-hover:rotate-180 transition-transform duration-300">
                <IoIosArrowDown />
              </span>
              <DesktopMegaMenu
                pathName="/buy"
                title={["Listing Types", "Popular Brands"]}
                items={buy_mega_menu}
                isSticky={isSticky}
              />
            </li>
            <li className="group flex items-center gap-1">
              <NavLink link="sell-with-us">Sell With Us</NavLink>
              {/* <span className="group-hover:text-secondary relative group-hover:rotate-180 transition-transform duration-300">
                <IoIosArrowDown />
              </span>
              <DesktopMegaMenu
                title={["Ways to Sell", "Sell My..."]}
                items={sell_mega_menu}
                isSticky={isSticky}
              /> */}
            </li>
            <li className="group">
              <NavLink link="vehicle-sourcing">Vehicle Sourcing</NavLink>
            </li>

            <li className="group">
              <NavLink link="our-journey">About Us</NavLink>
            </li>
          </ul>
          <div className="lg:flex hidden items-center gap-6">
            {
              user.role === 'admin' &&   <Link href="/dashboard2">
              <Button variant="secondary" className="min-w-[140px]">
              Dashboard
              </Button>
            </Link>
            }
            {user && user.role ? (
              <Button onClick={handleLogout} variant="secondary" className="min-w-[140px]">
                LogOut
              </Button>
            ) : (
              <>
                <Modal buttonText="Sign In" px="12" maxWidth="450px">
                  <LoginForm />
                </Modal>
                <Link href="register">
                  <Button variant="secondary" className="min-w-[140px]">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}

          </div>
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="text-lg size-10 flex lg:hidden justify-center items-center hover:bg-white/20 transition-colors rounded-full text-white"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <MobileNavbar
        open={mobileNavOpen}
        handleMobileNavOpen={() => setMobileNavOpen(false)}
      />
    </>
  );
};

export default Navbar;
