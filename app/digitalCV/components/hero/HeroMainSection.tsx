import {
  AbsoluteCenter,
  Box,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { stagger, useAnimate, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

import IntroView from "../IntroView";

import MainContent from "./components/MainContent";

import { ChakraNextImage } from "@/app/components/media";
import { BoxMotion, CenterMotion } from "@/app/components/motion";
import { HighlightText } from "@/app/components/text";
import heroBgBig from "@/public/media/bgImages/heroBgBig.jpg";

//text content:
const content = {
  centertext: {
    text: "Over 4+ years of experience",
    highlight: "4+ years",
  },
};

//variables:
const zIndices = {
  front: 3,
  middle: 2,
  back: 1,
};

//animation:
const animationOrder = {
  start: 0.2, //hide secondary elements, scale main elements
  hideImageBg: 0.3, //(after: elements are hidden), hide background image
  hideMainStart: 0.35,
  scaleMainEnd: 0.4,
  showCenterText: 0.45, //start showing center text before main elements are hidden
  hideMainEnd: 0.48, //(after: main, ImageBg are hidden), scale center text
  visibleCenterTextStart: 0.6, //center text is visible
  visibleCenterTextend: 0.65, //center text is visible
  hideCenterText: 0.7, //hide center text
  end: 1,
};

export default function HeroMainSection() {
  const [scope, animate] = useAnimate();
  const isSmallScreen = useBreakpointValue({ base: true, xl: false });
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0.06 end", "end start"],
  });

  //animation:
  useEffect(() => {
    // animationSequence();
  }, []);

  //scroll animation settings:

  //elements:
  const opacityElements = useTransform(
    scrollYProgress,
    [0, animationOrder.start, animationOrder.hideImageBg],
    [1, 1, 0]
  );

  //center text:
  const opacityText = useTransform(
    scrollYProgress,
    [
      animationOrder.showCenterText,
      animationOrder.visibleCenterTextStart,
      animationOrder.visibleCenterTextend,
      animationOrder.hideCenterText,
    ],
    [0, 1, 1, 0]
  );
  const scaleText = useTransform(
    scrollYProgress,
    [animationOrder.hideMainEnd, animationOrder.end],
    [1, 1.55]
  );

  //background image:
  const opacityBgImg = useTransform(
    scrollYProgress,
    [animationOrder.hideImageBg, animationOrder.hideMainEnd],
    [1, 0]
  );

  //main elements:
  const opacityContentColumns = useTransform(
    scrollYProgress,
    [animationOrder.hideMainStart, animationOrder.hideMainEnd],
    [1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [animationOrder.start, animationOrder.scaleMainEnd],
    [1, 1.25]
  );

  return (
    <Box ref={targetRef} as="section" h="300vh" pos="relative" top={0} w="full">
      <Flex
        ref={scope}
        bg="black"
        h="100vh"
        overflow="hidden"
        pos="sticky"
        top={0}
        w="full"
      >
        {/* <IntroView /> */}
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
        <ChakraNextImage
          alt="Background image for the hero section"
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
