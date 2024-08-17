import { IoIosArrowDown } from "react-icons/io";
import { easeIn, motion } from "framer-motion";
import React from "react";

type AccordionProps = {
  handleActiveAccordion: (id: number) => void;
  activeAccordion: number | null;
  id: number;
  children: React.ReactNode;
  title: string;
  titleComboClass?: string;
};

const Accordion: React.FC<AccordionProps> = ({
  handleActiveAccordion,
  activeAccordion = 1,
  id,
  children,
  title,
  titleComboClass,
}) => {
  return (
    <div className="bg-slate-50 p-4 shadow-sm">
      <div
        onClick={() => handleActiveAccordion(id)}
        className="flex items-center justify-between cursor-pointer"
      >
        <h3
          className={`${
            titleComboClass ? titleComboClass : "font-medium text-text_color"
          }`}
        >
          {title}
        </h3>
        <motion.span
          initial={{ rotate: "0deg" }}
          animate={{ rotate: activeAccordion === id ? "180deg" : "0deg" }}
          transition={{ duration: 0.5 }}
          className="block relative"
        >
          <IoIosArrowDown className="size-6 text-secondary" />
        </motion.span>
      </div>
      <div>
        <motion.div
          initial={{ height: "0px", marginTop: "0px" }}
          className=" overflow-hidden"
          animate={{ height: activeAccordion === id ? "auto" : "0px" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-5 "
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Accordion;
