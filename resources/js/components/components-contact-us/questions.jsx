import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { containerVariants, fadeRightVariants, fadeLeftVariants, fadeVariants} from "@/lib/animations";
import { faqData } from "@/lib/contactUsData";
import { motion } from "framer-motion";

export default function Questions() {
  return (
    <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    >
      <Accordion type="single" collapsible className="w-full" defaultValue="">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>
              <motion.p
                      variants={fadeVariants}
                className="bg-[radial-gradient(circle_at_75%,#c89116,#cfceaa)]
      text-transparent bg-clip-text font-extrabold text-description"
              >
                {item.question}
              </motion.p>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <motion.p className="text-description">{item.answer}</motion.p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}
