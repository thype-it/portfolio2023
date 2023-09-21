import { endpoint } from "@/utils/endpoints";

export async function getAllStories(): Promise<{ stories: Story[] }> {
  const data = await fetch(`${endpoint}/stories`);
  console.log("data :", data);
  console.log("endpoint :", endpoint);

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
