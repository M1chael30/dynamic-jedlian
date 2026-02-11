import COCReadHere from "./code-of-conduct-read-here";

export default function CodeOfConductDesc() {
 return (
  <div className="w-full md:w-1/2 space-y-6">
   <p className="text-yellow-100 text-description text-center lg:text-start">
    Our Code of Conduct outlines the ethical standards and professional behavior
    expected of everyone in the organization. It promotes integrity, respect,
    accountability, and compliance with laws and company policies in all
    work-related activities.
   </p>
   <COCReadHere />
  </div>
 );
}
