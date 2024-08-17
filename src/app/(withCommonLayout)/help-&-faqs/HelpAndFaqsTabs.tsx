"use client";

import Accordion from "@/components/accordion/Accordion";
import Tabs from "@/components/tabs/Tabs";
import { faq, tabs } from "@/utils/helpFaqsInfo";
import React, { useState } from "react";
import { motion } from "framer-motion";

const HelpAndFaqsTabs = () => {
  const [activeAccordion, setActiveAccordion] = useState<null | number>(1);
  const [activeTabs, setActiveTabs] = useState<string>(tabs[0].key);

  const handleActiveAccordion = (id: number) => {
    setActiveAccordion((prevId) => (prevId === id ? null : id));
  };

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div>
      <Tabs
        centerClass={false}
        setActiveAccordion={setActiveAccordion}
        setActiveTabs={setActiveTabs}
        activeTabs={activeTabs}
        tabs={tabs}
      >
        {faq.map((item) => (
          <motion.div
            key={item.id}
            initial="hidden"
            animate={item.category === activeTabs ? "visible" : "hidden"}
            variants={variants}
            transition={{ ease: "easeIn", duration: 1 }}
            className={`container mt-10`}
          >
            {item.category === activeTabs && (
              <div>
                <h2 className="text-text_color text-xl mb-6">{item.title}</h2>
                <div className="space-y-6 mb-[80px]">
                  {item.content.map((contentItem) => (
                    <Accordion
                      activeAccordion={activeAccordion}
                      key={contentItem.id}
                      title={contentItem.question}
                      id={contentItem.id}
                      handleActiveAccordion={handleActiveAccordion}
                    >
                      <p>{contentItem.answer}</p>
                    </Accordion>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </Tabs>
    </div>
  );
};

export default HelpAndFaqsTabs;
