import { motion } from 'motion/react';
import PersonWidget from './person-widget';
import PersonWidgetMobile from './person-widget.mobile';

export default function LeadersSection({ data }) {
  return (
    <motion.div className="mt-5 flex flex-col items-center space-y-10 px-10">
      {[data[0], data[1]].map((person, index) => (
        <PersonWidget
          key={index}
          data={person}
          isReverse={index % 2 === 0}
        />
      ))}
      {[data[0], data[1]].map((person, index) => (
        <PersonWidgetMobile
          key={index}
          image={`/storage/${person.image_path}`}
          title={person.title}
          position={person.position}
          content={person.content}
          quote = {person.quote}
        />
      ))}
    </motion.div>
  );
}
