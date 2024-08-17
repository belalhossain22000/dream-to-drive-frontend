import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import errorImage from "@/assets/error-page/error.svg";

const NotFound = () => {
  return (
    <>
      <section className="h-dvh px-8">
        <div className="container h-full grid place-items-center ">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src={errorImage}
              height={400}
              width={800}
              alt="Page not found"
              className="mb-5"
            />
            <h1 className="md:text-3xl text-2xl uppercase font-bold text-center">
              Sorry, we couldn't find this page.
            </h1>
            <p className="md:text-xl text-md font-medium max-w-[500px] text-center">
              The page may no longer exist or the link could be incorrect. Why
              not return to our homepage.
            </p>
            <Link
              href="/"
              className="border border-primary rounded px-6 py-2 uppercase font-medium"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
