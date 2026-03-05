import TopSection from '../../components/components-jedlian-business-section/top-section'
import ContentSection from '../../components/components-jedlian-business-section/content-section'
import BottomSection from '../../components/components-jedlian-business-section/bottom-section'
import { Head } from '@inertiajs/react';


export default function Business({ business }) {
  const images = business.business_images;

  return (
    <>
      <Head title={business?.name} />
      <section className="relative mx-auto w-full max-w-7xl">
        <img
          src={"/images/business-page-img/bg-business-page.png"}
          className="absolute inset-0 w-full h-full object-cover -z-10"
          alt="Background"
        />
        <div className="relative z-10 flex flex-col">
          {/* top section */}
          <TopSection images={images} />

          {/* content section */}
          <ContentSection business={business} />
          <BottomSection business={business} />
        </div>
      </section>
    </>
  );
}
