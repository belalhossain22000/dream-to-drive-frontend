import Link from "next/link";
import React from "react";

type NavLinkPropTypes = {
  children: React.ReactNode;
  link: string;
};

const NavLink: React.FC<NavLinkPropTypes> = ({ link, children }) => {
  return (
    <Link
      href={`/${link}`}
      className="group-hover:text-secondary flex flex-col w-max items-center gap-1 after:block after:w-full after:h-[2px] after:bg-transparent group-hover:after:bg-secondary transition-all duration-300"
    >
      {children}
    </Link>
  );
};

export default NavLink;
