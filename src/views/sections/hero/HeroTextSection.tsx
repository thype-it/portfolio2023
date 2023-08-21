import { Box, Center, Container, Text } from "@chakra-ui/react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import VideoBg from "../../../components/VideoBg";
import { BoxMotion } from "../../../components/motion";
import videoSrc from "../../../media/video/stockVideo.mp4";
import type { ScrollMotionProps } from "../../../types";

//variables:
const sectionHeightVH = 160;

//text content:
const content = {
  sentences: [
    "From woocomerce eshops, to apps that save hummanity ",
    "I love making responsive designs ",
    "I pay maximum attention to detail ",
    "More than 20 projects under my belt ",
    "Code evberyday ",
  ],
};

const animationOrder = {
  start: 0,
  startText: 0.27,
  visibleVideoStart: 0.3,
  visibleVideoEnd: 0.62,
  hideVideo: 0.69,
  endText: 0.7,
};

export default function HeroTextSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["-0.5 end", "end start"],
  });

  const scrollOpacityTextInterval = useTransform(
    scrollYProgress,
    [animationOrder.startText, animationOrder.endText],
    [0, 1]
  );

  const opacityVideo = useTransform(
    scrollYProgress,
    [
      animationOrder.start,
      animationOrder.visibleVideoStart,
      animationOrder.visibleVideoEnd,
      animationOrder.hideVideo,
    ],
    [0, 0.5, 0.5, 0]
  );

  return (
    <BoxMotion
      ref={targetRef}
      as="section"
      h={`${sectionHeightVH}vh`}
      mt="-40vh"
      pos="relative"
      top={0}
    >
      <Box overflow="hidden" pos="relative" w="full" zIndex={1}>
        <Center>
          <ScrollOpacityText scrollInterval={scrollOpacityTextInterval} />
        </Center>
      </Box>
      {/* <SkillsText /> */}
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
        fontSize={{ base: "1.9rem", md: "2.75rem", lg: "3.5rem" }}
      >
        {content.sentences.map((sentence, index) => {
          const start = index / content.sentences.length;
          const end = (index + 1) / content.sentences.length;
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
      mt={`-${sectionHeightVH + 100}vh`}
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
