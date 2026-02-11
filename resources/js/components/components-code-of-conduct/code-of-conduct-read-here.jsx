import { FaArrowRight } from "react-icons/fa";

export default function COCReadHere() {
 return (
  <div className="flex items-center justify-between px-8 py-4 rounded-full bg-zinc-400 text-black md:w-80 md:justify-self-end">
   <p className="text-subtitle">Read Here</p>
   <button className="cursor-pointer rounded-full bg-zinc-100 p-4">
    <FaArrowRight size={14} />
   </button>
  </div>
 );
}
