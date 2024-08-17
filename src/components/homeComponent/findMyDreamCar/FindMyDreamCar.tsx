import { Button } from "@/components/ui/button";
import Link from "next/link";

const FindMyDreamCar = () => {
  return (
    <section
      style={{
        backgroundImage: `url("https://raw.githubusercontent.com/Shahed007/Collecting-car/main/find-my-dream-car.jpg")`,
      }}
      className="section-padding mt-[80px]  relative bg-cover bg-center min-h-[450px]"
    >
      <div className="absolute top-0 left-0 size-full bg-primary/80  ">
        <div className="size-full container text-white flex justify-end md:items-start items-center md:text-start text-center flex-col pb-20">
          <h2 className="sm:text-3xl text-2xl font-bold mb-2 sm:mb-4">
            We'll Find Your Dream Car
          </h2>
          <p className="text-base mb-6">
            Tell us the details and we’ll help you source a car that matches
            your specifications
          </p>
          <div>
            <Link href={`/vehicle-sourcing`}>
              <Button className="w-[240px]" variant="outline">
                Find my car
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindMyDreamCar;
