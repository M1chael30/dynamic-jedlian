import AchievementsContentSection from "@/components/components-achievements-page/achievements-content-section";
import AchievementsTopSection from "@/components/components-achievements-page/achievements-top-section";
import { Head } from "@inertiajs/react";

export default function Achievements() {
 return (
  <>
   <Head title="Achievements" />
   <section className="mx-auto w-full max-w-7xl">
    <AchievementsTopSection />
    <AchievementsContentSection />
   </section>
  </>
 );
}
