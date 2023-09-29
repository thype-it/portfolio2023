import React from "react";

import { CustomLayout } from "../components";
import { PageTransitionWrapperLeft } from "../components/PageTransitionWrapper";

import { Hero } from "./components";
import ProjectList from "./components/ProjectList";

import { getAllProjects } from "@/lib/projects";

export default function Portfolio() {
  const projectData = getAllProjects();

  return (
    <PageTransitionWrapperLeft>
      <CustomLayout>
        <Hero />
        <ProjectList data={projectData} />
      </CustomLayout>
    </PageTransitionWrapperLeft>
  );
}
