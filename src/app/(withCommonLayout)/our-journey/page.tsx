import Image from "next/image";
import mapImage from "@/assets/ourJourneyPage/map.png";
import "@smastrom/react-rating/style.css";
import TrustPilotLogo from "@/components/trustPilogLogo/TrustPilotLogo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const OurJourney = () => {
  return (
    <>
      {/* banner section ==============*/}
      <div className="bg-primary lg:h-[80vh]">
        <div className="container flex flex-col items-center gap-24 lg:gap-16 h-full px-10 lg:px-20 xl:px-0 lg:flex-row py-20">
          <div className="basis-1/2 md:w-[90%] lg:w-full mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-ralway text-white mb-8">
              ABOUT US
            </h2>
            <p className="text-white text-lg lg:max-w-[600px] mb-4">
              Collecting Cars is a global online auction platform devoted to
              cars and automobilia. We are open for bids 24/7 with new auctions
              going live every day.
            </p>
            <p className="text-white text-lg mb-4">
              Our platform may be 100% online but behind the scenes we are a
              passionate team of over 90 car enthusiasts who work around the
              clock to get your car in front of the most eyes.
            </p>
            <Link href={"/sell-with-us"}>
              <Button variant="secondary" className="text-white px-12 py-5">
                Sell with Us
              </Button>
            </Link>
          </div>
          <div className="basis-1/2 md:w-[90%] lg:w-full mx-auto mt-10">
            <Image
              src={mapImage}
              width={800}
              height={500}
              alt="banner image"
              draggable={false}
            />
          </div>
        </div>
      </div>
      {/*under banner trust pilog logo ============= */}
      <TrustPilotLogo />
      {/* why choose us section  */}
      <section>
        <div className="container">
          <div className="md:py-32 py-16">
            <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-20 gap-10">
              <div className="flex flex-col lg:items-start items-center">
                <h2 className="md:text-4xl text-3xl font-bold mb-3">
                  WHY CHOOSE US?
                </h2>
                <p className="mb-4 text-xl text-slate-500 max-w-[554px] lg:text-start text-center">
                  As the leading exotic car auction platform, there are many
                  reasons to choose us. Here are a few key statistics that we’re
                  proud of:
                </p>
                <Button className="min-w-[140px] text-white uppercase">
                  View FAQs
                </Button>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-8 lg:justify-items-stretch justify-items-center">
                <div className="md:text-start text-center">
                  <h3 className="text-secondary md:text-5xl text-4xl font-bold">
                    $833M+
                  </h3>
                  <p className="mt-2 text-slate-500">WORTH OF LOTS SOLD</p>
                </div>
                <div className="md:text-start text-center">
                  <h3 className="text-secondary md:text-5xl text-4xl font-bold">
                    500k+
                  </h3>
                  <p className="mt-2 text-slate-500">social media followers</p>
                </div>
                <div className="md:text-start text-center">
                  <h3 className="text-secondary md:text-5xl text-4xl font-bold">
                    24/7
                  </h3>
                  <p className="mt-2 text-slate-500">Live Auctions</p>
                </div>
                <div className="md:text-start text-center">
                  <h3 className="text-secondary md:text-5xl text-4xl font-bold">
                    100+
                  </h3>
                  <p className="mt-2 text-slate-500">Bidder countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurJourney;
