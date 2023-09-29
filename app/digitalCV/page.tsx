"use client";

import { Container } from "@chakra-ui/react";
import React from "react";

import "react-device-frameset/styles/marvel-devices.min.css";

import { CustomLayout } from "../components";
import { PageTransitionWrapperLeft } from "../components/PageTransitionWrapper";

import {
  AboutTextSection,
  ExperienceCnSection,
  ExperienceFreelanceMainSection,
  ExperienceOthersSection,
  ExperienceTextSection,
  HeroMainSection,
  HeroTextSection,
  SkillsSection,
  SkillsTextSection,
} from "./components";

export default function DigitalCV() {
  return (
    <PageTransitionWrapperLeft>
      <CustomLayout>
        <Container bg="black" m={0} maxW="full" p={0} pos="relative">
          <HeroMainSection />
          <HeroTextSection />
          <SkillsTextSection />
          <SkillsSection />
          <ExperienceTextSection />
          <ExperienceCnSection />
          <ExperienceFreelanceMainSection />
          <ExperienceOthersSection />
          <AboutTextSection />
        </Container>
      </CustomLayout>
    </PageTransitionWrapperLeft>
  );
}
