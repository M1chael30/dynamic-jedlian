import TopSection from '../../components/components-jedlian-business-section/top-section'
import ContentSection from '../../components/components-jedlian-business-section/content-section'
import BottomSection from '../../components/components-jedlian-business-section/bottom-section'


export default function Business({ business }) {
  const sections = business.business_sections;
  const socials = business.business_socials;
  const branches = business.business_branches;
  const images = business.business_images;

  // banner = images.image_path
  // circleBanner = images.image_path

  console.log(images)

  return (
    <section className="relative mx-auto w-full max-w-7xl">
      {/* image background */}
      {/* <Image
    fill
    priority
    src={bgBusinessPage}
    draggable="false"
    alt="Business page background image"
    className="object-cover select-none"
   /> */}

      <div className="relative z-10 flex flex-col">
        {/* top section */}
        <TopSection images={images} />
        {/* {sections.map((item, index)=>(
          <div key={index}>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </div>
        ))} */}
        {/* <h1 className="capitalize">
        {business.category}
        </h1> */}

        {/* content section */}
        <ContentSection business={business} />
        <BottomSection business={business}/>
      </div>
    </section>
  );
}
