import { projectContent1 } from "./1-mike-it";
import { projectContent2 } from "./2-interflex";
import { projectContent3 } from "./3-cn";
import { projectContent4 } from "./4-webtailor";
import { projectContent5 } from "./5-jovinecky";
import { projectContent6 } from "./6-lenses";

import { projectsEndpoint } from "@/utils/endpoints";
import insertBufferImages from "@/utils/insertBufferImages";
import insertIds from "@/utils/insertIds";

// add all new project content here
// make sure that the id is the same as the project id
const projectContentList = {
  "1-mike-it": projectContent1,
  "2-interflex": projectContent2,
  "3-cn": projectContent3,
  "4-webtailor": projectContent4,
  "5-jovinecky": projectContent5,
  "6-lenses": projectContent6,
} as Record<string, StoryContentData>;

//add new projects here
//Project thumbnail image naming convention is "title.jpg"
const projectList: Omit<Project, "content">[] = [
  {
    id: "1-mike-it",
    title: "Mike IT portfolio website",
    link: {
      href: "https://github.com/thype-it/portfolio2023",
      text: "github",
    },
    description:
      "Case study of my personal website, featuring a digital CV, portfolio, and blog.",
    techStack: ["React", "TypeScript", "Framer Motion", "Next.js", "Chakra UI"],
  },
  {
    id: "2-interflex",
    title: "Interflex Mobile App",
    link: {
      href: "https://interflex.com/en/",
      text: "Company Website",
    },
    description:
      "Native mobile app bringing one of the most popular Interflex products to mobile devices.",
    techStack: ["React Native", "TypeScript", "Redux"],
  },
  {
    id: "3-cn",
    title: "CN Group Company Projects",
    link: {
      href: "https://www.cngroup.dk/",
      text: "Website",
    },
    description:
      "Company website and inovative system for managing projects, employees, events and more.",
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Emotion",
      "Ant Design",
      "Storybook",
    ],
  },
  {
    id: "4-webtailor",
    title: "Commercial and Presentational Websites",
    description:
      "Freelance projects for various clients, with focus on design and user experience.",
    techStack: ["HTML", "SCSS", "JavaScript", "jQuery"],
    link: {
      href: "https://github.com/thype-it/past-projects",
      text: "Github",
    },
  },
  {
    id: "5-jovinecky",
    link: {
      href: "https://jovinecky.sk",
      text: "Website",
    },
    title: "Jovinecky E-commerce Website",
    description: "An online store for a local candy bar brand.",
    techStack: ["CSS", "Elementor Pro", "WordPress", "Woo Commerce"],
  },
  {
    id: "6-lenses",
    link: {
      href: "https://optikam.sk",
      text: "Website",
    },
    title: "Online lens shopping",
    description: "Addon that enables customers to buy lenses online.",
    techStack: ["HTML", "SCSS", "JavaScript", "jQuery"],
  },
];

const data: Project[] = await Promise.all(
  projectList.map(async (project) => {
    const content = insertIds<
      StoryContentItemText | StoryContentItemMedia,
      StoryContentItem
    >(projectContentList[project.id]);

    return {
      ...project,
      content: await insertBufferImages(content, projectsEndpoint, project.id),
    };
  })
);

export default data;
