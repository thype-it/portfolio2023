const projectContent: (StoryContentItemText | StoryContentItemImg)[] = [
  {
    text: `In this dynamic field, frontend developers utilize a combination of HTML, CSS, and JavaScript`,
  },
];
const projectContentWithIds = projectContent.map((item, index) => ({
  id: index.toString(),
  ...item,
}));

const data: Project[] = [
  {
    id: "0",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    techStack: ["React", "TypeScript", "Framer Motion"],
    content: projectContentWithIds,
  },
  {
    id: "1",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    techStack: ["React", "TypeScript", "Framer Motion"],
    content: projectContentWithIds,
  },
  {
    id: "3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "Project 1",
    techStack: ["React", "TypeScript", "Framer Motion"],
    content: projectContentWithIds,
  },
  {
    id: "221",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.psum dolor sit amet consectetur adipisicing elit",
    techStack: ["React", "TypeScript", "Framer Motion"],
    content: projectContentWithIds,
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
    content: projectContentWithIds,
  },
  {
    id: "223",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    title: "Project 1",
    techStack: ["React", "TypeScript", "Framer Motion"],
    content: projectContentWithIds,
  },
  {
    id: "21",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.psum dolor sit amet consectetur adipisicing elit",
    techStack: ["React", "TypeScript", "Framer Motion"],
    content: projectContentWithIds,
  },
];

export default data;
