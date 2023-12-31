import { PageTransitionWrapperRight } from "@/app/components/PageTransitionWrapper";
import { ContentSlider, Story } from "@/app/components/contentSlider";
import { getAllStories, getStoryData } from "@/lib/stories";

type Props = {
  params: { storyId: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  const stories = getAllStories();

  return stories.map((story) => ({ storyId: story.id }));
}

export default function Page({ params }: Props) {
  const storyData = getStoryData(params.storyId);

  return (
    <PageTransitionWrapperRight>
      <ContentSlider>{storyData && <Story data={storyData} />}</ContentSlider>
    </PageTransitionWrapperRight>
  );
}
