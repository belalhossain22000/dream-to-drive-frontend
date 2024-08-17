import React, { useState } from "react";
import Accordion from "@/components/accordion/Accordion";
import DetailsForm from "./DetailsForm";
import ResetPasswordForm from "./ResetPasswordForm";

const MyDetails = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleActiveAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section className="md:py-16 py-8">
      <div className="container max-w-[992px]">
        <Accordion
          id={1}
          title="My Details"
          titleComboClass="md:text-2xl text-[17px] font-bold"
          activeAccordion={activeAccordion}
          handleActiveAccordion={handleActiveAccordion}
        >
          <DetailsForm />
        </Accordion>
        <Accordion
          id={2}
          title="Password"
          titleComboClass="md:text-2xl text-[17px] font-bold"
          activeAccordion={activeAccordion}
          handleActiveAccordion={handleActiveAccordion}
        >
          <ResetPasswordForm />
        </Accordion>
      </div>
    </section>
  );
};

export default MyDetails;
