import {
  Box,
  Button,
  Heading,
  Icon,
  Link,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { createContext, useContext } from "react";
import { MdBusiness } from "react-icons/md";
import { MdArticle } from "react-icons/md";

import AboutMainBase from "./components/AboutMainBase";
import AboutMainDesktop from "./components/AboutMainDesktop";
import type { ButtonContent, SeeNextBlockVariant } from "./types";

import { SmallText } from "@/app/components/text";
const CV = "/media/illit_CV.pdf";

//text content:
const seeNextContent = {
  portfolio:
    "To learn more about my past projects and my experience you can visit my portfolio.",
  blog: "Take a look at my blog. Learn more about why I chose to move to Melbourne, or how I got into programming.",
  caseStudy:
    "Want to see how I made this portfolio ? I prepared a case study that offers a brief look behind the scene.",
};

const AboutButtonContext = createContext(AboutButton);
export const useAboutButton = () => useContext(AboutButtonContext);

export default function AboutMainSection() {
  const isSmallScreen = useBreakpointValue({ base: true, xl: false });

  return (
    <Box as="section" bg="white" id="contact" overflow="hidden" pos="relative">
      <AboutButtonContext.Provider value={AboutButton}>
        {isSmallScreen ? (
          <AboutMainBase content={seeNextContent}>
            <MiddleContent />
          </AboutMainBase>
        ) : (
          <AboutMainDesktop content={seeNextContent}>
            <MiddleContent />
          </AboutMainDesktop>
        )}
      </AboutButtonContext.Provider>
    </Box>
  );
}

function AboutButton(variant: SeeNextBlockVariant) {
  const toast = useToast();
  const router = useRouter();
  const content = ((): ButtonContent => {
    switch (variant) {
      case "portfolio":
        return {
          icon: <Icon as={MdBusiness} />,
          text: "Portfolio",
          href: "/portfolio",
        };
      case "blog":
        return { icon: <Icon as={MdArticle} />, text: "Blog" };
      case "caseStudy":
        return {
          icon: <Icon as={MdArticle} />,
          text: "Case Study",
          href: "/portfolio/1-mike-it",
        };
    }
  })();

  return (
    <Button
      rightIcon={content.icon}
      size="sm"
      variant="outlineBlack"
      //remove once all links are fuunctional
      //replace with <NextLink> to enable prefetching
      onClick={() => {
        if (!!content.href) {
          router.push(content.href);
        } else {
          toast({
            title: `${content.text} coming soon`,
            description: "This feature is still in development",
          });
        }
      }}
    >
      {content.text}
    </Button>
  );
}

function MiddleContent() {
  return (
    <>
      <SmallText color="black">
        I currently reside in Melbourne. <br /> Feel free to contact me at{" "}
        <Link href="mailto:inquiries@mikeit.site" textDecor="underline">
          inquiries@mikeit.site.
        </Link>{" "}
        <br />
        Download my{" "}
        <Link download="CV" href={CV} textDecor="underline">
          CV.
        </Link>
      </SmallText>
      <Heading mb={8} size="2xl">
        See next ...
      </Heading>
    </>
  );
}
