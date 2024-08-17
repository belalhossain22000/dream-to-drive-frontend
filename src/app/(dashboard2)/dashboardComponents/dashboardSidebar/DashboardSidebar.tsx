import logo from "@/assets/dashboardLogo.png";
import Image from "next/image";
import SidebarLinks from "@/app/(dashboard2)/dashboardComponents/SidebarLinks/SidebarLinks";
import Link from "next/link";

const DashboardSidebar = ({ sidebarSm }: { sidebarSm: boolean }) => {
  return (
    <div className="h-full ">
      {/* logo div  */}
      <Link
        href={"/"}
        className="border-b border-slate-500 max-h-[81px]  h-[100px] overflow-hidden p-2 px-5 flex items-center justify-center "
      >
        <Image
          className={`w-[80px] scale-[2] md:scale-[${sidebarSm ? "3" : "1"}] `}
          src={logo}
          width={200}
          height={100}
          alt="logo"
        />
      </Link>
      {/* sidebar content */}
      <SidebarLinks />
    </div>
  );
};

export default DashboardSidebar;
