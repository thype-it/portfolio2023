import { id } from "./storyId";
import { id2 } from "./storyId2";

import checkStoriesDataValidity from "@/utils/checkStoriesDataValidity";
import insertIds from "@/utils/insertIds";

// add all new story content here
// make sure that the id is the same as the story id
const storyContentList = {
  id,
  id2,
} as Record<string, (StoryContentItemText | StoryContentItemImg)[]>;

//add new stories here
const storyList: Omit<Story, "content">[] = [
  {
    id: "id",
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: "id2",
    title: "Lorem ipsum dolor sit amet",
  },
];

const data: Story[] = storyList.map((story) => ({
  ...story,
  content: insertIds<
    StoryContentItemText | StoryContentItemImg,
    StoryContentItem
  >(storyContentList[story.id]),
}));

checkStoriesDataValidity(data);

export default data;
