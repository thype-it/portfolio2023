import fs from "fs";
import path from "path";

export default function checkStoriesDataValidity(
  data: Story[],
  dataset: string = "stories"
) {
  const storiesDirectory = path.join(process.cwd(), `public/media/${dataset}`);
  const storyIdFolderNames = fs.readdirSync(storiesDirectory);
  const storyIdList = data.map((story) => story.id);

  const sortedStoryIdList = storyIdList.slice().sort();
  const sortedStoryIdFolderNames = storyIdFolderNames.slice().sort();

  const errorMessage = `
  List of story ids from /data/${dataset} and folder names from /public/media/${dataset} do not match.\n
  List of story ids: ${sortedStoryIdList}\n
  List of folder names: ${sortedStoryIdFolderNames}
  `;

  const isValid = sortedStoryIdList.every((storyId, index) => {
    return storyId === sortedStoryIdFolderNames[index];
  });

  if (!isValid) {
    throw new Error(errorMessage);
  }
}
