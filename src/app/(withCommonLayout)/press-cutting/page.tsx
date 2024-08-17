import PageBanner from "@/shared/pageBanner/PageBanner";
import bannerImage from "@/assets/pressCutting/banner.jpg";
import imageUnderline from "@/assets/pressCutting/imageUnderline.png";
import cardImage1 from "@/assets/pressCutting/cardImage1.jpeg";
import cardImage2 from "@/assets/pressCutting/cardImage2.jpeg";
import Image from "next/image";
import Link from "next/link";
import carsInfo from "@/utils/press_cutting_info";
const PressCutting = () => {
  const overlayColor = "bg-primary/70";
  return (
    <>
      {/* page banner */}
      <PageBanner
        image={bannerImage}
        imageUnderline={imageUnderline}
        title="PRESS CUTTINGS"
        overlayColor={overlayColor}
        button={false}
      />
      {/* page body */}
      <div className="container section-paddingY">
        {/* header */}
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-5xl text-[#222] font-bold font-ralway mb-5">
            READ ALL ABOUT IT!
          </h1>
          <p className="text-lg text-[#585858]">
            Collecting Cars has disrupted the traditional auction industry and
            got people talking, both online and in the print media. Whether
            it&apos;s a celebrity seller, a car with a fascinating story, or one
            of our world record prices; our marketplace makes headlines.
          </p>
        </div>
        {/* card grid container  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
          {/* card 1  */}
          <div className="relative lg:col-span-2 ">
            <Image
              src={cardImage1}
              width={800}
              height={500}
              alt="card-image"
              className="w-full h-[550px] object-cover"
            />
            <div className="absolute bottom-0 left-0 p-5 w-full h-full flex flex-col justify-end bg-black bg-opacity-40">
              <Link href="#">
                <h2 className="text-white text-2xl font-bold font-ralway mt-5">
                  ONLINE CAR AUCTION SITE THREATENS &apos;DINOSAUR&apos; RIVALS
                </h2>
                <p className="underline text-white">telegraph.co.uk</p>
              </Link>
            </div>
          </div>
          {/* card 2  */}
          <div>
            <Image
              src={cardImage2}
              width={500}
              height={500}
              alt="card image"
              className="w-full h-[300px] object-cover"
            />
            <h2 className="text-2xl font-bold font-ralway mt-5">
              HERE’S A RARE CHANCE TO OWN A HENNESSEY VENOM GT IN EUROPE
            </h2>
            <p className="text-lg text-[#585858] my-5">
              There’s an example of the 270mph-capable hypercar up for auction
              in Germany
            </p>
            <a className="underline text-primary">
              https://www.carthrottle.com/news/heres-rare-chance-own-hennessey-venom-gt-europe
            </a>
          </div>
        </div>
        {/* cards grid container2  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
          {carsInfo.map((cars) => (
            <>
              {/* card  */}
              <div>
                <Image
                  src={cars.image}
                  width={500}
                  height={500}
                  alt="card image"
                  className="w-full h-[300px] object-cover"
                />
                <Link href={cars.link} target="_blank">
                  <h2 className="text-2xl font-bold font-ralway mt-5">
                    {cars.title}
                  </h2>
                </Link>
                <p className="text-lg text-[#585858] my-5">
                  {cars.description}
                </p>
                <a href={cars.link} className="underline text-primary text-lg" target="_blank">
                  {cars.link}
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default PressCutting;
