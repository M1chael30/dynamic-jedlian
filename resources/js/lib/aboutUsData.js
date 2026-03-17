import ceo from '/public/images/aboutus-page-img/ceoImage.png';
import coo from '/public/images/aboutus-page-img/cooImage.png';
import banner1 from '/public/images/aboutus-page-img/leftRibbon.png';
import ceoMobile from '/public/images/aboutus-page-img/maamEdithaMobile.png';
import banner2 from '/public/images/aboutus-page-img/rightRibbon.png';
import cooMobile from '/public/images/aboutus-page-img/sirChristianMobile.png';

const companyLeadersData = [
  {
    id: 0,
    image: ceo,
    mobileImage: ceoMobile,
    name: 'Editha Galang',
    position: 'CEO/President',
    banner: banner1,
  },
  {
    id: 1,
    image: coo,
    mobileImage: cooMobile,
    name: 'Christian Galang',
    position: 'COO/Co-founder',
    banner: banner2,
  },
];

const quotesData = {
  text1: 'Through Christian Galang’s leadership, the company has not only thrived, but also become a beacon of hope for those who dare to dream big.',
  text2:
    'Because he did not falter nor weaken in faith, many have been blessed. Because he bravely faced every challenge, the company now marches toward greatness.',
  text3:
    'Thank you, for being a pillar of strength and a source of inspiration to many. A man whose life stands as a living testimony of God’s favor and abundant blessing.',
};

export { companyLeadersData, quotesData };
