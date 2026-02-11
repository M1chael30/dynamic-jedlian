import ceo from '/public/images/ceoImage.png';
import banner1 from '/public/images/ceoLabel.png';
import coo from '/public/images/cooImage.png';
import banner2 from '/public/images/cooLabel.png';
import ceoMobile from '/public/images/maamEdithaMobile.png';
import cooMobile from '/public/images/sirChristianMobile.png';

const companyLeadersData = [
    {
        id: 0,
        image: ceo,
        mobileImage: ceoMobile,
        name: 'Editha Galang',
        position: 'CEO/President',
        textContent:
            "Jedlian Holdings Inc. is a diversified parent company that oversees and strategically manages five thriving business enterprises, each contributing to the organization's continued growth and reputation for excellence: Jedlian Communication, Jedlian Construction, Jedlian Gasoline, Jedlian Drugstore, and Casa Jedliana Hotel and Resort.",
        banner: banner1,
    },
    {
        id: 1,
        image: coo,
        mobileImage: cooMobile,
        name: 'Christian Galang',
        position: 'COO/Co-founder',
        textContent:
            'Built on a strong foundation in telecommunications, the company expanded into construction, hospitality, energy, and healthcare—delivering quality, innovation, and value across industries. United by a commitment to excellence, Jedlian Holdings continues to drive sustainable growth and long-term impact.',
        banner: banner2,
    },
];

const quotesData = {
    text1: 'Through Christian Galang’s leadership, the company has not only thrived, but also become a beacon of hope for those who dare to dream big.',
    text2: 'Because he did not falter nor weaken in faith, many have been blessed. Because he bravely faced every challenge, the company now marches toward greatness.',
    text3: 'Thank you, for being a pillar of strength and a source of inspiration to many. A man whose life stands as a living testimony of God’s favor and abundant blessing.',
};

export { companyLeadersData, quotesData };
