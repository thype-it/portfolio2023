import {
  Box,
  Container,
  Divider,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";

import { useGetButton } from "../AboutMainSection";
import type {
  AboutChildProps,
  SeeNextBlockProps,
  SeeNextBlockVariant,
} from "../types";

export default function AboutMainBase({ content, children }: AboutChildProps) {
  return (
    <Container pb="20">
      <VStack gap={0} w="full">
        {children}
        <SeeNextBlockPhone>{content.portfolio}</SeeNextBlockPhone>
        <ButtonRow variants={["portfolio", "blog"]} />
        <SeeNextBlockPhone variant="blog">{content.blog}</SeeNextBlockPhone>
        <Box mb={10} />
        <ButtonRow variants={["caseStudy"]} />
        <SeeNextBlockPhone variant="caseStudy">
          {content.caseStudy}
        </SeeNextBlockPhone>
      </VStack>
    </Container>
  );
}

function ButtonRow({ variants }: { variants: SeeNextBlockVariant[] }) {
  const getButton = useGetButton();

  return (
    <HStack gap={0} justify="space-evenly" w="full">
      {variants.map((variant) => getButton(variant))}
    </HStack>
  );
}

function OutlineBox({ children }: { children: ReactNode }) {
  return (
    <Box
      bg="white"
      border="2px solid"
      borderColor="black"
      borderRadius={20}
      p={3}
      textAlign="justify"
      zIndex={1}
    >
      <Text display="inline">{children}</Text>
    </Box>
  );
}

function SeeNextBlockPhone({
  children,
  variant = "portfolio",
}: SeeNextBlockProps) {
  const currentBox = getOutlineBox(variant);

  return <VStack gap={0}>{currentBox}</VStack>;

  function getOutlineBox(variant: SeeNextBlockProps["variant"]) {
    switch (variant) {
      case "portfolio":
        return (
          <>
            <OutlineBox>{children}</OutlineBox>
            <Box h="3rem" w="50%">
              <Divider
                borderColor="gray.500"
                opacity={1}
                orientation="vertical"
              />
            </Box>
          </>
        );
      case "blog":
        return (
          <>
            <Box display="flex" h="3rem" w="50%">
              <Divider
                borderColor="gray.500"
                ml="auto"
                opacity={1}
                orientation="vertical"
              />
            </Box>
            <OutlineBox>{children}</OutlineBox>
          </>
        );
      case "caseStudy":
        return (
          <>
            <Box h="3rem" w="fill">
              <Divider
                borderColor="gray.500"
                opacity={1}
                orientation="vertical"
              />
            </Box>
            <OutlineBox>{children}</OutlineBox>
          </>
        );
    }
  }
}
