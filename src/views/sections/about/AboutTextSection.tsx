import { Box, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

import DiscoverButton from "../../../components/DiscoverButton";
import ContentContainer from "../../../components/layout/ContentContainer";
import { TextBlock } from "../../../components/text";

import AboutTextBase from "./components/AboutTextBase";

type Props = {};

const content = {
  topic: "About me",
  text: "I like Bla bla, motivets me bla a-nd drives my curiosity. I spend my days meeting new people and looking for oprtunities. I code I drinkm and I live.",
  title: "Hi, I'm Mike",
};

export default function AboutTextSection({}: Props) {
  const isSmallScreen = useBreakpointValue({ base: true, xl: false });

  return (
    <Box as="section" bg="white" pos="relative">
      <ContentContainer>
        {isSmallScreen ? (
          <AboutTextBase />
        ) : (
          <TextBlock title={content.title} topic={content.topic} isInverted>
            {content.text}
            <DiscoverButton mt={10} isInverted />
          </TextBlock>
        )}
      </ContentContainer>
    </Box>
  );
}
