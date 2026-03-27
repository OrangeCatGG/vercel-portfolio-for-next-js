import { About, Blog, Contact, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Angelo",
  lastName: "Ramos",
  name: "Angeloramos Photography",
  role: "Photography & Videography",
  avatar: "/images/avatar.jpg",
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
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/angeloramos_photography",
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
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Wedding photography",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Portrait photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "Event photography",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Debut photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Birthday photography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Wedding moments",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Celebration photography",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Portrait session",
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
