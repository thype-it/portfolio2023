import { Box, Image, VStack } from "@chakra-ui/react";
import { useRef } from "react";

import DiscoverButton from "../../../../components/DiscoverButton";
import { BoxMotion } from "../../../../components/motion";
import { TextBlock, TextBlockProps } from "../../../../components/text";
import portrait from "../../../../media/portrait.png";

export default function AboutTextBase({
  topic,
  title,
  children,
}: TextBlockProps) {
  const targetRef = useRef<HTMLDivElement>(null); //preparation for scroll animation

  return (
    <Box ref={targetRef} pos="relative">
      <Box pos="sticky" pt="10" top={0}>
        <TextBlock title={title} topic={topic} isInverted>
          {children}
        </TextBlock>
        <VStack gap={0}>
          <BoxMotion w="full">
            <Image
              boxSize="100%"
              className="logoImg"
              maxW="30rem"
              objectFit="contain"
              objectPosition="bottom"
              src={portrait}
            />
          </BoxMotion>
          <Box bg="white" boxShadow="0px 6px 81px 115px #fff" width="full">
            <Box mx="auto" transform="auto" translateY="-100%" w="max-content">
              <DiscoverButton isInverted />
            </Box>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}
