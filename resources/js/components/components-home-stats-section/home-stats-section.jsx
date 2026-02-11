// import Image from "next/image";
import HomeStatsButton from "./home-stats-button";
import HomeStatsCards from "./home-stats-cards";
import { HomeStatsCardMobile } from "./home-stats-card-mobile";

export default function HomeStatsSection() {
 return (
  <section className="relative flex flex-col items-center bg-zinc-900 space-y-8 overflow-hidden w-full mx-auto max-w-7xl px-4 py-14">
   {/* background image */}
   <img
    src={"images/bg-casa-jedliana.png"}
    alt="Casa Jedliana Background"
    className="object-cover w-full h-full absolute inset-0"
   />
   {/* contents */}
   <div className="relative z-10 flex flex-col items-center justify-center space-y-7 w-full">
    <HomeStatsCardMobile />
    <HomeStatsCards />
    <HomeStatsButton />
   </div>
  </section>
 );
}
