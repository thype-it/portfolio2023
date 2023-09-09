import { Heading, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

import { SmallText } from "./SmallText";

export type TextBlockProps = {
  children: ReactNode;
  isInverted?: boolean;
  topic: string | ReactNode;
  title: string;
};

export function TextBlock({
  isInverted = false,
  topic,
  title,
  children,
}: TextBlockProps) {
  const color = isInverted ? "black" : "white";

  return (
    <VStack alignItems="start" w={{ base: "87%", lg: "43rem", xl: "50rem" }}>
      <Text
        color={color}
        fontFamily="Montserrat"
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="400"
        opacity={0.8}
      >
        {topic}
      </Text>
      <Heading
        color={color}
        fontSize={{ base: "5xl", md: "8xl" }}
        lineHeight={1.1}
        pos="relative"
      >
        {title}
      </Heading>
      <SmallText color={color}>{children}</SmallText>
    </VStack>
  );
}
