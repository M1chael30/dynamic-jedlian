import { Link } from "@inertiajs/react";

export default function CustomButton({
 buttonText = "Hover me",
 buttonHref = "#",
 icon,
}) {
 return (
  <button
   className="
        relative overflow-hidden
        border border-[#EFBF04] p-3.5
        text-[15px] leading-3.75
        cursor-pointer
        group text-[#EFBF04]
      "
  >
   {/* Default text */}
   <span
    className="
          relative z-10
          transition-colors duration-300
          ease-[cubic-bezier(0.48,0,0.12,1)]
          group-hover:text-background
        "
   >
    <Link href={buttonHref} className="flex items-center gap-2 text-sm">
     {buttonText} {icon}
    </Link>
   </span>

   {/* Background animation */}
   <span
    className="
          absolute left-0 bottom-[-50%]
          h-full w-full
          bg-[#EFBF04]
          origin-bottom
          skew-y-7 scale-y-0  
          transition-transform duration-300 
          ease-[cubic-bezier(0.48,0,0.12,1)]
          group-hover:scale-y-[2]
          z-0
        "
   />
  </button>
 );
}
