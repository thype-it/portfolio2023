import { Box, Center, Container, Text } from "@chakra-ui/react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { VideoBg } from "@/app/components/media";
import { BoxMotion } from "@/app/components/motion";
import { getScrollRange } from "@/utils/getScrollRange";

//variables:
const sectionHeightVH = 160;
const videoSrc = "/media/video/backgroundVideo.mp4";
const videoPhoneSrc = "/media/video/backgroundVideoPhone.mp4";

//text content:
const content = {
  sentences: [
    "Creating captivating, responsive designs and apps.",
    "Collaborating in large Agile teams within dynamic and fast-paced environments.",
    "Managing small projects ensuring client satisfaction.",
    "Thriving on the synergy of creativity and code.",
  ],
};

const animationOrder = {
  start: 0,
  startText: 0.27,
  visibleVideoStart: 0.3,
  visibleVideoEnd: 0.62,
  endText: 0.63,
  hideVideo: 0.69,
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
    [0, 0.25, 0.25, 0]
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
          <Container
            maxW={{ base: "440px", md: "container.lg" }}
            w={{ base: "95%", lg: "90%" }}
          >
            <Text
              color="white"
              fontSize={{ base: "1.75rem", md: "2.75rem", lg: "3rem" }}
            >
              {content.sentences.map((sentence, index) => (
                <ScrollOpacityText
                  key={sentence}
                  index={index}
                  scrollInterval={scrollOpacityTextInterval}
                  text={sentence}
                />
              ))}
            </Text>
          </Container>
        </Center>
      </Box>
      <BackgroundVideo opacityMotion={opacityVideo} />
    </BoxMotion>
  );
}

type ScrollOpacityTextProps = {
  scrollInterval: MotionValue<number>;
  index: number;
  text: string;
};

function ScrollOpacityText({
  scrollInterval,
  index,
  text,
}: ScrollOpacityTextProps) {
  const {
    start: originalStart,
    end: originalEnd,
    step,
  } = getScrollRange(index, content.sentences.length, 0.3);
  const startOpacity = index === 0 ? 1 : 0.3;
  const endOpacity = index === content.sentences.length - 1 ? 1 : 0.3;

  const start = originalStart - 0.05;
  const end = originalEnd + 0.05;
  const rangeArray = [start, start + step, end - step, end];

  return (
    <motion.span
      style={{
        opacity: useTransform(scrollInterval, rangeArray, [
          startOpacity,
          1,
          1,
          endOpacity,
        ]),
      }}
    >
      {text}{" "}
    </motion.span>
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
      <Container h="full" maxH="1080" maxW="1920" p={0} pos="relative" w="full">
        <VideoBg src={videoSrc} srcPhone={videoPhoneSrc} />
      </Container>
    </BoxMotion>
  );
}
