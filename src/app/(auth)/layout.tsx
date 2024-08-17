import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
