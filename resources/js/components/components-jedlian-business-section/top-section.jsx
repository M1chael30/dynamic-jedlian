import { containerVariants, fadeVariants } from '@/lib/animations';
import { motion } from 'framer-motion';
import empty from '../../../../public/images/empty.png';

import casaJedlianaLogo from '../../../../public/images/casa-jedliana-logo.png';
import jedlianCommunicationLogo from '../../../../public/images/jedlian-communication-logo.png';
import jedlianConstructionLogo from '../../../../public/images/jedlian-construction-logo.png';
import jedlianDrugstoreLogo from '../../../../public/images/jedlian-drugstore-logo.png';
import jedlianGasolineLogo from '../../../../public/images/jedlian-gasoline-logo.png';

import {
  default as casaJedlianaBanner,
  default as jedlianCommunicationBanner,
  default as jedlianConstructionBanner,
  default as jedlianDrugstoreBanner,
  default as jedlianGasolineBanner,
} from '../../../../public/images/business-page-img/bannerCommunication.png';

import casaJedlianaCircleBanner from '../../../../public/images/business-page-img/jedlian-casa-logo.png';
import jedlianCommunicationCircleBanner from '../../../../public/images/business-page-img/jedlian-communication-logo.png';
import jedlianConstructionCircleBanner from '../../../../public/images/business-page-img/jedlian-construction-logo.png';
import jedlianDrugstoreCircleBanner from '../../../../public/images/business-page-img/jedlian-drugstore-logo.png';
import jedlianGasolineCircleBanner from '../../../../public/images/business-page-img/jedlian-gasoline-logo.png';

export default function TopSection({ images }) {
  const banner = images.find((img) => img.image_type === 'banner')?.image_path;
  const circle = images.find((img) => img.image_type === 'circle_banner')?.image_path;

  console.log(images)

  const logoImages = [jedlianCommunicationLogo, jedlianConstructionLogo, jedlianGasolineLogo, jedlianDrugstoreLogo, casaJedlianaLogo];

  const bannerImages = [jedlianCommunicationBanner, jedlianConstructionBanner, jedlianGasolineBanner, jedlianDrugstoreBanner, casaJedlianaBanner];

  const circleBannerImages = [
    jedlianCommunicationCircleBanner,
    jedlianConstructionCircleBanner,
    jedlianGasolineCircleBanner,
    jedlianDrugstoreCircleBanner,
    casaJedlianaCircleBanner,
  ];

  // const bannerImages 
  return (
    <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="relative">
      <motion.div variants={fadeVariants}>
        {/* image banner at the top */}
        {banner ? (
          <img src={`/storage/${banner}`} alt="No image provided" className="h-auto w-full max-w-full object-contain select-none" />
        ) : (
          <div className="flex h-auto w-full max-w-full items-center justify-center object-contain select-none">
            <img src={empty} alt="No image provided" />
          </div>
        )}

        {/* circle image on the top right */}
        <div className="absolute top-0 right-0 w-24 md:w-44">
          <div className="relative">
            <img src="/images/business-page-img/circleBG.png" alt="No image provided" className="w-full object-contain select-none" />
            {/* <img src={`/storage/${circle}`} alt="No image provided" className="absolute top-0 right-0 w-18 object-contain select-none md:w-32" /> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
