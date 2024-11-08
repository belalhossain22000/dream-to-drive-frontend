import type { Metadata } from "next";
import { Lato, Raleway } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import { Toaster } from "sonner";


const lato = Lato({
  subsets: ["latin"],
  variable: "--lato-font",
  weight: ["400", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--ralway-font",
  weight: ["800"],
});

export const metadata: Metadata = {
  title: "Dream 2 Drive · 24/7 Online Car Auctions",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" suppressHydrationWarning>
        <body className={`${lato.variable} ${raleway.variable}`}>
          {children}
          <Toaster/>
        </body>
      </html>
    </Providers>
  );
}
