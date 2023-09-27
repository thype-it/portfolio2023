"use client";

import { Container } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

import "react-device-frameset/styles/marvel-devices.min.css";
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
  const onTheRight = { x: "100%" };
  const inTheCenter = { x: 0 };
  const onTheLeft = { x: "-100%" };
  const transition = { duration: 0.6, ease: "easeInOut" };

  const pathname = usePathname();

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={pathname}
        animate={inTheCenter}
        exit={onTheRight}
        initial={onTheLeft}
        transition={transition}
      >
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
      </motion.div>
    </AnimatePresence>
  );
}
