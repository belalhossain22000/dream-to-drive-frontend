import trustpilotLogo from "@/assets/ourJourneyPage/trustpilot-ratting.svg";
import trustpiloticon from "@/assets/ourJourneyPage/trustpilot-2.svg";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

type TrustPilotLogoProps = {
  className?: string;
};

const TrustPilotLogo: React.FC<TrustPilotLogoProps> = ({
  className = "bg-gray-200 py-8",
}) => {
  return (
    <>
      <div
        className={cn(" flex justify-center items-center gap-4  ", className)}
      >
        <h4 className="text-xl font-bold">Excellent</h4>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Image
              src={trustpilotLogo}
              width={100}
              height={50}
              alt="trust pilot logo"
              draggable={false}
            />
          </div>
        </div>
        <div>
          <Image
            src={trustpiloticon}
            width={80}
            height={100}
            alt="trust pilot logo"
            draggable={false}
          />
        </div>
      </div>
    </>
  );
};

export default TrustPilotLogo;
