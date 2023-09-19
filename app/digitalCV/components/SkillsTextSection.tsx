import { Box } from "@chakra-ui/react";

import { ContentContainer } from "@/app/components";
import { TextBlock } from "@/app/components/text";

// text content:

const content = {
  title: "Eager to embrace new challenges and learn new technologies.",
  topic: "Skills",
  text: `Over time, I have developed a comprehensive understanding of various 
  technologies, particularly in the domains of frontend development, data handling, 
  and UI/UX design.  My curiosity drives me to continually expand my knowledge by embracing new frameworks, 
  and staying up-to-date with industry trends. I enjoy putting these skills to use as hands-on experience 
  enhances my learning journey.
  `,
};

export default function SkillsTextSection() {
  return (
    <Box as="section" mt="-40vh" pos="relative">
      <ContentContainer>
        <TextBlock title={content.title} topic={content.topic}>
          {content.text}
        </TextBlock>
      </ContentContainer>
    </Box>
  );
}
