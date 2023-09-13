import { Box } from "@chakra-ui/react";

import ContentContainer from "../../../components/layout/ContentContainer";
import { TextBlock } from "../../../components/text";

//text content:
const content = {
  title: "I love my work. Great team makes it even better.",
  // title: "A brief story on how I learned to code and cooperate in teams",
  topic: "Experience",
  text: `
  I had the opportunity to be part of large Agile teams within a
   dynamic and collaborative environment that nurtured learning, creativity, and professional growth. 
  I particularly enjoyed learning from colleagues with diverse experiences and perspectives, enriching our team dynamic.
  `,
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
