import Accordion from "@/components/accordion/Accordion";
import React, { useState } from "react";
import Payment from "./Payment";
import Invoice from "./Invoice";

const Billing = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const handleActiveAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section className="md:py-16 py-8">
      <div className="container max-w-[992px]">
        <Accordion
          id={1}
          title="Payment Method"
          titleComboClass="md:text-2xl text-[17px] font-bold"
          activeAccordion={activeAccordion}
          handleActiveAccordion={handleActiveAccordion}
        >
          {/* Payment  */}
          <Payment />
          {/* Payment  */}
        </Accordion>
        <Accordion
          id={2}
          title="Invoice Address"
          titleComboClass="md:text-2xl text-[17px] font-bold"
          activeAccordion={activeAccordion}
          handleActiveAccordion={handleActiveAccordion}
        >
          <Invoice />
        </Accordion>
      </div>
    </section>
  );
};

export default Billing;
