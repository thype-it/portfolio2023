import { Box, VStack } from "@chakra-ui/react";
import { useRef } from "react";

import portrait from "../../../../../public/media/portrait.png";

import { DiscoverButton } from "@/app/components";
import { ChakraNextImage } from "@/app/components/media";
import { BoxMotion } from "@/app/components/motion";
import { TextBlock, TextBlockProps } from "@/app/components/text";

type Props = {
  onPress?: () => void;
};

export default function AboutTextBase({
  topic,
  title,
  children,
  onPress,
}: TextBlockProps & Props) {
  const targetRef = useRef<HTMLDivElement>(null); //preparation for scroll animation

  return (
    <Box ref={targetRef} pos="relative">
      <Box pos="sticky" pt="10" top={0}>
        <TextBlock title={title} topic={topic} isInverted>
          {children}
        </TextBlock>
        <VStack gap={0}>
          <BoxMotion w="full">
            <ChakraNextImage
              alt="Portrait image of Mike Illit"
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
              <DiscoverButton isInverted onPress={onPress} />
            </Box>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}
