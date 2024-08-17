import { about, FooterMenuProps, legal, support } from "@/utils/footer_inof";
import Link from "next/link";
import React from "react";
import moment from "moment";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = moment().year();
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-5xl mx-auto py-14 grid grid-cols-1 md:gap-0 gap-5 sm:grid-cols-3 px-5 md:px-10 ">
        <FooterMenu title="Support" menu={support} />
        <FooterMenu title="About" menu={about} />
        <FooterMenu title="Legal" menu={legal} />
      </div>
      <div className=" flex items-center justify-between py-5 bg-primary border-t border-white/20">
        <div className="container sm:flex-row flex-col justify-center gap-3  flex sm:justify-between items-center">
          <ul className="text-2xl flex items-center gap-4  ">
            <li>
              <Link
                className="hover:text-secondary transition-all duration-300"
                href={"#"}
              >
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-secondary transition-all duration-300"
                href={"#"}
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-secondary transition-all duration-300"
                href={"#"}
              >
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-secondary transition-all duration-300"
                href={"#"}
              >
                <FaXTwitter />
              </Link>
            </li>
          </ul>
          <p>Dream 2 Drive © {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

const FooterMenu: React.FC<FooterMenuProps> = ({ menu, title }) => {
  return (
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <ul className="mt-4 flex flex-col gap-5 text-white/80">
        {menu.map((item, idx) => (
          <li key={idx}>
            <Link
              className="hover:text-white transition-all hover:underline"
              href={`/${item.path}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
