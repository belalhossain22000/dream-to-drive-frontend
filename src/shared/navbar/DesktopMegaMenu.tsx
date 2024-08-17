import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { MengaMenuPropsTypes } from "@/utils/main_navbar_menu_info";
import { cn } from "@/lib/utils";

type DesktopMegaMenuPropTypes = {
  title: string[];
  items: MengaMenuPropsTypes;
  isSticky: boolean;
  pathName?: string;
};

const DesktopMegaMenu: React.FC<DesktopMegaMenuPropTypes> = ({
  title,
  items,
  isSticky,
  pathName,
}) => {
  return (
    <div
      className={cn(
        "absolute hidden lg:block  z-[300] shadow-lg h-[0px] overflow-hidden group-hover:h-[400px]   transition-all duration-700  w-full left-0 top-0 bg-primary",
        isSticky ? "translate-y-[91.3px]" : "translate-y-[131.3px]"
      )}
    >
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        className="w-full flex justify-center py-6  gap-[90px] "
      >
        <div>
          <h3 className="text-base font-semibold">{title[0]}</h3>
          <ul className="mt-4 text-base flex flex-col gap-3 text-white/80">
            {items.column1.map((item, idx) => (
              <MegaMenuList key={idx} item={item} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold">{title[1]}</h3>
          <ul className="mt-4 text-base flex flex-col gap-3 text-white/80">
            {items.column2.map((item, idx) => (
              <MegaMenuList key={idx} item={item} />
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

const MegaMenuList = ({ item }: { item: { name: string; link: string } }) => (
  <li>
    <Link
      className="transition-colors hover:text-white hover:underline"
      href={`${item.link}`}
    >
      {item.name}
    </Link>
  </li>
);

export default DesktopMegaMenu;
