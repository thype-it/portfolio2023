import { Metadata } from "next";
import React from "react";

import { CustomLayout } from "../components";
import { PageTransitionWrapperLeft } from "../components/PageTransitionWrapper";

import { Hero } from "./components";
import ProjectList from "./components/ProjectList";

import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects - Mike IT",
  description:
    "Collection of projects I've worked on and experience I've gained.",
};

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
