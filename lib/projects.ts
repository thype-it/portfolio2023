import projects from "../data/projects/projects";

export function getAllProjects() {
  return projects;
}

export function getProjectData(slug: string) {
  const project = projects.find((project) => project.id === slug);

  return project;
}
