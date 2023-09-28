import fs from "fs";
import path from "path";

const storiesDirectory = path.join(process.cwd(), "public/media/stories");
const storyIdFolderNames = fs.readdirSync(storiesDirectory);

const errorMessage = `List of story ids from /data/stories and folder names from /public/media/stories do not match.`;

export default function checkStoriesDataValidity(data: Story[]) {
  const storyIdList = data.map((story) => story.id);

  const isValid = storyIdList.every((storyId, index) => {
    return storyId === storyIdFolderNames[index];
  });

  if (!isValid) {
    throw new Error(errorMessage);
  }
}
