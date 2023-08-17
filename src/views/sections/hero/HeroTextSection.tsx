import { AbsoluteCenter, Box, Center } from "@chakra-ui/react";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import VideoBg from "../../../components/VideoBg";
import { BoxMotion } from "../../../components/motion";
import { HighlightText, HighlightTextVariant } from "../../../components/text";
import videoSrc from "../../../media/video/stockVideo.mp4";
import type { ScrollMotionProps } from "../../../types";

type Props = {};

export default function HeroTextSection({}: Props) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 200vh", "end start"],
  });

  const highlightIndex = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.8, 1],
    [0, 1, 2, 3, 4]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.5, 0.65, 0.8],
    [0, 0, 0, 1, 1, 0]
  );

  const sentences = [
    "From woocomerce eshops, to apps that save hummanity",
    "I love making responsive designs",
    "I pay maximum attention to detail",
    "More than 20 projects under my belt",
    "Code evberyday",
  ];

  const [currentSentence, setCurrentSentence] = useState<string>(sentences[0]);

  useMotionValueEvent(highlightIndex, "change", (latest) => {
    setCurrentSentence(sentences[Math.round(latest)]);
  });

  return (
    <BoxMotion
      ref={targetRef}
      as="section"
      bg="black"
      h="120vh"
      pos="sticky"
      style={{ opacity }}
      top={0}
    >
      <Box overflow="hidden" pos="relative" w="full" zIndex={1}>
        <Center>
          <HighlightText
            highlightText={currentSentence}
            variant={HighlightTextVariant.Dimmed}
            isSmall
          >
            From woocomerce eshops, to apps that save hummanity. I love making
            responsive designs. I pay maximum attention to detail. More than 20
            projects under my belt. Code evberyday.
          </HighlightText>
        </Center>
      </Box>
      <BackgroundVideo />
    </BoxMotion>
  );
}

function BackgroundVideo({ opacity }: ScrollMotionProps) {
  return (
    <Box h="100vh" mt="-200vh" pos="sticky" top={0} w="full" zIndex={0}>
      <VideoBg src={videoSrc} />
    </Box>
  );
}
