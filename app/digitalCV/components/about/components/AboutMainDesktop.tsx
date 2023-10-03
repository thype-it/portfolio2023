import {
  AbsoluteCenter,
  Box,
  Divider,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useAboutButton } from "../AboutMainSection";
import type { AboutChildProps, SeeNextBlockProps } from "../types";

import { ChakraNextImage } from "@/app/components/media";

export default function AboutMainDesktop({
  content,
  children,
}: AboutChildProps) {
  return (
    <HStack justify="space-between" pt={150}>
      <VStack alignSelf="flex-end" pos="relative" w="35%">
        <Box
          scale={1.3}
          transform="auto"
          transformOrigin="bottom"
          translateX="-20%"
        >
          <ChakraNextImage
            alt="Portrait image of Mike Illit"
            boxSize="100%"
            className="logoImg"
            height={500}
            objectFit="contain"
            objectPosition="bottom"
            src="/media/portrait.png"
            width={500}
          />
        </Box>
      </VStack>
      <VStack align="flex-start" pb={30} w="60%">
        {children}
        <VStack maxW="45rem" spacing={5} w="full">
          <SeeNextBlock>{content.portfolio}</SeeNextBlock>
          <SeeNextBlock variant="blog">{content.blog}</SeeNextBlock>
          <SeeNextBlock variant="caseStudy">{content.caseStudy}</SeeNextBlock>
        </VStack>
      </VStack>
    </HStack>
  );
}

function SeeNextBlock({ children, variant = "portfolio" }: SeeNextBlockProps) {
  const AboutButton = useAboutButton();
  const button = AboutButton(variant);

  return (
    <HStack gap={6} justify="space-between" pos="relative" w="full">
      <AbsoluteCenter w="full" zIndex={0}>
        <Divider borderColor="gray.500" opacity={1} w="full" />
      </AbsoluteCenter>
      <Box
        bg="white"
        border="2px solid"
        borderColor="black"
        borderRadius={20}
        maxW="34rem"
        p={3}
        textAlign="justify"
        zIndex={1}
      >
        <Text display="inline" fontSize="xl">
          {children}
        </Text>
      </Box>
      {button}
    </HStack>
  );
}
