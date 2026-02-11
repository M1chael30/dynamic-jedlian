import { companyLeadersData } from "../../lib/aboutUsData";
import PersonWidget from "./person-widget";
import PersonWidgetMobile from "./person-widget.mobile";
import { motion } from "motion/react";
import { containerVariants } from "../../lib/animations";

export default function LeadersSection() {

  return (
    <motion.div 
    className="space-y-10 px-10 flex flex-col items-center">
      {companyLeadersData.map((person, index) => (
        <PersonWidget
          key={index}
          image={person.image}
          name={person.name}
          position={person.position}
          content={person.textContent}
          isReverse={index % 2 === 0}
          banner={person.banner}
        />
      ))}
      {companyLeadersData.map((person, index) => (
        <PersonWidgetMobile
          key={index}
          image={person.mobileImage}
          name={person.name}
          position={person.position}
          content={person.textContent}
        />
      ))}
    </motion.div>
  );
}
