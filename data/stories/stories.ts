import { id } from "./storyId";
import { id2 } from "./storyId2";

import checkStoriesDataValidity from "@/utils/checkStoriesDataValidity";
import { storiesEndpoint } from "@/utils/endpoints";
import insertBufferImages from "@/utils/insertBufferImages";
import insertIds from "@/utils/insertIds";

// add all new story content here
// make sure that the id is the same as the story id
const storyContentList = {
  id,
  id2,
} as Record<string, StoryContentData>;

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
