import { Box } from "@chakra-ui/react";

import ContentContainer from "../../components/layout/ContentContainer";
import { TextBlock } from "../../components/text";

// text content:

const content = {
  title: "I love my work. Great team makes it even better.",
  topic: "Skills",
  text: "I ccan work solo but i know how to cooperate in big teams. The biggest project I was a part of consisted of over 50 people working from multiple countries. I was a part of consisted of over 50 people working from multiple countries.",
};

export default function SkillsTextSection() {
  return (
    <Box as="section" bg="black" pos="relative">
      <ContentContainer>
        <TextBlock title={content.title} topic={content.topic}>
          {content.text}
        </TextBlock>
      </ContentContainer>
    </Box>
  );
}
