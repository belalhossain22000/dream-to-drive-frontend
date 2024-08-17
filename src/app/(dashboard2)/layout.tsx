"use client";
import DashboardNavbar from "@/app/(dashboard2)/dashboardComponents/dashbaordnavbar/DashboardNavbar";
import DashboardSidebar from "@/app/(dashboard2)/dashboardComponents/dashboardSidebar/DashboardSidebar";
import Providers from "@/lib/Providers";
import React, { ReactNode, useState } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  
  const [sidebarSm, setSidebarSm] = useState<any>(false);
  return (
    <>
  
      <div className="flex items-stretch justify-stretch h-dvh overflow-hidden">
        {/* sidebar  */}
        <div
          className={`bg-primary w-[${sidebarSm ? "70px" : "220px"
            }] h-full hidden lg:block`}
        >
          <DashboardSidebar sidebarSm={sidebarSm} />
        </div>
        {/* main  */}
        <div className="flex-1 h-full bg-primary bg-opacity-80 ">
          <div className="border-b bg-primary border-slate-500">
            <DashboardNavbar sidebarSm={sidebarSm} setSidebarSm={setSidebarSm} />
          </div>
          <div className="overflow-y-auto h-full">
            <div className="pb-20">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
