import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About",
    url: "/about",
  },
  {
    id: "2",
    title: "Projects",
    url: "/projects",
  },
  {
    id: "3",
    title: "Personnel",
    url: "/teams",
    onlyMobile: true,
  },
  {
    id: "4",
    title: "Contact",
    url: "/contact",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Electrical System Design",
  "Mechanical System Design",
  "Installation and Maintenance",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "High-Quality Installations",
    text: "Providing top-notch installation services for electrical and mechanical systems to ensure operational excellence.",
    date: "Q1 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Preventive Maintenance Programs",
    text: "Developing comprehensive maintenance programs to prevent breakdowns and extend the lifespan of equipment.",
    date: "Q2 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Energy Efficiency Solutions",
    text: "Implementing energy-efficient solutions to help clients reduce their energy consumption and costs.",
    date: "Q3 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Smart Building Integration",
    text: "Integrating advanced technologies to create smart buildings that are more efficient and easier to manage.",
    date: "Q4 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With a focus on total quality management, Ditech Engineering ensures that all projects are executed with precision and excellence.";

export const collabContent = [
  {
    id: "0",
    title: "High-Quality Installations",
    text: collabText,
  },
  {
    id: "1",
    title: "Preventive Maintenance",
  },
  {
    id: "2",
    title: "Energy Efficiency",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Gear",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Standard installation and maintenance services",
    price: "0",
    features: [
      "Basic installation services for electrical systems",
      "Routine maintenance to ensure system reliability",
      "Standard support and service guarantees",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced services with priority support and analytics",
    price: "9.99",
    features: [
      "Advanced installation and setup for complex systems",
      "Comprehensive maintenance plans with analytics",
      "Priority support and rapid response times",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Customized solutions for large-scale projects",
    price: null,
    features: [
      "Customized installation services tailored to specific needs",
      "Advanced maintenance and monitoring solutions",
      "Dedicated account manager and personalized support",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Expertise and Reliability",
    text: "Our team provides reliable and expert services for all your electromechanical needs.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Quality Assurance",
    text: "We ensure high-quality standards in every project, meeting all regulatory requirements.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Comprehensive Solutions",
    text: "Offering a wide range of services from installation to maintenance, ensuring comprehensive support.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Customer Satisfaction",
    text: "Dedicated to achieving high levels of customer satisfaction through our quality services.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Innovation",
    text: "Incorporating the latest technologies to deliver innovative solutions.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Sustainable Practices",
    text: "Committed to sustainable practices and energy-efficient solutions.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];
export const services = [
  {
    id: "0",
    title: "Mechanical Engineering",
    text: "Providing innovative mechanical engineering solutions for a variety of industries, ensuring efficiency and reliability..",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Electrical Engineering",
    text: "Expertise in electrical systems design, installation, and maintenance to power your business operations.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Renewable Energy Solutions",
    text: "Sustainable and cost-effective renewable energy solutions including solar, wind, and geothermal systems.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Project Management",
    text: "Professional project management services to ensure timely and within-budget completion of your engineering projects.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Consulting Services",
    text: "Expert consulting services to guide you through complex engineering challenges and strategic planning.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "HVAC Systems",
    text: "Design and installation of high-efficiency HVAC systems for optimal indoor climate control and energy savings.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];
export const socials = [
  {
    id: "0",
    title: "LinkedIn",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
