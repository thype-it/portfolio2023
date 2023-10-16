import { Box, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";

import AboutTextBase from "./components/AboutTextBase";

import { ContentContainer, DiscoverButton } from "@/app/components";
import { TextBlock } from "@/app/components/text";

//text content:
const content = {
  topic: "About me",
  text: `
  I'm an aspiring young developer looking to expand my knowledge and connect with like-minded professionals. 
  One of my favourite things to do is listen to audiobooks while I go for my morning jog.
  `,
  title: "Hi, I'm Mike",
};

export default function AboutTextSection() {
  const isSmallScreen = useBreakpointValue({ base: true, xl: false });

  return (
    <Box as="section" bg="white" id="about" pos="relative">
      <ContentContainer>
        {isSmallScreen ? (
          <AboutTextBase title={content.title} topic={content.topic}>
            {content.text}
          </AboutTextBase>
        ) : (
          <TextBlock title={content.title} topic={content.topic} isInverted>
            {content.text}
            <br />
            <Link href="/digitalCV/about">
              <DiscoverButton mt={10} isInverted />
            </Link>
          </TextBlock>
        )}
      </ContentContainer>
    </Box>
  );
}
