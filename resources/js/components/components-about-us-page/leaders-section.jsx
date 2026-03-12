import { companyLeadersData } from "../../lib/aboutUsData";
import PersonWidget from "./person-widget";
import PersonWidgetMobile from "./person-widget.mobile";
import { motion } from "motion/react";

export default function LeadersSection({ data }) {

  return (
    <motion.div
      className="space-y-10 px-10 flex flex-col items-center mt-5">
      {[data[0], data[1]].map((person, index) => (
        <PersonWidget
          key={index}
          data={person}
          isReverse={index % 2 === 0}
        />
      ))}
      {
        [data[0], data[1]].map((person, index) => (
          <PersonWidgetMobile
            key={index}
            image={person.image_path}
            title={person.title}
            position={person.position}
            content={person.content}
          />
        ))
      }
    </motion.div>
  );
}
