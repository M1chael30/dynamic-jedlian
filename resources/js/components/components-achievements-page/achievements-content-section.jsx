import DesktopView from "./desktop-view";

export default function AchievementsContentSection({achievements}) {
 return (
  <section className="flex flex-col items-center justify-center p-8 md:p-10">
   <DesktopView achievements={achievements} />
   {/*<MobileView/> */}
   {/* <Timeline/> */}
  </section>
 );
}
