"use client";
import { CountryProvider } from "@/Context/CountryProvider";
import Providers from "@/lib/Providers";
import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";
const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme();
  return (


    <ThemeProvider theme={theme}>
      <div className="font-lato">

        <Navbar />
        <CountryProvider>
          <div>{children}</div>
        </CountryProvider>
        <Footer />
      </div>
    </ThemeProvider>

  );
};

export default CommonLayout;
