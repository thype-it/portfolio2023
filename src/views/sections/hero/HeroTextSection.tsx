import { AbsoluteCenter, Box, Center, Container, Text } from "@chakra-ui/react";
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

import VideoBg from "../../../components/VideoBg";
import { BoxMotion } from "../../../components/motion";
import {
  HighlightText,
  HighlightTextVariant,
  SmallText,
} from "../../../components/text";
import videoSrc from "../../../media/video/stockVideo.mp4";
import type { ScrollMotionProps } from "../../../types";

type Props = {};

const sentences = [
  "From woocomerce eshops, to apps that save hummanity ",
  "I love making responsive designs ",
  "I pay maximum attention to detail ",
  "More than 20 projects under my belt ",
  "Code evberyday ",
];

export default function HeroTextSection({}: Props) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scrollOpacityTextInterval = useTransform(
    scrollYProgress,
    [0.2, 1],
    [0, 1]
  );

  const opacityVideo = useTransform(scrollYProgress, [0.3, 1], [0, 1]);

  return (
    <BoxMotion
      ref={targetRef}
      // bg="black"
      as="section"
      h="100vh"
      pos="relative"
      top={0}
      // style={{ opacity }}
      // bg="red"
    >
      <Box overflow="hidden" pos="relative" w="full" zIndex={1}>
        <Center>
          <ScrollOpacityText scrollInterval={scrollOpacityTextInterval} />
        </Center>
      </Box>
      <BackgroundVideo opacityMotion={opacityVideo} />
    </BoxMotion>
  );
}

type ScrollOpacityTextProps = {
  scrollInterval: MotionValue<number>;
};

function ScrollOpacityText({ scrollInterval }: ScrollOpacityTextProps) {
  return (
    <Container
      maxW={{ base: "440px", md: "container.lg" }}
      w={{ base: "86%", lg: "95%" }}
    >
      <Text
        color="white"
        fontSize={{ base: "1.6rem", md: "2.75rem", lg: "3.5rem" }}
      >
        {sentences.map((sentence, index) => {
          const start = index / sentences.length;
          const end = (index + 1) / sentences.length;
          const step = (end - start) / 2;

          return (
            <motion.span
              key={sentence}
              style={{
                opacity: useTransform(
                  scrollInterval,
                  [start, start + step, end - step, end],
                  [0.3, 1, 1, 0.3]
                ),
              }}
            >
              {sentence}{" "}
            </motion.span>
          );
        })}
      </Text>
    </Container>
  );
}

function BackgroundVideo({ opacityMotion: opacity }: ScrollMotionProps) {
  return (
    <BoxMotion
      h="100vh"
      mt="-200vh"
      pos="sticky"
      style={{ opacity }}
      top={0}
      w="full"
      zIndex={0}
    >
      <VideoBg src={videoSrc} />
    </BoxMotion>
  );
}
