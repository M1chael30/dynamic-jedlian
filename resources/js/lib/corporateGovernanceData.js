import { PiTargetFill } from "react-icons/pi";
import { BsEyeFill } from "react-icons/bs";

//logo imports
// import customerFocusedLogo from "images/logos-corporate-values/icons/customer-focused.png";
// import innovativeLogo from "images/logos-corporate-values/icons/innovative.png";
// import godCenteredLogo from "images/logos-corporate-values/icons/god-centered.png";
// import integrityLogo from "images/logos-corporate-values/icons/integrity.png";
import teamworkLogo from "images/logos-corporate-values/icons/teamwork.png";

const corporateValuesButtonsData = [
 {
  id: 0,
  title: "customer-focused",
  description: "Our Top Priority Is Our Customer, Serving Them Above All",
//   logo: customerFocusedLogo,
 },
 {
  id: 1,
  title: "Integrity",
  description:
   "Highly Values the Sense of Honesty and Accountability in All Our Actions",
//   logo: integrityLogo,
 },
 {
  id: 2,
  title: "God-Centered",
  description: "God at the Center of Everything We Do",
//   logo: godCenteredLogo,
 },
 {
  id: 3,
  title: "Innovative",
  description: "To Innovate and Adapt Opportunities to Changes",
//   logo: innovativeLogo,
 },
 {
  id: 4,
  title: "Teamwork",
  description:
   "We Build a Customer-Oriented Team That Delivers Quality Service",
//   logo: teamworkLogo,
 },
];

const missionVisionData = [
 {
  title: "mission",
  description:
   "To provide a highly reliable quality work and services while consistently adapting to a fast-paced changing technological industry.",
  icon: PiTargetFill,
 },
 {
  title: "vision",
  description:
   "Coupled and inspired with our vision, to become the leader in providing a complete and full range of services to meet our customer's requirements.",
  icon: BsEyeFill,
 },
];

export { corporateValuesButtonsData, missionVisionData };
