import TopSection from "@/components/components-about-us-page/top-section";
import LeadersSection from "@/components/components-about-us-page/leaders-section";
import GeoFootPrintSection from "@/components/components-about-us-page/geo-footprint-section";
import QuoteSection from "@/components/components-about-us-page/quote-section";
import { Head } from "@inertiajs/react";
import CommunitySection from "../../components/components-about-us-page/community-section";

export default function AboutUs({content}) {
 return (
  <>
   <Head title="About Us" />
   <section className="max-w-7xl w-full mx-auto">
    <TopSection />
    <LeadersSection data={content}/>
    <GeoFootPrintSection data={content} />
    <CommunitySection data={content}/>
   </section>
  </>
 );
}
