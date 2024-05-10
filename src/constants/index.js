import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = {
  '/' : [
    {
      id: "about",
      title: "About",
    },
    {
      id: "signin",
      title: "Sign In",
    },
    {
      id: "login",
      title: "Log In",
    }
  ],
  '/logedin' : [
    {
      id: "about",
      title: "About",
    },
    {
      id: "logout",
      title: "Log out",
    }
  ],
  '/explore' : [
    {
      id: "about",
      title: "About",
    },
    {
      id: "logout",
      title: "Log out",
    }
  ]
};

const services = [
  {
    title: "Buy Real Estate",
    icon: web,
    link: ''
  },
  {
    title: "Sell Real Estate",
    icon: mobile,
    link: ''
  },
  {
    title: "Invest in Real Estate",
    icon: backend,
    link: '/explore'
  },
  {
    title: "Register Real Estate",
    icon: creator,
    link: '/registerland'
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Buy Real Estate",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "This service allows users to purchase real estate properties listed on the platform. ",
      "Users can browse through available properties, view details such as location, area, and ownership information, and proceed to buy the property by acquiring all the tokens related to that property. ",
      "The purchase is recorded on the blockchain, ensuring transparency and security in the transaction.",
      
    ],
  },
  {
    title: "Sell Real Estate",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Users who own real estate properties registered on the platform can list their properties for sale.",
      "When a property is listed for sale, users can offer to sell all the tokens related to that property, effectively transferring ownership of the entire property to the buyer.",
      "The sale transaction is recorded on the blockchain, providing a secure and transparent method of transferring property ownership.",
    ],
  },
  {
    title: "Invest in Real Estate",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "This service enables users to invest in real estate properties by purchasing fractional ownership tokens.",
      "Fractional ownership allows users to own a percentage of a property, proportional to the number of tokens they hold.",
      "IUsers can browse available investment opportunities, view property details and token prices, and purchase tokens to become partial owners of the property. ",
      "The ownership information is recorded on the blockchain, providing transparency and security for all investors.",
    ],
  },
  {
    title: "Register Real Estate",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "This service allows users to register their lands or real estate properties on the platform by providing proofs of ownership.",
      "Users can upload documents such as land titles, sale deeds, and survey reports to verify their ownership.",
      "Once verified, the property is registered on the blockchain, creating a digital representation of the property.",
      "Registered properties can then be bought, sold, or invested in by other users on the platform, with all transactions recorded securely on the blockchain.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Beachfront Condo with Ocean Views",
    description: "Beautiful condo located directly on the beach, offering stunning ocean views and luxurious amenities.",
    tags: [
        { name: "condo", color: "blue-text-gradient" },
        { name: "beachfront", color: "green-text-gradient" },
        { name: "ocean-view", color: "pink-text-gradient" }
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Downtown Apartment with Cityscape",
    description: "Modern apartment in the heart of the city, featuring panoramic cityscape views and convenient access to amenities.",
    tags: [
        { name: "apartment", color: "blue-text-gradient" },
        { name: "downtown", color: "green-text-gradient" },
        { name: "city-view", color: "pink-text-gradient" }
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Rural Farmhouse with Acres of Land",
    description: "Charming farmhouse nestled in the countryside, offering a peaceful retreat and vast expanses of land.",
    tags: [
        { name: "farmhouse", color: "blue-text-gradient" },
        { name: "rural", color: "green-text-gradient" },
        { name: "acres-of-land", color: "pink-text-gradient" }
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mountain Cabin with Scenic Views",
    description: "Cozy cabin located in the mountains, providing breathtaking views of the surrounding natural beauty.",
    tags: [
        { name: "cabin", color: "blue-text-gradient" },
        { name: "mountain", color: "green-text-gradient" },
        { name: "scenic-view", color: "pink-text-gradient" }
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Suburban Townhouse with Private Garden",
    description: "Spacious townhouse in a suburban setting, featuring a private garden and easy access to urban conveniences.",
    tags: [
        { name: "townhouse", color: "blue-text-gradient" },
        { name: "suburban", color: "green-text-gradient" },
        { name: "private-garden", color: "pink-text-gradient" }
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Historic Mansion with Architectural Charm",
    description: "Grand mansion with historical significance, showcasing exquisite architectural details and luxurious living spaces.",
    tags: [
        { name: "mansion", color: "blue-text-gradient" },
        { name: "historic", color: "green-text-gradient" },
        { name: "architectural-charm", color: "pink-text-gradient" }
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Luxury Villa for Sale",
    description:
        "Stunning luxury villa located in a prestigious neighborhood. This spacious property features modern amenities and breathtaking views.",
    tags: [
        {name: "property", color: "blue-text-gradient",},
        {name: "luxury", color: "green-text-gradient",},
        {name: "villa", color: "pink-text-gradient",},
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const nations = [
  { id: 1, name: 'Sri Lanka' },
  { id: 2, name: 'Canada' },
  { id: 3, name: 'UK' },
  { id: 4, name: 'USA' },
  { id: 5, name: 'India' },
  { id: 6, name: 'Australia' },
]

export { services, technologies, experiences, testimonials, projects, nations };
