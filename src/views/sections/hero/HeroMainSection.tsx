import {
  AbsoluteCenter,
  Box,
  Flex,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { stagger, useAnimate, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

import { CenterMotion } from "../../../components/motion";
import { HighlightText } from "../../../components/text";
import heroBgBig from "../../../media/bgImages/heroBgBig.jpg";
import type { ScrollMotionProps } from "../../../types";

import MainContent from "./components/MainContent";

// text content:
const content = {
  centertext: {
    text: "Over 5+ years of experience",
    highlight: "5+ years",
  },
};

// variables:
const zIndices = {
  front: 3,
  middle: 2,
  back: 1,
};

export default function HeroMainSection() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // animationSequence();
  }, []);

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacityElements = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]);
  const opacityText = useTransform(
    scrollYProgress,
    [0.45, 0.6, 0.7, 0.8],
    [0, 1, 1, 0]
  );
  const opacityBgImg = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const opacityContentColumns = useTransform(
    scrollYProgress,
    [0.35, 0.5],
    [1, 0]
  );
  const scale = useTransform(scrollYProgress, [0.2, 0.4], [1, 1.35]);
  const scaleText = useTransform(scrollYProgress, [0.5, 1], [1, 1.35]);

  const isSmallScreen = useBreakpointValue({ base: true, xl: false });

  return (
    <Box ref={targetRef} as="section" h="400vh" pos="relative" top={0} w="full">
      <Flex
        ref={scope}
        bg="black"
        h="100vh"
        overflow="hidden"
        pos="sticky"
        top={0}
        w="full"
      >
        {/* <BoxMotion
          animate={{ opacity: 0, transitionEnd: { display: "none" } }}
          initial={{ opacity: 1 }}
          left={0}
          pos="absolute"
          top={0}
          transition={{
            delay: 3.2,
            duration: 0,
          }}
          zIndex={zIndices.front}
        >
          <IntroView />
        </BoxMotion> */}
        <BackgroundImage opacityMotion={opacityBgImg} />
        <MainContent
          isSmallScreen={isSmallScreen}
          opacityMotion={opacityElements}
          scaleMotion={scale}
          wrapperOpacityMotion={opacityContentColumns}
          zIndices={zIndices}
        />
        <CenterText opacityMotion={opacityText} scaleMotion={scaleText} />
      </Flex>
    </Box>
  );

  function animationSequence() {
    animate(".logoImg", { opacity: [0, 1] }, { duration: 0.3, delay: 3 });
    animate(
      ".logoImg",
      {
        position: ["absolute", "relative"],
        top: ["50%", "0%"],
        y: ["-50%", "0%"],
      },
      { duration: 1, delay: 3.2, type: "spring" }
    );
    animate(
      ".logoText",
      { opacity: [0, 0, 1], y: ["-80%", "0%"] },
      { duration: 1, delay: 3.2 }
    );
    animate(
      ".fadeInFirst",
      { opacity: [0, 1] },
      { delay: stagger(0.8, { startDelay: 4 }), duration: 2 }
    );
    animate(
      ".fadeIn",
      { opacity: [0, 1] },
      {
        duration: 1.5,
        delay: stagger(0.5, { startDelay: 5.5, from: "center" }),
      }
    );
  }
}

function BackgroundImage({ opacityMotion: opacity }: ScrollMotionProps) {
  return (
    <AbsoluteCenter
      className="fadeInFirst"
      mb="20%"
      top={{ base: "42%", md: "50%" }}
      zIndex={zIndices.back}
    >
      <CenterMotion
        animate={{ rotate: 360 }}
        style={{ opacity }}
        transition={{
          duration: 150,
          repeat: Infinity,
          ease: "linear",
          step: 45,
        }}
      >
        <Image
          boxSize={{ base: "170vw", md: "150vw", lg: "90vw" }}
          maxW="none"
          src={heroBgBig}
        />
      </CenterMotion>
    </AbsoluteCenter>
  );
}

function CenterText({
  opacityMotion: opacity,
  scaleMotion: scale,
}: ScrollMotionProps) {
  return (
    <AbsoluteCenter overflow="hidden" w="95%" zIndex={0}>
      <CenterMotion style={{ opacity, scale }}>
        <HighlightText
          highlightText={content.centertext.highlight}
          style={{ opacity }}
        >
          {content.centertext.text}
        </HighlightText>
      </CenterMotion>
    </AbsoluteCenter>
  );
}
