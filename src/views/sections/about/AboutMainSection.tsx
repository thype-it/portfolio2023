import {
  Box,
  Button,
  Heading,
  Icon,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { createContext, useContext } from "react";
import { MdBusiness } from "react-icons/md";
import { MdArticle } from "react-icons/md";

import { SmallText } from "../../../components/text";

import AboutMainBase from "./components/AboutMainBase";
import AboutMainDesktop from "./components/AboutMainDesktop";
import type { ButtonContent, SeeNextBlockVariant } from "./types";

type Props = {};

const seeNextContent = {
  portfolio:
    " Check out collection of my old projects ranging from woocomerce to multinational mega projects",
  blog: "   Take a look at my blog. Learn more about why I chode to move to melbourne and how I compare it to EU or why I prefer using CSS in JS",
  caseStudy:
    " Want to see how I made this portfolio ? I prepared a case study detailing the process from start to finish",
};

const GetButtonContext = createContext(getButton);
export const useGetButton = () => useContext(GetButtonContext);

export default function AboutMainSection({}: Props) {
  const isSmallScreen = useBreakpointValue({ base: true, xl: false });

  return (
    <Box as="section" bg="white" overflow="hidden" pos="relative">
      <GetButtonContext.Provider value={getButton}>
        {isSmallScreen ? (
          <AboutMainBase content={seeNextContent}>
            <MiddleContent />
          </AboutMainBase>
        ) : (
          <AboutMainDesktop content={seeNextContent}>
            <MiddleContent />
          </AboutMainDesktop>
        )}
      </GetButtonContext.Provider>
    </Box>
  );
}

function getButton(variant: SeeNextBlockVariant) {
  const content = ((): ButtonContent => {
    switch (variant) {
      case "portfolio":
        return { icon: <Icon as={MdBusiness} />, text: "Portfolio" };
      case "blog":
        return { icon: <Icon as={MdArticle} />, text: "Blog" };
      case "caseStudy":
        return { icon: <Icon as={MdArticle} />, text: "Case Study" };
      default:
        return { icon: <Icon as={MdBusiness} />, text: "Portfolio" };
    }
  })();

  return (
    <Button rightIcon={content.icon} size="sm" variant="outlineBlack">
      {content.text}
    </Button>
  );
}

function MiddleContent() {
  return (
    <>
      <SmallText color="black">
        I currently live in Melbourne <br /> Feel free to contact me at{" "}
        <Link textDecor="underline">blade@blade.sk.</Link> <br />
        Download my <Link textDecor="underline">CV</Link>
      </SmallText>
      <Heading mb={8} size="2xl">
        See next ...
      </Heading>
    </>
  );
}
