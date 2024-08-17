import { Button } from "@/components/ui/button";
import React from "react";

const SellerContact = () => {
  return (
    <>
      <div className="p-7 bg-slate-50 rounded-xl mt-5">
        <div>
          <h4 className="uppercase font-bold">Any questions?</h4>
          <div className="flex flex-col gap-3 mt-5">
            <div className="flex flex-col items-center gap-3">
              <Button
                variant="secondary"
                className="w-full text-white uppercase"
              >
                Whatsapp us
              </Button>
              <Button variant="outline" className="w-full uppercase">
                Contact Seller
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerContact;
