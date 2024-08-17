import { TabesTypes } from "@/utils/helpFaqsInfo";
import React from "react";

type TabsPropTypes = {
  children: React.ReactNode;
  tabs: TabesTypes[];
  activeTabs: string;
  centerClass: boolean;
  setActiveTabs: (activeTabs: string) => void;
  setActiveAccordion?: (activeAccordion: number | null) => void;
};

const Tabs: React.FC<TabsPropTypes> = ({
  children,
  tabs,
  activeTabs,
  centerClass,
  setActiveTabs,
  setActiveAccordion,
}) => {
  const handleActiveAccordion = (key: string) => {
    if (setActiveAccordion) {
      setActiveAccordion(1);
    }
    setActiveTabs(key);
  };

  return (
    <div>
      <div className="border-b">
        <div className="container py-3 overflow-x-auto">
          <ul
            className={`flex flex-nowrap items-center ${
              centerClass && "justify-center"
            }  gap-6 font-medium`}
          >
            {tabs.map((item, idx) => (
              <li
                onClick={() => handleActiveAccordion(item.key)}
                className={` cursor-pointer
                text-nowrap
             hover:text-secondary transition-colors duration-200
             group
              relative after:block after:absolute
               after:-bottom-3 after:w-full after:bg-secondary
                after:left-0 after:h-[4px] 
                after:transition-colors 
                after:duration-200
               after:hover:bg-secondary ${
                 activeTabs === item.key
                   ? " text-secondary after:bg-secondary"
                   : "text-text_color after:bg-transparent "
               }`}
                key={idx}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Tabs;
