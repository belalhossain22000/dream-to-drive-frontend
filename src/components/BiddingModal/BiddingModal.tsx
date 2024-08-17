import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import carr from "@/assets/carr.jpg";
import { IoMdHeartEmpty, IoMdEye } from "react-icons/io";
import BidHistory from "@/app/(withCommonLayout)/buy/[id]/BidHistory";
import DForm from "../forms/DForm";
import DInput from "../forms/DInput";
export function BiddingModal() {
  const minimumBid = 15000; // Update this to the correct value as needed

  const bidPriceData = (data: any) => {
    const bidPrice = parseFloat(data.bidPrice);
    if (isNaN(bidPrice) || bidPrice <= minimumBid) {
      return toast.error(`Bid must be greater than $${minimumBid}`, {
        style: {
          backgroundColor: "red",
          color: "white",
        },
        duration: 1000,
      });
    }
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-white">
        <DialogHeader>
          {/* <DialogTitle>
            <Image src={logo} alt="logo" height={80} width={80}></Image>
          </DialogTitle> */}
          <DialogDescription>
            <div className="flex justify-start  items-center gap-24">
              <div>
                <h2 className="text-2xl font-bold text-blue-900">NZ$10,250</h2>
                <p>Current Bid</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-blue-900">2 days</h2>
                <p>Monday 12:30 PM</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-blue-900">14</h2>
                <p>Bids</p>
              </div>
            </div>
            <div className="flex justify-start items-start gap-2 py-10">
              <Image src={carr} alt="hello" width={180} height={40}></Image>
              <div>
                <h2 className="text-2xl font-bold text-blue-900">
                  2003 Maserati GranSport Trofeo
                </h2>
                <div className="flex justify-start mt-3 items-center text-xl gap-2 font-semibold">
                  <span className="bg-slate-100 flex justify-center items-center gap-2 px-2">
                    <IoMdHeartEmpty />
                    <h2>20</h2>
                  </span>
                  <span className="bg-slate-100 flex justify-center  gap-2 items-center px-2">
                    {" "}
                    <IoMdEye />
                    <h2>40</h2>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <BidHistory />
            </div>
          </DialogDescription>
        </DialogHeader>
        <div>
          <div>
            <p className="font-semibold pb-2">{`Minimum: $${minimumBid}`}</p>
          </div>
          <DForm onSubmit={bidPriceData}>
            <DInput
              type="number"
              name="bidPrice"
              label=""
              className="w-full"
              placeholder="Enter Your Bid"
              required
            ></DInput>
            <Button type="submit" className="text-white uppercase w-full">
              Place Bid
            </Button>
          </DForm>
        </div>
        <Toaster />
      </DialogContent>
    </Dialog>
  );
}
