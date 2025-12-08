// projects.js

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export const Projects = [
  {
    id: "WD01",
    image: "/Projects/uecompliance.png",
    alt: "UE Compliance website preview cover image",
    title: "United Energy Compliance",
    description: 
    "United Energy Management (UEM) is a building energy benchmarking company serving multi-family, retail, and commercial properties. They help property owners comply with local energy benchmarking laws while avoiding fines and administrative stress.",

    results: [
      "Scalable system ready for growth",
      "Automated client intake and communication",
      "Seamless & guided user experience",
      "Reduced manual administrative work",
    ],

    tools: [
      {
        name: "Carrd",
        icon: "/Stacks/Carrd.png",
      },
      {
        name: "CSS3",
        icon: "/Stacks/CSS3.png",
      },
      {
        name: "JavaScript",
        icon: "/Stacks/JavaScript.png",
      },
      {
        name: "Canva",
        icon: "/Stacks/Canva.png",
      },
    {
        name: "MailerLite",
        icon: "/Stacks/MailerLite.webp",
      },
    {
        name: "Zapier",
        icon: "/Stacks/Zapier.svg",
      },
      {
        name: "PostGrid",
        icon: "/Stacks/PostGrid.png",
      },
    ],

    urls: [
      {
        name: "live preview",
        to: "https://uecompliance.com",
      },
    ],
  },

  {
    id: "FD02",
    image: "/Projects/Vue js.png",
    alt: "Vue.js website clone preview cover image",
    title: "Vue.js Clone",
    description:
      "A fully custom React and TailwindCSS clone of the Vue.js website, recreated as a personal project to showcase my front-end development skills, including component architecture, complex array mapping, and responsive UI engineering.",

    results: [
      "Complex data mapping",
      "Fully responsive",
      "Smooth state logic & interactivity",
      "Seamless navigation & performance",
      "Modular folder structure",
    ],

    tools: [
      {
        name: "React",
        icon: "/Stacks/React.png",
      },
      {
        name: "Tailwind CSS",
        icon: "/Stacks/TailwindCSS.png",
      },
      {
        name: "Canva",
        icon: "/Stacks/Canva.png",
      },
    ],

    urls: [
      {
        name: "live preview",
        to: "https://github.com/samthewebguy/vuejs-clone",
      },
      {
        name: "view code",
        to: "https://vuejs-website-clone-project.vercel.app",
        icon: faArrowUpRightFromSquare,
      },
    ],
  },

    {
    id: "FD03",
    image: "/Projects/AdviceGeneratorApp.gif",
    alt: "Advice Generator App preview cover image",
    title: "Advice Generator App",
    description:
      "Advice generator app that fetches random advice from the Advice Slip API. It focuses on working with APIs, handling asynchronous JavaScript, and creating clean, responsive layouts.",

    results: [
      "Seamless API integration",
      "Efficient asynchronous data handling",
      "Clear loading state implementation",
      "Flawless responsiveness",
    ],

    tools: [
      {
        name: "HTML",
        icon: "/Stacks/HTML.png",
      },
      {
        name: "CSS",
        icon: "/Stacks/CSS3.png",
      },
      {
        name: "JavaScript",
        icon: "/Stacks/JavaScript.png",
      },
    ],

    urls: [
      {
        name: "live preview",
        to: "https://advice-generator-app-alpha-khaki.vercel.app/",
      },
      {
        name: "view code",
        to: "https://github.com/samthewebguy/advice-generator-app",
        icon: faArrowUpRightFromSquare,
      },
    ],
  },
  
];
