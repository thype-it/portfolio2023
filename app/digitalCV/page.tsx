"use client";

import { Container } from "@chakra-ui/react";
import React from "react";

import "react-device-frameset/styles/marvel-devices.min.css";

import { PageTransitionWrapperLeft } from "../components/PageTransitionWrapper";

import {
  AboutMainSection,
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
        <AboutMainSection />
      </Container>
    </PageTransitionWrapperLeft>
  );
}
