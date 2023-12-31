import { about } from "./about";
import { ciklum } from "./ciklum";
import { education } from "./education";
import { freelance } from "./freelance";
import { thypestudio } from "./thypestudio";

import checkStoriesDataValidity from "@/utils/checkStoriesDataValidity";
import { storiesEndpoint } from "@/utils/endpoints";
import insertBufferImages from "@/utils/insertBufferImages";
import insertIds from "@/utils/insertIds";

// add all new story content here
// make sure that the id is the same as the story id
const storyContentList = {
  freelance,
  ciklum,
  thypestudio,
  education,
  about,
} as Record<string, StoryContentData>;

//add new stories here, order is not important
const storyList: Omit<Story, "content">[] = [
  {
    id: "ciklum",
    title: "React & React Native developer experience at Ciklum",
  },
  {
    id: "freelance",
    title: "Commercial and Presentational Websites",
    link: {
      href: "https://github.com/thype-it/past-projects",
      text: "Github",
    },
  },
  {
    id: "thypestudio",
    title: "Banarun & ThypeStudio company",
  },
  {
    id: "education",
    title: "Applied Computer Science program at MUNI & CN University",
    link: {
      text: "CNU project",
      href: "https://github.com/thype-it/cnu-cookbook-2022",
    },
  },
  {
    id: "about",
    title: "Surfing the Waves of Web Development Down Under",
  },
];

const data: Story[] = await Promise.all(
  storyList.map(async (story) => {
    const content = insertIds<
      StoryContentItemText | StoryContentItemMedia,
      StoryContentItem
    >(storyContentList[story.id]);

    return {
      ...story,
      content: await insertBufferImages(content, storiesEndpoint, story.id),
    };
  })
);

checkStoriesDataValidity(data);

export default data;
