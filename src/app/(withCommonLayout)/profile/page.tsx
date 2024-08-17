// src/pages/Profile.tsx
"use client";

import React, { useState } from "react";
import Tabs from "@/components/tabs/Tabs";
import { Button } from "@/components/ui/button";
import { MdAlternateEmail } from "react-icons/md";
import MyBids from "./MyBids";
import Watching from "./Watching";
import MyDetails from "./MyDetails";
import Billing from "./Billing";
import { useGetMyProfileQuery } from "@/redux/api/authApi";

const Profile = () => {
  const [activeTabs, setActiveTabs] = useState("my-bids");

  const tabs = [
    { key: "my-bids", label: "My Bids" },
    { key: "watching", label: "Watching" },
    { key: "my-details", label: "My Details" },
    { key: "billing", label: "Billing" },
  ];

  const { data, isLoading } = useGetMyProfileQuery(undefined)
  const user = data?.data || {}
  console.log(user)
  if(isLoading){
    return <h1 className="container ">Loading ...</h1>
  }
  return (
    <>
      <section className="py-14 bg-slate-50">
        <div className="container">
          <div className="flex sm:flex-row flex-col justify-between gap-7">
            {/* profile */}
            <div>
              <div className="flex items-center gap-6">
                <p className="md:w-20 w-14 md:h-20 h-14 rounded-full ring ring-slate-300 font-bold text-2xl flex items-center justify-center bg-primary text-white flex-shrink-0">
                  JD
                </p>
                <div>
                  <h1 className="text-2xl font-bold">{user.firstName + user.lastName}</h1>
                  <span className="flex items-center gap-1 text-sm">
                    <MdAlternateEmail />
                    {user.email}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col md:items-center items-stretch sm:justify-center justify-normal gap-3">
              <Button variant="outline" className="font-semibold text-sm">
                Edit Details
              </Button>
              <Button
                variant="default"
                className="text-white font-semibold text-sm"
              >
                Upload Vehicle
              </Button>
            </div>
            {/* profile */}
          </div>
        </div>
      </section>
      <section>
        <Tabs
          tabs={tabs}
          activeTabs={activeTabs}
          setActiveTabs={setActiveTabs}
          centerClass={true}
        >
          {activeTabs === "my-bids" && <MyBids />}
          {activeTabs === "watching" && <Watching />}
          {activeTabs === "my-details" && <MyDetails />}
          {activeTabs === "billing" && <Billing />}
        </Tabs>
      </section>
    </>
  );
};

export default Profile;
