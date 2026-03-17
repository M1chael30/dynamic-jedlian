import CustomButton from "../ui/custom-button";
import { ArrowRight } from "lucide-react";

export default function HomeStatsButton() {
 return (
  <CustomButton
   buttonText="Learn more about us"
   buttonHref="/about-us"
   icon={<ArrowRight size={18} />}
  />
 );
}
