import { PageTransitionWrapperRight } from "@/app/components/PageTransitionWrapper";
import { ContentSlider, Story } from "@/app/components/contentSlider";
import { getAllProjects, getProjectData } from "@/lib/projects";

type Props = {
  params: { projectId: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  const projects = getAllProjects();

  return projects.map((story) => ({ storyId: story.id }));
}

export default function Page({ params }: Props) {
  const projectData = getProjectData(params.projectId);

  return (
    <PageTransitionWrapperRight>
      <ContentSlider>
        {projectData && <Story data={projectData} />}
      </ContentSlider>
    </PageTransitionWrapperRight>
  );
}
