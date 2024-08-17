import PageBanner from "@/shared/pageBanner/PageBanner";
import helpFaqsBanner from "@/assets/helpFaqs/banner.jpg";
import HelpAndFaqsTabs from "./HelpAndFaqsTabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const overlay = "bg-primary/5";

const HelpAndFaqs = () => {
  return (
    <>
      <PageBanner
        button={false}
        overlayColor={overlay}
        image={helpFaqsBanner}
        title="HELP CENTER"
        description="Frequently Asked Questions"
      />
      <HelpAndFaqsTabs />
      <div className="bg-slate-200 py-12">
        <div className="container text-text_color flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-bold">Still can't find your answer?</h2>
          <p className="text-zinc-600 mt-5 mb-8 text-base">
            We’re on hand to support you at every step, and to assist with any
            questions you have about the process.
          </p>
          <Link href={"/contact-us"}>
            <Button className="text-white " size={"lg"}>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HelpAndFaqs;
