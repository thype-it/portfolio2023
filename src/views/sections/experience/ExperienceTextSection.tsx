import { Box } from "@chakra-ui/react";

import ContentContainer from "../../../components/layout/ContentContainer";
import { TextBlock } from "../../../components/text";

//text content:
const content = {
  title: "A brief story on how I learned to code and cooperate in teams",
  topic: "Experience",
  text: "With features that help you stay healthy, safe and connected, the watch that pushes limits is also one you can wear every day.",
};

export default function ExperienceTextSection() {
  return (
    <Box as="section" bg="black" pos="relative" w="full">
      <ContentContainer>
        <Box mb={{ base: "24", md: "36" }} mt="-30vh">
          <TextBlock title={content.title} topic={content.topic}>
            {content.text}
          </TextBlock>
        </Box>
      </ContentContainer>
    </Box>
  );
}
