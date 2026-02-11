import { useEffect, useRef, useState } from "react";
import CorporateValuesButton from "./corporate-values-button";
import { corporateValuesButtonsData } from "../../lib/corporateGovernanceData";
import CorporateValuesContent from "./corporate-values-content";

import { containerVariants } from "../../lib/animations";
import { motion } from "motion/react";

import bgCasa from "images/bg-casa-jedliana.png";

export default function CorporateValues() {
  const [active, setActive] = useState(0);
  const [expand, setExpand] = useState(false);
  const containerRef = useRef(null);

  const activeItem = corporateValuesButtonsData[active];

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setExpand(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className={`hidden flex-col mt-12 md:flex`}>
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row md:h-100 items-center lg:h-auto md:w-200 lg:w-250 gap-10 justify-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
        className="grid grid-cols-2 items-center justify-center gap-x-40">
          {corporateValuesButtonsData.map((item, index) => (
            <CorporateValuesButton
              key={item.id}
              customClassName={`
                ${
                  expand && active === index
                    ? "bg-gradient-to-b from-amber-400 to-yellow-100 scale-125"
                    : "bg-gradient-to-b from-yellow-600 to-yellow-200"
                }
                ${
                  item.id === 2
                     ? "col-span-2 place-self-center"
                     : ""
                }
                `}
              // {
              //   expand && active === item.id
              //     ? "bg-gradient-to-b from-amber-400 to-yellow-100 scale-115"
              //     : "bg-gradient-to-b from-yellow-600 to-yellow-200" &&
              //   item.id === 2
              //   ? "col-span-2 place-self-center"
              //   : ""
              // }
              onClick={() => {
                if (active === index) {
                  setExpand((prev) => !prev);
                } else {
                  setActive(index);
                  setExpand(true);
                }
              }}
            >
              <img
                src={item.logo}
                alt="logo"
                className="w-20 h-20 md:w-25 md:h-25 select-none"
              />
            </CorporateValuesButton>
          ))}
        </motion.div>
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="flex-wrap gap-5 justify-center md:flex hidden"
        > */}
        {/* {corporateValuesButtonsData.map((item, index) => (
            <CorporateValuesButton
              key={index}
              customClassName={
                expand && active === index
                  ? "bg-gradient-to-b from-amber-400 to-yellow-100 scale-115"
                  : " bg-gradient-to-b from-yellow-600 to-yellow-200"
              }
              onClick={() => {
                if (active === index) {
                  setExpand((prev) => !prev);
                } else {
                  setActive(index);
                  setExpand(true);
                }
              }}
            >
              <Image
                          draggable="false"
                src={item.logo}
                alt="logo"
                className="w-20 h-20 md:w-25 md:h-25 select-none"
              />
            </CorporateValuesButton>
          ))}
        </motion.div>
        */}
         <CorporateValuesContent
           objects={corporateValuesButtonsData}
           item={activeItem}
           expand={expand}
        />
      </div>
    </section>
  );
}
