import { Heading, Text, VStack } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

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
      <AnimationWrapper>
        <Text
          color={color}
          fontFamily="Montserrat"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="400"
          opacity={0.8}
        >
          {topic}
        </Text>
      </AnimationWrapper>
      <AnimationWrapper>
        <Heading
          color={color}
          fontSize={{ base: "5xl", md: "8xl" }}
          lineHeight={1.1}
          pos="relative"
        >
          {title}
        </Heading>
      </AnimationWrapper>
      <AnimationWrapper>
        <SmallText color={color}>{children}</SmallText>
      </AnimationWrapper>
    </VStack>
  );
}

function AnimationWrapper({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "100% 0px -20% 0px" });
  const y = isInView ? "0%" : "15%";
  const opacity = isInView ? 1 : 0;

  return (
    <motion.div
      ref={ref}
      animate={{ y, opacity }}
      transition={{
        duration: 0.6,
        opacity: { duration: 0.4 },
      }}
    >
      {children}
    </motion.div>
  );
}
