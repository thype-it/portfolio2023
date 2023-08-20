import { ChakraProvider, Container } from "@chakra-ui/react";
import React from "react";

import reportWebVitals from "./reportWebVitals";
import theme from "./theme";
import Footer from "./views/Footer";
import SkillsSection from "./views/sections/SkillsSection";
import SkillsTextSection from "./views/sections/SkillsTextSection";
import AboutMainSection from "./views/sections/about/AboutMainSection";
import AboutTextSection from "./views/sections/about/AboutTextSection";
import ExperienceCnSection from "./views/sections/experience/ExperienceCnSection";
import ExperienceFreelanceMainSection from "./views/sections/experience/ExperienceFreelanceMainSection";
import ExperienceOthersSection from "./views/sections/experience/ExperienceOthersSection";
import ExperienceTextSection from "./views/sections/experience/ExperienceTextSection";
import HeroMainSection from "./views/sections/hero/HeroMainSection";
import HeroTextSection from "./views/sections/hero/HeroTextSection";

import "./theme/fonts.css";
import "react-device-frameset/styles/marvel-devices.min.css";

type Props = {};

export default function App(props: Props) {
  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
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
          <Footer />
        </Container>
      </ChakraProvider>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
