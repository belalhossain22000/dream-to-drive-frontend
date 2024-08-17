"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../../ui/button";
import TrustPilotLogo from "../../trustPilogLogo/TrustPilotLogo";
import { useState } from "react";
import Link from "next/link";

const HomeHeroSection = () => {
  const [toggleMode, setToggleMode] = useState<"buy" | "sell">("buy");

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <header className="h-[60dvh] w-full relative hero-section-bakground-image">
      <div className="absolute top-0 left-0 size-full bg-primary/70 z-20"></div>
      <div className="z-30 absolute top-0 text-white left-0 size-full flex items-center">
        <div className="container flex">
          <div className="w-full flex lg:flex-row flex-col flex-wrap items-center gap-7">
            <div className="flex-1 gap-4 flex-col flex items-center justify-center w-full">
              <h2 className="md:text-[40px] text-3xl font-bold uppercase text-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={toggleMode}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {toggleMode == "sell"
                      ? "SELL WITH US"
                      : "FUEL YOUR OBSESSION"}
                  </motion.span>
                </AnimatePresence>
              </h2>
              <div className="w-[150px] relative px-2 bg-white/40 backdrop-blur-sm flex items-center justify-between rounded-full">
                <button
                  onClick={() => setToggleMode("buy")}
                  className={`p-2 text-lg relative z-20 ${
                    toggleMode === "buy" ? "text-secondary" : "text-white"
                  }`}
                >
                  Buy
                </button>
                <motion.span
                  initial={{
                    x: 0,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "50%",
                    height: "100%",
                  }}
                  animate={{ x: toggleMode === "sell" ? 75 : 0 }}
                  className="block bg-white h-full w-[50%] z-10 rounded-full absolute top-0 left-0 flex-1"
                ></motion.span>
                <button
                  onClick={() => setToggleMode("sell")}
                  className={`p-2 text-lg relative z-20 ${
                    toggleMode === "sell" ? "text-secondary" : "text-white"
                  }`}
                >
                  Sell
                </button>
              </div>
            </div>
            <div className="w-[40%] items-center  flex-col flex">
              <div className="w-full flex justify-center items-center">
                <Link href={toggleMode === "sell" ? "sell-with-us" : "buy"}>
                  <Button className="w-[320px] " variant="outline">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={toggleMode}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={variants}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        {toggleMode == "sell"
                          ? "Find out more"
                          : "View all Listing"}
                      </motion.span>
                    </AnimatePresence>
                  </Button>
                </Link>
              </div>
              <div className=" w-full">
                <motion.h3
                  initial="hidden"
                  variants={variants}
                  animate={toggleMode === "sell" ? "visible" : "hidden"}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-center flex items-center justify-center text-2xl font-bold mt-5"
                >
                  List for free. Sell for free
                </motion.h3>
              </div>
              <div>
                <TrustPilotLogo className="bg-transparent py-0 mt-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeroSection;
