import { projects } from "@/data";

export function getAllProjects() {
  return projects;
}

export function getProjectData(slug: string) {
  return projects.find((project) => project.id === slug);
}
