import TopSection from "@/components/components-about-us-page/top-section";
import LeadersSection from "@/components/components-about-us-page/leaders-section";
import GeoFootPrintSection from "@/components/components-about-us-page/geo-footprint-section";
import QuoteSection from "@/components/components-about-us-page/quote-section";

export default function AboutUs() {
 return (
  <section className="max-w-7xl w-full mx-auto">
   <TopSection />
   <LeadersSection />
   <div className="w-full bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)] h-3 mt-10" />
   <GeoFootPrintSection />
   <QuoteSection />
  </section>
 );
}
