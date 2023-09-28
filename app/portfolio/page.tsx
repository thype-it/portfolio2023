import React from "react";

import { PageTransitionWrapperLeft } from "../components/PageTransitionWrapper";

import { Hero } from "./components";
import ProjectList from "./components/ProjectList";

import { getAllProjects } from "@/lib/projects";

export default function Portfolio() {
  const projectData = getAllProjects();

  return (
    <PageTransitionWrapperLeft>
      <Hero />
      <ProjectList data={projectData} />
    </PageTransitionWrapperLeft>
  );
}
