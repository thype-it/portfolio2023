import { projectContent } from "./projectId";

import insertIds from "@/utils/insertIds";

// add all new project content here
// make sure that the id is the same as the project id
const projectContentList = {
  "0": projectContent,
  "1": projectContent,
  "3": projectContent,
  "221": projectContent,
  "33": projectContent,
  "223": projectContent,
  "21": projectContent,
} as Record<string, StoryContentData>;

//add new projects here
const projectList: Omit<Project, "content">[] = [
  {
    id: "0",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    techStack: ["React", "TypeScript", "Framer Motion"],
  },
  {
    id: "1",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    techStack: ["React", "TypeScript", "Framer Motion"],
  },
  {
    id: "3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "Project 1",
    techStack: ["React", "TypeScript", "Framer Motion"],
  },
  {
    id: "221",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.psum dolor sit amet consectetur adipisicing elit",
    techStack: ["React", "TypeScript", "Framer Motion"],
  },
  {
    id: "33",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "Project 1",
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "React Spring",
    ],
  },
  {
    id: "223",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "Project 1",
    techStack: ["React", "TypeScript", "Framer Motion"],
  },
  {
    id: "21",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.psum dolor sit amet consectetur adipisicing elit",
    techStack: ["React", "TypeScript", "Framer Motion"],
  },
];

const data: Project[] = projectList.map((project) => ({
  ...project,
  content: insertIds<
    StoryContentItemText | StoryContentItemImg,
    ProjectContentItem
  >(projectContentList[project.id]),
}));

export default data;
