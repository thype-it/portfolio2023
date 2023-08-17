import { Box } from "@chakra-ui/react";
import React from "react";

import ContentContainer from "../../../components/layout/ContentContainer";
import { TextBlock } from "../../../components/text";

type Props = {};

export default function ExperienceTextSection({}: Props) {
  return (
    <Box as="section" bg="black" pos="relative" w="full">
      <ContentContainer>
        <Box mt="-30vh">
          <TextBlock
            title="A brief story on how I learned to code and cooperate in teams"
            topic="Experience"
          >
            With features that help you stay healthy, safe and connected, the
            watch that pushes limits is also one you can wear every day.
          </TextBlock>
        </Box>
      </ContentContainer>
    </Box>
  );
}
