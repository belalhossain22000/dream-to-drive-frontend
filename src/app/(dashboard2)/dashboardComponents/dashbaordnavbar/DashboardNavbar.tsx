import { RiMenuFold3Fill } from "react-icons/ri";
import { CgSearch } from "react-icons/cg";
import { MdOutlineNotificationsNone } from "react-icons/md";


import { Badge } from "@/components/ui/badge";

import LeftDrawer from "../leftDrawer/LeftDrawer";
import ProfileDropdown from "../profileDropdown/ProfileDropdown";

const DashboardNavbar = ({setSidebarSm, sidebarSm}:{sidebarSm: boolean;setSidebarSm: Function}) => {
  return (
    <div className="max-h-[100px] h-[80px] p-5 px-4 lg:px-8">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-5">
          <span className="lg:hidden"><LeftDrawer /></span>
          <RiMenuFold3Fill onClick={() => setSidebarSm(!sidebarSm)} className="text-2xl text-white hidden lg:block" />
        </div>
        <div className=" flex items-center justify-end gap-2 text-white">
          {/* search  */}
          <span className="p-2 w-10 h-10 hover:bg-gray-300 duration-300 flex items-center justify-center rounded-full hover:bg-opacity-20">
            <CgSearch className="text-2xl -ml-[2px] mt-1" />
          </span>
          {/* notification  */}
          <div className="relative p-2 w-10 h-10 hover:bg-gray-300 duration-300 flex items-center justify-center rounded-full hover:bg-opacity-20">
            <MdOutlineNotificationsNone className="text-3xl -ml-[2px] mt-1" />
            <span>
              <Badge className="absolute top-0 right-0 bg-red-600 max-w-7  h-5 flex items-center justify-center">
                29+
              </Badge>
            </span>
          </div>
          {/* profile  */}
          <ProfileDropdown/>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
