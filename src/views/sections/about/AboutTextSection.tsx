import { Box, useBreakpointValue, useDisclosure } from "@chakra-ui/react";

import ContentDrawer from "../../../components/ContentDrawer";
import DiscoverButton from "../../../components/DiscoverButton";
import ContentContainer from "../../../components/layout/ContentContainer";
import { TextBlock } from "../../../components/text";

import AboutTextBase from "./components/AboutTextBase";

//text content:
const content = {
  topic: "About me",
  text: `
  I'm an aspiring young developer looking to expand my knowledge and connect with like-minded professionals. 
  One my favourite things to do is listen to audiobooks while I go for my morning jog.
  `,
  title: "Hi, I'm Mike",
};

export default function AboutTextSection() {
  const isSmallScreen = useBreakpointValue({ base: true, xl: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="section" bg="white" pos="relative">
      <ContentContainer>
        {isSmallScreen ? (
          <AboutTextBase
            title={content.title}
            topic={content.topic}
            onPress={onOpen}
          >
            {content.text}
          </AboutTextBase>
        ) : (
          <TextBlock title={content.title} topic={content.topic} isInverted>
            {content.text}
            <br />
            <DiscoverButton mt={10} isInverted onPress={onOpen} />
          </TextBlock>
        )}
        <ContentDrawer isOpen={isOpen} onClose={onClose} />
      </ContentContainer>
    </Box>
  );
}
