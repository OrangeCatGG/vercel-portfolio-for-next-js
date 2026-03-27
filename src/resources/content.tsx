import { About, Blog, Contact, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Angelo",
  lastName: "Ramos",
  name: "Angeloramos Photography",
  role: "Photography & Videography",
  avatar: "/images/avatar-new.png",
  email: "marisagojocruz06@yahoo.com.ph",
  location: "Asia/Manila",
  languages: ["Filipino", "English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to Our Newsletter</>,
  description: <>Get updates on our latest work and exclusive offers</>,
};

const social: Social = [
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/angeloramos.photography",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/angeloramosph/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Angeloramos Photography | Wedding & Event Photography",
  description: "Professional photography and videography services for weddings, events, and special moments. Capturing memories that last forever.",
  headline: <>Capturing Moments That Last Forever</>,
  featured: {
    display: true,
    title: (
      <>FREE PICTORIAL</>
    ),
    href: "/contact",
  },
  subline: (
    <>
      Professional photography and videography for your most precious moments. 
      Weddings, debuts, birthdays, and every celebration in between.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: "About Angeloramos Photography",
  description: "Learn about our passion for capturing beautiful moments and our commitment to excellence in photography and videography.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "mailto:marisagojocruz06@yahoo.com.ph?subject=Booking%20Inquiry",
  },
  intro: {
    display: true,
    title: "Our Story",
    description: (
      <>
        At Angeloramos Photography, we believe every moment tells a story worth preserving. 
        With years of experience in wedding and event photography, we have dedicated ourselves 
        to the art of capturing emotions, connections, and the fleeting beauty of life&apos;s 
        most precious celebrations. Our approach combines cinematic storytelling with 
        authentic emotion, ensuring your memories are preserved with elegance and artistry.
      </>
    ),
  },
  work: {
    display: true,
    title: "Our Expertise",
    experiences: [
      {
        company: "Wedding Photography",
        timeframe: "Signature Service",
        role: "Full Coverage & Same Day Edit",
        achievements: [
          <>Complete wedding day coverage from preparation to reception</>,
          <>Same Day Edit (SDE) video presentations for your guests</>,
          <>Cinematic storytelling that captures every emotional moment</>,
        ],
        images: [],
      },
      {
        company: "Event Coverage",
        timeframe: "All Occasions",
        role: "Professional Documentation",
        achievements: [
          <>Baptismal, birthday, debut, reunion, and corporate events</>,
          <>High-quality photo and video packages tailored to your needs</>,
          <>Onsite editing and instant prints available</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Equipment & Capabilities",
    skills: [
      {
        title: "Professional Camera Equipment",
        description: (
          <>State-of-the-art cameras and lenses for stunning image quality</>
        ),
        tags: [
          {
            name: "DSLR",
          },
          {
            name: "Mirrorless",
          },
          {
            name: "4K Video",
          },
        ],
        images: [],
      },
      {
        title: "Studio & Lighting",
        description: (
          <>Professional lighting setups for studio portraits and events</>
        ),
        tags: [
          {
            name: "Photobooth",
          },
          {
            name: "Studio Lights",
          },
          {
            name: "Projector",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Photography Tips & Stories",
  description: "Insights, tips, and stories from our photography journey",
};

const work: Work = {
  path: "/work",
  label: "Services",
  title: "Our Services | Angeloramos Photography",
  description: "Complete photography and videography services for all your special occasions",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Portfolio Gallery | Angeloramos Photography",
  description: "Browse our collection of wedding, debut, birthday, and event photography",
  images: [
    {
      src: "/upload/643405084_1403924914867548_5356318093091625407_n.jpg",
      alt: "Gallery Image",
      orientation: "horizontal",
    },
    {
      src: "/upload/643432821_1403937904866249_1606065758966942195_n.jpg",
      alt: "Gallery Image",
      orientation: "horizontal",
    },
    {
      src: "/upload/644055401_1403925101534196_5850016501037753793_n.jpg",
      alt: "Gallery Image",
      orientation: "horizontal",
    },
    {
      src: "/upload/644992560_1403936248199748_2479726541124459247_n.jpg",
      alt: "Gallery Image",
      orientation: "vertical",
    },
    {
      src: "/upload/646731634_1407941631132543_7267704576008112847_n.jpg",
      alt: "Gallery Image",
      orientation: "horizontal",
    },
    {
      src: "/upload/647488047_1407920634467976_4575963463927026081_n.jpg",
      alt: "Gallery Image",
      orientation: "horizontal",
    },
    {
      src: "/upload/647860886_1407921207801252_2265483709074230455_n.jpg",
      alt: "Gallery Image",
      orientation: "vertical",
    },
    {
      src: "/upload/648834815_1407920677801305_2391843919423853094_n.jpg",
      alt: "Gallery Image",
      orientation: "horizontal",
    },
    {
      src: "/upload/648999862_1407941587799214_6146639121367153032_n.jpg",
      alt: "Gallery Image",
      orientation: "vertical",
    },
    {
      src: "/upload/644529092_1403906004869439_2072253442678557298_n.jpg",
      alt: "Gallery Image",
      orientation: "horizontal",
    },
    {
      src: "/upload/644697741_1403888501537856_7408920720871332226_n.jpg",
      alt: "Gallery Image",
      orientation: "vertical",
    },
    {
      src: "/upload/645063984_1403890824870957_6159837259599932731_n.jpg",
      alt: "Gallery Image",
      orientation: "horizontal",
    },
    {
      src: "/upload/645304854_1403906088202764_2092610171447579370_n.jpg",
      alt: "Gallery Image",
      orientation: "vertical",
    },
    {
      src: "/upload/645418179_1403906854869354_8830061894182832409_n.jpg",
      alt: "Gallery Image",
      orientation: "horizontal",
    },
    {
      src: "/upload/645711881_1403889861537720_4852969470801467914_n.jpg",
      alt: "Gallery Image",
      orientation: "vertical",
    },
  ],
};

const contact: Contact = {
  path: "/contact",
  label: "Contact",
  title: "Contact Us | Angeloramos Photography",
  description: "Get in touch with us for photography and videography inquiries. Book your event today!",
};

export { person, social, newsletter, home, about, blog, work, gallery, contact };
