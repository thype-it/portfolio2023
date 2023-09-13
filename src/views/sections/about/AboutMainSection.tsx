import {
  Box,
  Button,
  Heading,
  Icon,
  Link,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { createContext, useContext } from "react";
import { MdBusiness } from "react-icons/md";
import { MdArticle } from "react-icons/md";

import { SmallText } from "../../../components/text";
import CV from "../../../media/illit_CV.pdf";

import AboutMainBase from "./components/AboutMainBase";
import AboutMainDesktop from "./components/AboutMainDesktop";
import type { ButtonContent, SeeNextBlockVariant } from "./types";

//text content:
const seeNextContent = {
  portfolio:
    " Check out my collection of past projects, showcasing my diverse experiences",
  blog: "   Take a look at my blog. Learn more about why I chose to move to Melbourne, or how I got into programming",
  caseStudy:
    " Want to see how I made this portfolio ? I prepared a case study detailing the process from start to finish",
};

const GetButtonContext = createContext(getButton);
export const useGetButton = () => useContext(GetButtonContext);

export default function AboutMainSection() {
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
  const toast = useToast();
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
    <Button
      rightIcon={content.icon}
      size="sm"
      variant="outlineBlack"
      onClick={() =>
        toast({
          title: `${content.text} comming soon`,
          description: "This feature is still in development",
        })
      }
    >
      {content.text}
    </Button>
  );
}

function MiddleContent() {
  return (
    <>
      <SmallText color="black">
        I currently live in Melbourne <br /> Feel free to contact me at{" "}
        <Link href="mailto:inquiries@mikeit.site" textDecor="underline">
          inquiries@mikeit.site.
        </Link>{" "}
        <br />
        Download my{" "}
        <Link download="CV" href={CV} textDecor="underline">
          CV
        </Link>
      </SmallText>
      <Heading mb={8} size="2xl">
        See next ...
      </Heading>
    </>
  );
}
