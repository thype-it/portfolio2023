import { Box } from "@chakra-ui/react";

import { ContentContainer } from "@/app/components";
import { TextBlock } from "@/app/components/text";

//text content:
const content = {
  title: "I love my work. Great team makes it even better.",
  topic: "Experience",
  text: `
  I had the opportunity to work alongside highly skilled developers, designers, and
  product managers within a
   dynamic and collaborative environment that nurtured learning, creativity, and professional growth. 
  I particularly enjoyed learning from colleagues with diverse experiences and perspectives, enriching our team dynamic.
  `,
};

export default function ExperienceTextSection() {
  return (
    <Box as="section" bg="black" pos="relative" w="full">
      <ContentContainer>
        <Box id="experience" mb={{ base: "24", md: "36" }} mt="-30vh">
          <TextBlock title={content.title} topic={content.topic}>
            {content.text}
          </TextBlock>
        </Box>
      </ContentContainer>
    </Box>
  );
}
