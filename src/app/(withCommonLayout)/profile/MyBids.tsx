import React, { useState } from "react";
import Accordion from "@/components/accordion/Accordion";

const MyBids = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const handleActiveAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section className="md:py-16 py-8">
      <div className="container max-w-[992px]">
        <Accordion
          id={1}
          title="Live"
          titleComboClass="md:text-2xl text-[17px] font-bold"
          activeAccordion={activeAccordion}
          handleActiveAccordion={handleActiveAccordion}
        >
          None
        </Accordion>
        <Accordion
          id={2}
          title="Bids Won"
          titleComboClass="md:text-2xl text-[17px] font-bold"
          activeAccordion={activeAccordion}
          handleActiveAccordion={handleActiveAccordion}
        >
          You have won 0 bids.
        </Accordion>
        <Accordion
          id={3}
          title="Bids Lost"
          titleComboClass="md:text-2xl text-[17px] font-bold"
          activeAccordion={activeAccordion}
          handleActiveAccordion={handleActiveAccordion}
        >
          You have lost 0 bids.
        </Accordion>
      </div>
    </section>
  );
};

export default MyBids;
