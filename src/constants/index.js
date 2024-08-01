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
  photoshop,
  premiere,
  tailwind,
  git,
  figma,
  profile,
  threejs,
  hilink,
  doob,
  kasper,
  leon,
  nord,
  animatedTemplate,
  personalDashboard,
  goAcademy,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Monteur",
    icon: mobile,
  },
  {
    title: "Graphic Designer",
    icon: backend,
  },
  {
    title: "Social Media Manager",
    icon: creator,
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "photoshop",
    icon: photoshop,
  },
  {
    name: "premiere",
    icon: premiere,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Freelancer",
    icon: profile,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const projects = [
  {
    name: "Hilink Travel App",
    description:
      "An engaging advertisement web app for a campaign, featuring interactive content and call-to-action buttons to boost user engagement and drive conversions.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.JS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
    ],
    image: hilink,
    source_code_link: "https://github.com/Ali-AK004/Travel-App",
    demo_link: "https://travel-dyy4xef88-ali-ak004s-projects.vercel.app/",
  },
  {
    name: "Doob | Agency Template",
    description:
      "A vibrant template agency with stunning colors, smooth animations, and compelling call-to-action buttons designed to captivate users and enhance their browsing experience.",
    tags: [
      {
        name: "HTML 5",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "CSS 3",
        color: "pink-text-gradient",
      },
      {
        name: "Vanilla JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: doob,
    source_code_link: "https://github.com/Ali-AK004/Doob-Simple-Agency",
    demo_link: "https://ali-ak004.github.io/Doob-Simple-Agency/",
  },
  {
    name: "Kasper | Template",
    description:
      "A sleek agency template with vibrant colors, smooth animations, and effective call-to-action buttons, designed to impress clients and elevate your brand’s online presence.",
    tags: [
      {
        name: "HTML 5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "Vanilla JS",
        color: "pink-text-gradient",
      },
    ],
    image: kasper,
    source_code_link: "https://github.com/Ali-AK004/Kasper-Template",
    demo_link: "https://ali-ak004.github.io/Kasper-Template/",
  },
  {
    name: "Leon | Agency Template",
    description:
      "A stylish agency template with vibrant colors, smooth animations, and a modern design, crafted to showcase your services and make a lasting impression.",
    tags: [
      {
        name: "HTML 5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "Vanilla JS",
        color: "pink-text-gradient",
      },
    ],
    image: leon,
    source_code_link: "https://github.com/Ali-AK004/Leon-Template",
    demo_link: "https://ali-ak004.github.io/Leon-Template/",
  },
  {
    name: "Nord | Agency Template",
    description:
      "A contemporary agency template with vibrant colors, fluid animations, and an elegant layout, designed to highlight your portfolio and leave a memorable impression.",
    tags: [
      {
        name: "HTML 5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "Vanilla JS",
        color: "pink-text-gradient",
      },
    ],
    image: nord,
    source_code_link: "https://github.com/Ali-AK004/Nord-Design",
    demo_link: "https://ali-ak004.github.io/Nord-Design/",
  },
  {
    name: "Personal Template",
    description:
      "A beautifully designed personal template featuring increasingly impressive animations, vibrant colors, and a refined layout, perfect for showcasing your unique style and projects.",
    tags: [
      {
        name: "HTML 5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
    ],
    image: animatedTemplate,
    source_code_link: "https://github.com/Ali-AK004/Animated-Template",
    demo_link: "https://ali-ak004.github.io/Animated-Template/",
  },
  {
    name: "Personal Dashboard",
    description:
      "Experience a vibrant, fully responsive personal dashboard with multiple pages and an intuitive design that streamlines your digital life with eye-catching colors and ease.",
    tags: [
      {
        name: "HTML 5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
    ],
    image: personalDashboard,
    source_code_link: "https://github.com/Ali-AK004/Personal-Dashboard",
    demo_link: "https://ali-ak004.github.io/Personal-Dashboard/",
  },
  {
    name: "Go Academy | Online Academy",
    description:
      "Explore our online academy where students purchase courses and display them on a beautiful profile page, all backed by top-tier security for a safe learning experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.JS",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
    ],
    image: goAcademy,
    progress: true,
  },
];

export { services, technologies, experiences, projects };
