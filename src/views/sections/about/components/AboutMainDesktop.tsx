import {
  AbsoluteCenter,
  Box,
  Divider,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import portrait from "../../../../media/portrait.png";
import { useGetButton } from "../AboutMainSection";
import type { AboutChildProps, SeeNextBlockProps } from "../types";

export default function AboutMainDesktop({
  content,
  children,
}: AboutChildProps) {
  return (
    <HStack justify="space-between" pt={450}>
      <VStack alignSelf="flex-end" pos="relative" w="35%">
        <Box
          scale={1.3}
          transform="auto"
          transformOrigin="bottom"
          translateX="-20%"
        >
          <Image
            boxSize="100%"
            className="logoImg"
            objectFit="contain"
            objectPosition="bottom"
            src={portrait}
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
  const getButton = useGetButton();
  const button = getButton(variant);

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
