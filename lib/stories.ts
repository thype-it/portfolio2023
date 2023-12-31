import { stories } from "@/data";

export function getAllStories() {
  return stories;
}

export function getStoryData(slug: string) {
  return stories.find((story) => story.id === slug);
}
