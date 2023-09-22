import { ContentSlider, Stories } from "@/app/components/contentSlider";
import { getAllStories, getStoryData } from "@/lib/stories";

type Props = {
  params: { storyId: string };
};

// All dynamic segments are include in generateStaticParams
export const dynamicParams = false;

export function generateStaticParams() {
  const stories = getAllStories();

  return stories.map((story) => ({ storyId: story.id }));
}

export default function Page({ params }: Props) {
  const storyData = getStoryData(params.storyId);

  return (
    <ContentSlider>
      <Stories data={storyData} />
    </ContentSlider>
  );
}
