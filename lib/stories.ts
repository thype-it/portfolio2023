import { endpoint } from "@/utils/endpoints";

export async function getAllStories(): Promise<{ stories: Story[] }> {
  const data = await fetch(`${endpoint}/stories`);

  if (!data.ok) {
    throw new Error("Failed to fetch stories data");
  }

  return data.json();
}

export async function getStoryData(slug: string): Promise<Story> {
  const data = await fetch(`${endpoint}/stories/${slug}`);

  if (!data.ok) {
    throw new Error("Failed to fetch story data");
  }

  return data.json();
}
